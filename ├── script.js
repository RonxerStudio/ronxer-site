// ===============================
// BURGER MENU
// ===============================

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

if (burger && nav) {
    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
        burger.classList.toggle("active");
    });
}

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

        nav?.classList.remove("active");
        burger?.classList.remove("active");

    });

});

// ===============================
// CALCULATOR
// ===============================

const service = document.getElementById("service");
const result = document.getElementById("result");
const button = document.getElementById("calculateBtn");

if (button && service && result) {

    button.addEventListener("click", () => {

        const price = Number(service.value);

        result.textContent = `Стоимость: ${price}$`;

    });

}

// ===============================
// HEADER EFFECT
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(10,10,10,.92)";
        header.style.boxShadow = "0 15px 40px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(15,15,15,.65)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// ACTIVE MENU
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (scrollY >= top) {

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

// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
/* ===== JS ===== */

.nav.active{
    display:flex;
    position:absolute;
    top:82px;
    left:0;
    width:100%;
    flex-direction:column;
    gap:20px;
    padding:30px;
    background:#111;
    border-top:1px solid rgba(255,255,255,.08);
}

.nav a.active{
    color:var(--orange);
}

.hidden{
    opacity:0;
    transform:translateY(60px);
    transition:.8s;
}

.show{
    opacity:1;
    transform:translateY(0);
}
