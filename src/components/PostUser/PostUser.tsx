
const getPostUser = async (id: any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { next: { revalidate: 60 } })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const PostUser = async ({ Userid }: { Userid: string }) => {
    const userData = await getPostUser(Userid)
    console.log(userData)
    return (
        <div>
            {userData.name}
            {/* {userData.name} */}
        </div>
    )
}

export default PostUser