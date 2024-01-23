// FusionLabs | Uy Software Company - landing page

// NavBar - toggle Responsive Menu:

burger = document.querySelector(".burger")
navBar = document.querySelector(".menu")

burger.onclick = function(){
    navBar.classList.toggle("active")
    burger.classList.toggle("active")
}

navBar.onclick = function(){
    navBar.classList.toggle("active")
    burger.classList.toggle("active")
}


// On Scroll effects

window.addEventListener('scroll', reveal)

function reveal(){
  var reveals = document.querySelectorAll('.reveal')

  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight
    var revealtop = reveals[i].getBoundingClientRect().top
    var revealpoint = 150

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active')
    }else{
      reveals[i].classList.remove('active')
    }
  }
}


var contactBtn = document.getElementById("contact-btn")

contactBtn.addEventListener('click', function(e){
  e.preventDefault()

  var nombre = document.getElementById('name')
  var empresa = document.getElementById('business')
  var email = document.getElementById('email')
  var phoneNumber = document.getElementById('phone-number')
  var msg = document.getElementById('msg')

  var body = '<br/> name: ' + nombre.value + '<br/> businessr: ' + empresa.value + 
             '<br/> email: ' + email.value + '<br/> phone number: ' + phoneNumber.value +
             '<br/> message: ' + msg.value 
             

  function clearInputs(){
    nombre.value = ""
    empresa.value = ""
    email.value = ""
    phoneNumber.value = ""
    msg.value = ""
  }

  clearInputs()

  Email.send({
    SecureToken : "09c36a42-e397-48c2-a1a7-7a86178c331c",
    To : 'fusion.labs.uy@gmail.com',
    From : 'fusion.labs.uy@gmail.com',
    Subject : "FusionLabs | Contact Message",
    Body : body
  }).then(
    message => alert("Tu mensaje fue enviado, pronto te llegara una respuesta!")
  )
})
