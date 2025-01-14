import Image from "next/image";
import Appbar from "@/components/Appbar";
import Infinite from "@/components/Infinite_card";
import Skills from "@/components/Skill";
import { Hero } from "@/components/Herosection";
import { Footer } from "@/components/Footer";
import { Profile } from "@/components/ProjectSection";
import { Background } from "@/components/ui/Background";
import { Reveal } from "@/components/motions/Reveal";
import { SubHero } from "@/components/subHero";

export default function Home() {
  return (
    <div className=" min-h-screen font-[family-name:var(--font-geist-sans)] overflow-hidden relative flex flex-col items-center">
      <Background/>
      <Appbar/>
      <Reveal>
      <Hero/>
      </Reveal>
      <SubHero/>
      <Infinite/>
      <Skills/>
      <Profile/>
      <Footer/>
    </div>
  );
}
