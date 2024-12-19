/// mobile menu open

const mobileNav = () => {  
    const headerButton = document.querySelector('.mobile__menu-bar');
    const mobileNav = document.querySelector('.mobile-nav');
    
    headerButton.addEventListener('click', () => {
        mobileNav.style.display = 'grid';
        document.body.style.overflowY = 'hidden';
    });
};

mobileNav();