// import Rainbutton from "./button/Rainbow_button";
import React,{ useContext } from "react";
import { Refcontext } from "@/app/provider";
import { Hero } from "./Herosection";

type SectionName = 'Heroref' | 'AboutRef' | 'ProjectRef' | 'ContactRef';

interface SectionRefs {
    Heroref: React.RefObject<HTMLDivElement>;
    AboutRef: React.RefObject<HTMLDivElement>;
    ProjectRef: React.RefObject<HTMLDivElement>;
    ContactRef: React.RefObject<HTMLDivElement>;
  }

export default function Appbar(){
    const {skillRef,AboutRef,ProjectRef,ContactRef,HeroRef} = useContext(Refcontext);
    const sectionRef:SectionRefs = {
        Heroref: HeroRef,
        AboutRef: AboutRef,
        ProjectRef: ProjectRef,
        ContactRef: ContactRef,
      };
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault() ;
        const name = e.currentTarget.name as SectionName;
        const section = sectionRef[name];
        
        section?.current?.scrollIntoView({behavior:"smooth"});
    }
    return <div className="bg-[#000000] w-screen h-16 flex justify-around items-center z-10 sticky top-0 Appbar">
        <div className="font-sans px-4 py-2 text-2xl font-bold m-2">
            Adventurist
        </div>
        <div className="flex">
            <ul className="flex space-x-4">
                <button name="Heroref"  className="cursor-pointer" onClick={handleClick}>Home</button>
                <button name ="AboutRef" className="cursor-pointer" onClick={handleClick}>About</button>
                <button name = "ProjectRef" className="cursor-pointer" onClick={handleClick}>Works</button>
                <button name = "ContactRef"className="cursor-pointer" onClick={handleClick}>Hire me</button>
            </ul>
        </div>
    </div>
}
