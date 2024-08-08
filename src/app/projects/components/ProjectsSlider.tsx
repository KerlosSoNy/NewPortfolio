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
        <div className='w-[70%] mx-auto'>
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
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                    scale: 2
                }}
                navigation={false}
                modules={[Autoplay]}
                className="swiper mySwiper"
            >
                <SwiperSlide className=''>
                    <div className="w-[450px] h-[300px] relative mx-auto group overflow-hidden rounded-lg ">
                        <Image
                            className=" absolute group-hover:scale-110  z-0 rounded-lg transition-all duration-300 hover:scale-110" alt='image'
                            fill
                            src={redak} />
                        <div className=' p-10 flex relative items-start z-50 bg-black bg-opacity-50 flex-col w-full h-full justify-end '>
                            <h1 className='text-4xl text-[#E7B856] font-bold'>Redak</h1>
                            <div className='flex flex-row justify-between w-full items-center'>
                                <h1 className='text-lg text-white font-bold'>Medical WebSite</h1>
                                <Link href='' className='text-base bg-[#E7B856] py-1.5 px-2 rounded-lg text-white font-bold'>More</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="w-[450px] h-[300px] relative mx-auto overflow-hidden rounded-lg ">
                        <Image
                            className=" relative z-0 rounded-lg transition-all duration-300 hover:scale-110" alt='image'
                            fill
                            src={redak} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="w-[450px] h-[300px] relative mx-auto overflow-hidden rounded-lg ">
                        <Image
                            className=" relative z-0 rounded-lg transition-all duration-300 hover:scale-110" alt='image'
                            fill
                            src={redak} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="w-[450px] h-[300px] relative mx-auto overflow-hidden rounded-lg ">
                        <Image
                            className=" relative z-0 rounded-lg transition-all duration-300 hover:scale-110" alt='image'
                            fill
                            src={redak} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperDemo;
