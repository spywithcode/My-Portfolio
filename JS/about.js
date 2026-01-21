// About section data
const aboutData = {
    aboutText: `
        <div class="about-text padd-15">
            <h3>I'm Sandeep, <span>turning Ideas into Code.</span></h3>
            <p>
                I am a driven and passionate individual with a strong interest in web design,
                frontend development, and the broader digital ecosystem. My journey began with 
                a curiosity for the digital world and a desire to build meaningful and impactful
                user experiences online. Over the years, I have honed my skills across various
                domains, continuously expanding my knowledge and embracing new technologies. 
                I am now eager to contribute to innovative projects that allow me to design,
                build, and bring creative ideas to life.<br><br>
                <strong>Expertise:</strong><br>
                Throughout my professional journey, I have collaborated on a diverse range of
                projects that have enhanced my perspective and sharpened my skills. I specialize
                in designing and developing responsive, user-friendly websites and continue to
                evolve my abilities in areas such as graphic design, UI/UX, and modern web
                technologies.
            </p>
        </div>
    `,
    personalInfo: [
        { label: "Email", value: '<a href="#"><span>spywithcode@gmail.com</span></a>' },
        { label: "Website", value: '<a href="https://spywithcode.github.io/My-Portfolio/"><span>Open It..!!</span></a>' },
        { label: "Degree", value: "Integrated MCA" },
        { label: "Birthday", value: "10 nov 2003" },
        { label: "City", value: "Indore" },
        { label: "Freelancer", value: "Available" }
    ],
    skills: [
        { name: "HTML", percent: 90 },
        { name: "CSS", percent: 85 },
        { name: "JavaScript", percent: 80 },
        { name: "My-SQL", percent: 75 },
        { name: "Power-BI", percent: 75 },
        { name: "React", percent: 30 },
        { name: "Node.js", percent: 20 },
        { name: "Canva", percent: 90 },
        { name: "Excel Advance", percent: 80 },
        { name: "MS-Word", percent: 90 },
        { name: "Python", percent: 50 }
    ],
    education: [
        {
            date: "2018-2019",
            title: "High-Secondory",
            school: "Geetanjali Public School, Rewa (M.P).",
            details: "75.5%"
        },
        {
            date: "2020-2021",
            title: "Higher Secondary",
            school: "Doon Public School, Rewa (M.P).",
            details: "75.6%"
        },
        {
            date: "2021-2026",
            title: "Masters",
            school: "Integrated Master of Computer Application.<br>I.P.S. Academy, Indore (M.P).",
            details: "6.95 CGPA"
        }
    ],
    experience: [
        {
            date: "Dec-2025/Present",
            title: "Disha Computer Institute",
            details: "“I am a Computer Faculty at Disha Computer Institute, focused on teaching practical programming skills, modern web technologies, and building strong problem-solving foundations in students.”"
        },
        {
            date: "Aug-2025/Sep-2025",
            title: "NTPC-Singrauli",
            details: "Combining design principles with technical precision, I build engaging interfaces using modern frontend technologies and developer tools."
        },
        {
            date: "2022-2024",
            title: "Frontend Design",
            details: "Combining design principles with technical precision, I build engaging interfaces using modern frontend technologies and developer tools."
        },
        {
            date: "2024-2025",
            title: "Backend Solver",
            details: "I develop and maintain server-side logic, manage databases, and ensure seamless integration between frontend and backend systems for web applications."
        }
    ]
};

// Inject About Text
document.getElementById("about-text").innerHTML = aboutData.aboutText;

// Inject Personal Info
const personalInfoContainer = document.getElementById("personal-info-container");
aboutData.personalInfo.forEach(info => {
    const div = document.createElement("div");
    div.className = "info-item padd-15";
    div.innerHTML = `<p>${info.label}: ${info.value}</p>`;
    personalInfoContainer.appendChild(div);
});

// Inject Skills
const skillsContainer = document.getElementById("skills-container");
aboutData.skills.forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill-item padd-15";
    div.innerHTML = `
        <h5>${skill.name}</h5>
        <div class="progress">
            <div class="progress-in" style="width:${skill.percent}%"></div>
            <div class="skill-percent">${skill.percent}%</div>
        </div>
    `;
    skillsContainer.appendChild(div);
});

// Inject Education
const educationContainer = document.getElementById("education-container");
aboutData.education.forEach(edu => {
    const div = document.createElement("div");
    div.className = "timeline-box padd-15";
    div.innerHTML = `
        <div class="timeline shadow-dark">
            <div class="timeline-item">
                <div class="circle-dot"></div>
                <h3 class="timeline-date"><i class="fa fa-calendar"></i> ${edu.date}</h3>
                <h4 class="timeline-title">${edu.title}</h4>
                <p class="timeline-text">${edu.school}</p>
                <p class="timeline-text">${edu.details}</p>
            </div>
        </div>
    `;
    educationContainer.appendChild(div);
});

// Inject Experience
const experienceContainer = document.getElementById("experience-container");
aboutData.experience.forEach(exp => {
    const div = document.createElement("div");
    div.className = "timeline-box padd-15";
    div.innerHTML = `
        <div class="timeline shadow-dark">
            <div class="timeline-item">
                <div class="circle-dot"></div>
                <h3 class="timeline-date"><i class="fa fa-calendar"></i> ${exp.date}</h3>
                <h4 class="timeline-title">${exp.title}</h4>
                <p class="timeline-text">${exp.details}</p>
            </div>
        </div>
    `;
    experienceContainer.appendChild(div);
});