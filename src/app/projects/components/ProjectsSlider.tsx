'use client'
// components/SwiperDemo.tsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import redak from '../../../../public/assets/projects/redak.png'
// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

const SwiperDemo = () => {

    const Data = [{
        id: 1,
        title: 'Redak',
        image: redak,
        short_description: "Medical WebSite"
    }]
    return (
        <div className='flex flex-col'>
            {/* Mobile & Table SLider */}
            <div className='lg:w-[70%] md:w-[80%] w-[95%] block lg:hidden  mx-auto pb-5'>
                <Swiper
                    loop={true}
                    spaceBetween={20}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    effect='coverflow'
                    grabCursor={true}
                    slidesPerView={1}
                    coverflowEffect={{
                        rotate: 60,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true,
                        scale: 2
                    }}
                    navigation={false}
                    modules={[Autoplay]}
                    className="swiper mySwiper"
                >
                    <SwiperSlide>
                        <ProjectCard to='/projects/1' title={"Redak"} image={redak} short_description={"Medical Website"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard to='/projects/1' title={"Redak"} image={redak} short_description={"Medical Website"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard to='/projects/1' title={"Redak"} image={redak} short_description={"Medical Website"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard to='/projects/1' title={"Redak"} image={redak} short_description={"Medical Website"} />
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* Desktop */}
            <div className='lg:w-[70%] md:w-[80%] w-[95%] hidden md:hidden lg:block mx-auto pb-5'>
                <Swiper
                    loop={true}
                    spaceBetween={20}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    effect='coverflow'
                    grabCursor={true}
                    slidesPerView={2}
                    coverflowEffect={{
                        rotate: 60,
                        stretch: 100,
                        depth: 100,
                        modifier: 2,
                        slideShadows: true,
                        scale: 1.3
                    }}
                    navigation={false}
                    modules={[Autoplay]}
                    className="swiper mySwiper"
                >
                    <SwiperSlide className=''>
                        <ProjectCard to='/projects/1' title={"Redak"} image={redak} short_description={"Medical Website"} />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <ProjectCard to='/projects/1' title={"Redak"} image={redak} short_description={"Medical Website"} />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <ProjectCard to='/projects/1' title={"Redak"} image={redak} short_description={"Medical Website"} />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <ProjectCard to='/projects/1' title={"Redak"} image={redak} short_description={"Medical Website"} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperDemo;
