const burgerButton = document.querySelector('.burger-button');
// const ipad = window.matchMedia('only screen and (max-width: 767px)');

// ipad.addListener(validation)

// function validation(event) {
//     if (event.matches) {
//         burgerButton.addEventListener("click", function() {
//             document.querySelector('.menu').classList.toggle('is-active');
//         });
//     }
//     else {
//             burgerButton.removeEventListener("click", function() {
//                     document.querySelector('.menu').classList.toggle('is-active');
//                 });
//             }
//             console.log(event);
// }

// validation(ipad);
    
        
burgerButton.addEventListener("click", function() {
    document.querySelector('.menu').classList.toggle('is-active');
});