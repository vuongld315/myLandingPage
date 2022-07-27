// slide
var slideIndex = 0;
var slides = document.querySelectorAll('.slider-faded');
function showSlides()   {    
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;        
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";    
    setTimeout(showSlides, 2000);
}
showSlides();

// Open/close modal
var modal = document.querySelector('modal');
var btns = document.querySelectorAll('.tour-list-buttom');
btns.forEach((btn,index) => {
    btn.onclick = function () {
        modal.style.display = "flex"
    }
})

con