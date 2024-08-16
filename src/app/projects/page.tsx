import Link from "next/link"
import { unstable_noStore as noStore } from "next/cache"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { MdLiveTv } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";

// const getData = async () => {
//     noStore();
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos', { cache: 'no-store' })
//     // To Cash With Duration
//     // For A Min (60s)
//     // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', { next: { revalidate: 60 } })

//     if (!res.ok) {
//         throw new Error('Failed to fetch data')
//     }

//     return res.json()
// }
export default async function Projects() {
    // const posts = await getData()
    return (
        <div className="bg-[#030303] pt-[85px] flex">
            <div className="flex flex-col w-full">
                <h1 className="w-full text-center text-4xl mb-10 font-bold mt-10 text-[#ffc363]"> Projects </h1>
                <div className="grid grid-cols-1 w-screen md:grid-cols-2  gap-10 lg:grid-cols-3 p-5 rounded-md">
                    <div className="flex flex-col shadow-md shadow-[#282828] rounded-md">
                        <div className="relative w-full h-[280px] rounded-t-lg">
                            <div className="w-[100%] absolute h-full bg-black bg-opacity-50 z-30"></div>
                            <Image src="/assets/projects/redak.png" className="rounded-t-lg" alt="redak" fill />
                        </div>
                        <div className="flex flex-col p-3">
                            <h1 className="text-4xl text-[#ffc363]">Redak</h1>
                            <span>Medical Service Website</span>
                            <div className="flex flex-row mt-5 items-center gap-5 border-t-2 border-[#282828] justify-evenly p-3">
                                <Link href="/projects/redak" className="group relative">
                                    <h1 className="text-base hidden peer group-hover:block absolute bg-white text-black px-2 py-1.5 rounded triangle-container -top-12 -right-[20px]">Github</h1>
                                    <FaGithub className='text-3xl' />
                                </Link>
                                <Link target="_blank" href="https://stirring-youtiao-44a8cd.netlify.app/" className="group relative">
                                    <h1 className="text-sm text-center hidden peer group-hover:block absolute bg-white w-fit text-black px-2 py-1.5 rounded triangle-container -top-16 -right-[14px]">Live Demo</h1>
                                    <MdLiveTv className='text-3xl' />
                                </Link>
                                <Link href="/projects/redak" className="group relative">
                                    <h1 className="text-base hidden peer group-hover:block absolute bg-white text-black px-2 py-1.5 rounded triangle-container -top-12 -right-[14px]">More</h1>
                                    <IoIosInformationCircleOutline className='text-3xl' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col shadow-md shadow-[#282828] rounded-md">
                        <div className="relative w-full h-[280px] rounded-t-lg">
                            <div className="w-[100%] absolute h-full bg-black bg-opacity-50 z-30"></div>
                            <Image src="/assets/projects/redak.png" className="rounded-t-lg" alt="redak" fill />
                        </div>
                        <div className="flex flex-col p-3">
                            <h1 className="text-4xl text-[#ffc363]">Redak</h1>
                            <span>Medical Service Website</span>
                            <div className="flex flex-row mt-5 items-center gap-5 border-t-2 border-[#282828] justify-evenly p-3">
                                <Link href="/projects/redak" className="group relative">
                                    <h1 className="text-base hidden peer group-hover:block absolute bg-white text-black px-2 py-1.5 rounded triangle-container -top-12 -right-[20px]">Github</h1>
                                    <FaGithub className='text-3xl' />
                                </Link>
                                <Link href="/projects/redak" className="group relative">
                                    <h1 className="text-sm text-center hidden peer group-hover:block absolute bg-white w-fit text-black px-2 py-1.5 rounded triangle-container -top-16 -right-[14px]">Live Demo</h1>
                                    <MdLiveTv className='text-3xl' />
                                </Link>
                                <Link href="/projects/redak" className="group relative">
                                    <h1 className="text-base hidden peer group-hover:block absolute bg-white text-black px-2 py-1.5 rounded triangle-container -top-12 -right-[14px]">More</h1>
                                    <IoIosInformationCircleOutline className='text-3xl' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col shadow-md shadow-[#282828] rounded-md">
                        <div className="relative w-full h-[280px] rounded-t-lg">
                            <div className="w-[100%] absolute h-full bg-black bg-opacity-50 z-30"></div>
                            <Image src="/assets/projects/redak.png" className="rounded-t-lg" alt="redak" fill />
                        </div>
                        <div className="flex flex-col p-3">
                            <h1 className="text-4xl text-[#ffc363]">Redak</h1>
                            <span>Medical Service Website</span>
                            <div className="flex flex-row mt-5 items-center gap-5 border-t-2 border-[#282828] justify-evenly p-3">
                                <Link href="/projects/redak" className="group relative">
                                    <h1 className="text-base hidden peer group-hover:block absolute bg-white text-black px-2 py-1.5 rounded triangle-container -top-12 -right-[20px]">Github</h1>
                                    <FaGithub className='text-3xl' />
                                </Link>
                                <Link target="_blank" href="https://stirring-youtiao-44a8cd.netlify.app/" className="group relative">
                                    <h1 className="text-sm text-center hidden peer group-hover:block absolute bg-white w-fit text-black px-2 py-1.5 rounded triangle-container -top-16 -right-[14px]">Live Demo</h1>
                                    <MdLiveTv className='text-3xl' />
                                </Link>
                                <Link href="/projects/redak" className="group relative">
                                    <h1 className="text-base hidden peer group-hover:block absolute bg-white text-black px-2 py-1.5 rounded triangle-container -top-12 -right-[14px]">More</h1>
                                    <IoIosInformationCircleOutline className='text-3xl' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col shadow-md shadow-[#282828] rounded-md">
                        <div className="relative w-full h-[280px] rounded-t-lg">
                            <div className="w-[100%] absolute h-full bg-black bg-opacity-50 z-30"></div>
                            <Image src="/assets/projects/redak.png" className="rounded-t-lg" alt="redak" fill />
                        </div>
                        <div className="flex flex-col p-3">
                            <h1 className="text-4xl text-[#ffc363]">Redak</h1>
                            <span>Medical Service Website</span>
                            <div className="flex flex-row mt-5 items-center gap-5 border-t-2 border-[#282828] justify-evenly p-3">
                                <Link href="/projects/redak" className="group relative">
                                    <h1 className="text-base hidden peer group-hover:block absolute bg-white text-black px-2 py-1.5 rounded triangle-container -top-12 -right-[20px]">Github</h1>
                                    <FaGithub className='text-3xl' />
                                </Link>
                                <Link href="/projects/redak" className="group relative">
                                    <h1 className="text-sm text-center hidden peer group-hover:block absolute bg-white w-fit text-black px-2 py-1.5 rounded triangle-container -top-16 -right-[14px]">Live Demo</h1>
                                    <MdLiveTv className='text-3xl' />
                                </Link>
                                <Link href="/projects/redak" className="group relative">
                                    <h1 className="text-base hidden peer group-hover:block absolute bg-white text-black px-2 py-1.5 rounded triangle-container -top-12 -right-[14px]">More</h1>
                                    <IoIosInformationCircleOutline className='text-3xl' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
