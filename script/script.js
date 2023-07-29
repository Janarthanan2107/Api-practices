// script.js

'use strict';

// Output
const container = document.querySelector(".container");
const cardEle = document.getElementById("card");
const productImg = document.getElementById("product")
const titleEle = document.getElementById("title");
const categoryEle = document.getElementById("category");
const descriptionEle = document.getElementById("description");
const priceEle = document.getElementById("price")
const stockEle = document.getElementById("stock")

// Global variable
const url = "https://fakestoreapi.com/products";

// Functions
const init = () => {
    populateData();
};

const populateData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayProducts(data);
    } catch (err) {
        console.error("Error fetching data:", err);
        container.textContent = "Sorry Something Went Wrong!!";
    }
};

const truncateWords = (description, count) => {
    const word = description.split(' ')
    // console.log(word)
    const slicedWord = word.slice(0, count).join(" ") + (word.length > count ? "...." : "")
    // console.log(slicedWord)
    return slicedWord
}

const displayProducts = (products) => {

    // here we use forEach and map methods

    // container.innerHTML = ""

    // products.forEach(product => {
    //     // card container
    //     const card = document.createElement("div")
    //     card.classList.add('card')

    //     // img container
    //     const imgContainer = document.createElement("div")
    //     imgContainer.classList.add('img-container')

    //     const image = document.createElement("img");
    //     image.src = product.image;
    //     imgContainer.appendChild(image)

    //     // card-details container
    //     const cardDetails = document.createElement("div")
    //     cardDetails.classList.add("card-details")

    //     const title = document.createElement("p")
    //     title.classList.add("title")
    //     title.innerText = product.title
    //     cardDetails.appendChild(title)

    //     const category = document.createElement("p")
    //     category.classList.add("category")
    //     category.innerText = product.category
    //     cardDetails.appendChild(category)

    //     const description = document.createElement("p")
    //     description.classList.add("description")
    //     description.innerText = product.description
    //     cardDetails.appendChild(description)

    //     // price details container
    //     const priceDetails = document.createElement("div");
    //     priceDetails.className = "price-details";

    //     const rate = document.createElement("div")
    //     rate.classList.add("rate")
    //     rate.innerText = "Price:"
    //     const price = document.createElement("span")
    //     price.classList.add("price")
    //     price.innerText = product.price
    //     rate.appendChild(price)

    //     const qty = document.createElement("div")
    //     qty.classList.add("qty")
    //     qty.innerText = "Stock:"
    //     const stock = document.createElement("span")
    //     stock.classList.add("stock")
    //     stock.innerText = product.rating.count
    //     qty.appendChild(stock)

    //     priceDetails.appendChild(rate)
    //     priceDetails.appendChild(qty)

    //     // card order is declaring here
    //     card.appendChild(imgContainer)

    //     card.appendChild(cardDetails)

    //     card.appendChild(priceDetails)

    //     container.appendChild(card)
    // });

    let data = ""

    products.map((product) => {
        data += `<div class="card" id="card">
        <div class="img-container">
            <img src=${product.image} id="product">
        </div>
        <div class="card-details">
            <p class="title" id="title">${truncateWords(product.title, 10)}</p>
            <span class="category" id="category">${product.category}</span>
            <p class="description" id="description">${truncateWords(product.description, 20)}</p>
        </div>
        <div class="price-details">
            <p class="rate">Price:<span class="price" id="price">$${product.price}</span></p>
            <p class="qty">Stock:<span class="stock" id="stock">${product.rating.count}</span></p>
        </div>
    </div>`
    })

    container.innerHTML = data;
};

// Events

// Initial settings
init();
