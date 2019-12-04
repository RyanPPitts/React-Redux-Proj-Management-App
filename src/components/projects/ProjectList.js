import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {/* if we have projects then we want to map the data from the project db */}
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              {/* // grab project as a prop that we are mapping based on the id //
              each time around we are returning jsx data // each project summary
              we are mapping and assigning a key */}
              <ProjectSummary project={project} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
