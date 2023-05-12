// jquery
$(function() {
  // slick
  $(".slider").slick({
    arrows: true,
    fade: true,
    asNavFor: ".thumbnail",
  });
  $(".thumbnail").slick({
    slidesToShow: 12,
    asNavFor: ".slider",
    focusOnSelect: true,
  });
});

//ハンバーガーのスクロール
window.addEventListener("scroll", function(){
  // ハンバガーの定義
  const hamburger = document.querySelector(".hamburger");
  // スクロール時の動き
  hamburger.classList.toggle("scroll-active", window.scrollY > 50);
});

// 郵便番号のリセット機能
function addressNumReset() {
  const addressreset = document.getElementById("address-form");
  addressreset.value = '';
}
