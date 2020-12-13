$(document).ready(function () {
    $(".humb").on('click', function () {
        // $("body").css("overflow", "hidden")
        $(".header-wrapper").addClass("adopt-head")
        $("#examp").fadeIn(400)
        $(".nav-link").click(function (e) {
            $("#examp").fadeOut(400)
            $(".header-wrapper").removeClass("adopt-head")
        });
    })

    $(".banner-item").animatedX("fadeInDown", "fadeOut");
    // $(".button").animatedX("fadeIn", "fadeOut");
    // $(".title").animatedX("fadeInDown", "fadeOut")
    // $(".about-text").animatedX("fadeInRight", "fadeOutLeft");
    // $(".services").animatedX("fadeInLeft", "fadeOutRight");
    // $(".atrs").animatedX("fadeInRight", "fadeOutLeft");
    // $(".goods").animated("fadeInLeft", "fadeOutRight");
    // $(".contacts").animatedX("fadeInRight", "fadeOutLeft");

    var buf;
    $(".custom-book").on("click", function () {
        buf = "custom-book-popup";
    });
    $(".new-author").on("click", function () {
        buf = "new-author-popup";
    })
    $(".op").on('click', function showpop() {
        $(".form-inp").each(function (param) {
            $(this).val('');
        })
        $(".popup").fadeIn(200);
        $(".popup").css("display", "flex");
        $(".popup").addClass(buf);
    })
    $(".close").click(function (e) {
        $(".popup").fadeOut(200).removeClass(buf);
    });
    var flag = 0;
    $("#submit").click(function (e) {
        $(".form-inp").each(function (param) {
            if ($(this).val() == '')
                flag = 1;
        })
        if (flag != 1) {
            $(".popup").fadeOut(200).removeClass(buf);
        }
    });
    $(document).mouseup(function (e) {
        var pop = $(".popup-content");
        if (e.target != pop[0] && pop.has(e.target).length === 0)
            $(".popup").fadeOut(200).removeClass(buf);
    })

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
                stagePadding: 50,
                margin: 60
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

        // var forRGB = "" + Math.round(pct) / 100;
        // rgba = "rgba(36, 36, 36, " + forRGB + ")";
        // $(".header-wrapper").css("background", rgba);
        // console.log(rgba);
    })
})
