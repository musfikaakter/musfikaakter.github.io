/// mobile menu open

const headerButton = document.querySelectorAll(".mobile__menu-bar");
const mobileNav = document.querySelector(".mobile__nav");

headerButton.forEach((click) => {
  click.addEventListener("click", () => {
      mobileNav.classList.toggle("mobile_nav-slide");
  
  });
})


/// check if a link is clicked or not

const mobileNavLink = document.querySelectorAll(".mobile__nav-link");

mobileNavLink.forEach((link) => {
  link.addEventListener(
    "click", (checkLink = () => {

      mobileNav.classList.remove("mobile_nav-slide")


    }))
});


/// theme color

const themeBtn = document.querySelectorAll("#sun-light");
themeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
});


/// on top scroll

const scrollToTop = document.querySelector("#scroll-to__top");

scrollToTop.addEventListener("click", function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


