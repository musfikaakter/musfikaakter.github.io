document.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (boxTop < windowHeight) {
            box.style.opacity = 1;
            box.style.transform = 'translateX(0)';
        }
    });
});
