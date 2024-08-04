'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const visible = { opacity: 1, x: 0, transition: { duration: 1 } };
const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible
};


export default function VideoSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div className='h-[100vh] overflow-hidden flex flex-row my-10'>
            <video src='/videos/video.mp4'
                autoPlay
                loop
                muted
                className='absolute'
            >
            </video>
            <motion.div
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(300px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }}
                className='z-20 container h-full relative flex flex-col justify-center align-middle mx-auto'>
                <p className='text-3xl w-[60%] pt-20'>I create digital experiences for brands communicating the unique services provided to your customers. Creativity for Me something personal.</p>
                <motion.p
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='text-xl text-blue-500 mt-10 w-fit ps-3 hover:cursor-pointer'
                >
                    <Link href='/projects' className='text-blue-500 mt-10 ps-5'>Contact Me</Link>
                </motion.p>
            </motion.div>
        </motion.div >
    )
}

