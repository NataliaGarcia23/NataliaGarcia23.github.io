function showInfo(project) {
    project.querySelector('.project-info').style.opacity = 1;
}

function hideInfo(project) {
    project.querySelector('.project-info').style.opacity = 0;
}

function navigateToURL(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.portfolio-box');
  
    projects.forEach(function(project) {
      project.addEventListener('mouseover', function() {
        this.classList.add('hovered');
      });
  
      project.addEventListener('mouseout', function() {
        this.classList.remove('hovered');
      });
    });
  });