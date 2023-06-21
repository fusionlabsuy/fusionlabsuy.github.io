// FusionLabs - juanigomez | landing page - JavaScript

// GLOBAL SCRIPT

// NavBar - toggle Responsive Menu:

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

  
// INDEX PAGE: 

if (document.getElementById('landing-page')) {

  // NavBar - transparency:

  const header = document.getElementById('navigationBar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


  // Services - hover effect:

  Ecommerce = document.getElementById("e-commerce");
  hosting = document.getElementById("hosting");
  landing = document.getElementById("landing");
  advice = document.getElementById("advice");

  function servicesHover(servName){
  servName.onmouseover = function(){
      servName.classList.toggle("active");
    }
  servName.onmouseout = function(){
      servName.classList.toggle("active");
    }
  }

  servicesHover(Ecommerce);
  servicesHover(hosting);
  servicesHover(landing);
  servicesHover(advice);


  // Steps - hover effect:

  first = document.getElementById("first");
  second = document.getElementById("second");
  third = document.getElementById("third");
  fourth = document.getElementById("fourth");

  function stepsHover(stepName){
  stepName.onmouseover = function(){
      stepName.classList.toggle("active");
    }
  stepName.onmouseout = function(){
      stepName.classList.toggle("active");
    } 
  }

  stepsHover(first);
  stepsHover(second);
  stepsHover(third);
  stepsHover(fourth);


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


  // Send Email

  function wait(time){
  return new Promise(resolve => setTimeout(resolve, time));
  }

  var csbtn = document.getElementById("btncs");

  csbtn.addEventListener('click', function(e){
  e.preventDefault();

  alertMsg = document.getElementById('alert');

  nameLabel = document.querySelector(".name-label");
  emailLabel = document.querySelector(".email-label");
  msgLabel = document.querySelector(".msg-label");

  nombre = document.getElementById('name');
  email = document.getElementById('email');
  msg = document.getElementById('msg');

  body = 'name: ' + nombre.value + '<br/> email: ' + email.value + '<br/> message: ' + msg.value;

  function clearInputs(){
      nombre.value = "";
      email.value = "";
      msg.value = "";
  }

  function correctValidation(){
      nombre.classList.remove("invalid");
      email.classList.remove("invalid");
      msg.classList.remove("invalid");

      nameLabel.classList.remove("invalid");
      emailLabel.classList.remove("invalid");
      msgLabel.classList.remove("invalid");
  }

  function checkValidation(inputName, inputLabel){
      if(inputName.validity.valid == false){
          inputName.value = "";
          inputName.classList.add("invalid");
          inputLabel.classList.add("invalid");
      }else{
          inputName.classList.remove("invalid");
          inputLabel.classList.remove("invalid");
          alertMsg.classList.add('invalid');
      }
  }

  checkValidation(nombre, nameLabel);
  checkValidation(email, emailLabel);
  checkValidation(msg, msgLabel);

  if(nombre.validity.valid == false || email.validity.valid == false || msg.validity.valid == false){
      alertMsg.classList.add('invalid');
  }else{
      alertMsg.classList.remove('invalid');
      alertMsg.classList.add('valid');
      correctValidation();
      clearInputs();

      Email.send({
          SecureToken : "09c36a42-e397-48c2-a1a7-7a86178c331c",
          To : 'fusion.labs.uy@gmail.com',
          From : 'fusion.labs.uy@gmail.com',
          Subject : "FusionLabs | Contact Message",
          Body : body
      }).then(
        message => alert("Tu mensaje fue enviado, pronto te llegara una respuesta!")
      );

      wait(2000).then(() => {
          alertMsg.classList.remove('valid');
      });
  }

  }) 
  


// E-COMMERCE PAGE:  

}else if(document.getElementById('ecommerce-page')){

  // Products - display Plan Content:

  products = document.querySelector(".products");
  plans = document.querySelector(".plans");

  standard = document.querySelector(".standard");
  avanzado = document.querySelector(".avanzado");
  premium = document.querySelector(".premium");

  function displayPlanContent(planName){
    planName.onmouseover = function(){
      planName.classList.toggle("active");

      products.classList.toggle("active");
      plans.classList.toggle("active");
    }

    planName.onmouseout = function(){
      planName.classList.toggle("active");

      products.classList.toggle("active");
      plans.classList.toggle("active");
    }
  }

  displayPlanContent(standard);
  displayPlanContent(avanzado);
  displayPlanContent(premium);



// FAQs PAGE:

}else if(document.getElementById('FAQs-page')){

  faqPage = document.querySelector(".FAQs");
  questions = document.querySelector(".questions");

  faq1 = document.getElementById("faq1");
  faq2 = document.getElementById("faq2");
  faq3 = document.getElementById("faq3");
  faq4 = document.getElementById("faq4");

  FAQs = [faq1, faq2, faq3, faq4];

  function displayFAQsContent(faq){
    faq.onmouseover = function(){
      faq.classList.toggle("active");

      faqPage.classList.toggle("active");
      questions.classList.toggle("active");
    }

    faq.onmouseout = function(){
      faq.classList.toggle("active");

      faqPage.classList.toggle("active");
      questions.classList.toggle("active");
    }
  }

  for (let i = 0; i < FAQs.length; i++) {
    displayFAQsContent(FAQs[i]);
  }

}