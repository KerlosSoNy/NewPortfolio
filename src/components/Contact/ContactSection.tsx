'use client'
import Image from 'next/image';
import React from 'react'
import toast from 'react-hot-toast';

export default function ContactSection() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement> | any) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "fc90e1e7-4304-4914-819b-32abc364d61a");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            toast.success("Thank you for your message!");
        }
        event.target.reset();
    }
    return (
        <div className="flex flex-wrap justify-between items-center h-auto p-5 pl-[6%] pt-[9%]">
            <div className="w-full md:w-2/5 p-4">
                <h2 className="text-xl md:text-7xl font-semibold mb-5">GET IN TOUCH!</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" required id="fullName" name="fullName" placeholder='Full Name' className="mt-1 p-4 w-full border rounded-md text-black" />
                    </div>
                    <div>
                        <input type="email" required id="email" name="email" placeholder='Email' className="mt-1 p-4 w-full border rounded-md text-black" />
                    </div>
                    <div>
                        <textarea id="message" required name="message" placeholder='Message' className="mt-1 p-4 w-full border rounded-md text-black"></textarea>
                    </div>
                    <button type="submit" className="px-8 py-4 bg-black text-white hover:bg-blue-700 hover:rounded-lg">Submit</button>
                </form>
            </div>
            <div className="w-full md:w-1/2 p-4 flex justify-center">
                <div className="relative overflow-hidden w-[35rem] h-[30rem]">
                    <Image fill src='/assets/ii.gif' alt='normal gif' />
                </div>
            </div>
        </div>
    )
}
