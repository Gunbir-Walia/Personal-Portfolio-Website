import { useState } from 'react';
import FadeIn from './FadeIn';
import { educations } from '../data/educations';

function EducationCard({ degree, school, date, grade, details }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:border-rose-300 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-rose-500/50"
        >
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex cursor-pointer items-center justify-between p-6 sm:p-8"
            >
                <div className="pr-4">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{degree}</h3>
                    <p className="mt-1 text-lg font-medium text-rose-500">{school}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                        <span>{date}</span>
                        <span className="hidden h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700 sm:block"></span>
                        <span className="font-semibold text-zinc-700 dark:text-zinc-300">{grade}</span>
                    </div>
                </div>

                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-colors dark:bg-zinc-800 dark:text-zinc-400">
                    {isOpen ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    )}
                </div>
            </div>

            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="border-t border-zinc-100 px-6 pb-8 pt-6 dark:border-zinc-800 sm:px-8 space-y-4">
                    {details.map((item, index) => (
                        <p key={index} className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
                            <span className="font-semibold text-rose-600 dark:text-rose-500">{item.label} </span>
                            {item.content}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Education() {
    return (
        <section id="education" className="py-24">
            <FadeIn>
                <h2 className="mb-12 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Education & <span className="text-rose-500">Academics.</span>
                </h2>
            </FadeIn>

            <div className="mx-auto max-w-7xl space-y-6">
                {educations.map((edu, index) => (
                    <FadeIn key={index} direction="up" delay={index * 0.1}>
                        <EducationCard {...edu} />
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}