'use strict';
import Project from 'project';

export default class ProjectsView {
  constructor(projectList, app) {
    this.projectList = projectList;
    this.app = app;
  }

  render() {
    const container = document.querySelector('.projects-container');
    let columns = document.querySelector('.projects-columns');

    for (let i = 0; i < this.projectList.length; i++) {
      if (i > 0 && i % 3 === 0) {
        columns = document.createElement('div');
        columns.classList = 'columns projects-columns';
        container.appendChild(columns);
      }
      const project = new Project(this.projectList[i], columns);
      project.render;
    }
  }
}
