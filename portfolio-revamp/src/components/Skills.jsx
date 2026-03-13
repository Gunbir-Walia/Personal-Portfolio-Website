import FadeIn from './FadeIn';

export default function Skills() {
    const techStack = [
        {
            title: "Programming Languages",
            icon: (
                <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            skills: ["Java", "Python", "C#", "JavaScript", "TypeScript", "Kotlin", "HTML/CSS", "MATLAB"]
        },
        {
            title: "AI & Machine Learning",
            icon: (
                <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            skills: ["Machine Learning (Supervised, Unsupervised, Reinforcement)", "Neural Networks (ANN, CNN, RNN)", "Computer Vision", "NLP", "Agentic AI", "RAG", "Evolutionary Algorithms"]
        },
        {
            title: "Libraries & Frameworks",
            icon: (
                <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            skills: ["TensorFlow", "Scikit-learn", "OpenCV", "NumPy", "Pandas", "Matplotlib", "NLTK"]
        },
        {
            title: "Web Development",
            icon: (
                <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            skills: ["React", "Node.js", "Express.js", "Vite", "React Router", "Tailwind", "Bootstrap", "Axios", "RESTful APIs"]
        },
        {
            title: "Databases & Cloud",
            icon: (
                <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
            skills: ["AWS", "Oracle Cloud (OCI)", "MySQL", "SQLite", "Sequelize ORM"]
        },
        {
            title: "Tools & Architecture",
            icon: (
                <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            skills: ["Git/GitHub", "Docker", "n8n", "Unity", "Blender", "Figma", "ANTLR", "Vitest", "Jasmine", "MS Office"]
        }
    ];

    return (
        <section id="skills" className="py-24">
            <FadeIn>
                <div className="mb-16 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        My <span className="text-rose-500">Tech Stack.</span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                        A comprehensive overview of the languages, frameworks, and tools I use to build intelligent applications.
                    </p>
                </div>
            </FadeIn>

            {/* Grid Layout: Using max-w-7xl to make it wider on large screens */}
            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                {techStack.map((category, index) => (
                    <FadeIn key={index} direction="up" delay={index * 0.1}>
                        {/* Darker, sleeker card design */}
                        <div className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40">

                            <div className="mb-6 flex items-center gap-3">
                                {category.icon}
                                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        // Outline style pills matching the reference image's aesthetic
                                        className="rounded-full border border-zinc-200 bg-transparent px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-rose-300 hover:text-rose-600 dark:border-zinc-700/60 dark:text-zinc-300 dark:hover:border-rose-500/60 dark:hover:text-rose-400"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}