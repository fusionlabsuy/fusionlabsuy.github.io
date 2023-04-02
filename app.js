// FusionLabs - juanigomez | landing page - JavaScript

//toggle responsive menu:

    hamburger = document.querySelector(".hamburger");
    navBar = document.querySelector(".nav-bar");
    
    hamburger.onclick = function(){
        navBar.classList.toggle("active");
        hamburger.classList.toggle("active");
    }

    navBar.onclick = function(){
        navBar.classList.toggle("active");
        hamburger.classList.toggle("active");
    }
    
    
//display plan content:
    
    products = document.querySelector(".products");
    plans = document.querySelector(".plans");
    
    standard = document.querySelector(".standard");
    avanzado = document.querySelector(".avanzado");
    premium = document.querySelector(".premium");
     
    // Standard - toggle functions
    
    standard.onmouseover = function(){
        standard.classList.toggle("active");
    
        products.classList.toggle("active");
        plans.classList.toggle("active");
    }
    
    standard.onmouseout = function(){
        standard.classList.toggle("active");
    
        products.classList.toggle("active");
        plans.classList.toggle("active");
    }
    
    // Avanzado - toggle functions
    
    avanzado.onmouseover = function(){
        avanzado.classList.toggle("active");
    
        products.classList.toggle("active");
        plans.classList.toggle("active");
    }
    
    avanzado.onmouseout = function(){
        avanzado.classList.toggle("active");
    
        products.classList.toggle("active");
        plans.classList.toggle("active");
    }
    
    // Premium - toggle functions
    
    premium.onmouseover = function(){
        premium.classList.toggle("active");
    
        products.classList.toggle("active");
        plans.classList.toggle("active");
    }
    
    premium.onmouseout = function(){
        premium.classList.toggle("active");
    
        products.classList.toggle("active");
        plans.classList.toggle("active");
    }

    
// Send Email

var csbtn = document.getElementById("btncs");

csbtn.addEventListener('click', function(e){
    e.preventDefault()

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;

    body = 'name: ' +name + '<br/> email: ' +email + '<br/> message: ' +msg;

    Email.send({
        SecureToken : "09c36a42-e397-48c2-a1a7-7a86178c331c",
        To : 'fusion.labs.uy@gmail.com',
        From : 'fusion.labs.uy@gmail.com',
        Subject : "Contact Message",
        Body : body
    }).then(
      message => alert(message)
    );

})    
    