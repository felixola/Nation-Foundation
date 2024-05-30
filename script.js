// JavaScript to toggle dropdowns
// document.querySelectorAll('.dropdown').forEach(item => {
//     item.addEventListener('click', event => {
//         let dropdownMenu = item.querySelector('.dropdown-menu');
//         dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.nav__navlist').classList.toggle('active');
    });
});


let currentSlide = 1;
const slides = document.querySelectorAll('.slider .item');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

function showSlide(index) {
    slider.style.transition = 'transform 1s ease';
    slider.style.transform = `translateX(-${index * 20}%)`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);

    if (currentSlide === totalSlides - 1) {
        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = `translateX(-20%)`;
            currentSlide = 1;
        }, 1000); // The duration should match the CSS transition duration
    }
}

setInterval(nextSlide, 3000);

// Initialize the slideshow
showSlide(currentSlide);


