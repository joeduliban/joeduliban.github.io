// Gestion de l'internationalisation (i18n)

let currentLanguage = 'fr';

// Changer de langue
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.language-selector button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Mettre à jour le titre de la page
    document.title = translations[lang].jobTitle || 'Joe Nammour';
    
    // Mettre à jour tous les éléments avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Mettre à jour les listes d'expertise
    updateExpertiseList(lang);
    
    // Mettre à jour les listes d'items des études
    updateStudiesLists(lang);
    
    // Mettre à jour les compétences
    updateSkills(lang);
    
    // Mettre à jour les loisirs
    updateHobbies(lang);
    
    // Mettre à jour les projets (y compris les descriptions d'images pour la lightbox)
    updateProjects(lang);
    
    // Mettre à jour l'expérience
    updateExperience(lang);
}

// Obtenir une traduction imbriquée (ex: "skillCategories.programming")
function getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, k) => (o || {})[k], obj);
}

// Mettre à jour la liste d'expertise
function updateExpertiseList(lang) {
    const list = document.querySelector('.highlight-box .feature-list');
    if (list && translations[lang].expertiseList) {
        const items = list.querySelectorAll('li');
        translations[lang].expertiseList.forEach((text, index) => {
            if (items[index]) {
                items[index].innerHTML = text;
            }
        });
    }
}

// Mettre à jour les listes des études
function updateStudiesLists(lang) {
    const etudes = document.getElementById('etudes');
    if (!etudes) return;
    
    const lists = etudes.querySelectorAll('.feature-list');
    const data = [
        translations[lang].masterItems,
        translations[lang].bachelorItems,
        translations[lang].technicianItems
    ];
    
    lists.forEach((list, listIndex) => {
        const items = list.querySelectorAll('li');
        if (data[listIndex]) {
            data[listIndex].forEach((text, itemIndex) => {
                if (items[itemIndex]) {
                    items[itemIndex].innerHTML = text;
                }
            });
        }
    });
}

// Mettre à jour les compétences
function updateSkills(lang) {
    const competences = document.getElementById('competences');
    if (!competences || !translations[lang].skills) return;
    
    const categories = competences.querySelectorAll('.skill-category');
    const skillKeys = ['programming', 'webMobile', 'embedded', 'ar3d', 'ai', 'database', 'industrial', 'analysis', 'network', 'tools'];
    
    categories.forEach((category, index) => {
        const key = skillKeys[index];
        if (translations[lang].skills[key]) {
            const items = category.querySelectorAll('.skill-item');
            translations[lang].skills[key].forEach((text, itemIndex) => {
                if (items[itemIndex]) {
                    items[itemIndex].textContent = text;
                }
            });
        }
    });
}

// Mettre à jour les loisirs
function updateHobbies(lang) {
    const loisirs = document.getElementById('loisirs');
    if (!loisirs || !translations[lang].hobbies) return;
    
    const categories = loisirs.querySelectorAll('.skill-category');
    const hobbyKeys = ['sports', 'intellectual', 'tech', 'social'];
    
    categories.forEach((category, index) => {
        const key = hobbyKeys[index];
        if (translations[lang].hobbies[key]) {
            const items = category.querySelectorAll('.skill-item');
            translations[lang].hobbies[key].forEach((text, itemIndex) => {
                if (items[itemIndex]) {
                    items[itemIndex].textContent = text;
                }
            });
        }
    });
}

