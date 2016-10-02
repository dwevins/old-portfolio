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
    this.projectBox = document.createElement('div');
  }

  render() {
    this.generateBoxSkeleton();
    this.populateBox();
    this.parent.appendChild(this.projectBox);
  }

  generateBoxSkeleton() {
    this.projectBox.classList = 'column is-one-third';
    this.projectBox.innerHTML = `
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
    this.projectBox.querySelector('.preload').setAttribute('src', this.image);
    this.projectBox.querySelector('.project-img').setAttribute('src', this.thumb);

    this.projectBox.querySelector('.button').addEventListener('click', () => {
      this.openModal();
    });
  }

  openModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('is-active');
    modal.querySelector('.modal-card-title').innerText = this.name;
    modal.querySelector('.modal-image').setAttribute('src', this.image);
    modal.querySelector('.modal-description').innerText = this.description;

    modal.querySelector('.delete').addEventListener('click', () => {
      modal.classList.remove('is-active');
    });

    modal.querySelector('.site-link').addEventListener('click', () => {
      window.open(this.url, '_blank');
    });

    modal.querySelector('.github-link').addEventListener('click', () => {
      window.open(this.github, '_blank');
    });
  }
}
