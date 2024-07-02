$(function () {
  //  헤더 내비게이션 slide up down
  var $NaviMenu = $(".header__nav__item"),
    $header = $(".header");

  $NaviMenu
    .mouseenter(function () {
      $header.stop().animate({ height: "400px" }, 400);
    })
    .mouseleave(function () {
      $header.stop().animate({ height: "90px" }, 400);
    });

  // Home 슬라이드
  let n = 0;
  function fadeInOut() {
    $(".home__slide__item").stop().fadeOut();
    if (n == 3) {
      n = 0;
    } else {
      n++;
    }
    $(".home__slide__item").eq(n).stop().fadeIn();
  }
  let Timer = setInterval(fadeInOut, 3000);
});
