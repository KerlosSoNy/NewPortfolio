import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function MagneticComponent({ children }: { children: React.ReactNode }) {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const scale = useTransform(x, [0, 300], [1, 1.5]);
    const springConfig = { damping: 10, stiffness: 100 };

    const handleMouseMove = (event: any) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;
        x.set(offsetX);
        y.set(offsetY);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                x,
                y,
                scale: useSpring(scale, springConfig),
                rotate: useSpring(isHovered ? 15 : 0, springConfig),
                transition: 'transform 0.2s ease'
            }}
            className="magnetic-component"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </motion.div>
    );
};

MagneticComponent;
