import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";




interface ProjectCardProps {
  type: string;
  title: string;
  description: string;
  Github_link?: string;
  Website_link?: string|null;
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
              <img
                src="/skills/github-square.svg"
                alt="Website"
              />
            </a>
          )}
        </div>
      </div>
      <div className="image overflow-hidden">
        <img className="photo" src="/assests/4058273.png" alt="Project" />
      </div>
    </div>
  );
}
