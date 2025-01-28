/// mobile menu open

const mobileNav = () => {  
    const headerButton = document.querySelector('.mobile__menu-bar');
    const mobileNav = document.querySelector('.mobile__nav');
    
    headerButton.addEventListener('click', () => {
        mobileNav.style.display = 'grid';
        document.body.style.overflowY = 'hidden';
    });
};

// theme color

const darkMode = () => {
    const themeBtn = document.querySelectorAll('#sun-light');
    themeBtn.forEach(btn => {
        btn.addEventListener('click', () =>{
            document.body.classList.toggle('light-mode');
        });
    });
}

mobileNav();
darkMode();

// on top scroll

function scrollToTop() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
    });
  }