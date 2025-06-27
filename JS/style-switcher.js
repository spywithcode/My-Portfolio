// Style Switcher Functionality

// Toggle style switcher panel
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

if (styleSwitcherToggler && styleSwitcher) {
    styleSwitcherToggler.addEventListener("click", () => {
        styleSwitcher.classList.toggle("open");
    });

    // Hide style switcher on scroll
    window.addEventListener("scroll", () => {
        if (styleSwitcher.classList.contains("open")) {
            styleSwitcher.classList.remove("open");
        }
    });
}

// Close style switcher when clicking outside
document.addEventListener("click", function (event) {
    if (
        styleSwitcher.classList.contains("open") &&
        !styleSwitcher.contains(event.target) &&
        !styleSwitcherToggler.contains(event.target)
    ) {
        styleSwitcher.classList.remove("open");
    }
});

// Theme color switching
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
    // Close style switcher after selecting color
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
}

// Theme light and dark mode
const dayNight = document.querySelector(".day-night");

if (dayNight) {
    dayNight.addEventListener("click", () => {
        const icon = dayNight.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-sun");
            icon.classList.toggle("fa-moon");
        }
        document.body.classList.toggle("dark");
    });

    // Set correct icon on load
    window.addEventListener("load", () => {
        // Set default theme to dark
        document.body.classList.add("dark"); // <-- Yeh line add karein

        const icon = dayNight.querySelector("i");
        if (icon) {
            if (document.body.classList.contains("dark")) {
                icon.classList.add("fa-sun");
                icon.classList.remove("fa-moon");
            } else {
                icon.classList.add("fa-moon");
                icon.classList.remove("fa-sun");
            }
        }
    });
}
