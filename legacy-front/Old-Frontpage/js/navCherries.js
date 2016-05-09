$(document).ready(function()
{
    $('#navigationDataOne').mouseover(function(){
        $('#navigationDataTwo').addClass("activeDataNonHover");
    });

    $('#navigationDataOne').mouseout(function(){
        $('#navigationDataTwo').removeClass("activeDataNonHover");
    });

    $('#navigationDataTwo').mouseover(function(){
    });

    $('#navigationDataThree').mouseover(function(){
        $('#navigationDataTwo').addClass("activeDataNonHover");
    });

    $('#navigationDataThree').mouseout(function(){
        $('#navigationDataTwo').removeClass("activeDataNonHover");
    });

    $('#modalDatei').mousedown(function(){
        $('#modalDatei').remove();
    });

});

