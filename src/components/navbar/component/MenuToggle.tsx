import * as React from "react";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";


export const MenuToggle = ({ setOpen, open }: any) => (
    <button title="Menu" type="button" className="duration-700" onClick={() => setOpen(!open)}>

        <IoMenu className={`text-4xl transition-all  duration-700 ${open ? "hidden" : "block"}`} />
        <IoCloseSharp className={`text-4xl transition-all ease-linear duration-700 ${!open ? "hidden" : "block"}`} />

    </button>
);
