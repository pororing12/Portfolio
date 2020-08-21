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

/* navbar & contact button Handle Scrolling when tapping */
const navbarMenu = document.querySelector(".navbar__menu")
navbarMenu.addEventListener("click", () => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    // console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
})
