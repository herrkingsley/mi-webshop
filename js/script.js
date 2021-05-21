
//--------------- Mobil meny ------------------

function openSiteMenu() {
    document.querySelector('.site-nav').classList.toggle("toggleMenu");

}


//--------------- end Mobil meny ------------------



let renderProducts = [];
let loopproducts = products.produkter.forEach(element => {
    renderProducts += `${element.name} <br> ${element.price} <br><br>`;;
});
document.getElementById('javatest').innerHTML = `<p>${renderProducts}</p>`;


//--------------- Hero Slideshow ------------------

let slideIndex = 1;
showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("hero-slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // hides all the slides
    }
    
    slideIndex++; 
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block"; // Shows the current slide
    setTimeout(showSlides, 7000); // Change slide every X seconds
  }
