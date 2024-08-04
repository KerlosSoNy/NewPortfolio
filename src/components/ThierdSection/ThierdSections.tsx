import React from 'react'
import ParallaxText from '../Swaper.tsx/Swaper'
import { FaReact } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function ThierdSections() {
    return (
        <div className="my-32 flex flex-col justify-center h-[200px] overflow-hidden fullwidth">
            <ParallaxText baseVelocity={2}>
                <TbBrandJavascript className="inline mb-2 me-2 " />JavaScript &nbsp;&nbsp;&nbsp;&nbsp;
                <FiFramer className="inline mb-2 me-2 " />Framer Motion &nbsp;&nbsp;&nbsp;&nbsp;
                <FaReact className="inline mb-2 me-2 " /> React.js &nbsp;&nbsp;&nbsp;&nbsp;
                <SiNextdotjs className="inline mb-2 me-2 " />Next.js &nbsp;&nbsp;&nbsp;&nbsp;
                <FaHtml5 className="inline mb-2 me-2 " />HTML  &nbsp;&nbsp;&nbsp;&nbsp;
                <FaCss3Alt className="inline mb-2 me-2 " />CSS &nbsp;&nbsp;&nbsp;&nbsp;
            </ParallaxText>
        </div>
    )
}
