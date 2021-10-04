const hamburger = document.querySelector('.hamburguer');
const nav = document.querySelector('#mobile-menu');
const closeHamburguer = document.querySelector("#mobile-menu")

hamburger.addEventListener('click', () => {
    console.log("open");
    nav.classList.toggle('show');
});


closeHamburguer.addEventListener('click', () => {
    closeHamburguer.classList.remove('show');
})