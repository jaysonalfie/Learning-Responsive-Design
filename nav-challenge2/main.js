const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    //callback function that adds or removes the class nav--visible
    nav.classList.toggle('nav--visible');
})