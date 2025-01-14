import Rainbutton from "./button/Rainbow_button";

export default function Appbar(){
    return <div className="bg-[#000000] w-screen h-16 flex justify-around items-center z-10 sticky top-0 Appbar">
        <div className="font-sans px-4 py-2 text-2xl font-bold m-2">
            Adventurist
        </div>
        <div className="flex">
            <ul className="flex space-x-4">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Works</li>
                <li className="cursor-pointer">Hire me</li>
            </ul>
        </div>
    </div>
}