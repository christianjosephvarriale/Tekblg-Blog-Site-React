import $ from 'jquery';
const AOS = require("../lib/aos.js");
require("../js/plugins.js");

var cfg = {
    scrollDuration : 800, // smoothscroll duration
};

var clSlickSlider = function() {
    
    $('.featured-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        pauseOnFocus: false,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    arrows: false,
                    centerPadding: '8%'
                }
            },
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                    centerPadding: '5%'
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    centerMode: false
                }
            }
        ]
    });
};


/* Smooth Scrolling
* ------------------------------------------------------ */
var clSmoothScroll = function() {
    
    $('.smoothscroll').on('click', function (e) {
        var target = this.hash,
        $target    = $(target);
        
            e.preventDefault();
            e.stopPropagation();

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, cfg.scrollDuration, 'swing').promise().done(function () {

            // check if menu is open
            if ($('body').hasClass('menu-is-open')) {
                $('.header-menu-toggle').trigger('click');
            }

            window.location.hash = target;
        });
    });

};


/* Animate On Scroll
* ------------------------------------------------------ */
var clAOS = function() {
    
    AOS.init( {
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 300,
        once: true,
        disable: 'mobile'
    });

};


/* Back to Top
* ------------------------------------------------------ */
var clBackToTop = function() {
    
    var pxShow      = 500,
        goTopButton = $(".go-top")

    // Show or hide the button
    if ($(window).scrollTop() >= pxShow) goTopButton.addClass('link-is-visible');

    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= pxShow) {
            if(!goTopButton.hasClass('link-is-visible')) goTopButton.addClass('link-is-visible')
        } else {
            goTopButton.removeClass('link-is-visible')
        }
    });
};

/* Initialize
* ------------------------------------------------------ */
(function clInit() {
    clSlickSlider();
    clSmoothScroll();
    clAOS();
    clBackToTop();
  }) ();