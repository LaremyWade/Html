$(document).ready(function(){

    $(window).scroll(function(){
       let top = $(document).scrollTop();
       console.log(top);
    });
    $('.wallet-btn, .sidebar-close').click(function(){
       $('.sidebar').toggleClass('show');
       if ($('.sidebar').hasClass('show')){
           $('body').addClass('open-sidebar');
       }
       else{
           $('body').removeClass('open-sidebar');
       }
    });
    $('.vault-item').click(function(){
        $(this).parent().find('.vault-item-bottom').toggleClass('hidden');
    });

    $('.bottom-close-btn').click(function(){
        $(this).parent().parent().parent().toggleClass('hidden');
    });

});