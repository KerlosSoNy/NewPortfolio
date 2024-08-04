import OnViewSee from "../OnViewSee/OnViewSee";
import { BiSupport } from "react-icons/bi";
import { DiResponsive } from "react-icons/di";
import { CgPerformance } from "react-icons/cg";
import { LiaConnectdevelop } from "react-icons/lia";


export default function SecondSection() {
    return (
        <OnViewSee>
            <div className="w-full flex flex-row justify-center py-5">
                <div className="flex flex-col md:gap-[5rem] gap-3 lg:gap-[6rem]">
                    <h1 className='text-4xl mx-auto text-center'>What I Bring to the Table</h1>
                    <div className="mx-auto flex md:flex-row flex-col lg:flex-row  gap-12">
                        <div className='flex flex-col  gap-12 pt-20 '>
                            <div className="h-[350px] w-[300px] shadow-md shadow-[#282828] transition-all duration-700 hover:scale-110  pt-12  flex flex-col  rounded-lg">
                                <BiSupport className="text-5xl text-[#f2cd90] mx-auto" />
                                <h1 className="text-xl mx-auto mt-12">Maintenance and Support</h1>
                                <p className=" text-center p-3 mt-5">Ensure your website runs smoothly and securely with our dedicated maintenance and support services.</p>
                            </div>
                            <div className="h-[350px] w-[300px] shadow-md  shadow-[#282828] transition-all duration-700 hover:scale-110  flex flex-col  rounded-lg">
                                <DiResponsive className="text-9xl text-[#f2cd90] mx-auto" />
                                <h1 className="text-xl mx-auto">Responsive Design</h1>
                                <p className=" text-center p-3 mt-5">Ensure your website looks great and functions perfectly on all screens with my responsive design solutions.</p>

                            </div>
                        </div>
                        <div className='flex flex-col gap-12'>
                            <div className="h-[350px] w-[300px] shadow-md  shadow-[#282828] transition-all duration-700 hover:scale-110  pt-12 flex flex-col   rounded-lg">
                                <CgPerformance className="text-5xl text-[#f2cd90]  mx-auto" />
                                <h1 className="text-xl mx-auto  mt-12">Performance Optimization</h1>
                                <p className=" text-center p-3 mt-5">Enhance user satisfaction and engagement by optimizing your websites performance.</p>
                            </div>
                            <div className="h-[350px] w-[300px] shadow-md  shadow-[#282828] transition-all duration-700 hover:scale-110 pt-12 flex flex-col   rounded-lg">
                                <LiaConnectdevelop className="text-[2.5rem] text-[#f2cd90]  mx-auto" />
                                <h1 className="text-xl mx-auto  mt-12">Web Development</h1>
                                <p className=" text-center p-3 mt-5">Build a strong online presence with our custom web development solutions, tailored to your business needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OnViewSee>
    )
}
