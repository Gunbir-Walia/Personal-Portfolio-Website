import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { typedStrings } from '../data/home';

export default function Home() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: typedStrings,
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1500,
            startDelay: 500,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    // Helper function to handle smooth scrolling for the CTA buttons
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="flex min-h-[85vh] flex-col justify-center py-20 relative z-10 text-center items-center">

            <FadeIn direction="up" delay={0.1}>
                <p className="mb-6 text-sm font-bold tracking-widest text-rose-500 uppercase sm:text-base">
                    Welcome to my Digital Canvas
                </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
                <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
                    <span className="text-zinc-900 dark:text-zinc-50">Hi, I'm </span>
                    <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                        Gunbir Walia
                    </span>
                </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
                <h2 className="mb-10 text-2xl font-bold text-zinc-600 dark:text-zinc-400 sm:text-4xl h-12 sm:h-16">
                    I am a <span ref={el} className="text-rose-500"></span>
                </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="#projects"
                        onClick={(e) => handleScroll(e, '#projects')}
                        className="rounded-full bg-rose-500 px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-500/30"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => handleScroll(e, '#contact')}
                        className="rounded-full border-2 border-zinc-200 bg-transparent px-8 py-3.5 text-sm font-bold text-zinc-900 transition-all hover:-translate-y-1 hover:border-zinc-900 dark:border-zinc-800 dark:text-white dark:hover:border-white"
                    >
                        Get in Touch
                    </a>
                </div>
            </FadeIn>

            {/* Bouncing Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <FadeIn direction="up" delay={1.2}>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 cursor-pointer"
                        onClick={(e) => handleScroll(e, '#about')}
                    >
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Scroll</span>
                        <svg className="h-5 w-5 text-zinc-400 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </FadeIn>
            </div>

        </section>
    );
}