let renderProducts = [];
let loopproducts = products.produkter.forEach(element => {
    renderProducts += `${element.name} <br> ${element.price} <br><br>`;;
});
document.getElementById('javatest').innerHTML = `<p>${renderProducts}</p>`;


