$(document).foundation();

(function ($) {
    // new WOW().init();

    $('body').jpreLoader({
        loaderVPos: '41.5%',
        splashID: '#logo-footer',
        autoClose: true,
        showPercentage: true,
        closeBtnText: ''
    },function() {
        new WOW().init();
    });

    //Menu principal
    $('*[data-open-menu]').on('click',function (e) {
        e.preventDefault();
        $('ul,button,> .row','#main-menu').toggleClass('show');

        if($('.open-menu').hasClass('active'))
            $('.open-menu').removeClass('active');
        else
            $('.open-menu').addClass('active');
    });

    //Servicos
    $('*[data-thumb]').each(function () {
        var th = $(this).data('thumb');
        $(this).css('backgroundImage','url('+ th +')').addClass('bg-cover');
    });

    //topo fixo
    $(window).on('scroll',function (e) {
        var topo = $(this).scrollTop();
        if(topo > 400)
            $('#top-fixed').addClass('show');
        else
            $('#top-fixed').removeClass('show');
    });

    //Orcamento
    $('a[data-open]').on('click',function (e) {
        e.preventDefault();
    });

})(jQuery);
