$(document).ready(function () {
    
    //calcular el ancho de la ventana
    $(window).scroll(function () {
        var windowWidth = $(window).width();

        //if para saber si el ancho de la ventana es mayor a 800px
        if (windowWidth > 800) {
            var scroll = $(window).scrollTop();

            //scroll con herder .textos con velozidad de 2 de forma positiva (baja)
            $('header .textos').css({
                'transform': 'translate(0px, ' + scroll / 2 + '%)'
            });

            //scroll con .acerca-de article con velozidad de 4 en forma negativa (sube)
            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
        }
    });

    //Ajuste para cuando esta en tableta, y la gira y sea menor a 800px
    $(window).resize(function () {
        var windowWidth = $(window).width();
        if (windowWidth < 800) {
            //scroll con .acerca-de article con velozidad de 4 en forma negativa (sube)
            $('.acerca-de article').css({
                'transform': 'translate(0px, opx)'
            });
        }
    });

});