// Wait for the HTML document to finish loading
document.addEventListener("DOMContentLoaded", function () {

    // --- Typing Animation ---

    // These are the strings it will type
    const stringsToType = [
        'Computer Science Student',
        'Software Engineer',
        'Data Scientist',
        'AI/ML Engineer',
        'Web Developer',
        'Data Analyst',
        'Passionate Problem Solver'
    ];

    // These are the options for the typing animation
    const options = {
        strings: stringsToType, // The array of strings to type
        typeSpeed: 50,          // Speed of typing in milliseconds
        backSpeed: 25,          // Speed of deleting in milliseconds
        backDelay: 1500,        // Time to wait after typing a string
        startDelay: 500,        // Time to wait before starting
        loop: true,             // Loop the animation
        showCursor: true,       // Show the blinking cursor
        cursorChar: '|'         // The cursor character
    };

    // This creates the new typing animation
    var typed = new Typed('#typed-text-target', options);


    // --- About Me Section Tabs ---
    
    // Collect all elements with class name 'tab-link' (which contains the tab titles) and 'tab-content' (which contains the content within each of those tabs)
    var tablinks = document.getElementsByClassName("tab-link");
    var tabcontents = document.getElementsByClassName("tab-content");

    // Function will be called when the user clicks a tab 
    window.opentab = function(evt, tabname) {
        // Removing the "active" class from all tab buttons
        for (var tablink of tablinks) {
            tablink.classList.remove("active-link");
        }

        // Removing the "active" class from all tab content
        for (var tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }

        // Adding "active" class to the *clicked* tab button
        evt.currentTarget.classList.add("active-link");

        // Adding "active" class to the corresponding content pane 
        document.getElementById(tabname).classList.add("active-tab");
    }


    // --- Education Section ---

    // Get all elements with class name ".education-visible" 
    const educationHeaders = document.querySelectorAll(".education-visible");

    // Loop through each element with class name ".education-visible" 
    educationHeaders.forEach(header => {
        // Function will run when the user clicks a tab
        header.addEventListener("click", function () {
            // Get the parent card (.education-item)
            const card = this.parentElement;

            // Toggle the "active" class on that card
            card.classList.toggle("active");
        });
    });


    
    // --- 4. CERTIFICATIONS FILTER & PAGINATION ---

    // --- Configuration ---
    const itemsPerPage = 6; // 2 rows of 3 items

    // --- Get Elements ---
    const filterContainer = document.querySelector(".filter-buttons");
    const certItems = Array.from(document.querySelectorAll(".cert-item")); // All cert cards
    const certList = document.querySelector(".certifications-list"); // The list container
    const paginationContainer = document.querySelector(".pagination-controls"); // The new button div

    // --- State Variables ---
    let currentPage = 1;
    let currentFilter = "all";

    // --- Main Function to Show a Page ---
    function showPage(page, items) {
        // FIRST, hide ALL certification items on the page
        certItems.forEach(item => item.classList.add("hide"));

        // Calculate which items to show
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToShow = items.slice(startIndex, endIndex);

        // Show just the items for the current page
        itemsToShow.forEach(item => item.classList.remove("hide"));
    }

    // --- Function to Create Page Buttons ---
    function setupPagination(items) {
        // Clear old buttons
        paginationContainer.innerHTML = "";

        const totalPages = Math.ceil(items.length / itemsPerPage);

        // If we only have 1 page, don't show any buttons
        if (totalPages <= 1) {
            paginationContainer.style.display = "none";
            return;
        }

        // Show the container
        paginationContainer.style.display = "flex";

        // Create a button for each page
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.classList.add("page-btn");
            button.innerText = i;
            button.setAttribute("data-page", i);

            if (i === currentPage) {
                button.classList.add("active");
            }

            paginationContainer.appendChild(button);
        }
    }

    // --- Function to Handle Filtering ---
    function filterItems() {
        currentPage = 1; // Always reset to page 1 on a new filter

        // 1. Get a list of items that match the filter
        const filteredItems = (currentFilter === "all")
            ? certItems // If "all", use the full list
            : certItems.filter(item => item.dataset.category === currentFilter); // Otherwise, filter it

        // 2. Set up the pagination buttons *for the filtered list*
        setupPagination(filteredItems);

        // 3. Show page 1 *of that filtered list*
        showPage(currentPage, filteredItems);
    }

    // --- Click Listeners ---
    if (filterContainer) {

        // 1. Listen for clicks on the FILTER buttons
        filterContainer.addEventListener("click", function (evt) {
            if (evt.target.classList.contains("filter-btn")) {
                // Update active filter button
                filterContainer.querySelector(".active").classList.remove("active");
                evt.target.classList.add("active");

                // Update the filter state
                currentFilter = evt.target.dataset.filter;

                // Re-run the filtering logic
                filterItems();
            }
        });

        // 2. Listen for clicks on the PAGE buttons
        paginationContainer.addEventListener("click", function (evt) {
            if (evt.target.classList.contains("page-btn")) {
                // Get the page number
                const pageNumber = parseInt(evt.target.dataset.page, 10);
                currentPage = pageNumber;

                // Show that page
                const filteredItems = (currentFilter === "all") ? certItems : certItems.filter(item => item.dataset.category === currentFilter);
                showPage(currentPage, filteredItems);

                // Update the active button
                paginationContainer.querySelector(".active").classList.remove("active");
                evt.target.classList.add("active");
            }
        });
    }

    // --- Initial Page Load ---
    // This runs when the page first loads
    filterItems();
});


