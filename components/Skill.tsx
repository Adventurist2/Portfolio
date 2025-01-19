
import { ProgressBar } from "./ui/Progressbar";
import { useContext, useRef } from "react";
import { Refcontext } from "@/app/provider";

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
  const {skillref} = useContext(Refcontext);
  return (
    <div ref={skillref} className="w-screen mx-auto mt-8 z-10 p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className=" flex skillcard items-center gap-4 p-2 border rounded shadow h-24 ">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 object-contain"
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
