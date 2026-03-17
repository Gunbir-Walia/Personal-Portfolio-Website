export const projects = [
    {
        id: "braitenberg",
        title: "Evolutionary Braitenberg Behaviour",
        date: "March 2025 - May 2025",
        shortDesc: "This project explores the hypothesis that simple agents evolved using microbial genetic algorithms can coherently exhibit a range of intricate behaviours within a simulated environment.",
        skills: ["Artificial Intelligence", "Genetic Algorithms", "Embodied AI", "Python"],
        repoLink: "https://github.com/Gunbir-Walia/Evolutionary-Braitenberg-Behaviour.git",
        bullets: [
            "This project explores the hypothesis that simple agents evolved using microbial genetic algorithms can coherently exhibit a range of intricate behaviours within a simulated environment. However, these behaviours degrade in performance or consistency when transferred to physical robots due to the reality gap between the real world and a controlled simulation.",
            "Designed and developed a simulated 2D environment in Python to evolve Braitenberg vehicles capable of exhibiting complex, animal-like behaviours using microbial genetic algorithms.",
            "Engineered agents with minimal cognitive architecture to display a rich repertoire of behaviours, including aggressor, coward, lover, explorer, shy, one-eyed phototaxis, and sequential phototaxis - each evolved through tailored fitness functions aligned with specific behavioural objectives.",
            "Modelled each agent’s genome as weighted sensor-to-motor connections with independent biases, enabling direct evolutionary optimisation of sensorimotor couplings.",
            "Transferred evolved genotypes to a physical robot using a Raspberry Pi Pico and MicroPython, analysing performance degradation due to the simulation-to-reality gap.",
            "Addressed real-world embodiment challenges such as sensor noise, hardware asymmetries, and directional sensory constraints, by adapting training conditions and motor bias strategies.",
            "Explored and critically analysed foundational principles of embodied cognition, active perception, and sensorimotor intelligence, highlighting how emergent behaviour arises from agent–environment interactions rather than internal complexity."
        ]
    },
    {
        id: "face-alignment",
        title: "Face Alignment",
        date: "April 2025 - May 2025",
        shortDesc: "A facial landmark detection system for precise face alignment, a core task in computer vision with applications in identity verification, emotion recognition, and AR/VR technologies.",
        skills: ["Machine Learning", "Computer Vision", "Python"],
        repoLink: "https://github.com/Gunbir-Walia/Face-Alignment.git",
        bullets: [
            "This project implements a facial landmark detection system for precise face alignment, a core task in computer vision with applications in identity verification, emotion recognition, and AR/VR technologies.",
            "Preprocessed facial images by standardising resolution, normalising illumination, and reducing image noise to deliver consistent, high-quality inputs for model training.",
            "Extracted Scale-Invariant Feature Transform (SIFT) descriptors around candidate landmark regions to capture robust local texture features resistant to scale, rotation, and lighting variations.",
            "Implemented a cascaded ridge regression framework, where successive regression stages refined landmark predictions iteratively to improve accuracy.",
            "Assessed model performance using normalised mean error (NME) across diverse facial poses and expressions, demonstrating reliable landmark localisation and strong accuracy, even under challenging conditions.",
            "Analysed system limitations, including susceptibility to severe occlusions and extreme profile views, and proposed enhancements through data augmentation, deep feature extraction, and CNN-based architectures for improved generalisation."
        ]
    },
    {
        id: "spam-detection",
        title: "Spam Detection",
        date: "April 2025 - May 2025",
        shortDesc: "A binary text classification system to distinguish between spam and legitimate messages, addressing real-world challenges in automated email and message filtering.",
        skills: ["Machine Learning", "Natural Language Processing", "Python"],
        repoLink: "https://github.com/Gunbir-Walia/Spam-Detection",
        bullets: [
            "This project implements a binary text classification system to distinguish between spam and legitimate messages, addressing real-world challenges in automated email and message filtering.",
            "Conducted comprehensive text preprocessing including lowercasing, removal of punctuation/special characters, tokenisation, stopword removal, and stemming to normalise and clean the dataset.",
            "Engineered TF-IDF vectorisation with both unigrams and bigrams, capped at the top 5,000 most frequent terms to balance contextual richness with computational efficiency.",
            "Trained and evaluated Multinomial Naïve Bayes and Logistic Regression classifiers, analysing trade-offs between speed, interpretability, and predictive performance.",
            "Achieved 96% accuracy with Naïve Bayes and 98% accuracy with Logistic Regression on the validation set, with the latter demonstrating superior precision, recall, and F1-scores.",
            "Investigated and documented failure cases, such as text obfuscation and contextually ambiguous non-spam messages, identifying limitations of surface-level n-gram models and opportunities for enhancement through deeper contextual embeddings."
        ]
    },
    {
        id: "property-tycoon",
        title: "Property Tycoon",
        date: "February 2025 - May 2025",
        shortDesc: "This project involved the complete life-cycle of designing, developing, and delivering Property Tycoon – a digital adaptation of Monopoly.",
        skills: ["Software Engineering", "Project Management", "Agile", "Unity", "C#", "Blender", "Figma", "Git"],
        repoLink: "https://github.com/Gunbir-Walia/Property-Tycoon.git",
        bullets: [
            "This project involved the complete life-cycle of designing, developing, and delivering Property Tycoon – a digital adaptation of Monopoly. Developed in Unity with C#, it was created collaboratively within a small team as part of a Software Engineering module.",
            "Created and rendered 3D assets in Blender and used Figma to design various UI elements.",
            "Managed project documentation including requirements analysis, risk management, testing plans and sprint documentation, ensuring clear traceability from client expectations to delivered features.",
            "Utilised Git & GitHub for version control and OneDrive for asset and documentation sharing, maintaining a smooth workflow and minimising redundancies.",
            "Coordinated sprint planning and task allocation using Gantt and PERT charts, following Agile methodology to deliver functional prototypes at the end of each sprint. Maintained detailed changelogs for stakeholder review, mirroring real-world development practices and fostering adaptability, problem-solving, and collaborative skills."
        ]
    },
    {
        id: "ecommerce",
        title: "E-commerce Platform",
        date: "Dec 2025 - Jan 2026",
        shortDesc: "A comprehensive full-stack e-commerce application featuring a component-based React frontend and a robust Node.js/Express backend with SQL database integration.",
        skills: ["React.js", "Node.js", "Express.js", "JavaScript", "SQL", "Sequelize ORM",  "REST API", "Vite", "Vitest", "HTML/CSS"],
        repoLink: "https://github.com/Gunbir-Walia/E-commerce-Project",
        bullets: [
            "This project is a comprehensive full-stack e-commerce application developed to simulate a modern online retail platform. It marks an architectural evolution to a decoupled system with a React SPA frontend and a custom Node.js backend.",
            "Developed a fully responsive Single Page Application (SPA) using React, Vite, and CSS Grid/Flexbox, optimizing layout across desktop, tablet, and mobile devices.",
            "Architected a modular, component-based frontend using React Hooks (useState, useEffect) for efficient state management, ensuring real-time UI consistency for cart updates and inventory.",
            "Engineered a scalable RESTful API with Node.js and Express to handle server-side logic, transitioning away from local storage.",
            "Integrated Sequelize ORM to manage a relational SQL database, designing schemas for Products, Orders, and Cart Items to ensure data persistence and referential integrity.",
            "Implemented client-side dynamic routing using React Router for seamless navigation without page reloads, and utilized Axios for efficient asynchronous client-server HTTP communication.",
            "Transitioned search functionality to the backend API to efficiently filter keywords and reduce client payload.",
            "Adopted a modern testing ecosystem using Vitest and React Testing Library to validate component rendering and simulate user interactions in a virtual DOM environment."
        ]
    },
    {
        id: "amazon-clone",
        title: "Amazon Clone",
        date: "Nov 2025 - Dec 2025",
        shortDesc: "An e-commerce web application developed with vanilla JavaScript utilizing the MVC pattern to separate business logic from the user interface.",
        skills: ["JavaScript", "HTML", "CSS", "OOP", "MVC", "Asynchronous Programming", "TDD", "Jasmine"],
        repoLink: "https://github.com/Gunbir-Walia/Amazon-Project",
        bullets: [
            "This project is an e-commerce web application developed with vanilla JavaScript and designed to simulate the core features of a major retail platform. It utilizes the MVC (Model-View-Controller) pattern to separate business logic from the user interface.",
            "Designed and built a fully responsive e-commerce website using CSS Grid and Flexbox, optimizing the layout for desktop, tablet, and mobile interfaces.",
            "Transitioned the codebase from procedural JavaScript to a modular Object-Oriented (OOP) architecture, improving long-term scalability and maintainability.",
            "Implemented a robust Model-View-Controller (MVC) design pattern, strictly separating business logic (Cart/Product models) from DOM manipulation and view rendering.",
            "Integrated backend services using Fetch API, Promises, and Async/Await to dynamically load product inventories and process orders, handling network latency and loading states with professional UI feedback.",
            "Developed complex business logic for cart management, including quantity updates, tax calculations, shipping delivery estimations using DayJS, and persistent storage via LocalStorage.",
            "Engineered a comprehensive search and filtering system that utilizes URL parameters for shareable search results, featuring keyword-based filtering and case-insensitive matching logic.",
            "Built a realistic \"Order Tracking\" system that calculates real-time delivery progress based on timestamps, dynamically updating UI status bars and \"delivered\" states.",
            "Adopted Test-Driven Development (TDD) principles by writing extensive unit and integration tests with Jasmine, covering critical paths like cart calculations, money formatting, and edge-case handling."
        ]
    },
    {
        id: "music-db",
        title: "Music Management Database",
        date: "November 2024 - August 2025",
        shortDesc: "This project implements a comprehensive relational database that models a music ecosystem, featuring a detailed schema for artists, albums, songs, record labels and user-generated content.",
        skills: ["SQL", "Database Management System", "MySQL"],
        repoLink: "https://github.com/Gunbir-Walia/Music-Management-Database.git",
        bullets: [
            "This project implements a comprehensive relational database that models a music ecosystem, featuring a detailed schema for artists, albums, songs, record labels and user-generated content like playlists, akin to the kind of databases you would find in the backend of music streaming platforms like Spotify or Apple Music.",
            "Engineered database performance by strategically adding indexes and primary/foreign key constraints to optimize query speed and ensure data integrity.",
            "Identified and documented key limitations of the design, addressing crucial scalability challenges (e.g., database sharding) and opportunities for future expansion.",
            "Developed a comprehensive suite of SQL queries to demonstrate core functionality and data manipulation."
        ]
    },
    {
        id: "antlr",
        title: "ANTLR Interpreter",
        date: "November 2024",
        shortDesc: "This project develops an interpreter for a simple, custom-designed programming language using ANTLR (Another Tool for Language Recognition).",
        skills: ["Java", "ANTLR", "Semantic Analysis"],
        repoLink: "https://github.com/Gunbir-Walia/ANTLR-Interpreter.git",
        bullets: [
            "This project develops an interpreter for a simple, custom-designed programming language using ANTLR (Another Tool for Language Recognition). It features a grammar specification with support for typed variable declarations, expressions, functions, and control flow constructs.",
            "Defined the language's syntax using context-free grammar, enabling ANTLR to automatically generate a parser for syntactic analysis.",
            "Constructed parse trees from user code and performed semantic analysis to ensure correctness, catching type mismatches, undeclared variables, and other logical errors.",
            "Implemented execution for valid code, alongside detailed error reporting to guide users in correcting invalid input."
        ]
    },
    {
        id: "productivity-app",
        title: "Productivity App",
        date: "February 2024",
        shortDesc: "A mobile productivity app to keep track of the amount of time you spend studying and doing extra-curricular activities.",
        skills: ["FlutterFlow", "Figma", "UI/UX Design", "Mobile Dev"],
        repoLink: "#",
        bullets: [
            "Designed and implemented a mobile productivity app to keep track of the amount of time you spend studying and doing extra-curricular activities as part of my university's hackathon.",
            "Created wireframes and UI/UX in Figma and implemented functionality using FlutterFlow."
        ]
    },
];