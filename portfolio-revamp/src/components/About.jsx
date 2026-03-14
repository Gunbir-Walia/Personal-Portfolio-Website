import FadeIn from './FadeIn';

export default function About() {
    return (
        <section id="about" className="py-24">
            <FadeIn>
                <h2 className="mb-12 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    About <span className="text-rose-500">Me.</span>
                </h2>
            </FadeIn>

            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                {/* Left Column: Image with Offset Frame and Glow */}
                <FadeIn direction="right" delay={0.2}>
                    <div className="relative mx-auto max-w-md lg:mx-0">
                        {/* Geometric offset frame for depth (hidden on very small screens) */}
                        <div className="absolute -bottom-6 -right-6 hidden h-full w-full rounded-2xl border-2 border-rose-500/50 dark:border-rose-500/30 sm:block"></div>

                        {/* Ambient Glow */}
                        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-rose-500 to-purple-600 opacity-20 blur-xl dark:opacity-40"></div>

                        <div className="relative z-10 aspect-square overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                            <img
                                src="/images/Gunbir.jpg"
                                alt="Gunbir Walia"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>
                </FadeIn>

                {/* Right Column: Bio Text & Quick Facts */}
                <FadeIn direction="left" delay={0.4}>
                    <div className="flex flex-col justify-center">

                        <div className="mb-8 space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                            <p>
                                I am a third-year Computer Science and Artificial Intelligence student driven by a passion for solving complex, real-world problems. My engineering approach bridges the gap between theoretical machine learning and practical, scalable software architecture.
                            </p>
                            <p>
                                Whether I am fine-tuning Large Language Models, engineering robust relational databases, or building responsive web interfaces, I focus on writing clean, efficient, and maintainable code. I thrive in environments that demand continuous learning and adaptability.
                            </p>
                        </div>

                        {/* Quick Facts Badges */}
                        <div className="grid grid-cols-1 gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:grid-cols-2">

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">B.Sc. (Hons) CS & AI</p>
                                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">University of Sussex</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Location</p>
                                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Brighton, United Kingdom / Delhi-NCR, India</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </FadeIn>

            </div>
        </section>
    );
}