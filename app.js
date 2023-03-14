// FusionLabs - JavaScript


    //toggle responsive menu:

hamburger = document.querySelector(".hamburger");
navBar = document.querySelector(".nav-bar");

hamburger.onclick = function(){
    navBar.classList.toggle("active");
    hamburger.classList.toggle("active");
}


    //display plan content:

products = document.querySelector(".products");
plans = document.querySelector(".plans");
peek = document.querySelector(".peek");

standard = document.querySelector(".standard");
avanzado = document.querySelector(".avanzado");
premium = document.querySelector(".premium");


// Standard - toggle functions

standard.onmouseover = function(){
    standard.classList.toggle("active");

    products.classList.toggle("active");
    plans.classList.toggle("active");
    peek.classList.toggle("active");
}

standard.onmouseout = function(){
    standard.classList.toggle("active");

    products.classList.toggle("active");
    plans.classList.toggle("active");
    peek.classList.toggle("active");
}

standard.onclick = function(){
    standard.classList.toggle("active");

    products.classList.toggle("active");
    plans.classList.toggle("active");
    peek.classList.toggle("active");
}


// Avanzado - toggle functions

avanzado.onmouseover = function(){
    avanzado.classList.toggle("active");

    products.classList.toggle("active");
    plans.classList.toggle("active");
    peek.classList.toggle("active");
}

avanzado.onmouseout = function(){
    avanzado.classList.toggle("active");

    products.classList.toggle("active");
    plans.classList.toggle("active");
    peek.classList.toggle("active");
}

avanzado.onclick = function(){
    avanzado.classList.toggle("active");

    products.classList.toggle("active");
    plans.classList.toggle("active");
    peek.classList.toggle("active");
}


// Premium - toggle functions

premium.onmouseover = function(){
    premium.classList.toggle("active");

    products.classList.toggle("active");
    plans.classList.toggle("active");
    peek.classList.toggle("active");
}

premium.onmouseout = function(){
    premium.classList.toggle("active");

    products.classList.toggle("active");
    plans.classList.toggle("active");
    peek.classList.toggle("active");
}

premium.onclick = function(){
    premium.classList.toggle("active");

    products.classList.toggle("active");
    plans.classList.toggle("active");
    peek.classList.toggle("active");
}
