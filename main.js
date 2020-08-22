'use strict';

// navbar sticky
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll",() => {
    // console.log(window.scrollY);
    // console.log(`navbarHiehgt: ${navbarHeight}`);
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})



// navbar & contact button Handle Scrolling when tapping 
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", () => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    // console.log(event.target.dataset.link);
    navbarMenu.classList.remove("open");
    ScrollIntoView(link);
})

//hamburger bar click navbarMenu display
const homeToggleBtn = document.querySelector(".navbar__toggle-btn");
homeToggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
})

// contact button -> contact page
const homeContact = document.querySelector(".home__contact");
homeContact.addEventListener("click", () => {
    ScrollIntoView("#contact");
})

// Make home slowly fade
const home = document.querySelector(".home__container");
const homeHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

//Arrow-up button Handle Scrolling when tapping 
const arrowBtn = document.querySelector(".arrow-up");
const arrowHeight = arrowBtn.getBoundingClientRect().height;
arrowBtn.addEventListener("click", () => {
    ScrollIntoView(".home");
})
document.addEventListener("scroll", () => {
    if (window.scrollY > homeHeight / 2) {
        arrowBtn.classList.add("visible");
    } else {
        arrowBtn.classList.remove("visible");
    }
})


function ScrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}