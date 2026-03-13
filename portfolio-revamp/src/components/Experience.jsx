import FadeIn from './FadeIn';

export default function Experience() {
    const experiences = [
        {
            role: "A.I. Intern",
            company: "Erasmith Technologies",
            location: "Delhi-NCR, India",
            date: "June 2025 - Present",
            // Merging the CV highlights with the technical depth of the original website
            bullets: [
                "Contributed to the development of a RAG-based contract analysis and document generation tool by researching and defining hundreds of practical business use cases.",
                "Engineered and deployed automated internal IT Service Management (ITSM) workflows using n8n, including a live solution that reads client emails and automatically generates support tickets.",
                "Designing and fine-tuning agentic AI workflows using frameworks such as LangChain, AutoGen, and CrewAI, enabling autonomous multi-agent task execution.",
                "Implementing prescriptive intelligence modules that simulate contract outcomes and generate actionable recommendations.",
                "Building scalable document generation pipelines using custom dynamic templates integrated with a secure RAG backend.",
                "Contributing to explainable AI interfaces that visualise reasoning chains and improve transparency and user trust."
            ]
        }
    ];

    return (
        <section id="work-experience" className="py-24">
            <FadeIn>
                <h2 className="mb-12 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Work <span className="text-rose-500">Experience.</span>
                </h2>
            </FadeIn>

            {/* Expanded to max-w-7xl to match the Skills section and fill horizontal space */}
            <div className="mx-auto max-w-7xl space-y-8">
                {experiences.map((exp, index) => (
                    <FadeIn key={index} direction="up" delay={index * 0.2}>
                        <div className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 lg:flex-row lg:items-start">

                            {/* Left Side: Role & Company */}
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

                            {/* Right Side: Description Bullets */}
                            <div className="lg:w-2/3">
                                <ul className="space-y-4">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="mr-4 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500"></span>
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