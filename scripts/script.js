// Script.js


window.addEventListener("DOMContentLoaded", () => {
  const myStorage = window.localStorage;
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.text())
    .then((res) => {
      myStorage.setItem("products", res);
    });

  const productsString = myStorage.getItem("products");
  let productsArr = JSON.parse(productsString);
  for (let product of productsArr) {
    var productItem = document.createElement("product-item");
    productItem.addImg(product.image, productsArr[0].title);
    productItem.addTitle(product.title);
    productItem.addPrice(product.price);
    productItem.addId(product.id);
    const added = myStorage.getItem(product.id);
    if (added) productItem.onClick(false);
    document.querySelector("ul").appendChild(productItem);
  }
});

