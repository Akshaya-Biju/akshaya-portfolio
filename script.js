// ==========================
// Smooth Navbar Shadow
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(11,17,32,.9)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(11,17,32,.7)";
        header.style.boxShadow = "none";

    }

});

// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
// ==========================
// Intro Screen
// ==========================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        const intro=document.getElementById("intro-screen");

        intro.style.opacity="0";

        setTimeout(()=>{

            intro.style.display="none";

        },1000);

    },3200);

});
// ==========================
// Typing Animation
// ==========================

const roles = [

    "Computer Science Engineering Student",

    "Backend Developer",

    "AI Enthusiast",

    "Problem Solver",

    "Lifelong Learner"

];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent = currentRole.substring(0, charIndex++);
    } else {

        typingText.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length + 1) {

        speed = 1500;
        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 300;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();
// ==========================
// Scroll Reveal
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();