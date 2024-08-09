'use client'
// components/SwiperDemo.tsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import redak from '../../../../public/assets/projects/redak.png'
// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';
import Link from 'next/link';

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
            <div className='lg:w-[70%] md:w-[80%] w-[95%] block lg:hidden md:block mx-auto pb-5'>
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
                    <SwiperSlide className=''>
                        <div className="lg:w-[450px] md:w-[550px] w-[280px] h-[300px] relative mx-auto group overflow-hidden rounded-lg ">
                            <Image
                                className=" absolute group-hover:scale-110  z-0 rounded-lg transition-all duration-300 hover:scale-110" alt='image'
                                fill
                                src={redak} />
                            <div className=' p-10 flex relative items-start z-50 bg-black bg-opacity-50 flex-col w-full h-full justify-end '>
                                <h1 className='text-4xl text-[#E7B856] font-bold'>Redak</h1>
                                <div className='flex flex-row justify-between w-full items-center'>
                                    <h1 className='text-lg text-white font-bold'>Medical WebSite</h1>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className="lg:w-[450px] md:w-[550px] w-[280px] h-[300px] relative mx-auto overflow-hidden rounded-lg ">
                            <Image
                                className=" relative z-0 rounded-lg transition-all duration-300 hover:scale-110" alt='image'
                                fill
                                src={redak} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className="lg:w-[450px] md:w-[550px] w-[280px] h-[300px] relative mx-auto overflow-hidden rounded-lg ">
                            <Image
                                className=" relative z-0 rounded-lg transition-all duration-300 hover:scale-110" alt='image'
                                fill
                                src={redak} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className="lg:w-[450px] md:w-[550px] w-[280px] h-[300px] relative mx-auto overflow-hidden rounded-lg ">
                            <Image
                                className=" relative z-0 rounded-lg transition-all duration-300 hover:scale-110" alt='image'
                                fill
                                src={redak} />
                        </div>
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
                    slidesPerView={3}
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
                    <SwiperSlide className=''>
                        <div className="lg:w-[450px] md:w-[350px] w-[280px] h-[300px] relative mx-auto group overflow-hidden rounded-lg ">
                            <Image
                                className=" absolute group-hover:scale-110  z-0 rounded-lg transition-all duration-300 hover:scale-110" alt='image'
                                fill
                                src={redak} />
                            <div className=' p-10 flex relative items-start z-50 bg-black bg-opacity-50 flex-col w-full h-full justify-end '>
                                <h1 className='text-4xl text-[#E7B856] font-bold'>Redak</h1>
                                <div className='flex flex-row justify-between w-full items-center'>
                                    <h1 className='text-lg text-white font-bold'>Medical WebSite</h1>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className="lg:w-[450px] md:w-[350px] w-[280px] h-[300px] relative mx-auto overflow-hidden rounded-lg ">
                            <Image
                                className=" relative z-0 rounded-lg transition-all duration-300 hover:scale-110" alt='image'
                                fill
                                src={redak} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className="lg:w-[450px] md:w-[350px] w-[280px] h-[300px] relative mx-auto overflow-hidden rounded-lg ">
                            <Image
                                className=" relative z-0 rounded-lg transition-all duration-300 hover:scale-110" alt='image'
                                fill
                                src={redak} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className="lg:w-[450px] md:w-[350px] w-[280px] h-[300px] relative mx-auto overflow-hidden rounded-lg ">
                            <Image
                                className=" relative z-0 rounded-lg transition-all duration-300 hover:scale-110" alt='image'
                                fill
                                src={redak} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperDemo;
