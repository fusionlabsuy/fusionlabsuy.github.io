// FusionLabs | Uy Software Company - landing page

// NavBar - toggle Responsive Menu:

burger = document.querySelector(".burger");
navBar = document.querySelector(".menu");

burger.onclick = function(){
    navBar.classList.toggle("active");
    burger.classList.toggle("active");
}

navBar.onclick = function(){
    navBar.classList.toggle("active");
    burger.classList.toggle("active");
}


// On Scroll effects

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }else{
      reveals[i].classList.remove('active');
    }
  }
}