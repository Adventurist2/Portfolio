import React from "react";
import { TextOpacity } from "./ui/Textopacity";
import { Cover } from "./ui/cover";
import { useContext } from "react";
import { Refcontext } from "@/app/provider";


export function SubHero(){
    const {AboutRef} = useContext(Refcontext);
    return <div ref = {AboutRef} className="bg-black z-10 w-screen h-screen overflow-hidden flex flex-col items-center">
        <TextOpacity>ABOUT ME</TextOpacity>
        <TextOpacity>
        I am Chandan Achary, a tech enthusiast with a strong passion for problem-solving and building innovative solutions. I specialize in web development, creating dynamic and efficient applications using frameworks like React, Next.js, and Tailwind CSS.

        My portfolio includes projects like a feature-rich to-do app, a secure social media platform, and a smart mirror with advanced touch and voice control capabilities for home automation. I enjoy exploring AI-driven solutions to tackle real-world challenges and aim to develop impactful, user-focused applications that make a difference.

        </TextOpacity>
        
    </div>
}