
import { ProjectsData } from "@/lip/Project"
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
    console.log(data)
    return (
        <div className="bg-[#030303] pt-[85px] flex">
            Kero
        </div>
    )
}

export default SinglePost