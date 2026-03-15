import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { leadership, pursuits, languages } from '../data/beyond';

export default function BeyondDrawer({ isOpen, onClose }) {

    useEffect(() => {
        const handlePopState = () => {
            if (isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.history.pushState({ drawerOpen: true }, '');
            window.addEventListener('popstate', handlePopState);
        } else {
            document.body.style.overflow = 'unset';
            window.removeEventListener('popstate', handlePopState);
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('popstate', handlePopState);
        };
    }, [isOpen, onClose]);

    const handleClose = () => {
        if (window.history.state && window.history.state.drawerOpen) {
            window.history.back();
        } else {
            onClose();
        }
    };

    // Use createPortal to teleport the drawer directly to the document.body
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-0 right-0 top-0 z-[201] flex w-full max-w-md flex-col bg-white shadow-2xl dark:bg-zinc-950 sm:border-l sm:border-zinc-200 sm:dark:border-zinc-800"
                    >
                        <div className="flex flex-shrink-0 items-center justify-between border-b border-zinc-100 bg-white/80 px-6 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80 sm:px-8">
                            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-2xl">
                                Beyond the <span className="text-rose-500">Tech World</span>
                            </h2>
                            <button
                                onClick={handleClose}
                                className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
                                aria-label="Close drawer"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-8 space-y-10">

                            <section>
                                <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Leadership & Initiatives</h3>
                                <div className="space-y-6">
                                    {leadership.map((item, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-zinc-900 dark:text-zinc-100">{item.title}</h4>
                                                <p className="mb-2 text-sm font-medium text-rose-500">{item.role}</p>
                                                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800/80"></div>

                            <section>
                                <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Personal Pursuits</h3>
                                <div className="space-y-6">
                                    {pursuits.map((item, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="mb-2 font-bold text-zinc-900 dark:text-zinc-100">{item.title}</h4>
                                                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800/80"></div>

                            <section>
                                <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Languages</h3>
                                <div className="space-y-3">
                                    {languages.map((lang, idx) => (
                                        <div key={idx} className="flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/50">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">{lang.flag}</span>
                                                <span className="font-bold text-zinc-900 dark:text-zinc-100">{lang.name}</span>
                                            </div>
                                            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{lang.proficiency}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body // <-- This tells React to render it outside the normal flow
    );
}