$(document).ready((function(){new LazyLoad({elements_selector:".lazyload"});$((function(){$(".hamburger").on("click",(function(){$(".toggle").toggleClass("open"),$(".menu").toggleClass("open")}))})),jQuery((function(e){var a=window.location.href;e("ul li a").each((function(){this.href===a&&e(this).addClass("active")}))})),$(window).scroll((function(){$(document).scrollTop()>0?$("#header").addClass("fixed"):$("#header").removeClass("fixed")})),$(".home_slider").owlCarousel({loop:!0,margin:0,nav:!1,dots:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".home_services_tab, .home_projects_tab, .our_projects_tab").pTab({pTab:".tab-list",pTabElem:"li",pClass:"aktif",pDuration:500,pEffect:"show",pContent:".tab-content"}),$(".home_blog").owlCarousel({loop:!0,margin:25,nav:!1,dots:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1},500:{items:1},800:{items:2},1e3:{items:2},1200:{items:3},1400:{items:3},1600:{items:3}}});var e='<i class="fas fa-chevron-left"></i>',a='<i class="fas fa-chevron-right"></i>';$(".home_client").owlCarousel({loop:!0,margin:40,nav:!0,dots:!1,autoplay:!0,navText:[e,a],autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1},500:{items:1},800:{items:1},1e3:{items:2},1200:{items:2},1400:{items:2},1600:{items:2}}});e='<i class="fas fa-chevron-left"></i>',a='<i class="fas fa-chevron-right"></i>';$(".home_brand").owlCarousel({loop:!0,margin:25,nav:!0,dots:!1,autoplay:!0,navText:[e,a],autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1},500:{items:2},800:{items:3},1e3:{items:4},1200:{items:5},1400:{items:5},1600:{items:6}}}),$(".count").each((function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:4e3,easing:"swing",step:function(e){$(this).text(Math.ceil(e))}})}));e='<i class="fas fa-chevron-left"></i>',a='<i class="fas fa-chevron-right"></i>';$(".about_team").owlCarousel({loop:!0,margin:25,nav:!0,dots:!1,autoplay:!0,navText:[e,a],autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1},500:{items:1},800:{items:2},1e3:{items:3},1200:{items:4},1400:{items:4},1600:{items:4}}});var t=$("#sync1"),o=$("#sync2");e='<i class="fas fa-chevron-left"></i>',a='<i class="fas fa-chevron-right"></i>';t.owlCarousel({items:1,slideSpeed:2e3,margin:5,nav:!1,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,dots:!1,loop:!0,responsiveRefreshRate:200,navText:[e,a]}).on("changed.owl.carousel",(function(e){var a=e.item.count-1,t=Math.round(e.item.index-e.item.count/2-.5);t<0&&(t=a);t>a&&(t=0);o.find(".owl-item").removeClass("current").eq(t).addClass("current");var s=o.find(".owl-item.active").length-1,i=o.find(".owl-item.active").first().index(),l=o.find(".owl-item.active").last().index();t>l&&o.data("owl.carousel").to(t,100,!0);t<i&&o.data("owl.carousel").to(t-s,100,!0)})),o.on("initialized.owl.carousel",(function(){o.find(".owl-item").eq(0).addClass("current")})).owlCarousel({items:4,dots:!1,nav:!1,margin:10,smartSpeed:200,slideSpeed:500,slideBy:4,responsiveRefreshRate:100}).on("changed.owl.carousel",(function(e){var a=e.item.index;t.data("owl.carousel").to(a,100,!0)})),o.on("click",".owl-item",(function(e){e.preventDefault();var a=$(this).index();t.data("owl.carousel").to(a,300,!0)}));e='<i class="fas fa-chevron-left"></i>',a='<i class="fas fa-chevron-right"></i>';$(".projects_details_image").owlCarousel({loop:!0,margin:0,nav:!0,dots:!1,autoplay:!0,navText:[e,a],autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1},500:{items:1},800:{items:1},1e3:{items:1},1200:{items:1},1400:{items:1},1600:{items:1}}}),$(".accordion-item .heading").on("click",(function(e){e.preventDefault(),$(this).closest(".accordion-item").hasClass("active")?$(".accordion-item").removeClass("active"):($(".accordion-item").removeClass("active"),$(this).closest(".accordion-item").addClass("active"));var a=$(this).next();a.slideToggle(100),$(".accordion-item .content").not(a).slideUp("fast")}))}));