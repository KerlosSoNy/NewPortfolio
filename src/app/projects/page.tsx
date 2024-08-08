import Link from "next/link"
import { unstable_noStore as noStore } from "next/cache"

const getData = async () => {
    noStore();
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', { cache: 'no-store' })
    // To Cash With Duration
    // For A Min (60s)
    // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', { next: { revalidate: 60 } })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
export default async function Projects() {
    const posts = await getData()
    return (
        <div className="bg-[#030303]">
            {
                posts.map((post: any) => (
                    <div key={post.id} className="p-4 m-4">
                        <div className="flex flex-col">
                            <span>
                                {post.id} - {post.title}
                            </span>
                            <Link href={`/projects/${post.id}`}>View</Link>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}
