import FadeIn from './FadeIn';

export default function About() {
    return (
        <section id="about" className="py-24">
            <FadeIn>
                <h2 className="mb-12 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    About <span className="text-rose-500">Me.</span>
                </h2>
            </FadeIn>

            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">

                {/* Left Column: Image */}
                <FadeIn direction="right" delay={0.2}>
                    <div className="relative mx-auto max-w-md lg:mx-0">
                        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-rose-500 to-purple-600 opacity-20 blur-xl dark:opacity-40"></div>
                        <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                            <img
                                src="/images/Gunbir.jpg"
                                alt="Gunbir Walia"
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </FadeIn>

                {/* Right Column: Bio Text */}
                <FadeIn direction="left" delay={0.4}>
                    <div className="flex flex-col justify-center">
                        <p className="mb-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                            I'm a conscientious and inquisitive third-year student with a strong passion for leveraging technology to solve complex challenges. I have a deep curiosity for software engineering and artificial intelligence, supported by hands-on experience in machine learning, natural language processing and LLM-driven applications.
                        </p>
                        <p className="mb-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                            My approach to development is heavily influenced by my belief in continuous learning and adaptability. Whether it is designing agentic AI systems, engineering robust SQL databases, or creating intuitive front-end interfaces, I strive to deliver impactful results.
                        </p>
                        <p className="text-lg font-medium text-zinc-900 dark:text-zinc-200">
                            Based in the United Kingdom 🇬🇧
                        </p>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}