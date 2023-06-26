
  /*==============Animacion footer=============*/
  document.addEventListener("DOMContentLoaded", function(event) {
    const carousel = document.querySelector(".carousel");
    const slides = carousel.querySelector(".carousel__slides");
    const slideWidth = carousel.clientWidth;
  
    const prevButton = carousel.querySelector(".carousel__prev");
    const nextButton = carousel.querySelector(".carousel__next");
  
    let slideIndex = 0;
  
    // Función para mover el carrusel al siguiente slide
    function nextSlide() {
      slideIndex++;
      if (slideIndex >= slides.children.length) {
        slideIndex = 0;
      }
      slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }
  
    // Función para mover el carrusel al slide anterior
    function prevSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = slides.children.length - 1;
      }
      slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }
  
    // Event listeners para los botones de anterior y siguiente
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  });
  
  
