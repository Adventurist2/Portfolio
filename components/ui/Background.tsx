import { Spotlight } from "./Spotlight"

export function Background(){
    return <div className=" fixed w-screen inset-0 h-screen bg-hero bg-grid-white/[0.05] ">
        <div className="color absolute"></div>
        <Spotlight
        className="top-96 left-full h-[80vh] w-[40vh] absolute"
            fill="blue"/>
        <Spotlight
        className="-top-80 left-40 md:left-40 md:top-10 absolute"
        fill="white"
        />
      
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
}