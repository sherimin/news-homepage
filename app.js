document.addEventListener("DOMContentLoaded", () => {
  const toggleMenuSVG = document.querySelector(".toggle-menu");
  const closeMenuSVG = document.querySelector(".close-menu");
  const mobileMenu = document.querySelector(".mobile-menu-link-container");
  const overlay = document.querySelector(".overlay");
  const body = document.body;

  const openMenu = () => {
    mobileMenu.classList.add("active");
    body.classList.add("dimmed");
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("active");
    body.classList.remove("dimmed");
    overlay.style.opacity = "0";
    overlay.style.visibility = "invisible";
  };

  toggleMenuSVG.addEventListener("click", openMenu);
  closeMenuSVG.addEventListener("click", closeMenu);
});
