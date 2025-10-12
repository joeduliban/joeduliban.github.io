// Initialisation principale de l'application

document.addEventListener("DOMContentLoaded", () => {
    // Observer pour les animations au scroll
    initScrollAnimations();
    
    // Charger les images et vidéos des projets
    loadProjectImages();
    loadProjectVideos();
    
    // Initialiser l'animation du profil
    initProfileFlip();
    
    // Initialiser la langue par défaut
    changeLanguage('fr');
});

// Initialiser les animations au scroll
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
