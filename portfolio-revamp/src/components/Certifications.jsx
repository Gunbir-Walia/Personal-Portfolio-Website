import { useState } from 'react';
import FadeIn from './FadeIn';

export default function Certifications() {
    const [activeFilter, setActiveFilter] = useState('all');
    // New state to track how many certifications to show (capped at 6 initially)
    const [visibleCount, setVisibleCount] = useState(6);

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'oracle', label: 'OCI' },
        { id: 'harvard', label: 'Harvard' },
        { id: 'other', label: 'Others' }
    ];

    const certifications = [
        {
            title: "React Premium Course",
            issuer: "SuperSimpleDev Courses",
            date: "January 2026",
            category: "other",
            link: "https://courses.supersimple.dev/certificates/rn7rijenes"
        },
        {
            title: "JavaScript Full Course",
            issuer: "SuperSimpleDev Courses",
            date: "January 2026",
            category: "other",
            link: "https://courses.supersimple.dev/certificates/4yhtizm7ir"
        },
        {
            title: "HTML & CSS Full Course",
            issuer: "SuperSimpleDev Courses",
            date: "January 2026",
            category: "other",
            link: "https://courses.supersimple.dev/certificates/92laohciyn"
        },
        {
            title: "Oracle AI Vector Search",
            issuer: "Oracle",
            date: "October 2025",
            category: "oracle",
            link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=ACF3336F06168E1C96FB633049827C7FBF8F6272ADE06AFD760F018A6271CFDE"
        },
        {
            title: "Oracle Cloud Infrastructure Generative AI Professional",
            issuer: "Oracle",
            date: "September 2025",
            category: "oracle",
            link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3991AAEE8073AA20E5C445CE158026CF4B84CFDC5A76BD4472B15153D2F313AA"
        },
        {
            title: "CS50's Introduction to Databases with SQL",
            issuer: "Harvard",
            date: "August 2025",
            category: "harvard",
            link: "https://cs50.harvard.edu/certificates/3f04aba5-5565-42e3-963b-108ebdd218a4"
        },
        {
            title: "Oracle Cloud Infrastructure Data Science Professional",
            issuer: "Oracle",
            date: "August 2025",
            category: "oracle",
            link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3CD238E5C63A12D731ECE55320023ADF5BB5FFD2AAFB1466635FBB8395FFCE04"
        },
        {
            title: "Oracle Fusion AI Agent Studio Foundations Associate",
            issuer: "Oracle",
            date: "August 2025",
            category: "oracle",
            link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=EDA5D3E59E2AC04719B519CF0E14F019FC2F0A736AC05EC7C4DB4506B6E992E6"
        },
        {
            title: "Oracle Cloud Infrastructure AI Foundations Associate",
            issuer: "Oracle",
            date: "July 2025",
            category: "oracle",
            link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5192B43A29ED7AC14B53FA43D1C10014311AA2A5111DDC280426374CA3C4511A"
        },
        {
            title: "Beginners Guide to AI",
            issuer: "Udemy",
            date: "July 2023",
            category: "other",
            link: "https://www.udemy.com/certificate/UC-b3330e49-7b6f-4809-979d-08fb76fa025b"
        },
        {
            title: "Artificial Intelligence A-Z",
            issuer: "Udemy",
            date: "April 2022",
            category: "other",
            link: "https://www.udemy.com/certificate/UC-9f4e6900-1e12-4f06-97d8-327cb6e7c73c"
        },
        {
            title: "Python for Absolute Beginners",
            issuer: "Udemy",
            date: "April 2022",
            category: "other",
            link: "https://www.udemy.com/certificate/UC-be17c815-7193-4635-8129-6ae273b92b9a"
        },
        {
            title: "Complete Android 12 & Kotlin Development",
            issuer: "Udemy",
            date: "April 2022",
            category: "other",
            link: "https://www.udemy.com/certificate/UC-af287351-064c-4de8-a1ad-7d44b3cb3216"
        }
    ];

    // 1. Filter the array based on the active button
    const filteredCerts = activeFilter === 'all'
        ? certifications
        : certifications.filter(cert => cert.category === activeFilter);

    // 2. Slice the array to only show up to 'visibleCount'
    const displayedCerts = filteredCerts.slice(0, visibleCount);

    // Helper function to handle filter clicks (resets the count back to 6)
    const handleFilterChange = (filterId) => {
        setActiveFilter(filterId);
        setVisibleCount(6);
    };

    return (
        <section id="certifications" className="py-24">
            <FadeIn>
                <div className="mb-12 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Professional <span className="text-rose-500">Certifications.</span>
                    </h2>
                </div>
            </FadeIn>

            {/* Filter Buttons */}
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

            {/* Certifications Grid */}
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

            {/* "Load More" Button - Only visible if there are hidden items */}
            {visibleCount < filteredCerts.length && (
                <FadeIn direction="up">
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 6)}
                            className="rounded-full border-2 border-zinc-200 px-8 py-3 text-sm font-semibold text-zinc-600 transition-colors hover:border-rose-500 hover:text-rose-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-rose-500 dark:hover:text-rose-400"
                        >
                            Load More
                        </button>
                    </div>
                </FadeIn>
            )}

        </section>
    );
}