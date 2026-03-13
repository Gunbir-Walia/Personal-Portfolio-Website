import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import FadeIn from './FadeIn';

export default function Home() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Computer Science Student',
                'Software Engineer',
                'Data Scientist',
                'AI/ML Engineer',
                'Web Developer',
                'Data Analyst',
                'Passionate Problem Solver'
            ],
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

    return (
        <section id="home" className="flex min-h-[85vh] flex-col justify-center py-20 relative z-10 text-center items-center">

            <FadeIn direction="up" delay={0.1}>
                <p className="mb-6 text-lg font-bold tracking-wide text-rose-500 uppercase">
                    Welcome to my Digital Canvas
                </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
                <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl text-zinc-900 dark:text-zinc-50">
                    Hi, I'm Gunbir Walia
                </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
                <h2 className="mb-10 text-2xl font-bold text-zinc-600 dark:text-zinc-400 sm:text-4xl h-12 sm:h-16">
                    And I am a <span ref={el} className="text-rose-500"></span>
                </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="#projects"
                        className="rounded-full bg-rose-500 px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-500/30"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="rounded-full border-2 border-zinc-200 bg-transparent px-8 py-3.5 text-sm font-bold text-zinc-900 transition-all hover:-translate-y-1 hover:border-zinc-900 dark:border-zinc-800 dark:text-white dark:hover:border-white"
                    >
                        Get in Touch
                    </a>
                </div>
            </FadeIn>

        </section>
    );
}