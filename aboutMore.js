var educationButton = document.getElementById('educationButton');
var educationDetails = document.getElementById('educationDetails');

educationButton.addEventListener('click', function() {
  if (educationDetails.style.display === 'none') {
    educationDetails.style.display = 'block';
  } else {
    educationDetails.style.display = 'none';
  }
});


// project js 

document.addEventListener("DOMContentLoaded", function() {
    const projectTitles = document.querySelectorAll(".project-title");
  
    projectTitles.forEach(function(title) {
      title.addEventListener("click", function() {
        const projectBox = this.parentNode;
        const projectDetails = projectBox.querySelector(".project-details");
  
        projectDetails.classList.toggle("show");
      });
    });
  });
  