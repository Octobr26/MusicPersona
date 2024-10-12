// Parallax Effect for Hero Section
window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset;
    const hero = document.getElementById("hero");
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// scripts.js
// Fade-in on Scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        appearOnScroll.unobserve(entry.target);
    });
},
appearOptions);

faders.forEach((fader) => {
    appearOnScroll.observe(fader);
});
