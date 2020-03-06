$(document).ready(function () {

    $('#order-form-1 form').submit(function(e){
        e.preventDefault();
        $('#order-form-1').hide();
        $('#order-form-2').fadeToggle();
    });

    $('#order-form-2 form').submit(function(e){
        e.preventDefault();
        $('#order-form-2').hide();
        $('#order-form-3').fadeToggle();
    });
    $('.form-check-inline .form-check-input').click(function(){
        $('#billing-detail').toggleClass('is-using').slideToggle('200');
        if($('#billing-detail').hasClass('is-using')){
            $('#billing-detail .custom-require').prop('required', true);
        }
        else{
            $('#billing-detail .custom-require').prop('required', false);
        }
    });
    $('.podcast-like a.toggle-like').click(function (e) {
       e.preventDefault();
       $(this).toggleClass('opened');
       $('.toggle-like-content').fadeToggle();
    });
    $('.agencies-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
    $('.toggle-menu').click(function(){
       $('.mobile-side-menu').addClass('show-menu');
       $('body').addClass('menu-opened');
    });
    $('.menu-close').click(function(){
       $('.mobile-side-menu').removeClass('show-menu');
       $('body').removeClass('menu-opened');
    });
    $('.issues-section.mobile-show').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.article-slider').slick({
        centerMode: true,
        centerPadding: '300px',
        arrows: false,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 660,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });

});