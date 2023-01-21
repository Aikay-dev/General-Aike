var navbar = document.querySelector("nav");

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 100) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navoneul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});

function about(){
  window.scrollTo(0, 1100);
}