import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SwiperSlide } from 'swiper/react'

interface ProjectCardProps {
    title: string,
    image: StaticImageData | string,
    short_description: string,
    to: string
}

export default function ProjectCard({ title, image, short_description, to }: ProjectCardProps) {
    return (
        <div className='lg:w-[450px] md:w-[600px] w-[280px] h-[300px] relative mx-auto group overflow-hidden rounded-lg'>
            <Link href={to} className="lg:w-[450px] md:w-[6000px] w-[280px] h-[300px] ">
                <Image
                    className=" absolute group-hover:scale-110 object-scale-down  z-0 rounded-lg transition-all duration-300" alt='image'
                    fill
                    src={image} />
                <div className=' p-10 flex relative items-start z-50 bg-black bg-opacity-50 flex-col w-full h-full justify-end '>
                    <h1 className='text-4xl text-[#E7B856] font-bold'>{title}</h1>
                    <div className='flex flex-row justify-between w-full items-center'>
                        <h1 className='text-lg text-white font-bold'>{short_description}</h1>
                    </div>
                </div>
            </Link>
        </div>
    )
}
