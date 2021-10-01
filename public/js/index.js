const hamburger = document.querySelector('.hamburguer');
const nav = document.querySelector('#mobile-menu');

hamburger.addEventListener('click', () => {
    console.log("open");
    nav.classList.toggle('show');
});