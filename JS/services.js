// ============= Services data array ================

const services = [
  {
    icon: "fa-desktop",
    title: "Web Design",
    desc: "Creating responsive and visually appealing websites using modern technologies like HTML, CSS, and JavaScript."
  },
  {
    icon: "fa-code",
    title: "Python Developer",
    desc: "Developing efficient Python applications, scripts, and solutions for various programming needs."
  },
  {
    icon: "fa-tasks",
    title: "Short Project Work",
    desc: "Handling quick-turnaround projects with high quality and attention to detail."
  },
  {
    icon: "fa-palette",
    title: "Create Attractive Projects",
    desc: "Designing and building engaging projects that stand out with creative and professional aesthetics."
  },
  {
    icon: "fa-keyboard",
    title: "Data Entry",
    desc: "Accurate and efficient data entry services to manage and organize information effectively."
  },
  {
    icon: "fa-chart-line",
    title: "Data Science",
    desc: "Analyzing data to extract insights and build predictive models using Python and related tools."
  },
  {
    icon: "fa-pencil-alt",
    title: "Logo Design",
    desc: "Crafting unique and memorable logos that represent brands and businesses effectively."
  },
  {
    icon: "fa-broom",
    title: "Data Cleaning",
    desc: "Cleaning and preprocessing data to ensure accuracy and reliability for analysis."
  },
  {
    icon: "fa-chart-bar",
    title: "Data Analysis",
    desc: "Performing in-depth data analysis to uncover trends and support decision-making."
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
