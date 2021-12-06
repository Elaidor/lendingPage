var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slides = $('#slidewrapper').children('.slide');
var slideInterval = 3200;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function () {
  var switchInterval = setInterval(nextSlide, slideInterval);

  $('#viewport').hover(
    function () {
      clearInterval(switchInterval);
    },
    function () {
      switchInterval = setInterval(nextSlide, slideInterval);
    },
  );

  $('.slide-nav-btn').click(function () {
    navBtnId = $(this).index();

    if (navBtnId + 1 !== slideNow) {
      translateWidth = -$('#viewport').width() * navBtnId;
      $('#slidewrapper').css({
        transform: 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow = navBtnId + 1;
    }
    activeSlide();
  });
});

function activeSlide() {
  $('#nav-btns li').removeClass('active');
  $('#nav-btns li:nth-child(' + slideNow + ')').addClass('active');
}
function nextSlide() {
  if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
    $('#slidewrapper').css('transform', 'translate(0, 0)');
    slideNow = 1;
  } else {
    translateWidth = -$('#viewport').width() * slideNow;
    $('#slidewrapper').css({
      transform: 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
    slideNow++;
  }
  activeSlide();
}
