let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = function(){
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchBox.classList.remove('active');
}


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchBox.classList.remove('active');
    
}

let searchBox = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchBox.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchBox.classList.remove('active');
}