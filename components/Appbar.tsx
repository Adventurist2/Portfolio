import React, { useContext } from "react";
import { Refcontext } from "@/app/provider";

type SectionName = "skillRef" | "HeroRef" | "AboutRef" | "ProjectRef" | "ContactRef";

interface SectionRefs {
  skillRef: React.RefObject<HTMLDivElement | null>;
  HeroRef: React.RefObject<HTMLDivElement | null>;
  AboutRef: React.RefObject<HTMLDivElement | null>;
  ProjectRef: React.RefObject<HTMLDivElement | null>;
  ContactRef: React.RefObject<HTMLDivElement | null>;
}

export default function Appbar() {
  const context = useContext(Refcontext);

  // Handle the case where context is null
  if (!context) {
    throw new Error("Refcontext must be used within a Refcontext.Provider");
  }

  const { skillRef, AboutRef, ProjectRef, ContactRef, HeroRef } = context;

  const sectionRef: SectionRefs = {
    skillRef,
    HeroRef,
    AboutRef,
    ProjectRef,
    ContactRef,
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const name = e.currentTarget.name as SectionName;
    const section = sectionRef[name];

    section?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#000000] w-screen h-16 flex justify-around items-center z-10 sticky top-0 Appbar">
      <div className="font-sans px-4 py-2 text-2xl font-bold m-2">Adventurist</div>
      <div className="flex">
        <ul className="flex space-x-4">
          <button name="HeroRef" className="cursor-pointer" onClick={handleClick}>
            Home
          </button>
          <button name="AboutRef" className="cursor-pointer" onClick={handleClick}>
            About
          </button>
          <button name="ProjectRef" className="cursor-pointer" onClick={handleClick}>
            Works
          </button>
          <button name="ContactRef" className="cursor-pointer" onClick={handleClick}>
            Hire me
          </button>
        </ul>
      </div>
    </div>
  );
}
