"use client";

import { BiSolidMessage } from "react-icons/bi"

export default function Chat() {
    return (
        <button 
            className="fixed right-20 bottom-20 rounded-full bg-blue-500 p-5 cursor-pointer shadow-md hover:bg-blue-400 hover:-translate-y-2 transition-all duration-200"
            onClick={() => document.getElementById("contact").scrollIntoView()}
        >
            
            <BiSolidMessage size={32} className="text-white" />
        </button>
    );
}