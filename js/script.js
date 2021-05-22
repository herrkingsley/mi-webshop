
//--------------- Mobil meny ------------------

function openSiteMenu() {
    document.querySelector('.site-nav').classList.toggle("toggleMenu");

}

//--------------- Hero Slideshow ------------------
let slideIndex = 1;
if(document.querySelectorAll('.hero').length > 0) {
showSlides();
}


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
        <a href="./product.html" onclick="localStorage.setItem('product', '${element.category},${element.name}')">
        <div class="card__imgframe"><img src="${element.img}" alt="" class="card__img card__product"></div>
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

if(document.querySelectorAll('#products-container').length > 0) {

  renderNewProducts();
  }

  //--------------- Render catagory page  ------------------


  function renderCategoryProducts() {

    // Chooses the first item in every category
    const category = localStorage.getItem("category");
  
    document.getElementById('category-container').innerHTML = renderCards(products[category])
  
  
  }
  
  if(document.querySelectorAll('#category-container').length > 0) {
  
    renderCategoryProducts();
    }


  //--------------- Dynamic product page  ------------------


  function renderProductPage() {
    
    let product = localStorage.getItem("product").split(",");
    products[product[0]].forEach(element => {
      if(element.name === product[1]) {
        document.getElementById("productImage").src = element.img;
        document.getElementById("productID").innerHTML = element.name;
        document.getElementById("productPrice").innerHTML = element.price;
        document.getElementById("productDesc").innerHTML = element.desc;
    }});
    


    
  }

  //--------------- Filtercards  ------------------

  
  const cardCategories = document.querySelectorAll('.filter-card__title');

   cardCategories.forEach(element => {
     element.addEventListener('click', () => {
       console.log('click')
       element.firstElementChild.firstElementChild.classList.toggle("rotateArrow");
       element.nextElementSibling.classList.toggle("tExpOut");
     });
   });


     //--------------- Add to cart function  ------------------

     function addToCart() {
       document.getElementById('basket').classList.toggle('visable');
       document.getElementById('buy-alert').classList.toggle('visable');
       document.getElementById('buy').classList.toggle('bought');
     }
     