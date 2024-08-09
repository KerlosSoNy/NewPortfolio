import Link from "next/link";
import SwiperDemo from "./ProjectsSlider";

export default function ProjectsSection() {
    return (
        <div className="p-3 flex flex-col w-full gap-10">
            <div className='flex flex-row justify-between items-center lg:w-[70%] md:w-[70%] w-[95%] mx-auto my-5'>
                <h1 className="text-4xl text-center">Projects</h1>
                <Link href="/projects" className="lg:text-xl md:text-xl text-sm text-black bg-[#f2cd90] px-2 pt-1.5 pb-2 rounded">See More</Link>
            </div>
            <SwiperDemo />
        </div>
    )
}
