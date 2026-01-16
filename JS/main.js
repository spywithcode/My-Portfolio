
/*----------------- Aside --------------------*/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove('active');
        }
        this.classList.add('active');
        showSection(this);
        updateScrollListener();
        if (window.innerWidth <= 1200) {
            asideSectionTogglerBtn();
        }
    });
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-setion-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

// ===========  contact  ==============  

const contactForm = document.querySelector(".contact-form");

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "spywithcode@gmail.com",
        Password: "B48DF540963BDEEE20E128137960E7EB24B5",
        To: 'spywithcode@gmail.com',
        From: "spywithcode@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        sendEmail();
    });
}

const scrollToTopBtn = document.getElementById('scrollToTopBtn');
let scrollElement = null;

function handleScroll() {
    if (!scrollElement) return;

    const scrollTop = scrollElement.scrollTop;
    const scrollHeight = scrollElement.scrollHeight;
    const clientHeight = scrollElement.clientHeight;

    const totalScrollable = scrollHeight - clientHeight;
    const progress = totalScrollable > 0 ? scrollTop / totalScrollable : 0;

    // show / hide
    if (scrollTop > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }

    // progress ring update
    scrollToTopBtn.style.setProperty('--progress', progress);
}

function updateScrollListener() {
    if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
    }

    scrollElement = document.querySelector('.section.active');

    if (scrollElement) {
        scrollElement.addEventListener('scroll', handleScroll);
        handleScroll(); // 👈 IMPORTANT: initial call
    }
}

scrollToTopBtn.addEventListener('click', () => {
    if (scrollElement) {
        scrollElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

updateScrollListener();
