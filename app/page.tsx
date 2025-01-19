"use client";
import Image from "next/image";
import Appbar from "@/components/Appbar";
import Infinite, { InfiniteScroll } from "@/components/Infinite_card";
import Skills from "@/components/Skill";
import { Hero } from "@/components/Herosection";
import { Footer } from "@/components/Footer";
import { Profile } from "@/components/ProjectSection";
import { Background } from "@/components/ui/Background";
import { Reveal } from "@/components/motions/Reveal";
import { SubHero } from "@/components/subHero";
import ProjectCard from "@/components/ui/project_card";
import { TimelineDemo } from "@/components/timeline";
import Appcontext from "./provider";

export default function Home() {
  return (
    <div className=" min-h-screen font-[family-name:var(--font-geist-sans)] overflow-hidden relative flex flex-col items-center">
      <Background/>
      <Appcontext>
      <Appbar/>
      <Reveal>
      <Hero/>
      </Reveal>
      <SubHero/>
      {/* <Infinite/> */}
      <TimelineDemo/>
      <Skills/>
      <InfiniteScroll/>
      {/* <Profile/> */}
      <Footer/>
      </Appcontext>
    </div>
  );
}
