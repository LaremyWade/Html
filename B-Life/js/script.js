$(document).ready(function(){
    $('.card-more-btn').click(function(){
       $(this).parent().find('.card-more-content').toggleClass('show');
    });
    $('.card-more-item').click(function(){
        $(this).parent().toggleClass('show');
    });

    $(window).scroll(function(){
       let top = $(document).scrollTop();
       if (top > 100){
           $('header').addClass('scroll');
       }
       else{
           $('header').removeClass('scroll');
       }
       console.log(top);
    });
});