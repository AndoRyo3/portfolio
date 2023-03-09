
var loading = $("#js-loading");
$(window).on("load", function () {
    var windowHeight = $(window).height();
    $(".top").height(windowHeight);
    loading.delay("1000").fadeOut("2000");
});

setTimeout(function () {
    loading.fadeOut("3000");
}, 8000);



$(window).on('load resize', function () {
    var window_height = window.innerHeight ? window.innerHeight : $(window).innerHeight();
    var window_width = window.innerWidth ? window.innerWidth : $(window).width();
    if (window_width <= 768) {
        $('.top').css('height', window_height + 'px');
    } else {
        $('.top').css('height', '90vh');
    }
});

$(function () {
    $(".mv-ul li").css({ "position": "relative", "overflow": "hidden" });
    $(".mv-ul li").hide().css({ "position": "absolute", "top": 0, "left": 0 });
    $(".mv-ul li:first").addClass("fade").show();
    setInterval(function () {
        var $active = $(".mv-ul li.fade");
        var $next = $active.next("li").length ? $active.next("li") : $(".mv-ul li:first");
        $active.fadeOut(2000).removeClass("fade");
        $next.fadeIn(2000).addClass("fade");
    }, 4000);
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

// $(function () {
//     const hum = $('.plate, .close, .sp-link')
//     const nav = $('.sp-nav')
//     hum.on('click', function () {
//         nav.toggleClass('toggle');
//         $('.plate').toggleClass('active');
//         return false;
//     });
// });

$(function () {
    const ham = $('.menu-trigger, .sp-link')
    ham.on('click', function () {
        $('.menu-trigger').toggleClass('active');
        $('.sp-nav').toggleClass('toggle')
        return false;
    });
});

function fadein_blocks(s) {
    $(window).scroll(function () {
        $(s).each(function (s) {
            var i = $(this).offset().top;
            $(window).scrollTop() > i - $(window).height() + 100 &&
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
            $(window).scrollTop() > s - $(window).height() + 100 &&
                $(this).addClass("is-fadein");
        });
    });
})(".js-fadein");

fadein_blocks(".works__link");


const mySwiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,

    breakpoints: {
        600: {
            slidesPerView: 3,
        },
        300: {
            slidesPerView: 2,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});


$(window).scroll(function () {
    $(".skills__circle").each(function () {
        var i = $(this);
        t = $(this).offset().top;
        if ($(window).scrollTop() > t - $(window).height() + 150) {
            setTimeout(function () {
                $(i).is('[data-progress="90"]') &&
                    $(i).addClass("skills__circle-90").addClass("skills__circle-max"),
                    $(i).is('[data-progress="80"]') &&
                    $(i).addClass("skills__circle-80").addClass("skills__circle-max"),
                    $(i).is('[data-progress="70"]') &&
                    $(i).addClass("skills__circle-70").addClass("skills__circle-max"),
                    $(i).is('[data-progress="60"]') &&
                    $(i).addClass("skills__circle-60").addClass("skills__circle-max"),
                    $(i).is('[data-progress="50"]') &&
                    $(i).addClass("skills__circle-50"),
                    $(i).is('[data-progress="40"]') &&
                    $(i).addClass("skills__circle-40"),
                    $(i).is('[data-progress="30"]') &&
                    $(i).addClass("skills__circle-30");
            }, 500);
        }
    });
});

$(".skills__circle").hover(
    function () {
        $(this).find(".skill_per").fadeIn();
    },
    function () {
        $(this).find(".skill_per").fadeOut();
    }
);

$(function () {
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.header').addClass('is-active')
    } else {
        $('.header').removeClass('is-active')
    }
});