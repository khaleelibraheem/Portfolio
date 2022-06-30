let menu = document.querySelector('#menu');
let navList = document.querySelector('.nav-list');

let string = "Hello JS"
menu.addEventListener('click', () => {
    navList.classList.toggle('openCloseMenu');
})

// loader
// let loaderHome = document.querySelector('.loaderHome');
// window.addEventListener('load', ()=> {
//     loaderHome.style.display = 'none';
// })