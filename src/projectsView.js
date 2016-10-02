'use strict';
import Project from 'project';

export default class ProjectsView {
  constructor(projectList, app) {
    this.projectList = projectList.map((project) => new Project(project));
    this.app = app;
  }

  render() {
    const container = document.querySelector('.projects-container');

    for (let i = 0; i < this.projectList.length; i++) {
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

      projectBox.querySelector('.preload').setAttribute('src', this.projectList[i].image);
      projectBox.querySelector('.project-img').setAttribute('src', this.projectList[i].thumb);
      container.appendChild(projectBox);
    }
  }
}
