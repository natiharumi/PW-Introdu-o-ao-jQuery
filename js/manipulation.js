$(document).ready(function() {
    //As manipulações que eu desejar devem estar dentro deste bloco
    $('#btn-1-5em').click(function() {
        $('p').removeClass('font-3-0')
        $('p').removeClass('font-6-0')
        $('p').addClass('font-1-5')

    });

    $('#btn-3-0em').click(function() {
        $('p').removeClass('font-1-5')
        $('p').removeClass('font-6-0')
        $('p').addClass('font-3-0')

    });

    $('#btn-6-0em').click(function() {
        $('p').removeClass('font-1-5')
        $('p').removeClass('font-3-0')
        $('p').addClass('font-6-0')

    });

});