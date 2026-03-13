import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ isDarkMode, setIsDarkMode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // State to track which section is currently active for link highlighting
    const [activeSection, setActiveSection] = useState('home');

    // Lock background scroll when the mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            // Using an empty string removes the inline style completely
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Work Experience', href: '#work-experience' },
        { name: 'Education', href: '#education' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    // Intersection Observer for Scroll Spy (Active Links)
    useEffect(() => {
        const observerOptions = {
            root: null,
            // Creates a horizontal "tripwire" across the middle 50% of the screen
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Update the active section state with the ID of the section currently in view
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Find all the DOM elements that match our navLinks
        const sectionElements = navLinks
            .map((link) => document.querySelector(link.href))
            .filter((element) => element !== null);

        // Tell the observer to watch each of these sections
        sectionElements.forEach((section) => observer.observe(section));

        // Cleanup function when the component unmounts
        return () => {
            sectionElements.forEach((section) => observer.unobserve(section));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array means this sets up once on load

    // Framer Motion Variants for the Staggered List
    const containerVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: {
            height: 'auto',
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                when: "beforeChildren", // Wait for the dropdown to open before animating links
                staggerChildren: 0.05, // Delay each link by 0.05s
            }
        },
        exit: {
            height: 0,
            opacity: 0,
            transition: { duration: 0.2, ease: "easeInOut" }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 }, // Start slightly transparent and to the left
        visible: { opacity: 1, x: 0 },
    };

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xl font-extrabold tracking-tighter text-zinc-900 dark:text-white"
                    >
                        Gunbir.
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:block">
                        <ul className="flex gap-8 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                            {navLinks.map((link) => {
                                // NEW: Check if this specific link is the currently active one
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            // Apply Rose color and bold text if active, standard hover effect if not
                                            className={`transition-colors ${isActive
                                                    ? 'text-rose-500 font-bold dark:text-rose-500'
                                                    : 'hover:text-rose-500 dark:hover:text-rose-400'
                                                }`}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Right Side: Dark Mode Toggle & Hamburger Menu */}
                    <div className="flex items-center gap-4">

                        {/* Animated Dark Mode Toggle */}
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="relative flex h-8 w-16 items-center rounded-full bg-zinc-300 p-1 transition-colors duration-300 dark:bg-zinc-700"
                            aria-label="Toggle Dark Mode"
                        >
                            <div
                                className={`flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 dark:bg-zinc-950 ${isDarkMode ? 'translate-x-8 rotate-[360deg]' : 'translate-x-0 rotate-0'
                                    }`}
                            >
                                {isDarkMode ? '🌙' : '☀️'}
                            </div>
                        </button>

                        {/* Mobile Hamburger Button */}
                        <button
                            className="text-zinc-900 dark:text-white lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>

                    </div>
                </div>

                {/* Framer Motion Mobile Dropdown Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            drag="y"
                            dragConstraints={{ top: 0, bottom: 0 }}
                            dragElastic={{ top: 0.5, bottom: 0 }} // Allows bouncy pulling up, strictly blocks pulling down
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipeUpThreshold = -50; // pixels dragged up
                                const swipeUpVelocity = -500; // speed of the flick

                                // Close if they dragged up past 50px, or flicked it up really fast
                                if (offset.y < swipeUpThreshold || velocity.y < swipeUpVelocity) {
                                    setIsMobileMenuOpen(false);
                                }
                            }}
                            className="absolute left-0 top-full w-full overflow-hidden border-b border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-950 lg:hidden"
                        >
                            <ul className="flex flex-col gap-4 px-6 py-6 text-base font-semibold text-zinc-600 dark:text-zinc-400">
                                {navLinks.map((link) => {
                                    const isActive = activeSection === link.href.substring(1);
                                    return (
                                        <motion.li key={link.name} variants={itemVariants}>
                                            <a
                                                href={link.href}
                                                onPointerDown={(e) => {
                                                    e.preventDefault(); //Stop the browser's default instant jump
                                                    setIsMobileMenuOpen(false); // Trigger the menu to close
                                                    document.body.style.overflow = ''; // Instantly unlock the scroll

                                                    // Find the section and smoothly scroll to it
                                                    const targetSection = document.querySelector(link.href);
                                                    if (targetSection) {
                                                        targetSection.scrollIntoView({ behavior: 'smooth' });
                                                    }
                                                }}
                                                className={`block w-full transition-colors ${isActive
                                                    ? 'text-rose-500 font-bold dark:text-rose-500'
                                                    : 'hover:text-rose-500 dark:hover:text-rose-400'
                                                    }`}
                                            >
                                                {link.name}
                                            </a>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Dark Backdrop Blur Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="fixed inset-0 z-40 bg-zinc-900/40 backdrop-blur-sm dark:bg-black/60 lg:hidden"
                        aria-hidden="true"
                    />
                )}
            </AnimatePresence>
        </>
    );
}