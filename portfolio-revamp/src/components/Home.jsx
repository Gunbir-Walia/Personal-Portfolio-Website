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

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="flex min-h-[85vh] flex-col justify-center py-20 relative z-10 text-center items-center">

            {/* Subtle digital grid overlay fading out at the edges */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <FadeIn direction="up" delay={0.1}>
                {/* Sleek, editorial serif kicker in a neutral tone */}
                <p className="mb-6 text-xl font-serif italic tracking-wide text-zinc-500 dark:text-zinc-400 sm:text-2xl">
                    Welcome to my digital canvas
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
                <h2 className="mb-10 h-12 text-2xl font-bold text-zinc-600 dark:text-zinc-400 sm:h-16 sm:text-4xl">
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

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                {/* Mount-based entrance animation (ignores scroll position) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                >
                    {/* Continuous bouncing animation */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="flex cursor-pointer flex-col items-center gap-2"
                        onClick={(e) => handleScroll(e, '#about')}
                    >
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Scroll</span>
                        <svg className="h-5 w-5 text-zinc-400 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
}