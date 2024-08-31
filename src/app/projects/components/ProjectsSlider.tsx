'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import redak from '../../../../public/assets/projects/redak.png'
import 'swiper/css';

import ProjectCard from './ProjectCard';
import { ProjectsData } from '@/lip/Project';
const SwiperDemo = () => {
    return (
        <div className='flex flex-col'>
            {/* Desktop */}
            <div className='lg:w-[70%] md:w-[80%] w-[95%] mx-auto pb-5'>
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
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
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
                    {
                        ProjectsData.map((project: any, index: number) => {
                            return (
                                <SwiperSlide key={index} className=''>
                                    <ProjectCard to={`/projects/${project.id}`} title={project.title} image={project.image} short_description={project.short_description} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperDemo;
