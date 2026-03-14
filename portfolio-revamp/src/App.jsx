import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

function App() {
  // Initialize state using a lazy evaluation function
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if the user has a saved preference in localStorage
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // If no saved preference, check their system's OS-level preference
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    // Fallback default
    return true;
  });

  // Sync the DOM class and localStorage whenever the state changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="relative min-h-screen text-zinc-900 transition-colors duration-300 dark:text-zinc-50">

      {/* Global Animated Ambient Background */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-zinc-50 dark:bg-zinc-950 pointer-events-none">

        {/* Animated Rose Glow (Top Right) */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[5%] h-[600px] w-[600px] rounded-full bg-rose-500/10 blur-[120px] dark:bg-rose-500/15 sm:h-[800px] sm:w-[800px]"
        />

        {/* Animated Purple Glow (Bottom Left) */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -left-[10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px] dark:bg-purple-600/15 sm:h-[800px] sm:w-[800px]"
        />
      </div>

      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <BackToTop />

      {/* Main Content Areas */}
      <main className="relative z-10 mx-auto max-w-7xl px-6">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-zinc-200/50 bg-transparent dark:border-zinc-800/50">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col items-center justify-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Gunbir Walia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;