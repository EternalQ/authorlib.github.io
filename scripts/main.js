$(document).ready(function () {
    // new universalParallax().init();

    $(".banner-item").animatedX("fadeInDown", "fadeOut");
    $(".button").animatedX("fadeIn", "fadeOut");

    $(".title").animatedX("fadeInDown", "fadeOut")
    $(".about-text").animatedX("fadeInRight", "fadeOutLeft");
    $(".services").animatedX("fadeInLeft", "fadeOutRight");
    $(".atrs").animatedX("fadeInRight", "fadeOutLeft");
    $(".goods").animated("fadeInLeft", "fadeOutRight");


    $('.owl-carousel').owlCarousel({
        margin: 50,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4500,
        autoplaySpeed: 800,
        autoplayHoverPause: true,
        center: false,
        nav: false,
        dots: false,
        // autoWidth: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
                stagePadding: 50
            },
            1025: {
                items: 4,
                stagePadding: 50,
            },
            1200: {
                items: 5
            },
            // 1400: {
            //     items: 5,
            //     stagePadding: 100
            // }
        }
    });

    var bh = $(".banner").outerHeight();
    var pct = 0;
    $(document).scroll(function () {
        var top = $('header').offset().top;
        if (top == 0) {
            $(".header-wrapper").addClass('top')
        } else {
            $(".header-wrapper").removeClass('top')
        }

        if (top < bh) {
            pct = top / bh * 100;
            // console.log(pct);
        } else {
            pct = 100;
            // console.log(pct);
        }

        var forRGB = "" + Math.round(pct) / 100;
        rgba = "rgba(36, 36, 36, " + forRGB + ")";
        $(".header-wrapper").css("background", rgba);
        console.log(rgba);
    })
})