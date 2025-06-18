
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const navMenu = document.querySelector(".nav-menu");


menuTrigger.addEventListener("click", () => {
    // Toggle the 'active' class on the nav menu to show/hide it
    navMenu.classList.toggle("active");
});

