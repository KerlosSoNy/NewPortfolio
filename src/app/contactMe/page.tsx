import Link from "next/link";

export default function ContactMe() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Contact Me
            <Link href='/' className="text-blue-500">Home</Link>
        </main>
    )
}