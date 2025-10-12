// Animation du profil (flip)
function initProfileFlip() {
    const profileBubble = document.getElementById('profileBubble');
    
    if (!profileBubble) return;
    
    let isHovering = false;
    
    // Gestion du survol souris
    profileBubble.addEventListener('mouseenter', () => {
        isHovering = true;
        profileBubble.style.transform = 'rotateY(180deg)';
    });
    
    profileBubble.addEventListener('mouseleave', () => {
        isHovering = false;
        profileBubble.style.transform = 'rotateY(0deg)';
    });
    
    // Gestion du swipe tactile
    let touchStartX = 0;
    let touchStartY = 0;
    let isFlipped = false;
    
    profileBubble.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    profileBubble.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const diffX = Math.abs(touchStartX - touchEndX);
        const diffY = Math.abs(touchStartY - touchEndY);
        
        if (diffX > 50 && diffX > diffY) {
            isFlipped = !isFlipped;
            profileBubble.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
        }
    }, { passive: true });
}

// Exposer la fonction globalement
window.initProfileFlip = initProfileFlip;
