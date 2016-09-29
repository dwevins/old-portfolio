'use strict'
import Project from 'project';

export default function ProjectsView(projectsList) {
    const projects = projectsList.map((project) => {
      return new Project(project);
    });


}
