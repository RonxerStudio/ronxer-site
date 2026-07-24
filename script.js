// =======================
// RONXER Studio
// Script
// =======================

// Калькулятор стоимости
function calculate() {

    const service = Number(document.getElementById("service").value);
    const speed = Number(document.getElementById("speed").value);

    const total = service * speed;

    document.getElementById("result").innerHTML =
        "Стоимость: от " + total + "$";

}

// Плавное появление блоков

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(
".service-card,.price-card,.portfolio-card,.glass-card"
).forEach((el)=>{

    observer.observe(el);

});

// Плавная прокрутка

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// Подсветка шапки при прокрутке

window.addEventListener("scroll",()=>{

    if(window.scrollY>40){

        document.querySelector("header")
        .classList.add("scroll");

    }else{

        document.querySelector("header")
        .classList.remove("scroll");

    }

});
