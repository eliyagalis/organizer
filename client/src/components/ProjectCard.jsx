import { faTasks, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { on } from "events";
import React from "react";

const ProjectCard = ({ project, onClick, className}) => {
  return (
    <div className={`project-card ${className}`} onClick={onClick}>
        <FontAwesomeIcon icon={faTasks} /> {project.name}
        {/* <button
          className="project-btn btn"
          onClick={() => handleDeleteProject(project._id)}
        >
          <FontAwesomeIcon icon={faX} />
        </button> */}
    </div>
  );
};

export default ProjectCard;