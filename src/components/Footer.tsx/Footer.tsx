'use client'

import { useTime, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/c03969150049541.62199c30c5ec1.png';
import Link from 'next/link';
import { FaFacebookF, FaGithub, FaGoogleDrive, FaLinkedin } from "react-icons/fa";
import MagneticComponent from '../Magnitc/Magnitc';

const visible = { opacity: 1, y: 0, transition: { duration: 1 } };
const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
};
export default function Footer() {
    const currentYear = new Date().getFullYear();

    const time = useTime()
    const rotate = useTransform(
        time,
        [0, 4000], // For every 4 seconds...
        [0, 360], // ...rotate 360deg
        { clamp: false }
    )
    return (
        <footer className="flex flex-col gap-3 justify-center m-10 bg-[#000102]">
            <div className='w-full flex flex-row justify-center'>
                <motion.div
                    className='w-[55px] h-[55px] relative'
                    style={{ rotate }}
                >

                    <Image src={logo} layout="fill" sizes='100vw' alt="Logo" className='rounded-full' />
                </motion.div>
            </div>
            <div className='flex flex-row justify-center'>
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
            <p className="text-center text-gray-700 font-medium">&copy; {currentYear} Kerlos Magdy. All rights reservered.</p>
        </footer>
    )
}
