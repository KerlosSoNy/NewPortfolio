'use client'
import Image from 'next/image'
import bgImage from '../../../public/assets/Office_Background_Video.gif'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';



export default function MyBrain() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="w-full flex flex-col justify-center lg:h-[50vh] md:h-[50vh] h-[100vh] relative mt-32 ">
            <Image src={bgImage} alt="image" layout="fill" className="absolute object-cover" />
            <motion.div
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateX(300px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }}
                className='z-20 h-full relative flex flex-col justify-center items-center  bg-black bg-opacity-70 md:px-6 lg:px-6 px-3 align-middle'>
                <p className='text-3xl my-auto w-full relative p-4 pt-8 text-center z-40'>I create digital experiences for brands communicating the unique services provided to your customers. Creativity for Me something personal.</p>
            </motion.div>
        </div>
    )
}
