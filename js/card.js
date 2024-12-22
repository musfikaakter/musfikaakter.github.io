document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('mobile-nav');
    const navList = document.getElementById('mobile__nav-menu');

    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
});
