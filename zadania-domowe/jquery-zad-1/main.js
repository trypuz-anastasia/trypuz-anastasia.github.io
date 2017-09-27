'use strict';

$(document ).ready(function () {
    $("button#ostatni-jako-pierwszy").click ( function () {
        var paragraph = $('p');
        paragraph.last().insertBefore(paragraph.first());
     });
    $("button#pierwszy-jako-ostatni").click( function(){
        var paragraph = $('p');
        paragraph.first().insertAfter(paragraph.last());
    });
});


