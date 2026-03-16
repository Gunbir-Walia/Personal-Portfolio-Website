import FadeIn from './FadeIn';
import { experiences } from '../data/experiences';

export default function Experience() {
    return (
        <section id="work-experience" className="py-24 min-h-[85vh] flex flex-col justify-center">
            <FadeIn>
                <h2 className="mb-12 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Work <span className="text-rose-500">Experience.</span>
                </h2>
            </FadeIn>

            <div className="mx-auto max-w-7xl space-y-8">
                {experiences.map((exp, index) => (
                    <FadeIn key={index} direction="up" delay={index * 0.2}>
                        <div className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 lg:flex-row lg:items-start">

                            <div className="mb-8 lg:mb-0 lg:w-1/3 lg:pr-8">
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                                    {exp.role}
                                </h3>
                                <p className="mt-1 text-lg font-medium text-rose-500">
                                    {exp.company}
                                </p>
                                <div className="mt-2 flex flex-col text-sm text-zinc-500 dark:text-zinc-400">
                                    <span>{exp.date}</span>
                                    <span>{exp.location}</span>
                                </div>
                            </div>

                            <div className="lg:w-2/3">
                                <ul className="space-y-4">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="mr-4 mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500"></span>
                                            <span className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
                                                {bullet}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}