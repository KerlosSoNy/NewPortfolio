import PostUser from "@/components/PostUser/PostUser"


const getData = async ({ id }: { id: string }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { next: { revalidate: 60 } })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const SinglePost = async ({ params }: {
    params: {
        id: string
    }
}) => {
    const { id } = params
    const post = await getData({ id })

    console.log(post)
    return (
        <div>
            <span>{post.id}</span>
            <PostUser Userid={post.userId} />
        </div>
    )
}

export default SinglePost