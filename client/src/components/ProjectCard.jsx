import { faTasks, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProjectCard = ({ project, /* handleDeleteProject */}) => {
  return (
    <div className="project-card">
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