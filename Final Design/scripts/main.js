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