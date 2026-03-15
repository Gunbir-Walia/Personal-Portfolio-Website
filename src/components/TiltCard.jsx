import { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({ children }) {
    const ref = useRef(null);

    // Track mouse position relative to the center of the card
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Apply spring physics for smooth return-to-center animation
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

    // Map mouse coordinates to rotation angles
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        // Reset rotation when the cursor leaves the card bounds
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative h-full w-full"
        >
            {/* Elevate inner content on the Z-axis to create a 3D depth effect during rotation */}
            <div
                style={{ transform: "translateZ(40px)" }}
                className="h-full w-full transition-transform duration-300 ease-out"
            >
                {children}
            </div>
        </motion.div>
    );
}