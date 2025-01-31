import { useContext} from "react";
import { Refcontext } from "@/app/provider";
import Image from 'next/image';

const skills = [
  { name: "HTML", icon: "/skills/html.svg" },
  { name: "CSS", icon: "/skills/css.svg" },
  { name: "Tailwind CSS", icon: "/skills/tailwind-css.svg" },
  { name: "JavaScript", icon: "/skills/js.svg" },
  { name: "TypeScript", icon: "/skills/typescript.svg" },
  { name: "Node.js", icon: "/skills/node-js.svg" },
  { name: "React", icon: "/skills/react.svg" },
  { name: "Next.js", icon: "/skills/next-js.svg" },
  { name: "Postgres", icon: "/skills/postgresql.svg" },
  { name: "Prisma ORM", icon: "/skills/prisma.svg" },
  {name:"Mongo DB" , icon:"/skills/mongo.svg"},
];

export default function Skills() {
  const context = useContext(Refcontext);
  if(!context){
    throw new Error("Refcontext must be used within a Refcontext.Provider");
  }
  const {skillRef} = context;
  return (
    <div ref={skillRef} className="w-screen mx-auto mt-8 z-10 p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className=" flex skillcard items-center gap-4 p-2 border rounded shadow h-24 ">
            <Image
    src={skill.icon}
    alt={skill.name}
    width={40} // Specify width equivalent to w-10
    height={40} // Specify height equivalent to h-10
    className=" w-10 h-10 object-contain"
    priority={true} // Optional: use for prioritizing loading if required
/>
            <div className="flex-1">
              <h3 className="text-lg font-medium">{skill.name}</h3>
              {/* <ProgressBar skillName={skill.name} /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
