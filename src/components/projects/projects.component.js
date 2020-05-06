import React from "react";
import {
  ProjectsContainer
} from "../projects/projects.style";
import { projects } from "../../resources/projects";
import Project from "../project/project.component";

function Projects() {
  return (
    <ProjectsContainer>
      {projects.map((e,idx) => {
        return (
          <Project
            key={e.title}
            invertOrder={(idx%2===0?0:1)}
            title={e.title}
            demo={e.demo}
            repo={e.repo}
            image={e.image}
            imageAlt={e.imageAlt}
            description={e.description}
          />
        );
      })}
    </ProjectsContainer>
  );
}

export default Projects;