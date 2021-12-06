$(document).ready(function () {
  $('.menu-burger').click(function () {
    $('.menu-burger').toggleClass('open-menu');
    $('.top-menu').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
  });
});
