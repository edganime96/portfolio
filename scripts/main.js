const burgerButton = document.querySelector('.burger-button');
const menu = document.querySelector('.menu');
// const body = document.querySelector('body');
const ipad = window.matchMedia('screen and (max-width: 767px)');
const widthViewport = document.documentElement.clientWidth;

ipad.addListener(validation)
validation(ipad);

function validation(event) {
    if (event.matches) {
        burgerButton.addEventListener("click", hideShow);
    }
    else {
        burgerButton.removeEventListener("click", hideShow);
        menu.removeEventListener("click", hideShow);
    }
}

if(widthViewport <= 767) {
    burgerButton.addEventListener('click', hideShow);
    menu.addEventListener('click', hideShow);
    //se le agrega el escuchar de eventos para que al hacer click sobre algun link del menu se elimina la clase is-active automaticamente
}

function hideShow() {
    menu.classList.toggle('is-active');
    // if (true) {
    //     body.addEventListener('click', () => {
    //         menu.classList.remove('is-active');
    //     })
    // }
}

// body.removeEventListener('click', hideShow);
        
// burgerButton.addEventListener("click", function() {
    // document.querySelector('.menu').classList.toggle('is-active');
// });