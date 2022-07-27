// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.querySelectorAll('.slider-faded');  
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) 
//   {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

var slideIndex = 0;
function showSlides()   {
    var slides = document.querySelectorAll('.slider-faded');
    for (var i = 0, i < slides.length, i++)
        slides{i}.style.display = "none";
    if (slideIndex > slides.length) {
        slideIndex = 1
    }else {
        slides[slideIndex-1].style.display = "block"
    }
    setTimeout(showSlides, 2000);
}

