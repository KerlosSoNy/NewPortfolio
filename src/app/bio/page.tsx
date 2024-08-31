import Image from "next/image";

export default function Bio() {
    return (
        <div className="bg-[#030303] pt-[85px] flex flex-col">
            <div className="flex md:flex-row flex-col lg:flex-row justify-center items-center mx-auto gap-20 pt-10">
                <div className="w-[50%] flex flex-row justify-end">
                    <Image src='/assets/me.webp' className="object-scale-down" alt='me' width={300} height={200} />
                </div>
                <div className="flex flex-col justify-start items-start w-[50%]">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-[#f2cd90] text-4xl">Kerlos Magdy</h1>
                        <p className="text-start">Front-End Developer</p>
                    </div>
                    <div className="mt-5 flex justify-start">
                        <p className="w-[50%] text-start">{`
                        A front-end developer specializing in responsive and user-friendly web applications. With expertise in React.js, Next.js, and Tailwind CSS, Excels at transforming design ideas into functional, visually appealing websites, always focusing on performance and user experience.`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
