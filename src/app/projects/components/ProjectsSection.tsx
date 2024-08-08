import SwiperDemo from "./ProjectsSlider";

export default function ProjectsSection() {
    return (
        <div className="p-3 flex flex-col gap-10">
            <h1 className="text-4xl w-full text-center">Projects</h1>
            <SwiperDemo />
        </div>
    )
}
