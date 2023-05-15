//toogle class aktive\
const navbarNav = document.querySelector(".navbar-nav");

//humberger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar
const hamburgermenu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburgermenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
