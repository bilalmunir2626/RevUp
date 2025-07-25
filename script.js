const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle mobile menu on hamburger click
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// --- Navbar Scroll Effect ---
const header = document.querySelector(".header");

// Listen for the scroll event on the window
window.addEventListener("scroll", () => {
    // If user scrolls down more than 100px, add the 'scrolled' class to the header
    if (window.scrollY > 600) {
        header.classList.add("scrolled");
    } else {
        // Otherwise, remove it
        header.classList.remove("scrolled");
    }
});
// hlo this is bila now i am making a new website that is erkated to teh noew team so we are the one who can easliy be a new to make it 
// home section 
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('hero-section');

    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        heroSection.style.setProperty('--x', `${x}px`);
        heroSection.style.setProperty('--y', `${y}px`);
    });
});
// --- Scroll-on-Reveal Animation ---
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If the element is in the viewport
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Stop observing the element so the animation doesn't re-trigger
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe each element with the .reveal class
revealElements.forEach(element => {
    revealObserver.observe(element);
});
