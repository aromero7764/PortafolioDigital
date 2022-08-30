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

/* darkmode */
const toggle = document.getElementById('toggle')
const toggleCircle = document.getElementById('toggle-circle')
const toggleLabel = document.getElementById('toggle-label')

const changeDarklight = () => {
    toggleCircle.classList.toggle('toggle_circle-right')
    document.body.classList.toggle('dark-mode')
    if (toggleLabel.textContent === 'Dark') {
        toggleLabel.textContent = 'Light'
    } else {
        toggleLabel.textContent = 'Dark'
    }
   
}

toggle.addEventListener('click', changeDarklight )
