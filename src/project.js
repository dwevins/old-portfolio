'use strict';

export default class Project {
  constructor(project) {
    this.name = project.name;
    this.url = project.url;
    this.github = project.github;
    this.thumb = project.thumb;
    this.image = project.image;
    this.description = project.description;
  }
}
