var doc = $(document);
var l = $('.scrolly');
var panel = $('.panel');
var vh = $(window).height();


// reveal content of first panel by default
panel.eq(0).find('.panel__content').addClass('panel__content--active');

var scrollFx = function () {
    var ds = doc.scrollTop();
    var of = vh / 4;

    // if the panel is in the viewport, reveal the content, if not, hide it.
    for (var i = 0; i < panel.length; i++) {
        if (panel.eq(i).offset().top < ds + of ) {
            panel
                .eq(i)
                .find('.panel__content')
                .addClass('panel__content--active').end()



        } else {
            panel
                .eq(i)
                .find('.panel__content')
                .removeClass('panel__content--active')
        }
    }
};

var scrolly = function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 300, 'swing', function () {
        window.location.hash = target;
    });
}

var init = function () {
    window.addEventListener('scroll', scrollFx, false);
    window.addEventListener('load', scrollFx, false);
    $('a[href^="#"]').on('click', scrolly);
};

doc.on('ready', init);

// 

$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,

            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
            }
        }
    });
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': false,
        'disableScrolling': true,
        maxWidth: 800,
        maxHeight: 600,
    });

    // navbar
    $(".items-wrapper li").on('click', function () {
        window.location = $(this).find('a').attr('href');
        $(this).addClass('active-link').siblings().removeClass('active-link');

    });

});