document.addEventListener("DOMContentLoaded", function() {
    loadProductsFromLocalStorage();
  });
  
  function loadProductsFromLocalStorage() {
    let products = localStorage.getItem("products");
    if (products) {
      products = JSON.parse(products);
      products.forEach(product => {
        addProductToPage(product);
      });
    }
  }
  
  function addProductToPage(product) {
    const productsContainer = document.getElementById("productsContainer");
  
    const productBox = document.createElement("div");
    productBox.className = "content-box";
  
    const productImage = document.createElement("img");
    productImage.src = product.imageSrc;
    productBox.appendChild(productImage);
  
    const productName = document.createElement("h2");
    productName.textContent = product.name;
    productBox.appendChild(productName);
  
    const productPrice = document.createElement("p");
    productPrice.textContent = `Price: ₹${product.price}`;
    productBox.appendChild(productPrice);
  
    const buyNowButton = document.createElement("button");
    buyNowButton.textContent = "Buy Now";
    buyNowButton.className = "buy-now-button";
    productBox.appendChild(buyNowButton);
  
    productsContainer.appendChild(productBox);
  }
  