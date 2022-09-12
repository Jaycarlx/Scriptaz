// Activate dropdown on mobile
if (innerWidth <= 576) {
    document.getElementById("top-dropdown").className = "hide"
}

const showTopNav = () => {
    const drop = document.getElementById("top-dropdown");
    if (drop.className === "show") {
        drop.className = "hide"
    }
    else {
        drop.className = "show"
    }
}

// hide nav
const hideTopNav = () => {
    document.getElementById("top-dropdown").className = "hide"
}


// Activate dark theme
const darkIcon = document.querySelector(".dark-icon");
const darkIconMobile = document.querySelector(".dark-iconMobile");
const wrapper = document.querySelector("body")
// For desktop
darkIcon.addEventListener("click" , () => {
    wrapper.classList.toggle("dark-theme")
    if (wrapper.classList.contains("dark-theme")) {
        darkIcon.src = "./img/sunCrop.png"
    } else {
        darkIcon.src ="./img/dark-theme.svg"
    }
})

// for mobile
darkIconMobile.addEventListener("click" , () => {
    wrapper.classList.toggle("dark-theme")
    if (wrapper.classList.contains("dark-theme")) {
        darkIconMobile.src = "./img/sunCrop.png"
    } else {
        darkIconMobile.src ="./img/dark-theme.svg"
    }
})

// Activate reveal on scroll
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("revealOnScroll")
        } else {
            reveals[i].classList.remove("revealOnScroll");
        }
    }
}
