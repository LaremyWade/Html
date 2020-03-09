$(document).ready(function(){
    $('header').load('./header.html');
    $('footer').load('./footer.html');

    $('.faq-section .card-header .btn').click(function(){
        if ($(this).parent().parent().parent().find('.collapse').hasClass('show')){
            $(this).parent().find('i').removeClass('fa-minus').addClass('fa-plus');
        }
        else{
            $('.faq-section .card-header i').removeClass('fa-minus').addClass('fa-plus');
            $(this).parent().find('i').removeClass('fa-plus').addClass('fa-minus');
        }
    });

    let home_class = $('body').attr('class');

    let id = setInterval(set_nav, 100);

    function set_nav(){
        if (home_class && $('.navbar-nav > li.nav-item').length > 0){
            $('ul.navbar-nav > li.' + home_class + ' .nav-link').addClass('active');
            clearInterval(id);
        }
    }


    if ($(window).width() > 767){
        let min_height = 0;
        let height = 0;
        $('.blog .post-title').each(function(){
            height = $(this).outerHeight();
            console.log(height);
            if (height > min_height){
                min_height = height;
            }
        });
        $('.blog .post-title').css('min-height', min_height+'px');
    }


    $(window).resize(function(){
        if ($(window).width() > 767){
            $('.blog .post-title').css('min-height', '30px');
            let min_height = 0;
            let height = 0;
            $('.blog .post-title').each(function(){
                height = $(this).outerHeight();
                console.log(height);
                if (height > min_height){
                    min_height = height;
                }
            });
            $('.blog .post-title').css('min-height', min_height+'px');
        }
        else{
            $('.blog .post-title').css('min-height', '30px');
        }
    });

    $("input[name='billing']").change(function() {
        let value = $("input[name='billing']:checked").val();
        if (value == 'shipping'){
            $('.billing_details_wrapper').slideUp();
        }
        else{
            $('.billing_details_wrapper').slideDown();
        }
        // console.log(value);
    });


});