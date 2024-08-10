'use client'
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
                <div className="rounded-full overflow-hidden w-[35rem] h-[30rem]">
                    <iframe
                        className="w-[35rem] h-[35rem]"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6901.88987905281!2d31.366941199999996!3d30.12438900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2seg!4v1723284193989!5m2!1sen!2seg"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
