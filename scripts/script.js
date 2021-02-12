// Script.js


window.addEventListener("DOMContentLoaded", () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.text())
    .then((res) => {
      const myStorage = window.localStorage;
      myStorage.setItem("products", res);
    });

  const myStorage = window.localStorage;
  const productsString = localStorage.getItem("products");
  let productsArr = JSON.parse(productsString);
  for (let product of productsArr) {
    var productItem = document.createElement("product-item");
    productItem.addImg(product.image, productsArr[0].title);
    productItem.addTitle(product.title);
    productItem.addPrice(product.price);
    document.querySelector("ul").appendChild(productItem);
  }
});

// node.bleep();
