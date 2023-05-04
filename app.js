// FusionLabs - juanigomez | landing page - JavaScript

//Toggle Responsive Menu:

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
    

// Services - hover effect:

hosting = document.getElementById("host");
Ecommerce = document.getElementById("e-comm");
landing = document.getElementById("lp");
asess = document.getElementById("as");

hosting.onmouseover = function(){
    hosting.classList.toggle("active");
}
hosting.onmouseout = function(){
    hosting.classList.toggle("active");
}

Ecommerce.onmouseover = function(){
    Ecommerce.classList.toggle("active");
}
Ecommerce.onmouseout = function(){
    Ecommerce.classList.toggle("active");
}

landing.onmouseover = function(){
    landing.classList.toggle("active");
}
landing.onmouseout = function(){
    landing.classList.toggle("active");
}

asess.onmouseover = function(){
    asess.classList.toggle("active");
}
asess.onmouseout = function(){
    asess.classList.toggle("active");
}

    
//Display Plan Content:
    
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


// Steps - hover effect:

first = document.getElementById("first");
second = document.getElementById("second");
third = document.getElementById("third");
fourth = document.getElementById("fourth");

first.onmouseover = function(){
    first.classList.toggle("active");
}
first.onmouseout = function(){
    first.classList.toggle("active");
}

second.onmouseover = function(){
    second.classList.toggle("active");
}
second.onmouseout = function(){
    second.classList.toggle("active");
}

third.onmouseover = function(){
    third.classList.toggle("active");
}
third.onmouseout = function(){
    third.classList.toggle("active");
}

fourth.onmouseover = function(){
    fourth.classList.toggle("active");
}
fourth.onmouseout = function(){
    fourth.classList.toggle("active");
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
    