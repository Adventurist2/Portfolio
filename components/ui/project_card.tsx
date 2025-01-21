import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image"; // Import Image component from next/image

interface ProjectCardProps {
  type: string;
  title: string;
  description: string;
  Github_link?: string;
  Website_link?: string | null;
}

export default function ProjectCard({
  type,
  title,
  description,
  Github_link,
  Website_link,
}: ProjectCardProps) {
  return (
    <div className="parent">
      <div>
        <div className="header">
          <h5 className="l1 ">{type}</h5>
          <h2 className="l2 text-2xl">{title}</h2>
        </div>
        <div className="fog">{description}</div>
        <div className="project_footer">
          {Github_link && (
            <a href={Github_link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          )}
          {Website_link && (
            <a href={Website_link} target="_blank" rel="noopener noreferrer">
              <Image
                src="/skills/github-square.svg"
                alt="Website"
                width={40} // Provide width and height for the image
                height={40}
              />
            </a>
          )}
        </div>
      </div>
      <div className="image overflow-hidden">
        <Image
          className="photo"
          src="/assests/4058273.png"
          alt="Project"
          width={500} // Set the width and height for the image
          height={300}
        />
      </div>
    </div>
  );
}
