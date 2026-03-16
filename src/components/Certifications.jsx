import { useState } from 'react';
import FadeIn from './FadeIn';
import { filters, certifications } from '../data/certifications';

export default function Certifications() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredCerts = activeFilter === 'all'
        ? certifications
        : certifications.filter(cert => cert.category === activeFilter);

    const displayedCerts = filteredCerts.slice(0, visibleCount);

    const handleFilterChange = (filterId) => {
        setActiveFilter(filterId);
        setVisibleCount(6);
    };

    return (
        <section id="certifications" className="py-24 min-h-[95vh] flex flex-col justify-center">
            <FadeIn>
                <div className="mb-12 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Professional <span className="text-rose-500">Certifications.</span>
                    </h2>
                </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
                <div className="mb-12 flex flex-wrap justify-center gap-3">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => handleFilterChange(filter.id)}
                            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${activeFilter === filter.id
                                ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-md'
                                : 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </FadeIn>

            <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {displayedCerts.map((cert, index) => (
                    <FadeIn key={`${activeFilter}-${cert.title}`} direction="up" delay={index * 0.05}>
                        <div className="group flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-rose-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-rose-500/50">

                            <div>
                                <h3 className="text-lg font-bold leading-tight text-zinc-900 dark:text-zinc-100">
                                    {cert.title}
                                </h3>
                                <p className="mt-2 text-sm font-medium text-rose-500">
                                    Issued: {cert.date}
                                </p>
                            </div>

                            <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    By: {cert.issuer}
                                </p>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-rose-500 hover:text-white dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-rose-500 dark:hover:text-white"
                                >
                                    View
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            </div>

                        </div>
                    </FadeIn>
                ))}
            </div>

            {visibleCount < filteredCerts.length && (
                <FadeIn direction="up">
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 6)}
                            className="rounded-full border-2 border-zinc-300 px-8 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-rose-500 hover:text-rose-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-rose-500 dark:hover:text-rose-400"
                        >
                            Load More
                        </button>
                    </div>
                </FadeIn>
            )}

        </section>
    );
}