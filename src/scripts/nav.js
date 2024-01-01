const abrirMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
abrirMenu.addEventListener('click', () => {
    openNav();
});
closeMenu.addEventListener('click', () => {
    closeNav();
});

function openNav() {
    document.getElementById('mobile-menu').style
        .width = '100%'
}

function closeNav() {
    document.getElementById('mobile-menu').style
        .width = '0%'
}


window.addEventListener('scroll', () => {
    const header = document.querySelector("header");
    // esto crea una clase extra a nuestro header uwu
    header.classList.toggle("background-scroll", window.scrollY > 0)
});

