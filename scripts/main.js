// Waiting for the HTML document to finish loading
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


    
    // --- Hamburger Menu (For Mobile Navigation) ---
    const navList = document.querySelector(".header nav ul");
    const hamburgerIcon = document.querySelector(".icon-hamburger");
    const closeIcon = document.querySelector(".icon-close");

    // Function to open the menu
    const openMenu = () => {
        navList.classList.add("open");
    };

    // Function to close the menu
    const closeMenu = () => {
        navList.classList.remove("open");
    };

    // Open menu when hamburger is clicked
    hamburgerIcon.addEventListener("click", openMenu);

    // Close menu when "X" is clicked
    closeIcon.addEventListener("click", closeMenu);

    // Close menu when any nav link is clicked (for in-page links)
    document.querySelectorAll(".header nav ul li a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });



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


    
    // --- Certifications Section Filter and Pagination Mechanism ---

    const itemsPerPage = 6; // 2 rows of 3 items

    const filterContainer = document.querySelector(".filter-buttons");
    const certItems = Array.from(document.querySelectorAll(".cert-item")); // All certificate cards
    const certList = document.querySelector(".certifications-list"); // List container
    const paginationContainer = document.querySelector(".pagination-controls"); // Pagination control buttons div

    const certSectionTitle = document.querySelector("#certifications h2");

    let currentPage = 1;
    let currentFilter = "all";

    function showPage(page, items) {
        // Initially, hide all certification items on the page
        certItems.forEach(item => item.classList.add("hide"));

        // Calculate which items to show
        const startIndex = (page - 1) * itemsPerPage; // Calculate the start index of cards (first card) which will be displayed on a certain page
        const endIndex = startIndex + itemsPerPage; // Calculate the end index of cards (last card) which will be displayed on a certain page
        const itemsToShow = items.slice(startIndex, endIndex); // Slicing the items list from start index to end index

        // Show only the items for the current page
        itemsToShow.forEach(item => item.classList.remove("hide"));
    }


    // --- Function to Create Page Buttons ---
    function setupPagination(items) {
        // Clears any existing content within the paginationContainer element (Remove old pagination buttons before adding new ones)
        paginationContainer.innerHTML = "";

        const totalPages = Math.ceil(items.length / itemsPerPage);

        // If we only have 1 page, don't show any buttons
        if (totalPages <= 1) {
            paginationContainer.style.display = "none";
            return;
        }

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

    // --- Function to Handle Filtering Mechanism ---
    function filterItems() {
        currentPage = 1; // Always reset to page 1 on a new filter

        let filteredItems; 

        if (currentFilter === "all") {
            // If the condition is true, assign the full list
            filteredItems = certItems;
        } 
        else {
            // Otherwise, assign the filtered list
            filteredItems = certItems.filter(item => item.dataset.category === currentFilter);
        }

        // Setting up the pagination buttons for the filtered list
        setupPagination(filteredItems);

        // Showing page 1 of that filtered list
        showPage(currentPage, filteredItems);
    }

    if (filterContainer) {

        // Function will run when user click one of the filter buttons
        filterContainer.addEventListener("click", function (evt) {
            if (evt.target.classList.contains("filter-btn")) {
                // Updates active filter button
                filterContainer.querySelector(".active").classList.remove("active");
                evt.target.classList.add("active");

                // Sets currentFilter to the clicked button's filter value
                currentFilter = evt.target.dataset.filter;

                // Re-run the filtering logic (To update the displayed items based on the new filter)
                filterItems();
            }
        });

        // Function will run when user click one of the page buttons
        paginationContainer.addEventListener("click", function (evt) {
            if (evt.target.classList.contains("page-btn")) {
                // Get the corresponding page number
                const pageNumber = parseInt(evt.target.dataset.page, 10);

                if (pageNumber === currentPage) return;

                currentPage = pageNumber;

                // Show the corresponding page
                const filteredItems = (currentFilter === "all") ? certItems : certItems.filter(item => item.dataset.category === currentFilter);
                showPage(currentPage, filteredItems);

                // Update the active button
                paginationContainer.querySelector(".active").classList.remove("active");
                evt.target.classList.add("active");

                // Scrolls the user back to the top of the section
                if (certSectionTitle) {
                    certSectionTitle.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    }
    filterItems();



    // --- Project Modals ---

    const projectCards = document.querySelectorAll(".project-card");
    const modals = document.querySelectorAll(".modal");
    const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

    // Opening a modal
    const openModal = function (modalId) {
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.classList.add("active");
        }
    }

    // Closing a modal
    const closeModal = function (modal) {
        modal.classList.remove("active");
    }

    // When the user clicks on any of the project cards, their corresponding modal will open
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const modalId = card.getAttribute("data-modal-target");
            openModal(modalId);
        });
    });

    // When the user clicks on the 'X' button in any of the project modals, it will close that modal
    modalCloseBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const modal = btn.closest(".modal");
            closeModal(modal);
        });
    });

    // When the user clicks outside of the modal while the modal is active, it will close that modal
    modals.forEach(modal => {
        modal.addEventListener("click", (e) => {
            // Check if the click is on the overlay or the content inside it
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // --- Active Nav Link (On scroll) ---

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".header nav ul li a");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // entry.isIntersecting means the section is on screen
            if (entry.isIntersecting) {
                // Get the ID of the section on screen 
                const id = entry.target.getAttribute("id");

                // Remove 'nav-active' from all links
                navLinks.forEach(link => {
                    link.classList.remove("nav-active");
                });

                // Find the matching link by its href
                const matchingLink = document.querySelector(`.header nav ul li a[href="#${id}"]`);

                if (matchingLink) {
                    matchingLink.classList.add("nav-active");
                }
            }
        });
    }, {
        // This threshold means the section must be at least 30% on screen to trigger
        threshold: 0.3,
        // This adjusts the "trigger zone" to be 100px from the top, to account for the sticky header
        rootMargin: "-100px 0px 0px 0px"
    });

    // Telling the observer to watch all sections
    sections.forEach(section => {
        observer.observe(section);
    });


    // --- Back to Top Button ---

    const backToTopBtn = document.querySelector(".back-to-top-btn");

    // Function to show/hide the button
    const toggleBtnVisibility = () => {
        if (window.scrollY > 400) { // If scrolled more than 400px
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    };

    // Function to scroll to top
    const scrollToTop = (e) => {
        e.preventDefault(); // Stop the link from jumping
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Use the 'smooth' scroll
        });
    };

    // Listen for scroll events
    window.addEventListener("scroll", toggleBtnVisibility);

    // Listen for click events
    backToTopBtn.addEventListener("click", scrollToTop);

    // --- 8. MOBILE SWIPE NAVIGATION (NEW CODE) ---
    let touchStartX = 0; // Records where the touch begins
    let touchEndX = 0; // Records where the touch ends

    // Function to handle the swipe
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum pixels to count as a swipe

        // Check for a swipe right (to close)
        if (touchEndX - touchStartX > swipeThreshold) {
            if (navList.classList.contains("open")) {
                navList.classList.remove("open");
            }
        }

        // Check for a swipe left (to open)
        if (touchStartX - touchEndX > swipeThreshold) {
            // Only open if the swipe started near the edge
            if (touchStartX > window.innerWidth - 70) {
                if (!navList.classList.contains("open")) {
                    navList.classList.add("open");
                }
            }
        }
    }

    // Listen for the start of a touch
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    // Listen for the end of a touch
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe(); // Check if it was a swipe
    });

});


