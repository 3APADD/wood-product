let header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("navbar-background");
  } else {
    header.classList.remove("navbar-background");
  }
});
