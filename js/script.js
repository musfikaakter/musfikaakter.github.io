/// mobile menu open

const headerButton = document.querySelector(".mobile__menu-bar");
const mobileNav = document.querySelector(".mobile__nav");
let isMobileNavOpen = false;

headerButton.addEventListener("click", () => {
  isMobileNavOpen = !isMobileNavOpen;

  if (isMobileNavOpen) {
    mobileNav.style.display = "grid";
    document.body.style.overflowY = "hidden";
  } else {
    mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
  }

});


/// check if a link is clicked or not

const mobileNavLink = document.querySelectorAll(".mobile__nav-link");

mobileNavLink.forEach((link) => {
  link.addEventListener(
    "click", (checkLink = (e) => {

      if (e.target.classList.contains("mobile__nav-link")) {
        mobileNav.style.display = "none";
        document.body.style.overflowY = "auto";
        isMobileNavOpen = false;
      }

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


