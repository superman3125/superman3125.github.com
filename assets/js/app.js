$(function(){
    $('.nav>li>a').hover(
        function(){
            $(this).addClass('animated rubberBand');
        },
        function(){
            $(this).removeClass('animated rubberBand');
        }
    );

    $('.container img').on('click',function(){
        $("#pictureDialog").find('img').attr('src',$(this).attr('src'));
        $("#pictureDialog").modal('show');
    });
});