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
let plusSlides = (n) => {
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}


