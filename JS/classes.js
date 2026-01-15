const classesContainer = document.getElementById('classes-container');

const classesData = [
    {
        name: 'C',
        icon: 'fab fa-python',
        description: 'Learn C programming from basics to advanced.',
        subCards: [
            { name: 'Course', link: 'c-course.html', description: 'Comprehensive C course covering syntax, data structures, and libraries.' },
            { name: 'Project', link: 'c-project.html', description: 'Build real-world projects like web scrapers, data analyzers, and automation scripts.' }
        ]
    },
    {
        name: 'Python',
        icon: 'fab fa-python',
        description: 'Learn Python programming from basics to advanced.',
        subCards: [
            { name: 'Course', link: 'python-course.html', description: 'Comprehensive Python course covering syntax, data structures, and libraries.' },
            { name: 'Project', link: 'python-project.html', description: 'Build real-world projects like web scrapers, data analyzers, and automation scripts.' }
        ]
    },
    {
        name: 'NumPy',
        icon: 'fab fa-python',
        description: 'Learn NumPy for numerical computing in Python.',
        subCards: [
            { name: 'Course', link: 'numpy-course.html', description: 'Comprehensive NumPy course covering arrays, operations, and data manipulation.' },
            { name: 'Project', link: 'python-project.html', description: 'Build real-world projects like web scrapers, data analyzers, and automation scripts.' }
        ]
    },
    {
        name: 'Pandas',
        icon: 'fab fa-python',
        description: 'Learn Pandas for data analysis in Python.',
        subCards: [
            { name: 'Course', link: 'pandas-course.html', description: 'Comprehensive Pandas course covering data frames, series, and data manipulation.' },
            { name: 'Project', link: 'python-project.html', description: 'Build real-world projects like web scrapers, data analyzers, and automation scripts.' }
        ]
    },
    {
        name: 'JavaScript',
        icon: 'fab fa-js-square',
        description: 'Master JavaScript for web development.',
        subCards: [
            { name: 'Course', link: 'js-course.html', description: 'Full JavaScript course including ES6+, DOM manipulation, and asynchronous programming.' },
            { name: 'Project', description: 'Create interactive web applications, games, and dynamic websites.' }
        ]
    }
];

function createClasses() {
    classesContainer.innerHTML = '';

    classesData.forEach((classItem, index) => {
        const classElement = document.createElement('div');
        classElement.className = 'classes-item padd-15';
        classElement.innerHTML = `
            <div class="classes-item-inner">
                <div class="icon">
                    <i class="${classItem.icon}"></i>
                </div>
                <h4>${classItem.name}</h4>
                <p>${classItem.description}</p>
            </div>
        `;

        classElement.addEventListener('click', () => {
            openModal(classItem);
        });

        classesContainer.appendChild(classElement);
    });
}

function openModal(classItem) {
    const modal = document.getElementById('classes-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <h2 class="modal-course-title">${classItem.name}</h2>
        <p class="modal-course-description">${classItem.description}</p>
        <div class="modal-sub-cards">
            <a href="${classItem.subCards[0].link}" class="modal-sub-card-link" target="_blank">
                <div class="modal-sub-card">
                    <h5>${classItem.subCards[0].name}</h5>
                    <p>${classItem.subCards[0].description}</p>
                </div>
            </a>
            <a href="${classItem.subCards[1].link || '#'}" class="modal-sub-card-link" target="_blank">
                <div class="modal-sub-card">
                    <h5>${classItem.subCards[1].name}</h5>
                    <p>${classItem.subCards[1].description}</p>
                </div>
            </a>
        </div>
    `;

    modal.style.display = 'block';

    // Close modal when clicking the close button
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside the modal content
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

createClasses();
