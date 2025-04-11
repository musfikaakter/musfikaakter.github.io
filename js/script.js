/// mobile menu open
const headerButton = document.querySelectorAll(".mobile__menu-bar");
const mobileNav = document.querySelector(".mobile__nav");

headerButton.forEach((click) => {
  click.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile_nav-slide");
  });
});

/// check if a link is clicked or not
const mobileNavLink = document.querySelectorAll(".mobile__nav-link");

mobileNavLink.forEach((link) => {
  link.addEventListener(
    "click",
    (checkLink = () => {
      mobileNav.classList.remove("mobile_nav-slide");
    })
  );
});

/// theme color
const themeBtn = document.querySelectorAll("#sun-light");
themeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
});

/// project switch
const htmlProjectTab = document.querySelector(".html");
const wordpressProjectTab = document.querySelector(".wordpress");

const htmlProject = document.querySelector(".project__box-html");
const wordpressProject = document.querySelector(".project__box-wordpress");


/// html switch
htmlProjectTab.addEventListener("click", () => {
  htmlProject.style.display = "block";
  wordpressProject.style.display = "none";

  // add & remove class
  htmlProjectTab.classList.add("tab_style");
  wordpressProjectTab.classList.remove("tab_style");

});

// wordpress switch
wordpressProjectTab.addEventListener("click", () => {
  wordpressProject.style.display = "block";
  htmlProject.style.display = "none";
  
  // add & remove class
  wordpressProjectTab.classList.add("tab_style");
  htmlProjectTab.classList.remove("tab_style");
})