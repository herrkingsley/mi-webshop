
//--------------- Mobil meny ------------------

function openSiteMenu() {
    document.querySelector('.site-nav').classList.toggle("toggleMenu");

}

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


function renderCards(array) {

  let renderProducts = [];
array.forEach(element => {
    renderProducts += `
    <article class="products card">
        <a href="#">
        <div class="card__imgframe"><img src="${element.img}" alt="" class="card__img product"></div>
        <h1 class="card__desc">${element.name}</h1>
        <h2 class="card__price">${element.price}</h2>
        </a>
     </article>
     `; 
    });
    return renderProducts;
}


  //--------------- Render NEW products  ------------------

  

function renderNewProducts() {

  // Chooses the first item in every category
  const newProducts = [products.landsvag[0], products.vintage[0],products.downhill[0],products.childbike[0]];

  document.getElementById('products-container').innerHTML = renderCards(newProducts)


}



renderNewProducts()




// }