//JS

$(document).ready(function(){

    //Lazy-Load
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazyload"
    });

//Menu
    $(function () {
        $('.hamburger').on('click', function () {
            $('.toggle').toggleClass('open');
            $('.menu').toggleClass('open');
        });
    });

//Menu-Active
    jQuery(function($) {
        var path = window.location.href;
        $('ul li a').each(function() {
            if (this.href === path) {
                $(this).addClass('active');
            }
        });
    });

//Menu-Scroll
    $(window).scroll(function() {
        if($(document).scrollTop() > 0) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed')
        }
    });

//Home_Slider
    $('.home_slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

//Home_Services_Tab
    $(".home_services_tab, .home_projects_tab, .our_projects_tab").pTab({
        pTab: '.tab-list',
        pTabElem: 'li',
        pClass : 'aktif',
        pDuration : 500,
        pEffect : 'show',
        pContent: '.tab-content'
    });

//Home_Blog
    $('.home_blog').owlCarousel({
        loop:true,
        margin:25,
        nav:false,
        dots: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            800:{
                items:2
            },
            1000:{
                items:2
            },
            1200:{
                items:3
            },
            1400:{
                items:3
            },
            1600:{
                items:3
            }
        }
    });

//Home_Client

    var nexticon = '<i class="fas fa-chevron-left"></i>';
    var previcon = '<i class="fas fa-chevron-right"></i>';

    $('.home_client').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        dots: false,
        autoplay:true,
        navText: [nexticon, previcon],
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            800:{
                items:1
            },
            1000:{
                items:2
            },
            1200:{
                items:2
            },
            1400:{
                items:2
            },
            1600:{
                items:2
            }
        }
    });

    //Home_Brand

    var nexticon = '<i class="fas fa-chevron-left"></i>';
    var previcon = '<i class="fas fa-chevron-right"></i>';

    $('.home_brand').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        dots: false,
        autoplay:true,
        navText: [nexticon, previcon],
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            800:{
                items:3
            },
            1000:{
                items:4
            },
            1200:{
                items:5
            },
            1400:{
                items:5
            },
            1600:{
                items:6
            }
        }
    });

    //About-Counter
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    //About_Team

    var nexticon = '<i class="fas fa-chevron-left"></i>';
    var previcon = '<i class="fas fa-chevron-right"></i>';

    $('.about_team').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        dots: false,
        autoplay:true,
        navText: [nexticon, previcon],
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            800:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            },
            1400:{
                items:4
            },
            1600:{
                items:4
            }
        }
    });

    //Services_Details
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;
    var nexticon = '<i class="fas fa-chevron-left"></i>';
    var previcon = '<i class="fas fa-chevron-right"></i>';

    sync1.owlCarousel({
        items : 1,
        slideSpeed : 2000,
        margin:5,
        nav: false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        dots: false,
        loop: true,
        responsiveRefreshRate : 200,
        navText: [nexticon, previcon],
    }).on('changed.owl.carousel', syncPosition);
    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items : slidesPerPage,
            dots: false,
            nav: false,
            margin:10,
            smartSpeed: 200,
            slideSpeed : 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate : 100
        }).on('changed.owl.carousel', syncPosition2);
    function syncPosition(el) {
        var count = el.item.count-1;
        var current = Math.round(el.item.index - (el.item.count/2) - .5);

        if(current < 0) {
            current = count;
        }
        if(current > count) {
            current = 0;
        }
        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }
    function syncPosition2(el) {
        if(syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }
    sync2.on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });

    //Projects_Details_İmage

    var nexticon = '<i class="fas fa-chevron-left"></i>';
    var previcon = '<i class="fas fa-chevron-right"></i>';

    $('.projects_details_image').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        autoplay:true,
        navText: [nexticon, previcon],
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            800:{
                items:1
            },
            1000:{
                items:1
            },
            1200:{
                items:1
            },
            1400:{
                items:1
            },
            1600:{
                items:1
            }
        }
    });

    //Faq-Accordion
    $('.accordion-item .heading').on('click', function(e) {
        e.preventDefault();

        // Add the correct active class
        if($(this).closest('.accordion-item').hasClass('active')) {
            // Remove active classes
            $('.accordion-item').removeClass('active');
        } else {
            // Remove active classes
            $('.accordion-item').removeClass('active');

            // Add the active class
            $(this).closest('.accordion-item').addClass('active');
        }

        // Show the content
        var $content = $(this).next();
        $content.slideToggle(100);
        $('.accordion-item .content').not($content).slideUp('fast');
    });

});