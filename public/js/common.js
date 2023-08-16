$(function() {
    var b = 100;
    $(window).scroll(function() {
        var c = a();
        if (c >= b) {
            $(".b-header").addClass("sticky-header")
        } else {
            $(".b-header").removeClass("sticky-header")
        }
    });

    function a() {
        return window.pageYOffset || document.documentElement.scrollTop
    }
});

$(".b-return-to-top").click(function() {
    $("body,html").animate({
        scrollTop: 0
    }, 500)
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $(".b-return-to-top").fadeIn(200)
    } else {
        $(".b-return-to-top").fadeOut(200)
    }
});


jQuery(document).ready(function() {
    jQuery("#loader").fadeOut(1000)
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

$('.b-theme-mode').on('click', function(e) {
    $(this).toggleClass("active");
    $("body").toggleClass("b-light-mode");
    e.preventDefault();
});