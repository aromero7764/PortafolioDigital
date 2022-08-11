/* Menu Burguer */

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

//Espera de un click
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//cerrar luego de ir a la seccion

document.querySelectorAll(".nav-link").forEach( a => a.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))