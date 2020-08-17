$(document).ready(function(){

    $(window).scroll(function(){
       let top = $(document).scrollTop();
       console.log(top);
    });
    $('#header').load('header.html');
    $('#footer').load('footer.html');
    $('.hotel-slider-content').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });
    $('.hotel-gallery').slick({
        dots: false,
        slidesToShow: 1,
        infinite: true,
        // centerMode: true,
        speed: 300,
        variableWidth: true
    });
    $('.room-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.home-review-slider-content').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.detail-btn').click(function(){
       $(this).parent().toggleClass('active');
       $(this).parent().parent().parent().next().fadeToggle();
    });

    $('.close-detail').click(function(){
        $(this).parent().parent().parent().parent().parent().prev().find('.detail-btn').click();
    });
});