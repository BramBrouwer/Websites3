
$( document ).ready(function() {

    var boom = document.createElement('audio');
    boom.setAttribute('src', 'http://www.mediacollege.com/downloads/sound-effects/explosion/explosion-02.ogg');
    var splash = document.createElement('audio');
    splash.setAttribute('src', 'http://www.freesfx.co.uk/rx2/mp3s/6/7490_1346159434.mp3');











//listeners
//enemyfield table
    $('.bs_enemytd').click (function(){
        var element = $(this).data('field');
        //todo: check if game is in a state where player is allowed to target fields
        if(element.rekt)  //check if field has already been targeted
        {
            $('#infopanel').text("This field has already been targeted");
        }
        else{
            $('#infopanel').text("boom X: "+element.x+" boom Y: "+element.y);
            element.rekt = true;
        }
        console.log(element.x,element.y);
    });


});
