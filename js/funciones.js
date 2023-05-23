// funcion para mostrar boton scrolltop
let mybutton = document.getElementById("myBtn");
let btnwhat = document.getElementById("whatsapp")
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
    btnwhat.style.display = "block";
  } else {
    mybutton.style.display = "none";
    btnwhat.style.display = "none";
  }
}

function topFunction() {
    window.scrollTo({top:0, behavior: 'smooth'});
}
//fin funcion

//funcion para animacion de card
window.addEventListener('scroll', function() {
  var cards = document.querySelectorAll('.card');

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    if (isElementInViewport(card)) {
      card.classList.add('show');
    }
  }
});

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
//fin funcion

//funcion para mostrar modal y finalizar reproduccion del video
$(document).ready(function() {
  $('#staticBackdrop').modal('show');
});


window.onload = function() {
  var videoPlayer = document.getElementById("videoPlayer");

  $('#staticBackdrop').on('shown.bs.modal', function (e) {
    videoPlayer.play();
  });

  $('#staticBackdrop').on('hidden.bs.modal', function (e) {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  });
};
//fin funcion

// Función para el desplazamiento suave al hacer clic en los enlaces del navbar
document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      var targetId = this.getAttribute("href");
      var targetElement = document.querySelector(targetId);

      if (targetElement) {
        var offsetTop = targetElement.offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
});
//fin funcion


