import FadeIn from './FadeIn';
import TiltCard from './TiltCard';
import { techStack } from '../data/skills';

export default function Skills() {
    return (
        <section id="skills" className="py-24 min-h-[80vh] flex flex-col justify-center">
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

            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                {techStack.map((category, index) => (
                    <FadeIn key={index} direction="up" delay={index * 0.1}>
                        <TiltCard>
                            <div className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-rose-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-rose-500/50">

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
                                            className="rounded-full border border-zinc-300 bg-transparent px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-rose-400 hover:text-rose-600 dark:border-zinc-700/60 dark:text-zinc-300 dark:hover:border-rose-500/60 dark:hover:text-rose-400"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </TiltCard>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}