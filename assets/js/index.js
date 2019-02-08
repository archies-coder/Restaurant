let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n){
    let i;
    let dots = document.getElementsByClassName('dot');
    var slides = document.getElementsByClassName("slides");

    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < dots.length; i++) {
        dots[i].id = '';        
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    dots[slideIndex-1].id = 'active';


    slides[slideIndex-1].style.display = "block"; 
}

// // Next/previous controls
let slides = document.getElementsByClassName('slides') 



let plusSlides = (n) => {
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

//Animations
let moveLeft = () => {
    if (slideIndex<=2) {
        slides[slideIndex].id = 'animateToRight';
    } else {
        slides[0].id = 'animateToRight';
    }
    slides[slideIndex-1].id = 'animateToLeft';
}

let preloader = document.getElementById('preloader');

let loaded = () =>{
    preloader.style.display = 'none';
}