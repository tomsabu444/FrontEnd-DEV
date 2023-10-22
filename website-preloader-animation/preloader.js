'use strict';

// PRELOAD
function preloader_inner() {
  var count = setInterval(function () {
    var c = parseInt($(".preloader_inner").text());
    $(".preloader_inner").text((++c).toString());
    if (c == 100) {
      clearInterval(count);
      $('.preloader_inner').addClass('hide')
      $('.preloader').addClass('hide')
    }
  }, 10);
}
preloader_inner();