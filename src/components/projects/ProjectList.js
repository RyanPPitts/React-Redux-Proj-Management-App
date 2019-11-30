import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      {/* if we have projects then we want to map the data from the project db */}
      {projects && projects.map(project => {
        return (
          // grab project as a prop that we are mapping based on the id 
          // each time around we are returning jsx data
          // each project summary we are mapping and assigning a key
          <ProjectSummary project={project} key={project.id} />
        )
      })}
    </div>
  );
};

export default ProjectList;
