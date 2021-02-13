// product-item.js

class ProductItem extends HTMLElement {
  wrapper;
  img;
  title;
  price;
  id;
  button;
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.wrapper = document.createElement("li");
    this.wrapper.classList.add("product");


    this.img = document.createElement("img");
    this.img.width = 200;
    this.wrapper.appendChild(this.img);

    this.title = document.createElement("p");
    this.title.classList.add("title");
    this.wrapper.appendChild(this.title);

    this.price = document.createElement("p");
    this.price.classList.add("price");
    this.wrapper.appendChild(this.price);

    this.button = document.createElement("button");
    this.button.onclick = () => this.onClick(true);
    this.button.innerHTML = "Add to Cart";
    this.wrapper.appendChild(this.button);
    
    this.shadowRoot.append(this.wrapper);

    this.addCss();
  }

  addCss() {
    const style = document.createElement('style');
    style.textContent = '.price { color: green;       font-size: 1.8em;       font-weight: bold;       margin: 0;     }';
    style.textContent += ".product {       align-items: center;       background-color: white;       border-radius: 5px;       display: grid;       grid-template-areas:        'image'       'title'       'price'       'add';      grid-template-rows: 67% 11% 11% 11%;      height: 450px;      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));      margin: 0 30px 30px 0;      padding: 10px 20px;      width: 200px;    }"
    style.textContent += ".product > button {       background-color: rgb(255, 208, 0);      border: none;      border-radius: 5px;      color: black;      justify-self: center;      max-height: 35px;      padding: 8px 20px;      transition: 0.1s ease all;    }"
    style.textContent += "    .product > button:hover {      background-color: rgb(255, 166, 0);      cursor: pointer;      transition: 0.1s ease all;    }";
    
    style.textContent += "    .product > img {      align-self: center;      justify-self: center;      width: 100%;    }";
    style.textContent += "    .title {      font-size: 1.1em;      margin: 0;      overflow: hidden;      text-overflow: ellipsis;      white-space: nowrap;    }";
    style.textContent += "    .title:hover {       font-size: 1.1em;      margin: 0;      white-space: wrap;      overflow: auto;      text-overflow: unset; }";


    this.shadowRoot.append(style);  
  }

  

  onClick(isHumanClick){
    const cartCount = document.getElementById('cart-count');
    const myStorage = window.localStorage;

    let added = false;
    if(isHumanClick){
      added = myStorage.getItem(this.id);
      added = Boolean(added);
      myStorage.setItem(this.id, (added)? '' : 'added');
    }

      myStorage.getItem(this.id);
      if(!added){
        if(isHumanClick) alert("Added To Cart!")
        cartCount.innerHTML ++;
        this.button.innerHTML = "Remove From Cart";
        
      }else{
        if(isHumanClick) alert("Removed From Cart!")
        cartCount.innerHTML--;
        this.button.innerHTML = "Add to Cart";
      }
    }

  addImg(src,alt){
    this.img.src = src;
    this.img.alt = alt;
  }

  addTitle(title){
    this.title.innerHTML = title;
  }

  addPrice(price){
    this.price.innerHTML = price;
  }

  addId(id){
    this.id = id;
  }
}

customElements.define("product-item", ProductItem);
