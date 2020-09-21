$(document).ready(function(){
    $(window).scroll(function(){
       let top = $(document).scrollTop();
       console.log(top);
    });
    $('.nav-close').click(function(){
        $('.navbar-collapse').removeClass('show');
    });
    $('.contact-form .form-control').on('focus',function(){
        $(this).attr('autocomplete', 'off');
    });
});