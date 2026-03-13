import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    // New state: Show 6 projects initially (2 rows)
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [selectedProject]);

    const projects = [
        {
            id: "ecommerce",
            title: "E-commerce Platform",
            date: "Dec 2025 - Jan 2026",
            shortDesc: "A comprehensive full-stack e-commerce application featuring a component-based React frontend and a robust Node.js/Express backend with SQL database integration.",
            skills: ["React.js", "Node.js", "Express.js", "SQL", "Sequelize ORM", "JavaScript", "REST API", "Vite", "Vitest", "HTML/CSS"],
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
            id: "productivity-app",
            title: "Productivity App",
            date: "Hackathon Project",
            shortDesc: "A mobile productivity app to keep track of the amount of time you spend studying and doing extra-curricular activities.",
            skills: ["FlutterFlow", "Figma", "UI/UX Design", "Mobile Dev"],
            repoLink: "#",
            bullets: [
                "Designed and implemented a mobile productivity app to keep track of the amount of time you spend studying and doing extra-curricular activities as part of my university's hackathon.",
                "Created wireframes and UI/UX in Figma and implemented functionality using FlutterFlow."
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
            repoLink: "https://github.com/Gunbir-Walia/Face-Alignment.git",
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
            id: "property-tycoon",
            title: "Property Tycoon",
            date: "February 2025 - May 2025",
            shortDesc: "This project involved the complete life-cycle of designing, developing, and delivering Property Tycoon – a digital adaptation of Monopoly.",
            skills: ["Software Engineering", "Agile", "Project Management", "Unity", "C#", "Blender", "Figma", "Git"],
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
        }
    ];

    // Slice the array to only map over the number of visible projects
    const displayedProjects = projects.slice(0, visibleCount);

    return (
        <section id="projects" className="py-24 relative">
            <FadeIn>
                <div className="mb-12 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Featured <span className="text-rose-500">Projects.</span>
                    </h2>
                </div>
            </FadeIn>

            {/* Projects Grid */}
            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                {displayedProjects.map((project, index) => (
                    <FadeIn key={project.id} direction="up" delay={index * 0.1}>
                        <div
                            onClick={() => setSelectedProject(project)}
                            className="group flex h-full cursor-pointer flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-rose-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-rose-500/50"
                        >
                            <div>
                                <div className="flex items-start justify-between mb-1">
                                    <h3 className="text-xl font-bold text-rose-500 pr-4">{project.title}</h3>

                                    {project.repoLink !== "#" && (
                                        <a
                                            href={project.repoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
                                            title="View on GitHub"
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.034c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                            </svg>
                                        </a>
                                    )}
                                </div>

                                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 italic mb-4">{project.date}</p>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                                    {project.shortDesc}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.skills.slice(0, 4).map((skill, i) => (
                                    <span key={i} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                        {skill}
                                    </span>
                                ))}
                                {project.skills.length > 4 && (
                                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                        +{project.skills.length - 4} more
                                    </span>
                                )}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            {/* "Load More" Button - Shows only if there are hidden projects */}
            {visibleCount < projects.length && (
                <FadeIn direction="up">
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 6)}
                            className="rounded-full border-2 border-zinc-200 px-8 py-3 text-sm font-semibold text-zinc-600 transition-colors hover:border-rose-500 hover:text-rose-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-rose-500 dark:hover:text-rose-400"
                        >
                            Load More Projects
                        </button>
                    </div>
                </FadeIn>
            )}

            {/* Framer Motion Animated Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="fixed left-1/2 top-1/2 z-[101] w-[90%] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
                        >
                            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4 dark:border-zinc-800 sm:px-8">
                                <h3 className="text-2xl font-bold text-rose-500">{selectedProject.title}</h3>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="max-h-[75vh] overflow-y-auto px-6 py-6 sm:px-8">

                                <div className="mb-8 flex flex-wrap gap-2">
                                    {selectedProject.skills.map((skill, i) => (
                                        <span key={i} className="rounded-full border border-zinc-200 px-3 py-1 text-sm font-semibold text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <ul className="space-y-4">
                                    {selectedProject.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start">
                                            {i !== 0 ? (
                                                <span className="mr-4 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500"></span>
                                            ) : null}
                                            <span className={`text-zinc-600 dark:text-zinc-400 leading-relaxed text-base ${i === 0 ? 'mb-4 font-medium' : ''}`}>
                                                {bullet}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {selectedProject.repoLink !== "#" && (
                                    <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                                        <a
                                            href={selectedProject.repoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-500 dark:bg-white dark:text-zinc-900 dark:hover:bg-rose-500 dark:hover:text-white"
                                        >
                                            View Project Repository
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                )}

                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}