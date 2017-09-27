'use strict';

$(document).ready(function() {
    
    $("h2").hide();
    
    $("button").click(function() {
        $("#kwadrat").animate({
        left: "100px", 
        width: "100px",
        height: "100px"
        }, 3000, function () {
            $(this).animate({
                backgroundColor: "blue"},
                5000, function () {
                $("h2").show();
            });
        });
});
});
