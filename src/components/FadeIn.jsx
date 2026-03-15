// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0, direction = 'up' }) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    // Note: It's still <motion.div>, the linter issue is usually temporary.
    // However, if the error persists, we can force ESLint to ignore this specific line.
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}