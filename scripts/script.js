// Script.js


const myStorage = window.localStorage;
const productsString = localStorage.getItem('products');
let productsArr = JSON.parse(productsString);
console.log(productsArr[0])


window.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products')
   .then(res => res.text() )
   .then(res=>{
    const myStorage = window.localStorage;
    myStorage.setItem('products',res);
   })
});



var node = document.createElement('product-item');
node.addImg(productsArr[0].image, productsArr[0].title);
node.addTitle(productsArr[0].title);
node.addPrice(productsArr[0].price);

// node.bleep(); 
document.querySelector('ul').appendChild(node);