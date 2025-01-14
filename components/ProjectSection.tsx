import { image } from "framer-motion/client"

const projects = [
    {
        name:"My Todo App",
        Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti dicta sit obcaecati ex autem ad libero minima qui molestiae doloremque nobis aliquid sequi corrupti quibusdam labore quam magni vitae odit, impedit repellendus aliquam, consectetur accusantium molestias itaque? Dolor omnis praesentium quas reprehenderit inventore ex accusamus.",
        Website_link:null,
        github_link:"https://github.com/Adventurist2/My-App",
        domain:"Full stack Development",
        image_link:"./public/assests/4058273.png"
    },
    {
        name:"Google gemini frontend clone",
        Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum magni pariatur dolorum molestias minus! Rem accusantium reiciendis consectetur suscipit nobis voluptate a eligendi corporis aliquid neque vero optio voluptatibus eum fuga architecto, blanditiis nam at molestias quaerat. Sequi, voluptatum unde?,",
        Website_link:null,
        github_link:"https://github.com/Adventurist2/google-gemini-clone",
        domain:"Frontend Development",
        image_link:"./public/assests/4058273.png"
    }
]

export function Profile(){
    return <div className="w-screen h-screen z-10 bg-[#000319]">
        {projects.map((project,index)=>{
            return <ProjectCard project={project} key = {index}/>
        })}
    </div>
}

function ProjectCard({project}){
    return <div>
        <div></div>
        <div></div>
    </div>
}