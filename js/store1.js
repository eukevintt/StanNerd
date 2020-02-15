var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }, 
    }); 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("botao-top").style.display = "block";
  } else {
    document.getElementById("botao-top").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}

function trocar(imagem,titulo,descricao){
  
  document.getElementById('imagem_principal').src = imagem;
  document.getElementById('titulo').value = titulo;
  document.getElementById('descricao').value = descricao;
    
}

