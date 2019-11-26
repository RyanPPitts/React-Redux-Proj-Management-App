import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p> Here is all the fake text that should go for the project</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Ryan Pitts</div>
          <div>November 25th 2010</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
