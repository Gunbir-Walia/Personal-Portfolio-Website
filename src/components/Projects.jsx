import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';
import TiltCard from './TiltCard';
import { projects } from '../data/projects';

// Helper function to dynamically calculate how many skills fit based on text length
const getVisibleSkillCount = (skills, maxCharacters = 85) => {
    let charCount = 0;
    let count = 0;

    for (const skill of skills) {
        // Add the string length plus a buffer of 4 to account for the pill's padding
        charCount += skill.length + 4;

        // Stop adding skills if we exceed the limit, but ensure at least 1 is always shown
        if (charCount > maxCharacters && count > 0) {
            break;
        }
        count++;
    }

    return count;
};

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [selectedProject]);

    const displayedProjects = projects.slice(0, visibleCount);

    return (
        <section id="projects" className="py-24 relative min-h-[85vh] flex flex-col justify-center">
            <FadeIn>
                <div className="mb-12 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Featured <span className="text-rose-500">Projects.</span>
                    </h2>
                </div>
            </FadeIn>

            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                {displayedProjects.map((project, index) => {
                    // Calculate the dynamic cutoff for this specific project
                    const visibleSkillLimit = getVisibleSkillCount(project.skills);
                    const visibleSkills = project.skills.slice(0, visibleSkillLimit);
                    const hiddenCount = project.skills.length - visibleSkillLimit;

                    return (
                        <FadeIn key={project.id} direction="up" delay={index * 0.1}>
                            <TiltCard>
                                <div
                                    onClick={() => setSelectedProject(project)}
                                    className="group flex h-full cursor-pointer flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-rose-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-rose-500/50"
                                >
                                    <div>
                                        <div className="flex items-start justify-between mb-1">
                                            <h3 className="text-xl font-bold text-rose-500 pr-4">{project.title}</h3>

                                            {project.repoLink !== "#" && (
                                                <a
                                                    href={project.repoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
                                                    title="View on GitHub"
                                                >
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.034c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                                    </svg>
                                                </a>
                                            )}
                                        </div>

                                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 italic mb-4">{project.date}</p>
                                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                                            {project.shortDesc}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {/* Map over the dynamically calculated visible skills */}
                                        {visibleSkills.map((skill, i) => (
                                            <span key={i} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                                {skill}
                                            </span>
                                        ))}

                                        {/* Conditionally render the exact remaining count */}
                                        {hiddenCount > 0 && (
                                            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                                +{hiddenCount} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </TiltCard>
                        </FadeIn>
                    );
                })}
            </div>

            {/* Rest of your component (Load More Button & Modal) remains unchanged below */}

            {visibleCount < projects.length && (
                <FadeIn direction="up">
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 6)}
                            className="rounded-full border-2 border-zinc-300 px-8 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-rose-500 hover:text-rose-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-rose-500 dark:hover:text-rose-400"
                        >
                            Load More Projects
                        </button>
                    </div>
                </FadeIn>
            )}

            <AnimatePresence>
                {/* Your Modal Code Here */}
                {selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="fixed left-1/2 top-1/2 z-[101] w-[90%] max-w-4xl -translate-x-1/2 -translate-y-1/2 mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
                        >
                            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4 dark:border-zinc-800 sm:px-8">
                                <h3 className="text-2xl font-bold text-rose-500">{selectedProject.title}</h3>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="max-h-[70vh] overflow-y-auto px-6 py-6 sm:px-8">

                                <div className="mb-8 flex flex-wrap gap-2">
                                    {selectedProject.skills.map((skill, i) => (
                                        <span key={i} className="rounded-full border border-zinc-200 px-3 py-1 text-sm font-semibold text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <ul className="space-y-4">
                                    {selectedProject.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start">
                                            {i !== 0 ? (
                                                <span className="mr-4 mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500"></span>
                                            ) : null}
                                            <span className={`text-zinc-600 dark:text-zinc-400 leading-relaxed text-base ${i === 0 ? 'mb-4 font-medium' : ''}`}>
                                                {bullet}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {selectedProject.repoLink !== "#" && (
                                    <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                                        <a
                                            href={selectedProject.repoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-500 dark:bg-white dark:text-zinc-900 dark:hover:bg-rose-500 dark:hover:text-white"
                                        >
                                            View Project Repository
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                )}

                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}