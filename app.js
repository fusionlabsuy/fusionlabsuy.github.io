// FusionLabs - JavaScript


    //toggle responsive menu:

hamburger = document.querySelector(".hamburger");
navBar = document.querySelector(".nav-bar");

hamburger.onclick = function(){
    navBar.classList.toggle("active");
    hamburger.classList.toggle("active");
}


    //display plan content:

standard = document.querySelector(".standard");
avanzado = document.querySelector(".avanzado");
premium = document.querySelector(".premium");

plans = document.querySelector(".plans");
products = document.querySelector(".products");

standard.onmouseover = function(){
    standard.classList.toggle("active");
    products.classList.toggle("active");
}

standard.onmouseout = function(){
    standard.classList.toggle("active");
    products.classList.toggle("active");
}


avanzado.onmouseover = function(){
    avanzado.classList.toggle("active");
    products.classList.toggle("active");
}

avanzado.onmouseout = function(){
    avanzado.classList.toggle("active");
    products.classList.toggle("active");
}


premium.onmouseover = function(){
    premium.classList.toggle("active");
    products.classList.toggle("active");
}

premium.onmouseout = function(){
    premium.classList.toggle("active");
    products.classList.toggle("active");
}

