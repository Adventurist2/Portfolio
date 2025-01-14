import { ProgressBar } from "./ui/Progressbar";

const skills = [
  "HTML","CSS","Tailwind CSS",
  "JavaScript","Typescript","Node.js","React","Next js","Postgres","Prisma ORM"
];

export default function Skills() {
  return (
    <div className="w-screen mx-auto mt-8 z-10">
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      {skills.map((skill, index) => (
        <ProgressBar
          key={index}
          skillName={skill}
        />
      ))}
    </div>
  );
}

function skill_ui({children}:{children:React.ReactNode}){

  return <div className="bg-">
    {children}
  </div>

}