'use strict';
import ProjectList from 'projectList';
import ProjectsView from 'projectsView';

export default function Index(app) {
  const projectList = ProjectList();
  const view = ProjectsView(projectList, app);
  view.render();
}
