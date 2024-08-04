'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import bg from '../../../public/assets/thumb-1920-1322308.jpeg';

import MagneticComponent from '../Magnitc/Magnitc';
import Link from 'next/link';
import Image from 'next/image';
const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
};


export default function FirstSections() {
    return (
        <div className='w-full relative h-[96vh] flex flex-col'>
            <Image src={bg} alt="image" layout="fill" sizes='100vw' className="absolute" />
            <div className='z-40 w-full h-[96vh]  lg:py-[25vh] md:py-[8vh] py-[2vh] bg-black bg-opacity-90'>
                <motion.article
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                >
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible
                        }}
                        style={
                            {
                                "--base-width": "24vw",
                                top: "-18vw",
                                letterSpacing: "1px",
                            } as any
                        }
                        className='lg:mt-10 md:mt-[26vh] mt-36 lg:text-5xl md:text-5xl text-6xl w-full text-center'
                    >
                        Do More with Websites
                    </motion.h1>
                    <div className='mt-10 z-0 relative flex flex-col gap-10 justify-center items-center lg:w-[70%] md:w-[70%] w-[90%] mx-auto '>
                        <motion.div variants={itemVariants}>
                            {/* <p className='text-center w-full text-2xl'>Hello, I'm Kerlos Magdy, a Front-End Developer dedicated to transforming innovative ideas into interactive and responsive designs.</p> */}
                            <p className='text-center w-full text-2xl'>With me you can transforming innovative ideas into interactive and responsive designs.</p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}>
                            <div className='flex flex-row'>
                                <MagneticComponent >
                                    <Link target='_blank' href='https://www.linkedin.com/in/kerlos-m-61759a105/'>
                                        <FaLinkedin className='text-3xl' />
                                    </Link>
                                </MagneticComponent>
                                <MagneticComponent >
                                    <Link target='_blank' href='https://github.com/KerlosSoNy'>
                                        <FaGithub className='text-3xl' />
                                    </Link>
                                </MagneticComponent>
                                <MagneticComponent >
                                    <Link target='_blank' href='https://drive.google.com/file/d/1SouqK6IBhYD51OxEi4TipwDhbABI26ES/view?usp=sharing'>
                                        <FaGoogleDrive className='text-3xl rounded-full' />
                                    </Link>
                                </MagneticComponent>
                            </div>
                        </motion.div>
                    </div>
                </motion.article>
            </div>

        </div>
    )
}