// Mettre à jour les projets
function updateProjects(lang) {
    const projets = document.getElementById('projets');
    if (!projets || !translations[lang].projects) return;
    
    const projectCards = projets.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        const project = translations[lang].projects[index];
        if (!project) return;
        
        const title = card.querySelector('.project-title');
        const subtitle = card.querySelector('.project-subtitle');
        const description = card.querySelector('.project-description p');
        
        if (title) title.textContent = project.title;
        if (subtitle) subtitle.textContent = project.subtitle;
        if (description) description.textContent = project.description;
        
        // Mettre à jour les listes de fonctionnalités
        const featureLists = card.querySelectorAll('.feature-list');
        if (featureLists.length > 0 && project.features) {
            const items = featureLists[0].querySelectorAll('li');
            project.features.forEach((text, itemIndex) => {
                if (items[itemIndex]) {
                    items[itemIndex].innerHTML = text;
                }
            });
        }
        
        // Mettre à jour les achievements si présents
        if (featureLists.length > 1 && project.achievements) {
            const items = featureLists[1].querySelectorAll('li');
            project.achievements.forEach((text, itemIndex) => {
                if (items[itemIndex]) {
                    items[itemIndex].innerHTML = text;
                }
            });
        }
        
        // CORRECTION CRITIQUE : Mettre à jour les descriptions d'images pour la lightbox
        const imagePlaceholders = card.querySelectorAll('.project-image-placeholder');
        if (project.imagePlaceholders && Array.isArray(project.imagePlaceholders)) {
            // Plusieurs descriptions différentes pour chaque image
            imagePlaceholders.forEach((placeholder, imgIndex) => {
                if (project.imagePlaceholders[imgIndex]) {
                    updateImageDescription(placeholder, project.imagePlaceholders[imgIndex]);
                }
            });
        } else if (project.imagePlaceholder) {
            // Une seule description pour toutes les images
            imagePlaceholders.forEach(placeholder => {
                updateImageDescription(placeholder, project.imagePlaceholder);
            });
        }
        
        // Mettre à jour le placeholder de vidéo s'il existe
        const videoPlaceholder = card.querySelector('.project-video-container .video-placeholder');
        if (videoPlaceholder && project.videoPlaceholder) {
            videoPlaceholder.textContent = project.videoPlaceholder;
        }
    });
}

// Mettre à jour la description d'une image pour la lightbox
function updateImageDescription(placeholder, translatedText) {
    const imagePath = placeholder.getAttribute('data-image');
    
    // Mettre à jour l'attribut data-description
    placeholder.setAttribute('data-description', translatedText);
    
    // Si l'image est déjà chargée (a la classe 'loaded'), mettre à jour l'événement click
    if (placeholder.classList.contains('loaded')) {
        // Cloner l'élément pour retirer tous les anciens event listeners
        const newPlaceholder = placeholder.cloneNode(true);
        placeholder.parentNode.replaceChild(newPlaceholder, placeholder);
        
        // Ajouter le nouveau listener avec la description traduite
        newPlaceholder.addEventListener('click', function() {
            openLightbox(imagePath, translatedText);
        });
    } else {
        // L'image n'est pas encore chargée, juste mettre à jour le texte du placeholder
        placeholder.textContent = translatedText;
    }
}

// Mettre à jour l'expérience
function updateExperience(lang) {
    const experience = document.getElementById('experience');
    if (!experience) return;
    
    const timelineItems = experience.querySelectorAll('.timeline-item');
    
    // Stage
    if (timelineItems[0] && translations[lang].internshipAchievements) {
        const list = timelineItems[0].querySelector('.feature-list');
        if (list) {
            const items = list.querySelectorAll('li');
            translations[lang].internshipAchievements.forEach((text, index) => {
                if (items[index]) {
                    items[index].innerHTML = text;
                }
            });
        }
    }
    
    // Job étudiant
    if (timelineItems[1] && translations[lang].studentJobTasks) {
        const list = timelineItems[1].querySelector('.feature-list');
        if (list) {
            const items = list.querySelectorAll('li');
            translations[lang].studentJobTasks.forEach((text, index) => {
                if (items[index]) {
                    items[index].innerHTML = text;
                }
            });
        }
    }
}

// Exposer les fonctions globalement
window.changeLanguage = changeLanguage;
window.currentLanguage = currentLanguage;
