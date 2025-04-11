// preloader

const preLoader = document.getElementById("preloader");

window.addEventListener("load", function() {
  preLoader.style.display = "none";
});


/// on top scroll

const scrollToTop = document.querySelector("#scroll-to__top");

scrollToTop.addEventListener("click", function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
