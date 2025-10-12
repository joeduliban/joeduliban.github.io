let currentLanguage = 'fr';

function changeLanguage(lang) {
    currentLanguage = lang;

    document.querySelectorAll('.language-selector button, .language-buttons button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    document.title = translations[lang].title || 'Joe Nammour';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);
        
        if (translation) {
            element.textContent = translation;
        }
    });

    updateExpertiseList(lang);
    
    updateStudiesLists(lang);
    
    updateSkills(lang);

    updateHobbies(lang);

    updateProjects(lang);

    updateExperience(lang);
}

function getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, k) => (o || {})[k], obj);
}

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

        const featureLists = card.querySelectorAll('.feature-list');
        if (featureLists.length > 0 && project.features) {
            const items = featureLists[0].querySelectorAll('li');
            project.features.forEach((text, itemIndex) => {
                if (items[itemIndex]) {
                    items[itemIndex].innerHTML = text;
                }
            });
        }

        if (featureLists.length > 1 && project.achievements) {
            const items = featureLists[1].querySelectorAll('li');
            project.achievements.forEach((text, itemIndex) => {
                if (items[itemIndex]) {
                    items[itemIndex].innerHTML = text;
                }
            });
        }

        const imagePlaceholders = card.querySelectorAll('.project-image-placeholder');
        if (project.imagePlaceholders && Array.isArray(project.imagePlaceholders)) {
            imagePlaceholders.forEach((placeholder, imgIndex) => {
                if (project.imagePlaceholders[imgIndex]) {
                    updateImageDescription(placeholder, project.imagePlaceholders[imgIndex]);
                }
            });
        } else if (project.imagePlaceholder) {
            imagePlaceholders.forEach(placeholder => {
                updateImageDescription(placeholder, project.imagePlaceholder);
            });
        }

        const videoPlaceholder = card.querySelector('.project-video-container .video-placeholder');
        if (videoPlaceholder && project.videoPlaceholder) {
            videoPlaceholder.textContent = project.videoPlaceholder;
        }
    });
}

function updateImageDescription(placeholder, translatedText) {
    const imagePath = placeholder.getAttribute('data-image');

    placeholder.setAttribute('data-description', translatedText);

    if (placeholder.classList.contains('loaded')) {
        const newPlaceholder = placeholder.cloneNode(true);
        placeholder.parentNode.replaceChild(newPlaceholder, placeholder);

        newPlaceholder.addEventListener('click', function() {
            openLightbox(imagePath, translatedText);
        });
    } else {
        placeholder.textContent = translatedText;
    }
}

function updateExperience(lang) {
    const experience = document.getElementById('experience');
    if (!experience) return;
    
    const timelineItems = experience.querySelectorAll('.timeline-item');

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

window.changeLanguage = changeLanguage;
window.currentLanguage = currentLanguage;