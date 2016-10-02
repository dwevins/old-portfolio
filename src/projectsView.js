'use strict';
import Project from 'project';

export default class ProjectsView {
  constructor(projectList, app) {
    this.projectList = projectList.map((project) => new Project(project));
    this.app = app;
  }

  render() {
    const container = document.querySelector('.projects-columns');


    this.projectList.forEach((project) => {
      const projectBox = document.createElement('div');
      projectBox.className = 'column';
      projectBox.innerHTML = `
      <img class="preload">
      <div class="project-list__item box">
        <div class="project-list__item--img-container">
          <img class="project-img">
        </div>
        <div class="project-list__item--button button is-info is-one-third">
          more info
        </div>
      </div>`;

      projectBox.querySelector('.preload').setAttribute('src', project.image);
      projectBox.querySelector('.project-img').setAttribute('src', project.thumb);
      container.appendChild(projectBox);
    });
  }
}
