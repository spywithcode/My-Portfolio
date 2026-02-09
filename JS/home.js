/*----------------- Home Section Dynamic Content --------------------*/
const homeData = {
    name: "Sandeep",
    profession: "A passionate <span class='typing'></span>",
    description: `With a strong foundation in web development and design, I deliver high-quality projects
        focused on performance, usability, and visual appeal. My goal is to create impactful
        digital experiences that exceed expectations.`,
    cvLink: "assets/My-Resume.pdf",
    dgLink: "https://sandeep-digital-card.vercel.app/",
    profilePic: "assets/@Profile.pic.jpg"
};

document.getElementById("home-content").innerHTML = `
    <div class="home-info padd-15">
        <h3 class="hello">Hey there! I'm <span class="name">${homeData.name}</span></h3>
        <h3 class="my-profession">${homeData.profession}</h3>
        <p>${homeData.description}</p>
        <a href="${homeData.cvLink}" class="btn">Download CV</a>
        <a href="${homeData.dgLink}" class="btn">DG-Card</a>
    </div>
    <div class="home-img padd-15">
        <img src="${homeData.profilePic}" alt="profile picture" />
    </div>
`;

/*----------------- Typing Animation --------------------*/
var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Backend Developer", "YouTuber"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
