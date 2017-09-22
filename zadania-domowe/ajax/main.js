'use strict';

$( document ).ready( function(){
    
    $ ("button").click( function() {
        
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
        
        console.log(data);
            
        $('body').append('<div id="dane-programisty"></div>');
        $('<p>Imię: ' + data.imie + '</p>').appendTo('#dane-programisty');
        $("<p>Nazwisko: " + data.nazwisko + "</p>").appendTo("#dane-programisty");
        $("<p>Zawód: " + data.zawod + "</p>").appendTo("#dane-programisty");
        $("<p>Firma: " + data.firma + "</p>").appendTo("#dane-programisty");
        });
    });
});