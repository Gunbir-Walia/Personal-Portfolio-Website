import FadeIn from './FadeIn';

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">

            <FadeIn>
                <div className="mb-16 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Get in <span className="text-rose-500">Touch.</span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>
            </FadeIn>

            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">

                    {/* Left Side: Contact Info */}
                    <FadeIn direction="right" delay={0.2}>
                        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 sm:p-10">
                            <h3 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <a href="mailto:gwaliammv@gmail.com" className="text-lg font-medium text-zinc-700 transition-colors hover:text-rose-500 dark:text-zinc-300 dark:hover:text-rose-400">
                                        gwaliammv@gmail.com
                                    </a>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <a href="tel:07405960024" className="text-lg font-medium text-zinc-700 transition-colors hover:text-rose-500 dark:text-zinc-300 dark:hover:text-rose-400">
                                        07405 960024
                                    </a>
                                </div>
                            </div>

                            {/* Socials & CV */}
                            <div className="mt-10 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                                    {/* Social Icons */}
                                    <div className="flex gap-4">
                                        <a href="https://www.linkedin.com/in/gunbir-walia" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:bg-[#0A66C2] hover:text-white dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-[#0A66C2] dark:hover:text-white">
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        </a>
                                        <a href="https://github.com/Gunbir-Walia" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:bg-zinc-900 hover:text-white dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-white dark:hover:text-zinc-900">
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.034c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        </a>
                                    </div>

                                    {/* Download CV Button */}
                                    {/* Make sure "Gunbir Walia - CV.pdf" is inside your public folder! */}
                                    <a
                                        href="/Gunbir Walia - CV.pdf"
                                        download="Gunbir Walia - CV.pdf"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-500/30 active:scale-95"
                                    >
                                        Download CV
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Side: Formspree Form */}
                    <FadeIn direction="left" delay={0.4}>
                        <form
                            action="https://formspree.io/f/mrbrgkaa"
                            method="POST"
                            className="flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 sm:p-10"
                        >
                            <div>
                                <label htmlFor="Name" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-300">Your Name</label>
                                <input
                                    type="text"
                                    name="Name"
                                    id="Name"
                                    required
                                    className="w-full rounded-lg border border-zinc-300 bg-zinc-50 p-3 text-zinc-900 transition-colors focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-rose-500 dark:focus:ring-rose-500"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="Email" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-300">Your Email</label>
                                <input
                                    type="email"
                                    name="Email"
                                    id="Email"
                                    required
                                    className="w-full rounded-lg border border-zinc-300 bg-zinc-50 p-3 text-zinc-900 transition-colors focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-rose-500 dark:focus:ring-rose-500"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="Message" className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-300">Your Message</label>
                                <textarea
                                    name="Message"
                                    id="Message"
                                    rows="5"
                                    required
                                    className="w-full resize-none rounded-lg border border-zinc-300 bg-zinc-50 p-3 text-zinc-900 transition-colors focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-rose-500 dark:focus:ring-rose-500"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-2 w-full rounded-lg bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 active:scale-[0.98] dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}