import Image from 'next/image'
import React from 'react'
export default function loading() {
    return (
        <div className='w-screen h-screen text-center flex flex-col justify-center bg-[#030303]'>
            <div className='w-full h-full flex flex-row justify-center items-center bg-[#030303]'>
                <Image src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTBiNGUxbWliOWE5cmF6bHZ6aHh1ODh1bmY5bmhkNnlmbzVpOGs5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VseXvvxwowwCc/giphy.gif" alt="Loading Gif" width={200} height={200} />
            </div>
        </div>
    )
}
