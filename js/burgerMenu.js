document.addEventListener("DOMContentLoaded", () => {
  const burgerWrapper = document.getElementById("MENU_AS_CONTAINER_TOGGLE");
  const burgerLinesWrapper = document.querySelector(".burger-lines-wrapper");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".overlay");

  // toggle burger menu on click
  burgerWrapper.addEventListener("click", () => {
    burgerLinesWrapper.classList.toggle("burger-active");
    navLinks.classList.toggle("burger-active");
    overlay.classList.toggle("burger-active");
  });

  // close the nav-links when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !navLinks.contains(event.target) &&
      !burgerWrapper.contains(event.target)
    ) {
      closeBurgerMenu();
    }
  });

  // prevent clicks inside the nav-links from closing it
  navLinks.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  //    close the burger menu
  const closeBurgerMenu = () => {
    burgerLinesWrapper.classList.remove("burger-active");
    navLinks.classList.remove("burger-active");
    overlay.classList.remove("burger-active");
  };
});
