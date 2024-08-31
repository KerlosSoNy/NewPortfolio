'use client'

import React, { useState } from 'react'
import { MenuToggle } from './MenuToggle'
import Image from 'next/image'
import { motion, useTime, useTransform } from 'framer-motion';
import logo from '../../../../public/c03969150049541.62199c30c5ec1.png';
import MagneticComponent from '@/components/Magnitc/Magnitc';
import Link from 'next/link';
import { FaGithub, FaGoogleDrive, FaLinkedin } from 'react-icons/fa';

export default function MenuNav() {
    const visible = { opacity: 1, x: 0, transition: { duration: 1 } };
    const [open, setOpen] = useState(false)
    const time = useTime()
    const itemVariants = {
        hidden: { opacity: 0, x: 30 },
        visible
    };
    const rotate = useTransform(
        time,
        [0, 4000], // For every 4 seconds...
        [0, 360], // ...rotate 360deg
        { clamp: false }
    )
    return (
        <div className='lg:hidden md:block block duration-700'>
            <MenuToggle open={open} setOpen={setOpen} />
            {
                open && (
                    <div className='absolute top-0 left-0 w-full flex flex-col h-screen bg-black/100 backdrop-filter backdrop-blur-3xl z-50 duration-700'>
                        <div className='flex flex-row justify-between py-4 lg:px-20 md:px-10 px-10'>
                            <motion.div
                                className='w-[55px] h-[55px] relative'
                                style={{ rotate }}
                            >

                                <Image src={logo} layout="fill" sizes='100vw' alt="Logo" className='rounded-full' />
                            </motion.div>
                            <MenuToggle open={open} setOpen={setOpen} />
                        </div>
                        <div className='flex flex-col w-full pt-10 justify-center align-middle items-center gap-10 lg:px-20 md:px-10 px-10'>
                            <Link href='/'>Home</Link>
                            <Link href='/projects'>Projects</Link>
                            <Link href='/bio'>Bio</Link>
                            <Link href='/contactMe'>Contact</Link>
                        </div>
                        <div className='flex flex-row justify-center w-full mt-10'>
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
                    </div>
                )
            }
        </div>
    )
}
