(function ($) {
    "use strict";

    /*---------------------------------------------------
        Portfolio Filter
    ----------------------------------------------------*/
    var Container = $('#portfolio-area');
    Container.imagesLoaded(function () {
        var portfolio = $('.portfolio-menu');
        portfolio.on('click', 'button', function () {
            $(this).addClass('active').siblings().removeClass('active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.portfolio-list').isotope({
            itemSelector: '.grid-item'
        });

    });

    $('.guard-check').click(function(){
        // alret('fdsdfs');
        $(this).toggleClass('active');
        if ( $(this).hasClass('active') ){
            $('.guard-form').removeClass('hidden');
        }
        else{
            $('.guard-form').addClass('hidden');
        }
    });

    $('.military-check').click(function(){
        // alret('fdsdfs');
        $(this).toggleClass('active');
        if ( $(this).hasClass('active') ){
            $('.military-form').removeClass('hidden');
        }
        else{
            $('.military-form').addClass('hidden');
        }
    });

    /*---------------------------------------------------
        Main Slider
    ----------------------------------------------------*/
    $('.silder').owlCarousel({
        loop: true,
        navText: ['<i class="icofont icofont-simple-left"></i>', '<i class="icofont icofont-simple-right"></i>'],
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });

    /*---------------------------------------------------
        Testimonial Carousel
    ----------------------------------------------------*/
    $('.testimonial').owlCarousel({
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });

    /*---------------------------------------------------
        Partner Carousel
    ----------------------------------------------------*/
    $('.partner').owlCarousel({
        margin: 20,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            960: {
                items: 4
            },
            1200: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    });

    /*---------------------------------------------------
        Counter
    ----------------------------------------------------*/
    $('.counter-single h2').counterUp({
        delay: 10, // the delay time in ms
        time: 1000 // the speed time in ms
    });

    /*---------------------------------------------------
            Magnific PopUp
    ----------------------------------------------------*/
    $(document).on('mouseover', ".popup-img", function(){

        // Get the current title
        let title = $(this).attr("title");

        // Store it in a temporary attribute
        $(this).attr("tmp_title", title);

        // Set the title to nothing so we don't see the tooltips
        $(this).attr("title","");

    });
    $(document).on('mouseout', ".popup-img", function(){

        // Get the current title
        let title = $(this).attr("tmp_title");

        // Store it in a temporary attribute
        $(this).attr("title", title);

    });


    $(".popup-img").click(function(){// Fired when we leave the element

        // Retrieve the title from the temporary attribute
        let title = $(this).attr("tmp_title");

        // Return the title to what it was
        $(this).attr("title", title);

    });
    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        mainClass: $(this).attr('data-id')
    });

    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    /*---------------------------------------------------
        Smooth Scroll
    ----------------------------------------------------*/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        console.log($(this).attr('href'));
        if ($(this).attr('href') != '#'){
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        }
        else{

        }


    });





    /*---------------------------------------------------
        Site Preloader
    ----------------------------------------------------*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });





}(jQuery));
