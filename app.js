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

if (document.getElementById('index-page')) {

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
  businessLabel = document.querySelector(".business-label");
  emailLabel = document.querySelector(".email-label");
  msgLabel = document.querySelector(".msg-label");

  nombre = document.getElementById('name');
  empresa = document.getElementById('business');
  email = document.getElementById('email');
  msg = document.getElementById('msg');

  body = '<b> Nombre:</b> ' + nombre.value + '<br/> <b> Empresa:</b> ' + business.value + 
         '<br/> <b> Email:</b> ' + email.value + '<br/> <b> Mensaje:</b> ' + msg.value;

  function clearInputs(){
      nombre.value = "";
      empresa.value = "";
      email.value = "";
      msg.value = "";
  }

  function correctValidation(){
      nombre.classList.remove("invalid");
      empresa.classList.remove("invalid");
      email.classList.remove("invalid");
      msg.classList.remove("invalid");

      nameLabel.classList.remove("invalid");
      businessLabel.classList.remove("invalid");
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
  checkValidation(empresa, businessLabel);
  checkValidation(email, emailLabel);
  checkValidation(msg, msgLabel);

  if(nombre.validity.valid == false || business.validity.valid == false || 
     email.validity.valid == false || msg.validity.valid == false){
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

}else if(document.getElementById('works-page')){

  toggleSwitch = document.querySelector(".toggle-switch");

  landingExamples = document.querySelector(".landing-examples");
  ecommerceExamples = document.querySelector(".ecom-examples");

  landingText = document.querySelector(".landingH3");
  ecommerceText = document.querySelector(".ecomH3");

  toggleSwitch.onclick = function(){
      toggleSwitch.classList.toggle("active");

      landingExamples.classList.toggle("active");
      landingText.classList.toggle("active");
      
      ecommerceExamples.classList.toggle("active");
      ecommerceText.classList.toggle("active");
  }

}



// ChatBot

const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

// Replace with your Google API key
const apiKey = "AIzaSyAASeT-hUv2iogea_en5Gd-dCLHDWNgkO0";

const categories = {
    "help": ['Consulta', 'Duda', 'Pregunta'],
    "thanks": ['Gracias', 'Util', 'Agradecido'],
    "services": ['Servicio', 'Plan', 'Productos', 'Precio', 'Costo', 'Sale', 'Cuesta'],
    "definitions": ['Landing', 'Hosting', 'E-commerce', 'Dominio', 'Software', 'FusionLabs', 'SSL', 'Programa', 'Algoritmo'],
    "purpouse": ['Enfoque', 'Dedican', 'Hacen', 'Objetivo'],
    "chatbot": ['Chatbot', 'Inteligencia Artificial', 'ia', 'ai', 'Persona', 'Verdad', 'Real']
};

const definitions = {
    "landing": "Una landing page es una página web. Su objetivo principal es convertir a los visitantes en clientes potenciales o clientes, generalmente a través de un formulario de registro o compra. Suelen ser páginas de destino únicas y no vinculadas a la navegación general del sitio web.",
    "hosting": "El hosting, en el contexto de la web, se refiere al servicio que proporciona servidores y recursos necesarios para que un sitio web sea accesible en Internet. Los proveedores de hosting alojan los archivos y datos de un sitio web en servidores que están en línea las 24 horas del día, los 7 días de la semana, para que los usuarios puedan acceder a él en cualquier momento.",
    "e-commerce": "El comercio electrónico, o e-commerce, es una forma de negocio en línea que implica la compra y venta de productos o servicios a través de Internet. Los sitios web de comercio electrónico permiten a los clientes explorar productos, agregar artículos a un carrito de compras, realizar pagos en línea y recibir productos o servicios en su ubicación deseada.",
    "dominio": "Un dominio, en el contexto de Internet, es una dirección única que se utiliza para identificar un sitio web en línea. Por ejemplo, 'miempresa.com' es un dominio. Los usuarios pueden acceder a un sitio web escribiendo su dominio en un navegador web.",
    "software": "El software se refiere a un conjunto de programas, datos y archivos diseñados para realizar tareas específicas en una computadora o dispositivo. Puede incluir aplicaciones, sistemas operativos, utilidades y más. El software permite a los usuarios interactuar con hardware y realizar diversas funciones en sus dispositivos.",
    "fusionlabs": "FusionLabs es una empresa de tecnología especializada en el desarrollo de soluciones de software personalizadas para empresas. Ofrece servicios de consultoría y desarrollo de software a medida para satisfacer las necesidades específicas de sus clientes.",
    "ssl": "SSL (Secure Sockets Layer) es un protocolo de seguridad que cifra la comunicación entre un navegador web y un servidor web. Se utiliza para proteger la confidencialidad de los datos transmitidos, como información de tarjetas de crédito y contraseñas, y garantizar que la conexión sea segura.",
    "programa": "Un programa se refiere a un conjunto de instrucciones escritas en un lenguaje de programación que se utiliza para realizar una tarea específica en una computadora. Los programas pueden ser aplicaciones de software que los usuarios utilizan o componentes del sistema operativo.",
    "algoritmo": "Un algoritmo es un conjunto ordenado de instrucciones diseñado para resolver un problema o realizar una tarea específica en un programa de computadora. Los algoritmos son la base de la programación y se utilizan para realizar cálculos, procesar datos y tomar decisiones.",
};

const conversationHistory = [];
const defaultResponses = [];

let userMessage = null; // Variable to store the user's message
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with the passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = async (userMessage) => {
    userMessage = userMessage.toLowerCase(); // Convert the user's message to lowercase for case-insensitive matching

    // Check for categories
    for (const category in categories) {
        const keywords = categories[category];
        if (checkKeywords(userMessage, keywords)) {
            const detectedKeyword = getDetectedKeyword(userMessage, keywords);

            if (category === "definitions") {
                const definition = definitions[detectedKeyword.toLowerCase()];
                if (definition) {
                    const response = definition;
                    return response;
                }
            } else if (category === "help") {
                const response = `Dime, ¿cómo puedo ayudarte con tu ${detectedKeyword.toLowerCase()}?`;
                return response;
            } else if (category === "thanks") {
                const response = `Me alegra haber sido útil! ¿Tienes alguna otra pregunta?`;
                return response;
            } else if (category === "purpouse") {
                const response = 'Nuestro objetivo como empresa es proporcionar soluciones tecnológicas innovadoras y de alta calidad que ayuden a nuestros clientes a alcanzar sus metas y objetivos. Nos enfocamos en la excelencia y la satisfacción del cliente en cada proyecto que emprendemos.'
                return response
            } else if (category === "chatbot") {
                const response = 'Soy un chatbot, no una persona real. Estoy diseñado para proporcionar información y asistencia en línea. Si tienes alguna pregunta o necesitas ayuda, ¡estaré encantado de ayudarte!'
                return response
            } else if (category === "services") {
                const response = 'En FusionLabs ofrecemos una variedad de servicios. Entre ellos landing pages, e-commerce, dominios, hosting, chatbots, mails corporativos, etc. El precio de cada uno varia dependiendo de las necesidades de cada cliente. Si quieres mas informacion, te recomiendo mandar un mensaje a traves de la seccion de Contacto.'
                return response
              }
        }
    }

    // Default response
    const response = `Entiendo que dijiste: "${userMessage}". ¿En qué puedo ayudarte?`;
    return response;
}

const handleChat = async () => {
    userMessage = chatInput.value.trim(); // Get the user-entered message and remove extra whitespace
    if (!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(async () => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Pensando...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);

        const response = await generateResponse(userMessage);

        setTimeout(() => {
            // Replace the "Thinking..." message with the generated response
            incomingChatLi.querySelector("p").textContent = response;
            chatbox.scrollTo(0, chatbox.scrollHeight);
            storeConversation(userMessage, response);
        }, 1000);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If the Enter key is pressed without the Shift key and the window width is greater than 800px, handle the chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

// Check if keywords
function checkKeywords(userMessage, keywordArray) {
    return keywordArray.some(keyword => userMessage.includes(keyword.toLowerCase()));
}

// Get keyword
function getDetectedKeyword(userMessage, keywordArray) {
    return keywordArray.find(keyword => userMessage.includes(keyword.toLowerCase()));
}

// Search better response
const searchOnline = async (userMessage) => {
  const googleSearchResults = await performGoogleSearch(userMessage);
    if (googleSearchResults) {
        return googleSearchResults;
    }
}

// Store conversation
function storeConversation(userMessage, botResponse) {
    conversationHistory.push({ userMessage, botResponse, formattedTimestamp });
    if (botResponse.startsWith("Entiendo que dijiste:")) {
      const googleResponse = searchOnline(userMessage);
      defaultResponses.push({ userMessage, googleResponse});
    }
}

// Format timestamp
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    return date.toLocaleDateString('en-US', options);
}

const timestamp = Date.now();
const formattedTimestamp = formatTimestamp(timestamp);

// Perform Google search using the Google Search JSON API
async function performGoogleSearch(query) {
  const searchInput = `wikipedia espanol ${query}.`;
    try {
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=9341a480e69b845fe&q=${encodeURIComponent(searchInput)}`);
      const data = await response.json();

        if (data.items && data.items.length > 0) {
          const firstResult = data.items[0];
          if (firstResult) {
              return firstResult.snippet;
          }
            
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error performing Google search:", error);
        return null;
    }
}

