const translations = {
    fr: {
        // Header
        languages: "Langues",
        french: "Français (Courant)",
        lebanese: "Libanais (Maternel)",
        english: "Anglais (Base)",
        title: "Ingénieur Informatique Industrielle",
        jobTitle: "Ingénieur Informatique Industrielle | Développeur Full-Stack | Spécialiste IoT & Systèmes Embarqués",
        born: "Né le 27/04/1998 à Ixelles",
        nationality: "Nationalité: Belge",
        location: "Bruxelles, Belgique",
        
        // Navigation
        navProfile: "Profil",
        navStudies: "Études",
        navSkills: "Compétences",
        navProjects: "Projets Majeurs",
        navExperience: "Expérience",
        navHobbies: "Loisirs",
        navMobileTitle: "Navigation",

        // Profile Section
        profileTitle: "Profil Professionnel",
        profileDescription: "Ingénieur informatique industrielle passionné par l'innovation technologique et les systèmes intelligents. Fort d'une expertise approfondie en développement logiciel, IoT, réalité augmentée et intelligence artificielle, je conçois des solutions techniques complexes alliant créativité et rigueur. Mon parcours académique à l'HE2B (ESI/ISIB) m'a permis de développer une vision holistique des systèmes industriels modernes, de la conception à l'implémentation.",
        yearsStudy: "Années d'études",
        projectsCompleted: "Projets réalisés",
        technologiesMastered: "Technologies maîtrisées",
        languagesSpoken: "Langues parlées",
        expertiseDomains: "Domaines d'expertise",
        expertiseList: [
            "Développement d'applications mobiles (Flutter/Dart) et web (React, ASP.NET Core)",
            "Systèmes embarqués et IoT (Arduino, Raspberry Pi, ESP32, Pozyx UWB)",
            "Réalité augmentée et virtuelle (Unity, Unreal Engine, Vuforia)",
            "Intelligence artificielle et Machine Learning (NLP, systèmes comportementaux)",
            "Automatisation industrielle (STEP7, TIA Portal, LabVIEW, RoboDK)",
            "Bases de données et architectures distribuées (PostgreSQL, MongoDB, MySQL)",
            "Protocoles industriels (MQTT, wMBus, UWB, IRDA)"
        ],
        
        // Studies Section
        studiesTitle: "Formation Académique",
        masterPeriod: "2022 - Présent",
        masterTitle: "Master Ingénieur Informatique Industrielle",
        masterSchool: "HE2B ISIB (Institut Supérieur Industriel de Bruxelles)",
        masterDescription: "Formation avancée couvrant l'intégration des technologies industrielles modernes, l'automatisation, les systèmes embarqués et l'IoT. Spécialisation dans les systèmes intelligents, la robotique et les architectures distribuées.",
        masterItems: [
            "Systèmes de contrôle industriel et automatisation",
            "Réseaux industriels et protocoles de communication",
            "Intelligence artificielle appliquée aux systèmes industriels",
            "Gestion de projets techniques complexes",
            "Réalité augmentée, Machine learning et Outils 3D"
        ],
        bachelorPeriod: "2017 - 2022",
        bachelorTitle: "Bachelier Informatique Industrielle",
        bachelorSchool: "HE2B ESI (École Supérieure d'Informatique)",
        bachelorDescription: "Formation complète en informatique industrielle combinant programmation, électronique, automatisme et systèmes embarqués. Développement de compétences transversales en gestion de projets et travail en équipe.",
        bachelorItems: [
            "Programmation orientée objet et développement logiciel",
            "Électronique et microcontrôleurs (Arduino, Raspberry Pi)",
            "Bases de données et systèmes d'information",
            "Réseaux et sécurité informatique (Cisco)",
            "Analyse et modélisation (UML, Merise)",
            "Interfaçage d'équipements industriels",
            "Projets de bureaux d'études (Fabrique de fake news)"
        ],
        technicianPeriod: "2015 - 2017",
        technicianTitle: "CESS + Licence en Technicien Informatique",
        technicianSchool: "Institut Technique René Cartigny",
        technicianDescription: "Formation technique approfondie en maintenance informatique, réseaux et administration systèmes. Acquisition des fondamentaux en électronique et systèmes embarqués.",
        technicianItems: [
            "Maintenance et dépannage de systèmes informatiques",
            "Configuration et administration de réseaux",
            "Initiation à la programmation et aux systèmes d'exploitation"
        ],
        
        // Skills Section
        skillsTitle: "Compétences Techniques Détaillées",
        skillCategories: {
            programming: "Langages de Programmation",
            webMobile: "Développement Mobile & Web",
            embedded: "Systèmes Embarqués & IoT",
            ar3d: "Réalité Augmentée & 3D",
            ai: "Intelligence Artificielle",
            database: "Bases de Données",
            industrial: "Automatisation Industrielle",
            analysis: "Analyse & Modélisation",
            network: "Réseaux & Systèmes",
            tools: "Outils & Méthodologies"
        },
        skills: {
            programming: ["Java (Orienté Objet, Android)", "JavaScript/TypeScript (Full-Stack)", "C / C++ (Systèmes embarqués)", "C# (Unity, .NET Core)", "Python (IA, Automation, IoT)", "Dart (Flutter Mobile)"],
            webMobile: ["Flutter/Dart (Applications multiplateformes)", "React/React Native (Frontend moderne)", "ASP.NET Core (Backend robuste)", "Node.js (Serveurs temps réel)", "HTML5/CSS3 (Interfaces responsives)", "PrimeReact (UI Components)"],
            embedded: ["Arduino (Prototypage électronique)", "Raspberry Pi (Python/C++)", "ESP32 (Wi-Fi, DeepSleep, capteurs)", "Pozyx UWB (Localisation précise)", "Capteurs MQ135, CCS811, BMX280", "MQTT (Protocole IoT)"],
            ar3d: ["Unity (Jeux, AR, Simulations)", "Unreal Engine (C++, Blueprints)", "Vuforia (Reconnaissance AR)", "Blender (Modélisation 3D)", "Three.js (Visualisation web 3D)"],
            ai: ["NLP (GPT-2, GPT-4, Transformers)", "PyTorch & Keras (Deep Learning)", "TensorFlow (Réseaux neuronaux)", "Systèmes comportementaux (Behavior Trees)", "Logique floue (Fuzzy Logic)"],
            database: ["PostgreSQL (Relationnel avancé)", "MySQL (SGBD classique)", "MongoDB (NoSQL)", "SQLite (Embarqué mobile)", "Optimisation de requêtes"],
            industrial: ["LabVIEW (Instrumentation virtuelle)", "STEP7 / TIA Portal (Automates Siemens)", "RoboDK (Programmation robotique)", "Kinect (Capture de mouvement)", "LEGO Mindstorms EV3"],
            analysis: ["UML (Diagrammes de classes, séquences)", "Merise (MCD, MTD, MCT, MTT)", "Architecture logicielle", "Design Patterns"],
            network: ["Linux (Administration, Bash)", "Cisco (Configuration réseau)", "Protocoles RF (wMBus, UWB, 868MHz)", "API REST & WebSockets"],
            tools: ["Git (Versionnage de code)", "Docker (Conteneurisation)", "Agile/Scrum (Gestion de projets)", "CI/CD (Intégration continue)"]
        },
        
        // Projects Section
        projectsTitle: "Projets Personnels et Réalisations",
        keyFeatures: "Fonctionnalités Clés",
        implementedAlgorithms: "Algorithmes Implémentés",
        teamAchievements: "Équipe et Réalisations",
        projects: [
            {
                title: "Planète AR Interactive : Simulation d'Écosystème en Réalité Augmentée",
                subtitle: "Un microcosme virtuel sur une sphère physique, où climat et vie artificielle sont influencés par la géolocalisation du monde réel.",
                description: "Ce projet ambitieux fusionne la réalité augmentée et l'intelligence artificielle pour créer une simulation de planète interactive. À l'aide d'un smartphone, les utilisateurs observent une civilisation virtuelle évoluer sur une sphère physique. L'originalité réside dans l'intégration d'un système climatique dynamique basé sur la technologie de localisation UWB (Pozyx) et le protocole MQTT, où la position physique de \"tags\" représentant la planète et le soleil influence directement la météo, la topographie et le comportement des habitants dans le monde virtuel.",
                features: [
                    "<strong>Reconnaissance d'Objet 3D :</strong> Utilisation de Vuforia Model Target pour un tracking AR robuste de la sphère physique.",
                    "<strong>IA Comportementale :</strong> Les habitants (créés sur Blender et Unity) suivent des cycles jour/nuit, exercent des métiers (jardinier, bûcheron, garde) et interagissent socialement grâce à des arbres de comportement et de la logique floue.",
                    "<strong>Climat Dynamique :</strong> La position relative de capteurs UWB (planète/soleil) modifie en temps réel le climat de la simulation (zones chaudes/froides), déformant le terrain et affectant la végétation.",
                    "<strong>Cycle de Vie :</strong> Une civilisation virtuelle qui naît, se développe, construit des habitations et peut même lancer un programme spatial après 300 ans d'évolution simulée."
                ],
                videoPlaceholder: "Vidéo Démonstration - Planète AR Interactive",
                imagePlaceholder: "Image du rendu de la maquette 3D dans Vuforia"
            },
            {
                title: "Fabrique de Fake News : IA, Corrélation et Désinformation",
                subtitle: "Un générateur de titres fallacieux pour démontrer les dangers de la confusion entre corrélation et causalité, basé sur les données de Google Trends et des modèles NLP.",
                description: "Ce projet met en lumière la facilité avec laquelle des informations trompeuses peuvent être générées en exploitant des corrélations statistiques. Le programme analyse les données de popularité de recherche via Google Trends (Pytrends) pour trouver des liens statistiquement significatifs (mais sans rapport causal) entre différents mots-clés. Ensuite, un modèle de traitement du langage naturel (NLP), initialement mon propre model puis un GPT-2 ensuite un GPT-4, est utilisé pour générer un titre de \"fake news\" plausible en combinant ces mots corrélés, illustrant ainsi comment les données peuvent être manipulées.",
                features: [
                    "<strong>Analyse de Corrélation :</strong> Utilisation de la corrélation de Spearman pour identifier des relations non linéaires entre les tendances de recherche de mots-clés.",
                    "<strong>Génération de Texte par IA :</strong> Intégration de modèles NLP pré-entraînés (GPT-2, GPT-4) via la bibliothèque Hugging Face Transformers et de modèle NLP entrainé aux journaux pour créer des titres de news cohérents et trompeurs.",
                    "<strong>Acquisition de Données :</strong> Connexion à l'API de Google Trends via Pytrends pour récupérer des données de recherche en temps réel.",
                    "<strong>Visualisation :</strong> Emploi de Matplotlib pour afficher des graphiques des tendances de recherche des mots corrélés, renforçant l'illusion d'un lien réel."
                ],
                imagePlaceholders: ["Exemple de matrice de corrélation", "Titre de fake news généré par l'IA"]
            },
            {
                title: "Système de Supervision par Mouvements avec Kinect",
                subtitle: "Contrôle d'un robot LEGO Mindstorms EV3 par des gestes et des postures corporelles, capturés par une Kinect et interprétés via LabVIEW.",
                description: "Ce projet d'interfaçage industriel explore le contrôle d'équipements par le mouvement humain. Une caméra Kinect est utilisée pour capturer le squelette 3D d'un opérateur en temps réel. Le logiciel LabVIEW, via la librairie Kinesthesia, analyse les coordonnées des articulations (\"bones\") pour reconnaître des postures spécifiques. Chaque posture (bras levés, bras tendus, etc.) est mappée à une commande (avancer, reculer, tourner, tirer) qui est ensuite transmise en Bluetooth à un robot mobile LEGO Mindstorms EV3. Le robot est également équipé d'un capteur à ultrasons pour l'évitement d'obstacles.",
                features: [
                    "<strong>Capture de Mouvement 3D :</strong> Utilisation du capteur de profondeur de la Kinect pour obtenir les positions X, Y, Z de 20 articulations du corps.",
                    "<strong>Reconnaissance de Postures :</strong> Programmation sous LabVIEW pour définir des conditions sur les positions des membres (ex: si la main droite a une coordonnée Y > 0.4, déclencher une action).",
                    "<strong>Contrôle Robotique :</strong> Pilotage des moteurs du LEGO Mindstorms EV3 (roues et canon lanceur de billes) en fonction des postures détectées.",
                    "<strong>Sécurité Intégrée :</strong> Un capteur à ultrasons sur le robot prévient les collisions en détectant les obstacles à moins de 20 cm."
                ],
                videoPlaceholder: "Vidéo Démonstration et explicatif - Kinect Mindstorms",
                imagePlaceholder: "Photo du robot LEGO Mindstorms EV3"
            },
            {
                title: "Super Smash Bros - ESI Remake : Jeu de Combat en C++ et Unreal Engine",
                subtitle: "Remake d'un jeu de fighting/platformer développé en C++ avec Unreal Engine, intégrant modélisation 3D, animations et intelligence artificielle.",
                description: "Projet collaboratif ambitieux de recréation d'un jeu de combat de type Super Smash Bros utilisant le moteur Unreal Engine. Ce projet combine programmation C++ avancée et scripting Blueprint pour créer un jeu de combat multijoueur complet avec des personnages animés en 3D. Le gameplay repose sur l'éjection des adversaires hors des limites de l'arène plutôt que sur un système de points de vie classique, avec un système de pourcentage de dégâts qui augmente la force de propulsion.",
                features: [
                    "<strong>Architecture Hybride C++/Blueprint :</strong> Utilisation complémentaire du C++ pour la logique de jeu et des Blueprints pour l'interfaçage visuel et les animations.",
                    "<strong>Système de Combat Complet :</strong> Attaques variées (sol/air), système de bouclier avec brisure, esquives, saisies et projections avec contrôle à la manette.",
                    "<strong>Modélisation et Animation 3D :</strong> Personnages créés sur Blender avec skeleton, skeletal mesh et physics asset. Animations personnalisées via des montages avec hitbox dynamiques.",
                    "<strong>Framework Unreal Engine :</strong> Exploitation des classes GameInstance, GameMode, GameState, PlayerController et AIController pour une architecture de jeu professionnelle.",
                    "<strong>Blueprint Animation :</strong> AnimGraph complexe gérant les transitions d'états (course, saut) et événements liés aux inputs joueurs via l'interface Action."
                ],
                imagePlaceholders: ["Banner de la réplique de Smash Bros", "Capture d'écran du gameplay"]
            },
            {
                title: "Algorithmes d'Intelligence Artificielle : Recherche, Jeux et Contraintes",
                subtitle: "Implémentation et analyse comparative d'algorithmes d'IA pour la résolution de problèmes complexes : pathfinding, jeux de stratégie et optimisation sous contraintes.",
                description: "Projet de recherche approfondi explorant différentes familles d'algorithmes d'intelligence artificielle appliqués à trois domaines distincts. Le premier volet porte sur les algorithmes de recherche de chemin optimal (BFS, A*, recherche gloutonne, beam search) pour simuler des trajets d'ambulances dans un environnement urbain avec obstacles. Le deuxième volet implémente l'algorithme Minimax avec optimisation Alpha-Bêta pour créer une IA compétitive dans le jeu Bomberman sous Unity. Le troisième volet utilise la programmation par contraintes (python-constraint) pour optimiser les horaires de vols et l'allocation des portes d'embarquement dans un aéroport.",
                features: [
                    "<strong>Recherche de Chemin :</strong> BFS (recherche en largeur), A* (heuristique + coût), recherche gloutonne, beam search, UCS (coût uniforme), Branch and Bound pour pathfinding optimal.",
                    "<strong>Minimax avec Alpha-Bêta :</strong> IA de jeu pour Bomberman en C# sous Unity, avec évaluation stratégique du plateau (sécurité, bonus, adversaires, explosions de bombes).",
                    "<strong>Programmation par Contraintes :</strong> Résolution de problèmes d'optimisation aéroportuaire avec gestion des contraintes de non-chevauchement, priorité, position, taille et correspondances.",
                    "<strong>Analyse Comparative :</strong> Étude des performances (temps de calcul, mémoire, optimalité) de chaque algorithme selon les contraintes du problème."
                ],
                imagePlaceholders: ["Résultats des algorithmes de pathfinding", "IA Minimax dans Bomberman"]
            },
            {
                title: "Ninja E-Motion : Jeu de Plateforme avec Inversion de Gravité",
                subtitle: "Jeu mobile primé développé lors de la Brussels Game Jam 2024, combinant mécanique de flip spatial et narration émotionnelle évolutive.",
                description: "Projet créé en 48 heures lors de la Brussels Game Jam 2024 (1er au 3 mars) sur le thème \"FLIP IT\". Ce jeu de plateforme met le joueur dans la peau d'un ninja capable de renverser l'espace verticalement d'un simple clic. L'originalité réside dans sa dimension narrative progressive : au fil de l'aventure, le ninja raconte son histoire de vie, et ses émotions influencent directement l'atmosphère visuelle et le gameplay. Le projet a remporté un prix lors de la game jam.",
                features: [
                    "<strong>Mécanique de Flip Spatial :</strong> Inversion de la gravité en temps réel au clic gauche, transformant le haut en bas et inversement pour résoudre des puzzles de plateforme.",
                    "<strong>Narration Émotionnelle :</strong> L'histoire personnelle du ninja se dévoile progressivement, ses émotions modifiant l'ambiance du jeu (couleurs, musique, difficulté).",
                    "<strong>Gameplay Exigeant :</strong> Toute collision avec un obstacle est fatale, nécessitant précision et timing parfait pour progresser.",
                    "<strong>Cross-Platform :</strong> Déployé sur Windows, MacOS, Linux et Android, avec version jouable directement dans le navigateur.",
                    "<strong>Audio Immersif :</strong> Bande sonore originale et sound design créés spécifiquement pour accompagner l'évolution émotionnelle du personnage."
                ],
                achievements: [
                    "<strong>Prix remporté</strong> lors de la Brussels Game Jam 2024",
                    "<strong>Développement accéléré</strong> en 48 heures par une équipe de 6 personnes",
                    "<strong>Rôle :</strong> Développeur principal - Programmation des mécaniques de jeu et système de flip spatial",
                    "<strong>Collaboration :</strong> Game Designer, Level Designer, Coordinateur, Compositeur et Sound Designer"
                ],
                videoPlaceholder: "Vidéo gameplay - Ninja E-Motion Trailer",
                imagePlaceholder: "Photo du prix remporté à la Brussels Game Jam 2024"
            }
        ],

        // Experience Section
        experienceTitle: "Expérience Professionnelle",
        internshipPeriod: "Stage - Février 2022",
        internshipTitle: "Développeur Full-Stack IoT - OPNS (Saint-Gilles, Bruxelles)",
        internshipDescription: "Conception et développement d'une application complète de gestion d'immeuble intelligent intégrant calorimètres connectés, thermostats Honeywell et capteurs de qualité d'air.",
        mainAchievements: "Réalisations principales",
        internshipAchievements: [
            "Développement frontend React avec PrimeReact pour interface de gestion multi-locataires",
            "Backend Node.js avec API REST pour communication avec thermostats Honeywell",
            "Intégration PostgreSQL pour stockage et analyse des données de consommation",
            "Bibliothèque C++ avec libcurl pour contrôle des thermostats Evotouch via API Honeywell",
            "Système de déchiffrement AES-128 pour calorimètres wMBus (868 MHz)",
            "Capteur IoT personnalisé ESP32 pour mesure CO2 avec mode DeepSleep optimisé",
            "Configuration RTL-SDR pour réception signaux radiofréquence longue portée"
        ],
        studentJobPeriod: "Job Étudiant",
        studentJobTitle: "Développeur Mobile & Unity - Entreprise Belge",
        studentJobDescription: "Développement d'applications mobiles multiplateformes avec Flutter et projets de réalité augmentée/virtuelle sous Unity pour solutions professionnelles.",
        studentJobTasks: [
            "Applications Flutter/Dart pour Android et iOS",
            "Projets Unity intégrant AR et systèmes interactifs",
            "Optimisation des performances pour appareils mobiles",
            "Collaboration avec équipes techniques et clients"
        ],
        volunteerPeriod: "Bénévolat",
        volunteerTitle: "Animateur - Plaine de Jeux pour Enfants",
        volunteerDescription: "Animation et encadrement d'activités ludiques et éducatives pour enfants, développant compétences en gestion de groupe et communication.",
        
        // Hobbies Section
        hobbiesTitle: "Loisirs et Centres d'Intérêt",
        hobbiesCategories: {
            sports: "Activités Sportives",
            intellectual: "Activités Intellectuelles",
            tech: "Projets Personnels Tech",
            social: "Engagement Social"
        },
        hobbies: {
            sports: ["Marche et randonnée", "Fitness et musculation", "Sports collectifs"],
            intellectual: ["Jeux de société stratégiques", "Échecs et puzzles logiques", "Veille technologique continue"],
            tech: ["Développement de jeux vidéo", "Expérimentation IoT et robotique", "Modélisation et impression 3D"],
            social: ["Animation pour enfants", "Partage de connaissances techniques", "Mentorat technique"]
        },
        personalPhilosophy: "Philosophie Personnelle",
        philosophyText: "Passionné par l'apprentissage continu et l'innovation technologique, je cherche constamment à élargir mes compétences et à relever de nouveaux défis techniques. Mon approche combine rigueur scientifique et créativité pour concevoir des solutions élégantes aux problèmes complexes. Je crois fermement en la puissance de la technologie pour améliorer la vie quotidienne et transformer les industries.",
        
        // Footer
        contactMe: "Me Contacter",
        availableFor: "Disponible pour opportunités professionnelles et collaborations techniques",
        copyright: "© 2025 Joe Nammour - Tous droits réservés"
    },
    
    en: {
        // Header
        languages: "Languages",
        french: "French (Fluent)",
        lebanese: "Lebanese (Native)",
        english: "English (Basic)",
        title: "Industrial Computer Engineer",
        jobTitle: "Industrial Computer Engineer | Full-Stack Developer | IoT & Embedded Systems Specialist",
        born: "Born on 04/27/1998 in Ixelles",
        nationality: "Nationality: Belgian",
        location: "Brussels, Belgium",
        
        // Navigation
        navProfile: "Profile",
        navStudies: "Studies",
        navSkills: "Skills",
        navProjects: "Major Projects",
        navExperience: "Experience",
        navHobbies: "Hobbies",
        navMobileTitle: "Navigation",

        // Profile Section
        profileTitle: "Professional Profile",
        profileDescription: "Industrial computer engineer passionate about technological innovation and intelligent systems. With in-depth expertise in software development, IoT, augmented reality, and artificial intelligence, I design complex technical solutions combining creativity and rigor. My academic journey at HE2B (ESI/ISIB) allowed me to develop a holistic vision of modern industrial systems, from design to implementation.",
        yearsStudy: "Years of study",
        projectsCompleted: "Completed projects",
        technologiesMastered: "Mastered technologies",
        languagesSpoken: "Languages spoken",
        expertiseDomains: "Areas of Expertise",
        expertiseList: [
            "Mobile (Flutter/Dart) and web application development (React, ASP.NET Core)",
            "Embedded systems and IoT (Arduino, Raspberry Pi, ESP32, Pozyx UWB)",
            "Augmented and virtual reality (Unity, Unreal Engine, Vuforia)",
            "Artificial intelligence and Machine Learning (NLP, behavioral systems)",
            "Industrial automation (STEP7, TIA Portal, LabVIEW, RoboDK)",
            "Databases and distributed architectures (PostgreSQL, MongoDB, MySQL)",
            "Industrial protocols (MQTT, wMBus, UWB, IRDA)"
        ],
        
        // Studies Section
        studiesTitle: "Academic Background",
        masterPeriod: "2022 - Present",
        masterTitle: "Master's in Industrial Computer Engineering",
        masterSchool: "HE2B ISIB (Brussels Higher Institute of Industrial Engineering)",
        masterDescription: "Advanced training covering the integration of modern industrial technologies, automation, embedded systems, and IoT. Specialization in intelligent systems, robotics, and distributed architectures.",
        masterItems: [
            "Industrial control systems and automation",
            "Industrial networks and communication protocols",
            "Artificial intelligence applied to industrial systems",
            "Complex technical project management",
            "Augmented reality, Machine learning, and 3D Tools"
        ],
        bachelorPeriod: "2017 - 2022",
        bachelorTitle: "Bachelor's in Industrial Computing",
        bachelorSchool: "HE2B ESI (Higher School of Computer Science)",
        bachelorDescription: "Comprehensive training in industrial computing combining programming, electronics, automation, and embedded systems. Development of cross-functional skills in project management and teamwork.",
        bachelorItems: [
            "Object-oriented programming and software development",
            "Electronics and microcontrollers (Arduino, Raspberry Pi)",
            "Databases and information systems",
            "Networks and computer security (Cisco)",
            "Analysis and modeling (UML, Merise)",
            "Industrial equipment interfacing",
            "Design office projects (Fake news factory)"
        ],
        technicianPeriod: "2015 - 2017",
        technicianTitle: "High School Diploma + IT Technician License",
        technicianSchool: "René Cartigny Technical Institute",
        technicianDescription: "In-depth technical training in computer maintenance, networks, and system administration. Acquisition of fundamentals in electronics and embedded systems.",
        technicianItems: [
            "Computer system maintenance and troubleshooting",
            "Network configuration and administration",
            "Introduction to programming and operating systems"
        ],
        
        // Skills Section
        skillsTitle: "Detailed Technical Skills",
        skillCategories: {
            programming: "Programming Languages",
            webMobile: "Mobile & Web Development",
            embedded: "Embedded Systems & IoT",
            ar3d: "Augmented Reality & 3D",
            ai: "Artificial Intelligence",
            database: "Databases",
            industrial: "Industrial Automation",
            analysis: "Analysis & Modeling",
            network: "Networks & Systems",
            tools: "Tools & Methodologies"
        },
        skills: {
            programming: ["Java (Object-Oriented, Android)", "JavaScript/TypeScript (Full-Stack)", "C / C++ (Embedded Systems)", "C# (Unity, .NET Core)", "Python (AI, Automation, IoT)", "Dart (Flutter Mobile)"],
            webMobile: ["Flutter/Dart (Cross-platform applications)", "React/React Native (Modern frontend)", "ASP.NET Core (Robust backend)", "Node.js (Real-time servers)", "HTML5/CSS3 (Responsive interfaces)", "PrimeReact (UI Components)"],
            embedded: ["Arduino (Electronic prototyping)", "Raspberry Pi (Python/C++)", "ESP32 (Wi-Fi, DeepSleep, sensors)", "Pozyx UWB (Precise localization)", "MQ135, CCS811, BMX280 sensors", "MQTT (IoT Protocol)"],
            ar3d: ["Unity (Games, AR, Simulations)", "Unreal Engine (C++, Blueprints)", "Vuforia (AR Recognition)", "Blender (3D Modeling)", "Three.js (3D web visualization)"],
            ai: ["NLP (GPT-2, GPT-4, Transformers)", "PyTorch & Keras (Deep Learning)", "TensorFlow (Neural Networks)", "Behavioral Systems (Behavior Trees)", "Fuzzy Logic"],
            database: ["PostgreSQL (Advanced relational)", "MySQL (Classic RDBMS)", "MongoDB (NoSQL)", "SQLite (Mobile embedded)", "Query optimization"],
            industrial: ["LabVIEW (Virtual Instrumentation)", "STEP7 / TIA Portal (Siemens PLCs)", "RoboDK (Robotic Programming)", "Kinect (Motion Capture)", "LEGO Mindstorms EV3"],
            analysis: ["UML (Class, sequence diagrams)", "Merise (MCD, MTD, MCT, MTT)", "Software architecture", "Design Patterns"],
            network: ["Linux (Administration, Bash)", "Cisco (Network configuration)", "RF Protocols (wMBus, UWB, 868MHz)", "REST APIs & WebSockets"],
            tools: ["Git (Code versioning)", "Docker (Containerization)", "Agile/Scrum (Project management)", "CI/CD (Continuous Integration)"]
        },
        
        // Projects Section
        projectsTitle: "Personal Projects and Achievements",
        keyFeatures: "Key Features",
        implementedAlgorithms: "Implemented Algorithms",
        teamAchievements: "Team and Achievements",
        projects: [
            {
                title: "Interactive AR Planet: Ecosystem Simulation in Augmented Reality",
                subtitle: "A virtual microcosm on a physical sphere, where climate and artificial life are influenced by real-world geolocation.",
                description: "This ambitious project merges augmented reality and artificial intelligence to create an interactive planet simulation. Using a smartphone, users observe a virtual civilization evolving on a physical sphere. The novelty lies in the integration of a dynamic climate system based on UWB (Pozyx) location technology and the MQTT protocol, where the physical position of \"tags\" representing the planet and the sun directly influences the weather, topography, and behavior of the inhabitants in the virtual world.",
                features: [
                    "<strong>3D Object Recognition:</strong> Using Vuforia Model Target for robust AR tracking of the physical sphere.",
                    "<strong>Behavioral AI:</strong> Inhabitants (created in Blender and Unity) follow day/night cycles, perform jobs (gardener, lumberjack, guard), and interact socially using behavior trees and fuzzy logic.",
                    "<strong>Dynamic Climate:</strong> The relative position of UWB sensors (planet/sun) modifies the simulation's climate in real-time (hot/cold zones), deforming the terrain and affecting vegetation.",
                    "<strong>Life Cycle:</strong> A virtual civilization that is born, develops, builds homes, and can even launch a space program after 300 years of simulated evolution."
                ],
                videoPlaceholder: "Video Demonstration - Interactive AR Planet",
                imagePlaceholder: "Image of the 3D model rendering in Vuforia"
            },
            {
                title: "Fake News Factory: AI, Correlation, and Disinformation",
                subtitle: "A fallacious headline generator to demonstrate the dangers of confusing correlation with causation, based on Google Trends data and NLP models.",
                description: "This project highlights the ease with which misleading information can be generated by exploiting statistical correlations. The program analyzes search popularity data via Google Trends (Pytrends) to find statistically significant (but causally unrelated) links between different keywords. Then, a natural language processing (NLP) model, initially my own model then a GPT-2 then a GPT-4, is used to generate a plausible \"fake news\" headline by combining these correlated words, thus illustrating how data can be manipulated.",
                features: [
                    "<strong>Correlation Analysis:</strong> Using Spearman's correlation to identify non-linear relationships between keyword search trends.",
                    "<strong>AI Text Generation:</strong> Integration of pre-trained NLP models (GPT-2, GPT-4) via the Hugging Face Transformers library and an NLP model trained on newspapers to create coherent and misleading news headlines.",
                    "<strong>Data Acquisition:</strong> Connecting to the Google Trends API via Pytrends to retrieve real-time search data.",
                    "<strong>Visualization:</strong> Using Matplotlib to display graphs of correlated keyword trends, reinforcing the illusion of a real link."
                ],
                imagePlaceholders: ["Example of a correlation matrix", "AI-generated fake news headline"]
            },
            {
                title: "Motion Supervision System with Kinect",
                subtitle: "Control of a LEGO Mindstorms EV3 robot through gestures and body postures, captured by a Kinect and interpreted via LabVIEW.",
                description: "This industrial interfacing project explores the control of equipment through human movement. A Kinect camera is used to capture the 3D skeleton of an operator in real-time. The LabVIEW software, via the Kinesthesia library, analyzes the coordinates of the joints (\"bones\") to recognize specific postures. Each posture (arms raised, arms outstretched, etc.) is mapped to a command (move forward, backward, turn, shoot) which is then transmitted via Bluetooth to a LEGO Mindstorms EV3 mobile robot. The robot is also equipped with an ultrasonic sensor for obstacle avoidance.",
                features: [
                    "<strong>3D Motion Capture:</strong> Using the Kinect's depth sensor to obtain the X, Y, Z positions of 20 body joints.",
                    "<strong>Posture Recognition:</strong> Programming in LabVIEW to define conditions on limb positions (e.g., if the right hand's Y-coordinate > 0.4, trigger an action).",
                    "<strong>Robotic Control:</strong> Piloting the LEGO Mindstorms EV3 motors (wheels and ball-launching cannon) based on detected postures.",
                    "<strong>Integrated Safety:</strong> An ultrasonic sensor on the robot prevents collisions by detecting obstacles within 20 cm."
                ],
                videoPlaceholder: "Demonstration and explanation video - Kinect Mindstorms",
                imagePlaceholder: "Photo of the LEGO Mindstorms EV3 robot"
            },
            {
                title: "Super Smash Bros - ESI Remake: Fighting Game in C++ and Unreal Engine",
                subtitle: "Remake of a fighting/platformer game developed in C++ with Unreal Engine, integrating 3D modeling, animations, and artificial intelligence.",
                description: "Ambitious collaborative project to recreate a Super Smash Bros-style fighting game using the Unreal Engine. This project combines advanced C++ programming and Blueprint scripting to create a complete multiplayer fighting game with 3D animated characters. The gameplay is based on knocking opponents out of the arena's boundaries rather than a traditional health point system, with a damage percentage system that increases knockback force.",
                features: [
                    "<strong>Hybrid C++/Blueprint Architecture:</strong> Complementary use of C++ for game logic and Blueprints for visual interfacing and animations.",
                    "<strong>Complete Combat System:</strong> Varied attacks (ground/air), a shield system with breaking mechanics, dodges, grabs, and throws with controller support.",
                    "<strong>3D Modeling and Animation:</strong> Characters created in Blender with skeletons, skeletal meshes, and physics assets. Custom animations via montages with dynamic hitboxes.",
                    "<strong>Unreal Engine Framework:</strong> Utilization of GameInstance, GameMode, GameState, PlayerController, and AIController classes for a professional game architecture.",
                    "<strong>Blueprint Animation:</strong> Complex AnimGraph managing state transitions (running, jumping) and events linked to player inputs via the Action interface."
                ],
                imagePlaceholders: ["Banner of the Smash Bros replica", "Screenshot of gameplay"]
            },
            {
                title: "Artificial Intelligence Algorithms: Search, Games, and Constraints",
                subtitle: "Implementation and comparative analysis of AI algorithms for solving complex problems: pathfinding, strategy games, and constrained optimization.",
                description: "In-depth research project exploring different families of artificial intelligence algorithms applied to three distinct domains. The first part focuses on optimal pathfinding algorithms (BFS, A*, greedy search, beam search) to simulate ambulance routes in an urban environment with obstacles. The second part implements the Minimax algorithm with Alpha-Beta pruning to create a competitive AI in the game Bomberman in Unity. The third part uses constraint programming (python-constraint) to optimize flight schedules and gate allocation at an airport.",
                features: [
                    "<strong>Pathfinding:</strong> BFS (Breadth-First Search), A* (heuristic + cost), greedy search, beam search, UCS (Uniform Cost Search), Branch and Bound for optimal pathfinding.",
                    "<strong>Minimax with Alpha-Beta:</strong> Game AI for Bomberman in C# under Unity, with strategic board evaluation (safety, power-ups, opponents, bomb explosions).",
                    "<strong>Constraint Programming:</strong> Solving airport optimization problems with management of non-overlapping, priority, position, size, and connection constraints.",
                    "<strong>Comparative Analysis:</strong> Study of the performance (computation time, memory, optimality) of each algorithm according to the problem's constraints."
                ],
                imagePlaceholders: ["Results of pathfinding algorithms", "Minimax AI in Bomberman"]
            },
            {
                title: "Ninja E-Motion: Platform Game with Gravity Inversion",
                subtitle: "Award-winning mobile game developed during the Brussels Game Jam 2024, combining spatial flip mechanics and evolving emotional narrative.",
                description: "Project created in 48 hours during the Brussels Game Jam 2024 (March 1-3) on the theme \"FLIP IT\". This platformer game puts the player in the role of a ninja who can flip the vertical space with a single click. The originality lies in its progressive narrative dimension: as the adventure unfolds, the ninja tells his life story, and his emotions directly influence the visual atmosphere and gameplay. The project won an award at the game jam.",
                features: [
                    "<strong>Spatial Flip Mechanic:</strong> Real-time gravity inversion on a left-click, turning top into bottom and vice versa to solve platforming puzzles.",
                    "<strong>Emotional Narrative:</strong> The ninja's personal story unfolds progressively, with his emotions altering the game's mood (colors, music, difficulty).",
                    "<strong>Challenging Gameplay:</strong> Any collision with an obstacle is fatal, requiring precision and perfect timing to progress.",
                    "<strong>Cross-Platform:</strong> Deployed on Windows, MacOS, Linux, and Android, with a version playable directly in the browser.",
                    "<strong>Immersive Audio:</strong> Original soundtrack and sound design created specifically to accompany the character's emotional evolution."
                ],
                achievements: [
                    "<strong>Award won</strong> at the Brussels Game Jam 2024",
                    "<strong>Accelerated development</strong> in 48 hours by a team of 6 people",
                    "<strong>Role:</strong> Lead Developer - Programming game mechanics and the spatial flip system",
                    "<strong>Collaboration:</strong> Game Designer, Level Designer, Coordinator, Composer, and Sound Designer"
                ],
                videoPlaceholder: "Gameplay Video - Ninja E-Motion Trailer",
                imagePlaceholder: "Photo of the award won at the Brussels Game Jam 2024"
            }
        ],

        // Experience Section
        experienceTitle: "Professional Experience",
        internshipPeriod: "Internship - February 2022",
        internshipTitle: "Full-Stack IoT Developer - OPNS (Saint-Gilles, Brussels)",
        internshipDescription: "Design and development of a complete smart building management application integrating connected heat meters, Honeywell thermostats, and air quality sensors.",
        mainAchievements: "Main Achievements",
        internshipAchievements: [
            "React frontend development with PrimeReact for a multi-tenant management interface",
            "Node.js backend with REST API for communication with Honeywell thermostats",
            "PostgreSQL integration for storage and analysis of consumption data",
            "C++ library with libcurl for controlling Evotouch thermostats via the Honeywell API",
            "AES-128 decryption system for wMBus (868 MHz) heat meters",
            "Custom ESP32 IoT sensor for CO2 measurement with optimized DeepSleep mode",
            "RTL-SDR configuration for receiving long-range radio frequency signals"
        ],
        studentJobPeriod: "Student Job",
        studentJobTitle: "Mobile & Unity Developer - Belgian Company",
        studentJobDescription: "Development of cross-platform mobile applications with Flutter and augmented/virtual reality projects under Unity for professional solutions.",
        studentJobTasks: [
            "Flutter/Dart applications for Android and iOS",
            "Unity projects integrating AR and interactive systems",
            "Performance optimization for mobile devices",
            "Collaboration with technical teams and clients"
        ],
        volunteerPeriod: "Volunteering",
        volunteerTitle: "Animator - Children's Playground",
        volunteerDescription: "Animation and supervision of fun and educational activities for children, developing group management and communication skills.",
        
        // Hobbies Section
        hobbiesTitle: "Hobbies and Interests",
        hobbiesCategories: {
            sports: "Sports Activities",
            intellectual: "Intellectual Activities",
            tech: "Personal Tech Projects",
            social: "Social Engagement"
        },
        hobbies: {
            sports: ["Walking and hiking", "Fitness and weightlifting", "Team sports"],
            intellectual: ["Strategic board games", "Chess and logic puzzles", "Continuous technology watch"],
            tech: ["Video game development", "IoT and robotics experimentation", "3D modeling and printing"],
            social: ["Animation for children", "Sharing technical knowledge", "Technical mentoring"]
        },
        personalPhilosophy: "Personal Philosophy",
        philosophyText: "Passionate about continuous learning and technological innovation, I constantly seek to expand my skills and take on new technical challenges. My approach combines scientific rigor and creativity to design elegant solutions to complex problems. I firmly believe in the power of technology to improve daily life and transform industries.",
        
        // Footer
        contactMe: "Contact Me",
        availableFor: "Available for professional opportunities and technical collaborations",
        copyright: "© 2025 Joe Nammour - All rights reserved"
    },
    
    es: {
        // Header
        languages: "Idiomas",
        french: "Francés (Fluido)",
        lebanese: "Libanés (Nativo)",
        english: "Inglés (Básico)",
        title: "Ingeniero Informático Industrial",
        jobTitle: "Ingeniero Informático Industrial | Desarrollador Full-Stack | Especialista en IoT y Sistemas Embebidos",
        born: "Nacido el 27/04/1998 en Ixelles",
        nationality: "Nacionalidad: Belga",
        location: "Bruselas, Bélgica",
        
        // Navigation
        navProfile: "Perfil",
        navStudies: "Estudios",
        navSkills: "Competencias",
        navProjects: "Proyectos",
        navExperience: "Experiencia",
        navHobbies: "Aficiones",
        navMobileTitle: "Navegación",

        // Profile Section
        profileTitle: "Perfil Profesional",
        profileDescription: "Ingeniero informático industrial apasionado por la innovación tecnológica y los sistemas inteligentes. Con una profunda experiencia en desarrollo de software, IoT, realidad aumentada e inteligencia artificial, diseño soluciones técnicas complejas que combinan creatividad y rigor. Mi trayectoria académica en HE2B (ESI/ISIB) me ha permitido desarrollar una visión holística de los sistemas industriales modernos, desde el diseño hasta la implementación.",
        yearsStudy: "Años de estudio",
        projectsCompleted: "Proyectos realizados",
        technologiesMastered: "Tecnologías dominadas",
        languagesSpoken: "Idiomas hablados",
        expertiseDomains: "Áreas de especialización",
        expertiseList: [
            "Desarrollo de aplicaciones móviles (Flutter/Dart) y web (React, ASP.NET Core)",
            "Sistemas embebidos e IoT (Arduino, Raspberry Pi, ESP32, Pozyx UWB)",
            "Realidad aumentada y virtual (Unity, Unreal Engine, Vuforia)",
            "Inteligencia artificial y Machine Learning (NLP, sistemas de comportamiento)",
            "Automatización industrial (STEP7, TIA Portal, LabVIEW, RoboDK)",
            "Bases de datos y arquitecturas distribuidas (PostgreSQL, MongoDB, MySQL)",
            "Protocolos industriales (MQTT, wMBus, UWB, IRDA)"
        ],
        
        // Studies Section
        studiesTitle: "Formación Académica",
        masterPeriod: "2022 - Presente",
        masterTitle: "Máster en Ingeniería Informática Industrial",
        masterSchool: "HE2B ISIB (Instituto Superior Industrial de Bruselas)",
        masterDescription: "Formación avanzada que cubre la integración de tecnologías industriales modernas, la automatización, los sistemas embebidos y el IoT. Especialización en sistemas inteligentes, robótica y arquitecturas distribuidas.",
        masterItems: [
            "Sistemas de control industrial y automatización",
            "Redes industriales y protocolos de comunicación",
            "Inteligencia artificial aplicada a sistemas industriales",
            "Gestión de proyectos técnicos complejos",
            "Realidad aumentada, Machine learning y Herramientas 3D"
        ],
        bachelorPeriod: "2017 - 2022",
        bachelorTitle: "Grado en Informática Industrial",
        bachelorSchool: "HE2B ESI (Escuela Superior de Informática)",
        bachelorDescription: "Formación completa en informática industrial que combina programación, electrónica, automatización y sistemas embebidos. Desarrollo de competencias transversales en gestión de proyectos y trabajo en equipo.",
        bachelorItems: [
            "Programación orientada a objetos y desarrollo de software",
            "Electrónica y microcontroladores (Arduino, Raspberry Pi)",
            "Bases de datos y sistemas de información",
            "Redes y seguridad informática (Cisco)",
            "Análisis y modelado (UML, Merise)",
            "Interfaz con equipos industriales",
            "Proyectos de oficina de diseño (Fábrica de noticias falsas)"
        ],
        technicianPeriod: "2015 - 2017",
        technicianTitle: "Bachillerato + Título de Técnico en Informática",
        technicianSchool: "Instituto Técnico René Cartigny",
        technicianDescription: "Formación técnica profunda en mantenimiento informático, redes y administración de sistemas. Adquisición de los fundamentos en electrónica y sistemas embebidos.",
        technicianItems: [
            "Mantenimiento y resolución de problemas de sistemas informáticos",
            "Configuración y administración de redes",
            "Iniciación a la programación y a los sistemas operativos"
        ],
        
        // Skills Section
        skillsTitle: "Competencias Técnicas Detalladas",
        skillCategories: {
            programming: "Lenguajes de Programación",
            webMobile: "Desarrollo Móvil y Web",
            embedded: "Sistemas Embebidos e IoT",
            ar3d: "Realidad Aumentada y 3D",
            ai: "Inteligencia Artificial",
            database: "Bases de Datos",
            industrial: "Automatización Industrial",
            analysis: "Análisis y Modelado",
            network: "Redes y Sistemas",
            tools: "Herramientas y Metodologías"
        },
        skills: {
            programming: ["Java (Orientado a Objetos, Android)", "JavaScript/TypeScript (Full-Stack)", "C / C++ (Sistemas embebidos)", "C# (Unity, .NET Core)", "Python (IA, Automatización, IoT)", "Dart (Flutter Móvil)"],
            webMobile: ["Flutter/Dart (Aplicaciones multiplataforma)", "React/React Native (Frontend moderno)", "ASP.NET Core (Backend robusto)", "Node.js (Servidores en tiempo real)", "HTML5/CSS3 (Interfaces responsivas)", "PrimeReact (Componentes de UI)"],
            embedded: ["Arduino (Prototipado electrónico)", "Raspberry Pi (Python/C++)", "ESP32 (Wi-Fi, DeepSleep, sensores)", "Pozyx UWB (Localización precisa)", "Sensores MQ135, CCS811, BMX280", "MQTT (Protocolo IoT)"],
            ar3d: ["Unity (Juegos, RA, Simulaciones)", "Unreal Engine (C++, Blueprints)", "Vuforia (Reconocimiento RA)", "Blender (Modelado 3D)", "Three.js (Visualización web 3D)"],
            ai: ["NLP (GPT-2, GPT-4, Transformers)", "PyTorch & Keras (Deep Learning)", "TensorFlow (Redes neuronales)", "Sistemas de comportamiento (Behavior Trees)", "Lógica difusa (Fuzzy Logic)"],
            database: ["PostgreSQL (Relacional avanzado)", "MySQL (SGBD clásico)", "MongoDB (NoSQL)", "SQLite (Embebido móvil)", "Optimización de consultas"],
            industrial: ["LabVIEW (Instrumentación virtual)", "STEP7 / TIA Portal (Autómatas Siemens)", "RoboDK (Programación robótica)", "Kinect (Captura de movimiento)", "LEGO Mindstorms EV3"],
            analysis: ["UML (Diagramas de clases, secuencias)", "Merise (MCD, MTD, MCT, MTT)", "Arquitectura de software", "Patrones de diseño"],
            network: ["Linux (Administración, Bash)", "Cisco (Configuración de redes)", "Protocolos RF (wMBus, UWB, 868MHz)", "APIs REST y WebSockets"],
            tools: ["Git (Control de versiones)", "Docker (Contenerización)", "Agile/Scrum (Gestión de proyectos)", "CI/CD (Integración continua)"]
        },
        
        // Projects Section
        projectsTitle: "Proyectos Personales y Logros",
        keyFeatures: "Funcionalidades Clave",
        implementedAlgorithms: "Algoritmos Implementados",
        teamAchievements: "Equipo y Logros",
        projects: [
            {
                title: "Planeta RA Interactivo: Simulación de Ecosistema en Realidad Aumentada",
                subtitle: "Un microcosmos virtual en una esfera física, donde el clima y la vida artificial son influenciados por la geolocalización del mundo real.",
                description: "Este ambicioso proyecto fusiona la realidad aumentada y la inteligencia artificial para crear una simulación de planeta interactiva. Usando un smartphone, los usuarios observan una civilización virtual evolucionar en una esfera física. La originalidad reside en la integración de un sistema climático dinámico basado en la tecnología de localización UWB (Pozyx) y el protocolo MQTT, donde la posición física de \"tags\" que representan el planeta y el sol influye directamente en el clima, la topografía y el comportamiento de los habitantes en el mundo virtual.",
                features: [
                    "<strong>Reconocimiento de Objeto 3D:</strong> Uso de Vuforia Model Target para un seguimiento RA robusto de la esfera física.",
                    "<strong>IA de Comportamiento:</strong> Los habitantes (creados en Blender y Unity) siguen ciclos de día/noche, ejercen oficios (jardinero, leñador, guardia) e interactúan socialmente gracias a árboles de comportamiento y lógica difusa.",
                    "<strong>Clima Dinámico:</strong> La posición relativa de los sensores UWB (planeta/sol) modifica en tiempo real el clima de la simulación (zonas cálidas/frías), deformando el terreno y afectando a la vegetación.",
                    "<strong>Ciclo de Vida:</strong> Una civilización virtual que nace, se desarrolla, construye viviendas e incluso puede lanzar un programa espacial después de 300 años de evolución simulada."
                ],
                videoPlaceholder: "Video Demostración - Planeta RA Interactivo",
                imagePlaceholder: "Imagen del renderizado del modelo 3D en Vuforia"
            },
            {
                title: "Fábrica de Noticias Falsas: IA, Correlación y Desinformación",
                subtitle: "Un generador de titulares falaces para demostrar los peligros de confundir correlación con causalidad, basado en datos de Google Trends y modelos NLP.",
                description: "Este proyecto destaca la facilidad con la que se puede generar información engañosa explotando correlaciones estadísticas. El programa analiza los datos de popularidad de búsqueda a través de Google Trends (Pytrends) para encontrar vínculos estadísticamente significativos (pero sin relación causal) entre diferentes palabras clave. Luego, un modelo de procesamiento del lenguaje natural (NLP), inicialmente mi propio modelo, luego un GPT-2 y después un GPT-4, se utiliza para generar un titular de \"noticia falsa\" plausible combinando estas palabras correlacionadas, ilustrando así cómo se pueden manipular los datos.",
                features: [
                    "<strong>Análisis de Correlación:</strong> Uso de la correlación de Spearman para identificar relaciones no lineales entre las tendencias de búsqueda de palabras clave.",
                    "<strong>Generación de Texto por IA:</strong> Integración de modelos NLP preentrenados (GPT-2, GPT-4) a través de la librería Hugging Face Transformers y de un modelo NLP entrenado con periódicos para crear titulares de noticias coherentes y engañosos.",
                    "<strong>Adquisición de Datos:</strong> Conexión a la API de Google Trends a través de Pytrends para recuperar datos de búsqueda en tiempo real.",
                    "<strong>Visualización:</strong> Uso de Matplotlib para mostrar gráficos de las tendencias de búsqueda de las palabras correlacionadas, reforzando la ilusión de un vínculo real."
                ],
                imagePlaceholders: ["Ejemplo de matriz de correlación", "Titular de noticia falsa generado por la IA"]
            },
            {
                title: "Sistema de Supervisión por Movimientos con Kinect",
                subtitle: "Control de un robot LEGO Mindstorms EV3 mediante gestos y posturas corporales, capturados por una Kinect e interpretados a través de LabVIEW.",
                description: "Este proyecto de interfaz industrial explora el control de equipos mediante el movimiento humano. Se utiliza una cámara Kinect para capturar el esqueleto 3D de un operador en tiempo real. El software LabVIEW, a través de la librería Kinesthesia, analiza las coordenadas de las articulaciones (\"bones\") para reconocer posturas específicas. Cada postura (brazos levantados, brazos extendidos, etc.) se asigna a un comando (avanzar, retroceder, girar, disparar) que luego se transmite por Bluetooth a un robot móvil LEGO Mindstorms EV3. El robot también está equipado con un sensor de ultrasonidos para evitar obstáculos.",
                features: [
                    "<strong>Captura de Movimiento 3D:</strong> Uso del sensor de profundidad de la Kinect para obtener las posiciones X, Y, Z de 20 articulaciones del cuerpo.",
                    "<strong>Reconocimiento de Posturas:</strong> Programación en LabVIEW para definir condiciones sobre las posiciones de los miembros (ej: si la mano derecha tiene una coordenada Y > 0.4, activar una acción).",
                    "<strong>Control Robótico:</strong> Manejo de los motores del LEGO Mindstorms EV3 (ruedas y cañón lanzador de bolas) en función de las posturas detectadas.",
                    "<strong>Seguridad Integrada:</strong> Un sensor de ultrasonidos en el robot previene colisiones al detectar obstáculos a menos de 20 cm."
                ],
                videoPlaceholder: "Video de demostración y explicación - Kinect Mindstorms",
                imagePlaceholder: "Foto del robot LEGO Mindstorms EV3"
            },
            {
                title: "Super Smash Bros - ESI Remake: Juego de Lucha en C++ y Unreal Engine",
                subtitle: "Remake de un juego de lucha/plataformas desarrollado en C++ con Unreal Engine, integrando modelado 3D, animaciones e inteligencia artificial.",
                description: "Ambicioso proyecto colaborativo para recrear un juego de lucha al estilo de Super Smash Bros utilizando el motor Unreal Engine. Este proyecto combina programación avanzada en C++ y scripting con Blueprint para crear un juego de lucha multijugador completo con personajes animados en 3D. La jugabilidad se basa en expulsar a los oponentes de los límites de la arena en lugar de un sistema de puntos de vida clásico, con un sistema de porcentaje de daño que aumenta la fuerza de propulsión.",
                features: [
                    "<strong>Arquitectura Híbrida C++/Blueprint:</strong> Uso complementario de C++ para la lógica del juego y de Blueprints para la interfaz visual y las animaciones.",
                    "<strong>Sistema de Combate Completo:</strong> Ataques variados (suelo/aire), sistema de escudo con rotura, esquivas, agarres y lanzamientos con control por mando.",
                    "<strong>Modelado y Animación 3D:</strong> Personajes creados en Blender con esqueleto, malla esquelética y assets de físicas. Animaciones personalizadas mediante montajes con hitboxes dinámicas.",
                    "<strong>Framework de Unreal Engine:</strong> Explotación de las clases GameInstance, GameMode, GameState, PlayerController y AIController para una arquitectura de juego profesional.",
                    "<strong>Animación con Blueprint:</strong> Complejo AnimGraph que gestiona las transiciones de estado (correr, saltar) y eventos vinculados a las entradas del jugador a través de la interfaz Action."
                ],
                imagePlaceholders: ["Banner de la réplica de Smash Bros", "Captura de pantalla del gameplay"]
            },
            {
                title: "Algoritmos de Inteligencia Artificial: Búsqueda, Juegos y Restricciones",
                subtitle: "Implementación y análisis comparativo de algoritmos de IA para la resolución de problemas complejos: búsqueda de caminos, juegos de estrategia y optimización con restricciones.",
                description: "Proyecto de investigación en profundidad que explora diferentes familias de algoritmos de inteligencia artificial aplicados a tres dominios distintos. La primera parte se centra en los algoritmos de búsqueda de camino óptimo (BFS, A*, búsqueda codiciosa, beam search) para simular trayectos de ambulancias en un entorno urbano con obstáculos. La segunda parte implementa el algoritmo Minimax con poda Alfa-Beta para crear una IA competitiva en el juego Bomberman en Unity. La tercera parte utiliza la programación por restricciones (python-constraint) para optimizar los horarios de vuelos y la asignación de puertas de embarque en un aeropuerto.",
                features: [
                    "<strong>Búsqueda de Caminos:</strong> BFS (búsqueda en anchura), A* (heurística + coste), búsqueda codiciosa, beam search, UCS (coste uniforme), Branch and Bound para búsqueda de camino óptimo.",
                    "<strong>Minimax con Alfa-Beta:</strong> IA de juego para Bomberman en C# bajo Unity, con evaluación estratégica del tablero (seguridad, bonus, adversarios, explosiones de bombas).",
                    "<strong>Programación por Restricciones:</strong> Resolución de problemas de optimización aeroportuaria con gestión de restricciones de no solapamiento, prioridad, posición, tamaño y correspondencias.",
                    "<strong>Análisis Comparativo:</strong> Estudio del rendimiento (tiempo de cálculo, memoria, optimalidad) de cada algoritmo según las restricciones del problema."
                ],
                imagePlaceholders: ["Resultados de los algoritmos de búsqueda de caminos", "IA Minimax en Bomberman"]
            },
            {
                title: "Ninja E-Motion: Juego de Plataformas con Inversión de Gravedad",
                subtitle: "Juego móvil premiado desarrollado durante la Brussels Game Jam 2024, que combina una mecánica de inversión espacial y una narrativa emocional evolutiva.",
                description: "Proyecto creado en 48 horas durante la Brussels Game Jam 2024 (del 1 al 3 de marzo) sobre el tema \"FLIP IT\". Este juego de plataformas pone al jugador en la piel de un ninja capaz de invertir el espacio verticalmente con un simple clic. La originalidad reside en su dimensión narrativa progresiva: a lo largo de la aventura, el ninja cuenta su historia de vida, y sus emociones influyen directamente en la atmósfera visual y la jugabilidad. El proyecto ganó un premio en la game jam.",
                features: [
                    "<strong>Mecánica de Inversión Espacial:</strong> Inversión de la gravedad en tiempo real con un clic izquierdo, convirtiendo arriba en abajo y viceversa para resolver puzles de plataformas.",
                    "<strong>Narrativa Emocional:</strong> La historia personal del ninja se desvela progresivamente, y sus emociones modifican el ambiente del juego (colores, música, dificultad).",
                    "<strong>Jugabilidad Exigente:</strong> Cualquier colisión con un obstáculo es fatal, lo que requiere precisión y un timing perfecto para progresar.",
                    "<strong>Multiplataforma:</strong> Desplegado en Windows, MacOS, Linux y Android, con una versión jugable directamente en el navegador.",
                    "<strong>Audio Inmersivo:</strong> Banda sonora original y diseño de sonido creados específicamente para acompañar la evolución emocional del personaje."
                ],
                achievements: [
                    "<strong>Premio ganado</strong> en la Brussels Game Jam 2024",
                    "<strong>Desarrollo acelerado</strong> en 48 horas por un equipo de 6 personas",
                    "<strong>Rol:</strong> Desarrollador principal - Programación de las mecánicas de juego y el sistema de inversión espacial",
                    "<strong>Colaboración:</strong> Diseñador de Juego, Diseñador de Niveles, Coordinador, Compositor y Diseñador de Sonido"
                ],
                videoPlaceholder: "Video de gameplay - Tráiler de Ninja E-Motion",
                imagePlaceholder: "Foto del premio ganado en la Brussels Game Jam 2024"
            }
        ],

        // Experience Section
        experienceTitle: "Experiencia Profesional",
        internshipPeriod: "Pasantía - Febrero 2022",
        internshipTitle: "Desarrollador Full-Stack IoT - OPNS (Saint-Gilles, Bruselas)",
        internshipDescription: "Diseño y desarrollo de una aplicación completa de gestión de edificios inteligentes que integra calorímetros conectados, termostatos Honeywell y sensores de calidad del aire.",
        mainAchievements: "Logros principales",
        internshipAchievements: [
            "Desarrollo frontend en React con PrimeReact para interfaz de gestión multi-inquilino",
            "Backend en Node.js con API REST para comunicación con termostatos Honeywell",
            "Integración de PostgreSQL para almacenamiento y análisis de datos de consumo",
            "Librería en C++ con libcurl para control de termostatos Evotouch a través de la API de Honeywell",
            "Sistema de descifrado AES-128 para calorímetros wMBus (868 MHz)",
            "Sensor IoT personalizado ESP32 para medición de CO2 con modo DeepSleep optimizado",
            "Configuración de RTL-SDR para recepción de señales de radiofrecuencia de largo alcance"
        ],
        studentJobPeriod: "Trabajo de Estudiante",
        studentJobTitle: "Desarrollador Móvil y Unity - Empresa Belga",
        studentJobDescription: "Desarrollo de aplicaciones móviles multiplataforma con Flutter y proyectos de realidad aumentada/virtual bajo Unity para soluciones profesionales.",
        studentJobTasks: [
            "Aplicaciones Flutter/Dart para Android e iOS",
            "Proyectos en Unity que integran RA y sistemas interactivos",
            "Optimización del rendimiento para dispositivos móviles",
            "Colaboración con equipos técnicos y clientes"
        ],
        volunteerPeriod: "Voluntariado",
        volunteerTitle: "Animador - Parque Infantil",
        volunteerDescription: "Animación y supervisión de actividades lúdicas y educativas para niños, desarrollando competencias en gestión de grupos y comunicación.",
        
        // Hobbies Section
        hobbiesTitle: "Aficiones y Centros de Interés",
        hobbiesCategories: {
            sports: "Actividades Deportivas",
            intellectual: "Actividades Intelectuales",
            tech: "Proyectos Tecnológicos Personales",
            social: "Compromiso Social"
        },
        hobbies: {
            sports: ["Caminata y senderismo", "Fitness y musculación", "Deportes de equipo"],
            intellectual: ["Juegos de mesa estratégicos", "Ajedrez y puzles de lógica", "Vigilancia tecnológica continua"],
            tech: ["Desarrollo de videojuegos", "Experimentación con IoT y robótica", "Modelado e impresión 3D"],
            social: ["Animación para niños", "Compartir conocimientos técnicos", "Mentoría técnica"]
        },
        personalPhilosophy: "Filosofía Personal",
        philosophyText: "Apasionado por el aprendizaje continuo y la innovación tecnológica, busco constantemente ampliar mis competencias y afrontar nuevos desafíos técnicos. Mi enfoque combina el rigor científico y la creatividad para diseñar soluciones elegantes a problemas complejos. Creo firmemente en el poder de la tecnología para mejorar la vida cotidiana y transformar las industrias.",
        
        // Footer
        contactMe: "Contactarme",
        availableFor: "Disponible para oportunidades profesionales y colaboraciones técnicas",
        copyright: "© 2025 Joe Nammour - Todos los derechos reservados"
    }
};