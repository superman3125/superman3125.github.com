$(function(){
    $('.nav>li>a').hover(
        function(){
            $(this).addClass('animated rubberBand');
        },
        function(){
            $(this).removeClass('animated rubberBand');
        }
    );
});