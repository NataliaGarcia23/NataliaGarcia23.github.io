window.onload = function() {
  var links = document.querySelectorAll('a');
  links.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href.indexOf('?') === -1) {
      link.setAttribute('href', href + '?rand=' + Math.random());
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const profileContainer = document.querySelector(".profile-container");
  if (profileContainer) {
      profileContainer.classList.add("show");
  }

  const boxContainer = document.querySelector(".box");
  if (boxContainer) {
      boxContainer.classList.add("show");
  }
});
