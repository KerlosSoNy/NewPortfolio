'use client'
// components/SwiperDemo.tsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';

const SwiperDemo = () => {


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
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
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
                    <Image
                        alt='image'
                        width={300} height={300}
                        src={'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWZhY2M3amt0aGFwNjlkOHF2bnV2MXQ5bmI1bmp2a2l4NW1ld3N5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/15Z0eVULyQqiV65B7L/giphy.gif'} />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <Image
                        alt='image'
                        width={300} height={300}
                        src={'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWZhY2M3amt0aGFwNjlkOHF2bnV2MXQ5bmI1bmp2a2l4NW1ld3N5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/15Z0eVULyQqiV65B7L/giphy.gif'} />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <Image
                        alt='image'
                        width={300} height={300}
                        src={'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWZhY2M3amt0aGFwNjlkOHF2bnV2MXQ5bmI1bmp2a2l4NW1ld3N5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/15Z0eVULyQqiV65B7L/giphy.gif'} />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <Image
                        alt='image'
                        width={300} height={300}
                        src={'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWZhY2M3amt0aGFwNjlkOHF2bnV2MXQ5bmI1bmp2a2l4NW1ld3N5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/15Z0eVULyQqiV65B7L/giphy.gif'} />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <Image
                        alt='image'
                        width={300} height={300}
                        src={'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWZhY2M3amt0aGFwNjlkOHF2bnV2MXQ5bmI1bmp2a2l4NW1ld3N5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/15Z0eVULyQqiV65B7L/giphy.gif'} />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <Image
                        alt='image'
                        width={300} height={300}
                        src={'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWZhY2M3amt0aGFwNjlkOHF2bnV2MXQ5bmI1bmp2a2l4NW1ld3N5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/15Z0eVULyQqiV65B7L/giphy.gif'} />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <Image
                        alt='image'
                        width={300} height={300}
                        src={'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWZhY2M3amt0aGFwNjlkOHF2bnV2MXQ5bmI1bmp2a2l4NW1ld3N5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/15Z0eVULyQqiV65B7L/giphy.gif'} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperDemo;
