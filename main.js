'use strict';

/* navbar sticky */
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

function ScrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

/* navbar & contact button Handle Scrolling when tapping */
const navbarMenu = document.querySelector(".navbar__menu")
navbarMenu.addEventListener("click", () => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    // console.log(event.target.dataset.link);
    ScrollIntoView(link);
})

const homeContact = document.querySelector(".home__contact");
homeContact.addEventListener("click", () => {
    ScrollIntoView("#contact");
})

