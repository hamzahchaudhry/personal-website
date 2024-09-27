function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

var encEmail = "aGFtemFoY2hhdWRocnkzMjFAZ21haWwuY29t=";
const form = document.getElementById("email");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));