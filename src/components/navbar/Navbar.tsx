'use client'
import Image from 'next/image';
import logo from '../../../public/c03969150049541.62199c30c5ec1.png';
import Link from 'next/link';
import { motion, useTime, useTransform } from 'framer-motion';
import MenuNav from './component/Menu';


const visible = { opacity: 1, x: 0, transition: { duration: 1 } };
const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible
};
function onPan(event: any, info: any) {
    console.log(info.point.x, info.point.y)
}

export default function Navbar() {
    const time = useTime()
    const rotate = useTransform(
        time,
        [0, 4000], // For every 4 seconds...
        [0, 360], // ...rotate 360deg
        { clamp: false }
    )
    return (
        <div className='py-4 lg:px-20 md:px-10 px-10 fixed bg-black/30 backdrop-filter backdrop-blur-lg flex flex-row justify-between w-full align-middle items-center z-50'>
            <motion.div
                className='w-[55px] h-[55px] relative'
                style={{ rotate }}
            >

                <Image src={logo} layout="fill" sizes='100vw' alt="Logo" className='rounded-full' />
            </motion.div>
            <MenuNav />

            <div className='hidden lg:block md:hidden'>
                <motion.article
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                >
                    <ul className='flex flex-row gap-20 justify-end'>
                        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }} variants={itemVariants}>
                            <Link href='/'>Home</Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }} variants={itemVariants}>
                            <Link href='/'>Projects</Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }} variants={itemVariants}>
                            <Link href='/'>Bio</Link>
                        </motion.li>
                        <motion.li onPan={onPan} whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }} variants={itemVariants}>
                            <Link href='contactMe'>Contact</Link>
                        </motion.li>
                    </ul>
                </motion.article>
            </div>
        </div >
    )
}

// Animation On Start
{/* <motion.div
    className='w-[160px] h-[100px] relative'
    animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
> */}
