$(window).on('load resize', function () {
    var window_height = window.innerHeight ? window.innerHeight : $(window).innerHeight();
    var window_width = window.innerWidth ? window.innerWidth : $(window).width();
    if (window_width <= 768) {
        $('.top').css('height', '600px');
    } else {
        $('.top').css('height', '670px');
    }
});


$('a[href^="#"]').on("click", function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate(
        {
            scrollTop: position,
        },
        speed,
        "swing"
    );
    return false;
});

$(function() {
    const hum = $('.plate, .close, .sp-link')
    const nav = $('.sp-nav')
    hum.on('click', function(){
       nav.toggleClass('toggle');
       $('.plate').toggleClass('active');
       return false;
    });
 });


function fadein_blocks(s) {
    $(window).scroll(function () {
        $(s).each(function (s) {
            var i = $(this).offset().top;
            $(window).scrollTop() > i - $(window).height() + 200 &&
                $(this)
                    .delay(300 * s)
                    .queue(function () {
                        $(this).addClass("is-fadein");
                    });
        });
    });
}
!(function (s) {
    $(window).scroll(function () {
        $(s).each(function () {
            var s = $(this).offset().top;
            $(window).scrollTop() > s - $(window).height() + 200 &&
                $(this).addClass("is-fadein");
        });
    });
})(".js-fadein");

fadein_blocks(".works__link");


const swiper = new Swiper(".swiper", {
    // ページネーションが必要なら追加
    pagination: {
      el: ".swiper-pagination"
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "2",
  
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
  
    // ナビボタンが必要なら追加
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });