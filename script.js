// ================================
// Portfolio JavaScript
// ================================

console.log("Portfolio JavaScript Loaded!");


// ================================
// DARK MODE
// ================================

const darkModeBtn =
    document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkModeBtn.textContent = "☀️";

    } else {

        darkModeBtn.textContent = "🌙";

    }

});


// ================================
// MOBILE MENU
// ================================

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


// ================================
// CLOSE MOBILE MENU
// ================================

const navItems =
    document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ================================
// CONTACT FORM
// ================================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {

            alert("Please fill all required fields.");

            return;
        }

        alert(
            "Thank you " +
            name +
            "! Your message has been received."
        );

        contactForm.reset();

    });

}


// ================================
// SCROLL ANIMATION
// ================================

const sections =
    document.querySelectorAll("section");

const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });


sections.forEach(function (section) {

    observer.observe(section);

});


// ================================
// CURRENT YEAR
// ================================

const year =
    new Date().getFullYear();

console.log("Current Year:", year);
// ================================
// TYPING ANIMATION
// ================================

const typingText =
    document.getElementById("typing-text");

const roles = [
    "B.Tech CSE Student",
    "Java & DSA Enthusiast",
    "Web Developer",
    "Problem Solver"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole =
        roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}

typeEffect();