// ===========================================
// ===========  Portfolio Page  ==============
// ===========================================

const largeProjects = [
  {
    id: 1,
    name: "Fruit-Villa",
    github: "https://github.com/spywithcode/Fruit-villa",
    livePreview: "https://spywithcode.github.io/Fruit-villa/",
    image: "../assets/portfolio/project.1.png",
  },
  {
    id: 2,
    name: "LeafNext",
    github: "https://github.com/spywithcode/LeafNext",
    livePreview: "https://spywithcode.github.io/LeafNext/",
    image: "../assets/portfolio/project.3.png",
  },
  {
    id: 3,
    name: "BuddyCalls",
    github: "https://github.com/spywithcode/BuddyCalls",
    livePreview: "https://spywithcode.github.io/BuddyCalls/",
    image: "../assets/portfolio/project.4.png",
  },
  {
    id: 4,
    name: "Lotus-Website",
    github: "https://github.com/spywithcode/Lotus-Website",
    livePreview: "https://spywithcode.github.io/Lotus-Website/",
    image: "../assets/portfolio/project.7.png",
  },
  {
    id: 5,
    name: "Cloth-Store",
    github: "https://github.com/spywithcode/Cloth-Store",
    livePreview: "https://spywithcode.github.io/Cloth-Store/",
    image: "../assets/portfolio/project.9.png",
  },
  {
    id: 6,
    name: "Halloween.1",
    github: "https://github.com/spywithcode/Halloween.1",
    livePreview: " https://spywithcode.github.io/Halloween.1/",
    image: "../assets/portfolio/project.2.png",
  },
  {
    id: 7,
    name: "Halloween.2",
    github: "https://github.com/spywithcode/Halloween.2",
    livePreview: "https://spywithcode.github.io/Halloween.2/",
    image: "../assets/portfolio/project.8.png",
  },
  {
    id: 8,
    name: "Watch.1",
    github: "https://github.com/spywithcode/Watch.1",
    livePreview: "https://spywithcode.github.io/Watch.1/",
    image: "../assets/portfolio/project.5.png",
  },
  {
    id: 9,
    name: "Watch.2",
    github: "https://github.com/spywithcode/Watch.2",
    livePreview: "https://spywithcode.github.io/Watch.2/",
    image: "../assets/portfolio/project.6.png",
  },
]

const smallProjects = [
  {
    id: 1,
    name: "Flying-Birds",
    github: "https://github.com/spywithcode/Flying-Birds",
    livePreview: "https://spywithcode.github.io/Flying-Birds/",
    image: "../assets/portfolio/small.1.png",
  },
  {
    id: 2,
    name: "Card-Slider",
    github: "https://github.com/spywithcode/Vertical-Card-Slider",
    livePreview: "https://spywithcode.github.io/Vertical-Card-Slider/",
    image: "../assets/portfolio/small.2.png",
  },
  {
    id: 3,
    name: "Analog-Clock",
    github: "https://github.com/spywithcode/Analog.Clock",
    livePreview: "https://spywithcode.github.io/Analog.Clock/",
    image: "../assets/portfolio/small.3.png",
  },
  {
    id: 4,
    name: "Hover-Expend",
    github: "https://github.com/spywithcode/Button-Hover-Expend",
    livePreview: "https://spywithcode.github.io/Button-Hover-Expend/",
    image: "../assets/portfolio/small.4.png",
  }
]

// ===========  Large Projects  ==============

const largeprojectContainer = document.getElementById('large-project-container');
const smallprojectContainer = document.getElementById('small-project-container');

largeProjects.map((project) => {
  const div = document.createElement('div');
  div.className = "portfolio-item padd-15";

  div.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
      <div>
        <img src="${project.image}" alt="image" class="project-img">
      </div>
      <h2 class="experience-sun-title project-title">${project.name}</h2>
      <div class="btn-container">
        <button class="btn btn-color-2 project-btn"
          onclick="location.href='${project.github}'">
          Github <i class="ri-github-line p-icon"></i>
        </button>
        <button class="btn btn-color-1"
          onclick="location.href='${project.livePreview}'">
          Live Demo <i class="ri-upload-2-line p-icon"></i>
        </button>
      </div>
    </div>
  `;

  largeprojectContainer.appendChild(div);
});

// ===========  Small Projects  ==============

smallProjects.map((project) => {
  const div = document.createElement('div');
  div.className = "portfolio-item padd-15";

  div.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
      <div>
        <img src="${project.image}" alt="image" class="project-img">
      </div>
      <h2 class="experience-sun-title project-title">${project.name}</h2>
      <div class="btn-container">
        <button class="btn btn-color-2 project-btn"
          onclick="location.href='${project.github}'">
          Github <i class="ri-github-line p-icon"></i>
        </button>
        <button class="btn btn-color-1"
          onclick="location.href='${project.livePreview}'">
          Live Demo <i class="ri-upload-2-line p-icon"></i>
        </button>
      </div>
    </div>
  `;

  smallprojectContainer.appendChild(div);
});



// ============= Skills data array ================

const skills = [
  { name: "Python", percent: 40 },
  { name: "JS", percent: 44 },
  { name: "MySQL", percent: 85 },
  { name: "CSS", percent: 76 },
  { name: "HTML", percent: 87 },
  { name: "MS-Office", percent: 90 }
];

// Render skills dynamically
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;
  container.innerHTML = skills.map(skill => `
        <div class="skill-item padd-15">
            <h5>${skill.name}</h5>
            <div class="progress">
                <div class="progress-in" style="width: ${skill.percent}%;"></div>
                <div class="skill-percent">${skill.percent}%</div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderSkills);



// ============= Services data array ================

const services = [
  {
    icon: "fa-mobile-alt",
    title: "Web Design",
    desc: "I'm intrested to Web Design Work. Making a any portfolio page is good and responsive."
  },
  {
    icon: "fa-laptop-code",
    title: "Tools",
    desc: "I'm using many tools of design any pages and looking attractive."
  },
  {
    icon: "fa-palette",
    title: "Color",
    desc: "I'm a design a professional look of any pages and choosing color qality is awasome"
  },
  {
    icon: "fa-code",
    title: "Design Tools",
    desc: "I'm using many tools od Design of site pages but these tools are similar of HTML, CSS, JAVASCRIPT, RECT, etc..."
  },
  {
    icon: "fa-search",
    title: "search",
    desc: "You can find in my portpolio and contact me for any work in any field of Web Desiging"
  },
  {
    icon: "fa-bullhorn",
    title: "Feedback",
    desc: "You give a feedback for my work and keepspport. God blessing..."
  }
];

function renderServices() {
  const container = document.getElementById('services-container');
  if (!container) return;
  container.innerHTML = services.map(service => `
        <div class="service-item padd-15">
            <div class="service-item-inner">
                <div class="icon">
                    <i class="fa ${service.icon}"></i>
                </div>
                <h4>${service.title}</h4>
                <p>${service.desc}</p>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderServices);
