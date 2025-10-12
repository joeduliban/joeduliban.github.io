document.addEventListener("DOMContentLoaded", () => {
    initScrollAnimations();
    
    loadProjectImages();
    loadProjectVideos();
    
    initProfileFlip();
    
    changeLanguage('fr');
});

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-anim');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll('.hidden-anim');
    hiddenElements.forEach(el => observer.observe(el));
}