// Wait for the HTML document to finish loading
document.addEventListener("DOMContentLoaded", function () {

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
});

// Collect all elements with class name 'tab-link' (which contains the tab titles) and 'tab-content' (which contains the content within each of those tabs)
var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

// Function will run when the user clicks a tab
function opentab(event, tabname) {
    // Removing the "active" class from all tab buttons
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // Removing the "active" class from all tab content
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Adding "active" class to the *clicked* tab button
    event.currentTarget.classList.add("active-link");

    // Adding "active" class to the corresponding content pane 
    document.getElementById(tabname).classList.add("active-tab");
}