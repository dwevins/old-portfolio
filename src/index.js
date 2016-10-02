'use strict';
import projectsList from 'projectList';
import ProjectsView from 'projectsView';

export default function Index(app) {
  const projectList = projectsList();
  const view = new ProjectsView(projectList, app);
  view.render();
}
