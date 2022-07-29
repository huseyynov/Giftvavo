$('#toggle > p').click(function() {
    var x = $(this).index();
    // Klik olunan p-den bashqa her p tagden active-varianti classi yigishdirsin
    $(this).siblings("p").removeClass("active-variant");
    // Klik olunan p tagine active-variant classi elave olunsun
    $(this).toggleClass("active-variant");
    $('#left').toggle( x === 0 );
    $('#right').toggle( x === 1 );
    x === 1 ? $('#right').css('display','flex') : $('#right').css('display','none');
});

$('.question-text').on('click', function(){
    // Ancag klik olunan sualin icindeki cavabi gostersin
    $(this).closest('.question').find('.question-answer').fadeToggle();
    // Ancag klik olunan sualda iconu rotate etsin
    $(this).closest('.question').find('img').toggleClass('rotate45');
});