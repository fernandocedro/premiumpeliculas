var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var swiperClientes = new Swiper(".mySwiper-clientes", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-clientes", // classe única
    clickable: true,
  },
});

// Swiper para depoimentos/testemunhos
var swiperTestemunhal = new Swiper(".ltestemunhal", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  
 
});

document.getElementById("logo").addEventListener("click", function() {
  // Redireciona para a página inicial
  window.location.href = "index.html";

})

document.addEventListener('DOMContentLoaded', function () {
    const imagens = document.querySelectorAll('.galeria img');
    const popup = document.getElementById('popup');
    const imagemPopup = document.getElementById('imagemPopup');
    const descricaoPopup = document.getElementById('descricaoPopup');
    const fecharBtn = document.getElementById('fechar');

    imagens.forEach(img => {
      img.addEventListener('click', function () {
        imagemPopup.src = this.src;
        descricaoPopup.textContent = this.getAttribute('data-desc');
        popup.style.display = 'flex';
      });
    });

    fecharBtn.addEventListener('click', function () {
      popup.style.display = 'none';
    });

    // Fecha ao clicar fora da imagem
    popup.addEventListener('click', function (e) {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
  });