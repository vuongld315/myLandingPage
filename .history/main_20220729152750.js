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

// clich mobile-menu-icon
var header = document.querySelector('#header');
var menuBtn = document.querySelector('.mobile-menu-btn');
var headerHeight = header.clientHeight;
menuBtn.onclick = function()    {
    var 
}


// Open modal
var modal = document.querySelector('.modal');
var btns = document.querySelectorAll('.tour-list-buttom');
btns.forEach((btn,index) => {
    btn.onclick = function () {
        modal.style.display = "flex";
    }
})

// close modal
var close = modal.querySelector('.modal-close');
close.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (e)   {
    if (e.target == modal)  {
        modal.style.display = "none";
    }
}    
