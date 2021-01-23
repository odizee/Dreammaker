let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let fonts = document.getElementById("fas");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

navBarToggle.addEventListener("click", function() {
  if (fonts.classList.contains("fa-bars")) {
    fonts.classList.replace("fa-bars", "fa-times");
  } else {
    fonts.classList.replace("fa-times", "fa-bars");
  }
  
});

