/* =====================================
   PORTFOLIO
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    initNavbar();
    initScrollReveal();
    initActiveLinks();

});

/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */

function initNavbar() {

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(8,17,31,.95)";

            navbar.style.boxShadow =
                "0 5px 30px rgba(0,0,0,.25)";

        } else {

            navbar.style.background =
                "rgba(8,17,31,.70)";

            navbar.style.boxShadow =
                "none";
        }

    });

}

/* =====================================
   ACTIVE MENU HIGHLIGHT
===================================== */

function initActiveLinks() {

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >= sectionTop
            ) {
                current = section.id;
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });

}

/* =====================================
   SCROLL REVEAL
===================================== */

function initScrollReveal() {

    const elements = document.querySelectorAll(
        ".about-card, .skill-card, .project-card, .cert-card, .contact-card, .timeline-content"
    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.1
        }

    );

    elements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform =
            "translateY(40px)";
        el.style.transition =
            "all .8s ease";

        observer.observe(el);

    });

}

/* =====================================
   TYPEWRITER EFFECT
===================================== */

const heroTitle =
document.querySelector(".hero h1");

if (heroTitle) {

    const originalText =
        heroTitle.innerHTML;

    heroTitle.innerHTML = "";

    let i = 0;

    const typing = setInterval(() => {

        heroTitle.innerHTML =
            originalText.slice(0, i);

        i++;

        if (
            i > originalText.length
        ) {

            clearInterval(typing);

        }

    }, 20);

}

/* =====================================
   CONSOLE SIGNATURE
===================================== */

console.log(`
===================================
AKHIL R PORTFOLIO
Cybersecurity Engineer
===================================
`);