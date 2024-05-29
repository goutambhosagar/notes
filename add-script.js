document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;
    const imageFile = document.getElementById("productImage").files[0];
  
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageSrc = e.target.result;
      const product = { name, price, imageSrc };
      saveProductToLocalStorage(product);
      alert("Product added successfully!");
    };
    reader.readAsDataURL(imageFile);
  
    document.getElementById("productForm").reset();
  });
  
  function saveProductToLocalStorage(product) {
    let products = localStorage.getItem("products");
    if (products) {
      products = JSON.parse(products);
    } else {
      products = [];
    }
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
  }
  