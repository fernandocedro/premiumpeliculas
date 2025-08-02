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
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-clientes",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 5 // vai usar o tamanho real de cada slide
    }
  }
});


// Swiper para depoimentos/testemunhos
var swiperTestemunhal = new Swiper(".ltestemunhal", {
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
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

  //menu hamburguer

  function hamburguerMenu() {
    const menu =  document.getElementById("menu");
    menu.classList.toggle("ativo");
  }