'use strict';
import projectsList from 'projectList';
import ProjectsView from 'projectsView';

export default function Index(app) {
  const projectList = projectsList();
  const view = new ProjectsView(projectList, app);
  view.render();

  document.querySelector('.github-contact').addEventListener('click', () => {
    window.open('http://www.github.com/dwevins', '_blank');
  });

  document.querySelector('.email-contact').addEventListener('click', () => {
    document.location.href = 'mailto:woody.evins@gmail.com';
  });

  document.querySelector('.linkedin-contact').addEventListener('click', () => {
    window.open('http://www.linkedin.com/in/woodyevins', '_blank');
  });
}
