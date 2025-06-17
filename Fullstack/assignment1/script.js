// Select the trigger button and the navigation menu
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const navMenu = document.querySelector(".nav-menu");

// Add a click event listener to the trigger button
menuTrigger.addEventListener("click", () => {
    // Toggle the 'active' class on the nav menu to show/hide it
    navMenu.classList.toggle("active");
});

// Optional: Close the dropdown menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        // Only try to remove the class if the menu is active
        if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
        }
    });
});