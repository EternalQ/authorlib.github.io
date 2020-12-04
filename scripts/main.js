$(document).ready(function () {

    $(".banner-item").animatedX("fadeInDown");
    $(".button").animatedX("fadeIn", "fadeOut");

    $(".title").animatedX("fadeInDown", "fadeOut")
    $(".about-text").animatedX("fadeInRight", "fadeOutLeft");
    $(".services").animatedX("fadeInLeft", "fadeOutRight");
    $(".atrs").animatedX("fadeInRight", "fadeOutLeft");

    $(document).scroll(function () {

        var top = $('header').offset().top;
        if (top == 0) {
            $(".header-wrapper").addClass('top')
        } else {
            $(".header-wrapper").removeClass('top')
        }
    })
})