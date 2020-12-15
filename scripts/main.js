$(document).ready(function () {
    // использование xml
    var xml = "<?xml version = '1.0'?>" +
              "<footer>" +
              "<author>Danila Ptukha</author>" +
              "<projectname>Authors Library</projectname>" + 
              "<year>2020</year>"+
              "</footer>";
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xml, "text/xml");
    var name = xmlDoc.getElementsByTagName("author");
    var pjtitle = xmlDoc.getElementsByTagName("projectname");
    var year = xmlDoc.getElementsByTagName("year");
    var title = document.getElementsByClassName("dev-info");
    var string = "© " + year[0].innerHTML + " " + name[0].innerHTML + " - " + pjtitle[0].innerHTML;
    title[0].innerHTML = string;

    // работа с гамбургер меню
    $(".humb").click(function (e) {
        $(".header-wrapper").toggleClass("adopt-head")
    });
    $(".nav-link").click(function (e) {
        $(".header-wrapper").removeClass("adopt-head")
    });

    // скроллинг по нажатию
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementID = $(this).data("scroll");
        let elementOffset = $(elementID).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset
        }, 'fast');

    });

    // анимации waypoint + animate.css
    $(".banner-item").animatedX("fadeInDown", "fadeOut");
    $(".button").animatedX("fadeIn", "fadeOut");
    $(".title").animatedX("fadeInDown", "fadeOut");
    $(".about-text").animatedX("fadeInRight", "fadeOutLeft");
    $(".services").animatedX("fadeInLeft", "fadeOutRight");
    $(".atrs").animatedX("fadeInRight", "fadeOutLeft");
    // $(".goods").animated("fadeInLeft", "fadeOutRight");
    $(".contacts").animatedX("fadeInRight", "fadeOutLeft");

    // работа с popup
    var buf;
    $(".custom-book").on("click", function () {
        buf = "custom-book-popup";
    });
    $(".new-author").on("click", function () {
        buf = "new-author-popup";
    })
    $(".op").on('click', function showpop() {
        $(".form-inp").each(function (param) {
            $(this).val("");
        })
        $(".popup").fadeIn(200);
        $(".popup").css("display", "flex");
        $(".popup").addClass(buf);
    })
    $(".close").click(function (e) {
        $(".popup").fadeOut(200).removeClass(buf);
    });
    $("#submit").click(function (e) {
        var flag = 0;
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

    // настройка слайдера owl carousel
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
            }
        }
    });

    // контроль верхнего положения страницы для header
    $(document).scroll(function () {
        var top = $('header').offset().top;
        if (top == 0) {
            $(".header-wrapper").addClass('top')
        } else {
            $(".header-wrapper").removeClass('top')
        }
    })
})