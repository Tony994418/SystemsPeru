window.addEventListener("scroll", function () {
    console.log("Scroll Position:", this.window.scrollY);
    var header = this.document.querySelector("header");
    header.classList.toggle("abajo", this.window.scrollY > 0);
})

  // JavaScript para cerrar el menú al hacer clic en el icono
  document.getElementById('menu').addEventListener('change', function () {
    var menu = document.querySelector('.menu');
    if (this.checked) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var menuCheckbox = document.getElementById('menu');
    var body = document.querySelector('body');

    // Evento de cambio del checkbox
    menuCheckbox.addEventListener('change', function () {
        if (this.checked) {
            body.classList.add('menu-open');
        } else {
            body.classList.remove('menu-open');
        }
    });
});



// Section Dos: Tipos de puertas y slider
var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'),
    items = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning');

let timeRunning = 3000;
let timeAutoNext = 9000;

nextBtn.onclick = function () {
    showSlider('next');
};

prevBtn.onclick = function () {
    showSlider('prev');
};

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextBtn.click();
}, timeAutoNext);

function resetTimeAnimation() {
    runningTime.style.animation = 'none';
    runningTime.offsetHeight; /* trigger reflow */
    runningTime.style.animation = 'runningTime 7s linear 1 forwards';
}

function showSlider(direction) {
    let activeItem = list.querySelector('.item:nth-child(1)');

    if (direction === 'next') {
        list.appendChild(activeItem);
    } else {
        list.prepend(list.lastElementChild);
    }

    clearTimeout(runTimeOut);

    runTimeOut = setTimeout(() => {
        resetTimeAnimation();
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation();
}

// Inicia la animación inicial
resetTimeAnimation();



// Seleccionar las miniaturas y la imagen principal
const main_img = document.querySelector('.main_img');
const thumbnails = document.querySelectorAll('.thumbnail');

// Agregar evento de clic a cada miniatura
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function () {
        // Cambiar la imagen principal al valor de data-image de la miniatura
        main_img.src = thumb.dataset.image;

        // Quitar la clase 'active' de cualquier miniatura activa
        document.querySelector('.thumbnail.active')?.classList.remove('active');

        // Añadir la clase 'active' a la miniatura clickeada
        thumb.classList.add('active');
    });
});



// Section Venta de productos
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });


// Para la tarjeta de formulario de contacto
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



// Enviar los datos del formulario a Whatsapp
document.getElementById('send-btn').addEventListener('click', function() {
    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Construir el mensaje para WhatsApp
    const whatsappMessage = `Hola, mi nombre es ${name}, mi DNI/RUC es: ${phone} y quiero enviar el siguiente mensaje: ${message}`;

    // Reemplazar el número de teléfono de WhatsApp con el tuyo
    const whatsappUrl = `https://wa.me/51987654321?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirigir a WhatsApp
    window.open(whatsappUrl, '_blank');
  });