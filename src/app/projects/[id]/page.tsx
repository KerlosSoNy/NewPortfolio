
import { ProjectsData } from "@/lip/Project"
import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { IoIosInformationCircleOutline } from "react-icons/io"
import { MdLiveTv } from "react-icons/md"
// const getData = async ({ id }: { id: string }) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { next: { revalidate: 60 } })

//     if (!res.ok) {
//         throw new Error('Failed to fetch data')
//     }

//     return res.json()
// }


const SinglePost = async ({ params }: {
    params: {
        id: string
    }
}) => {
    const { id } = params
    const data = ProjectsData.filter((project: any) => project.id == id)[0]
    return (
        <div className="bg-[#030303] pt-[85px] flex flex-col">
            <div className="flex flex-col w-full relative h-[300px]">
                <Image src={data.image} alt="image" fill className="object-scale-down w-full h-full" />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-[#f2cd90] text-4xl mt-10">{data.title}</h1>
                <p className="text-white text-lg mt-5">{data.short_description}</p>
                <p className="text-white text-lg mt-5 w-[93%] md:w-[80%] lg:w-[70%] text-center">{data.description}</p>
            </div>
            <div className="flex mx-auto flex-row mt-10 items-center gap-5 justify-evenly p-3 w-[50%]">
                {
                    data.github &&
                    <Link target="_blank" href={data.github} className="group relative">
                        <h1 className="text-base hidden peer group-hover:block absolute bg-white text-black px-2 py-1.5 rounded triangle-container -top-12 -right-[20px]">Github</h1>
                        <FaGithub className='text-3xl' />
                    </Link>
                }
                <Link target="_blank" href={data.demo} className="group relative">
                    <h1 className="text-sm text-center hidden peer group-hover:block absolute bg-white w-fit text-black px-2 py-1.5 rounded triangle-container -top-16 -right-[14px]">Live Demo</h1>
                    <MdLiveTv className='text-3xl' />
                </Link>
                <Link href={`/projects/${data.id}`} className="group relative">
                    <h1 className="text-base hidden peer group-hover:block absolute bg-white text-black px-2 py-1.5 rounded triangle-container -top-12 -right-[14px]">More</h1>
                    <IoIosInformationCircleOutline className='text-3xl' />
                </Link>
            </div>
        </div>
    )
}

export default SinglePost