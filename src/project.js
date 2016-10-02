'use strict';

export default class Project {
  constructor(project, parent) {
    this.parent = parent;
    this.name = project.name;
    this.url = project.url;
    this.github = project.github;
    this.thumb = project.thumb;
    this.image = project.image;
    this.description = project.description;
  }

  render() {

  }

  generateBoxSkeleton() {
    const projectBox = document.createElement('div');
    projectBox.classList = 'column is-one-third';
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
  }

  populateBox() {

  }

  openModal() {

  }
}
