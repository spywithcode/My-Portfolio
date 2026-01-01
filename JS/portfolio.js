// ===========  Portfolio Page  ==============

const largeProjects = [
  {
    id: 14,
    name: "Shree-Academy-Website",
    github: "https://github.com/spywithcode/Institute-Website.git",
    livePreview: "https://shree-academy.vercel.app/",
    image: "assets/portfolio/project.14.png"
  },
  {
    id: 1,
    name: "ReStro-Website",
    github: "https://github.com/spywithcode/ReStro.git",
    livePreview: "https://re-stro.vercel.app/",
    image: "assets/portfolio/project.13.png"
  },
  {
    id: 2,
    name: "Fruit-Villa-Website",
    github: "https://github.com/spywithcode/Fruit-villa",
    livePreview: "https://spywithcode.github.io/Fruit-villa/",
    image: "assets/portfolio/project.1.png"
  },
  {
    id: 3,
    name: "LeafNext-Website",
    github: "https://github.com/spywithcode/LeafNext",
    livePreview: "https://spywithcode.github.io/LeafNext/",
    image: "assets/portfolio/project.3.png"
  },
  {
    id: 4,
    name: "BuddyCalls-Theme",
    github: "https://github.com/spywithcode/BuddyCalls",
    livePreview: "https://spywithcode.github.io/BuddyCalls/",
    image: "assets/portfolio/project.4.png"
  },
  {
    id: 5,
    name: "Lotus-Website",
    github: "https://github.com/spywithcode/Lotus-Website",
    livePreview: "https://spywithcode.github.io/Lotus-Website/",
    image: "assets/portfolio/project.7.png"
  },
  {
    id: 6,
    name: "Cloth-Store-Website",
    github: "https://github.com/spywithcode/Cloth-Store",
    livePreview: "https://spywithcode.github.io/Cloth-Store/",
    image: "assets/portfolio/project.9.png"
  },
  {
    id: 7,
    name: "Halloween.1-Website",
    github: "https://github.com/spywithcode/Halloween.1",
    livePreview: " https://spywithcode.github.io/Halloween.1/",
    image: "assets/portfolio/project.2.png"
  },
  {
    id: 8,
    name: "Halloween.2-Theme",
    github: "https://github.com/spywithcode/Halloween.2",
    livePreview: "https://spywithcode.github.io/Halloween.2/",
    image: "assets/portfolio/project.8.png"
  },
  {
    id: 9,
    name: "Watch.1-Store",
    github: "https://github.com/spywithcode/Watch.1",
    livePreview: "https://spywithcode.github.io/Watch.1/",
    image: "assets/portfolio/project.5.png"
  },
  {
    id: 10,
    name: "Watch.2-Ecommerce",
    github: "https://github.com/spywithcode/Watch.2",
    livePreview: "https://spywithcode.github.io/Watch.2/",
    image: "assets/portfolio/project.6.png"
  },
  {
    id: 11,
    name: "Gateway-Provider-Website",
    github: "https://github.com/spywithcode/Gateway-Provider.git",
    livePreview: "https://spywithcode.github.io/Gateway-Provider/",
    image: "assets/portfolio/project.10.png"
  },
  {
    id: 12,
    name: "NTPC-Website",
    github: "https://github.com/spywithcode/NTPC.git",
    livePreview: "https://spywithcode.github.io/NTPC/",
    image: "assets/portfolio/project.11.png"
  },
  {
    id: 13,
    name: "Calling-Jaadoo-Website",
    github: "https://github.com/spywithcode/Calling_Jaadoo.git",
    livePreview: "https://spywithcode.github.io/Calling_Jaadoo/",
    image: "assets/portfolio/project.12.png"
  }
]

const smallProjects = [
  {
    id: 1,
    name: "Flying-Birds",
    github: "https://github.com/spywithcode/Flying-Birds",
    livePreview: "https://spywithcode.github.io/Flying-Birds/",
    image: "assets/portfolio/small.1.png"
  },
  {
    id: 2,
    name: "Card-Slider",
    github: "https://github.com/spywithcode/Vertical-Card-Slider",
    livePreview: "https://spywithcode.github.io/Vertical-Card-Slider/",
    image: "assets/portfolio/small.2.png"
  },
  {
    id: 3,
    name: "Analog-Clock",
    github: "https://github.com/spywithcode/Analog.Clock",
    livePreview: "https://spywithcode.github.io/Analog.Clock/",
    image: "assets/portfolio/small.3.png"
  },
  {
    id: 4,
    name: "Hover-Expend",
    github: "https://github.com/spywithcode/Button-Hover-Expend",
    livePreview: "https://spywithcode.github.io/Button-Hover-Expend/",
    image: "assets/portfolio/small.4.png"
  },
  {
    id: 5,
    name: "Snake-Game",
    github: "https://github.com/spywithcode/Snake_Game",
    livePreview: "https://spywithcode.github.io/Snake_Game/",
    image: "assets/portfolio/small.5.png"
  },
  {
    id: 6,
    name: "CubiKill-Game",
    github: "https://github.com/spywithcode/CubiKill.git",
    livePreview: "https://spywithcode.github.io/CubiKill/",
    image: "assets/portfolio/small.6.png"
  },
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
