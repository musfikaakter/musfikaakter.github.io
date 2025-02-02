/// mobile menu open

const mobileNav = () => {  
    const headerButton = document.querySelector('.mobile__menu-bar');
    const mobileNav = document.querySelector('.mobile__nav');
    
    let isMobileNavOpen = false;

    headerButton.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;

        if(isMobileNavOpen) {
            mobileNav.style.display = 'grid';
            document.body.style.overflowY = 'hidden';
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });
};

mobileNav();

// theme color

const darkMode = () => {
    const themeBtn = document.querySelectorAll('#sun-light');
    themeBtn.forEach(btn => {
        btn.addEventListener('click', () =>{
            document.body.classList.toggle('light-mode');
        });
    });
}

darkMode();

// on top scroll

function scrollToTop() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
    });
  }