"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ProjectCard from "./ui/project_card";

const ProjectDetails = [
  {
    title: "My Todo app",
    content: {
      title: "My Todo app",
      type: "Full stack application",
      description:
        "A comprehensive full-stack to-do application designed to simplify task management. This application features robust user authentication, allowing users to securely create individual accounts and log in to access their personalized task dashboard. It offers complete CRUD (Create, Read, Update, Delete) operations, enabling users to seamlessly add new tasks, edit existing ones, mark tasks as completed, and delete tasks when no longer needed",
      Github_link: "https://github.com/Adventurist2/My-App",
      Website_link: null,
    },
  },
  {
    title: "Google Gemini frontend Clone",
    content: {
      title: "Google Gemini frontend Clone",
      type: "Frontend application",
      description: "The Google Gemini frontend clone is a sleek and responsive web application replicating Google's innovative design. Built using modern web technologies, it features a polished user interface, ensuring seamless navigation and functionality. This project demonstrates expertise in frontend development, showcasing advanced CSS styling and efficient React.js component design for an authentic experience",
      Github_link: "https://github.com/Adventurist2/google-gemini-clone",
      Website_link: null,
    },
  },
];

export function TimelineDemo() {
  const data = ProjectDetails.map((project) => ({
    title: project.title,
    content: (
      <ProjectCard
        type={project.content.type}
        title={project.content.title}
        description={project.content.description}
        Github_link={project.content.Github_link}
        Website_link={project.content.Website_link}
      />
    ),
  }));

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
