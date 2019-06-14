//Animação do Hamburger Button
$(function () {
  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});
//Script para fazer o fadeOut e fadeIn dos slides
function trocaServico(elementoQueSai, elementoQueEntra) {
  if($(elementoQueEntra).hasClass('viewAtiva')===false){
    $(elementoQueSai).addClass('fadeOut animated');
    $(elementoQueSai).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(elementoQueSai).addClass('hideSection');
      $(elementoQueSai).removeClass('fadeOut animated viewAtiva');
      $(elementoQueEntra).removeClass('hideSection');
      $(elementoQueEntra).addClass('fadeIn animated viewAtiva');
      $(elementoQueSai).off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
    });
    $(elementoQueEntra).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(elementoQueSai).removeClass('fadeIn animated');
      $(elementoQueEntra).off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
    });
  }
}