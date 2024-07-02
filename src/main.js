$(function () {
  var $NaviMenu = $(".header__nav__item"),
    $header = $(".header");

  $NaviMenu
    .mouseenter(function () {
      $header.stop().animate({ height: "400px" }, 400);
    })
    .mouseleave(function () {
      $header.stop().animate({ height: "90px" }, 400);
    });
});
