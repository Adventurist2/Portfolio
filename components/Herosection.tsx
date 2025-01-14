import { Spotlight } from "./ui/Spotlight";
import { Typewriter } from "./ui/Typewriting";
const ImageLink = "/assests/4058273.png"

export function Hero(){
    return <div className=" w-screen  h-screen z-10 flex m-auto justify-center items-center gap-8 ">
        <div className="w-[37%] space-y-6">
            hfsldfjsadlfj
        <span className="text-3xl">HI , I am a</span>
        <div className="text-4xl">
        <Typewriter strings={["Full Stack Developer","Frontend Developer","Backend Developer"," "]} loop = {true}></Typewriter>
        </div>
        </div>
         
         <div >
         <div className="rounded-full bg-amber-500 w-[400px] h-[400 px] overflow-hidden  mix-blend-lighten">
        <img src={ImageLink} aria-placeholder="face" className="object-contain"/>
        </div>
         </div>
        

    </div>
}