'use strict';

$(document).ready (function() {
    smoothScroll();
    backToTop();
    scrollMenu();
});

$(window).scroll(function() {
    scrollMenu();
    backToTop();
});


// Smooth scroll 
function smoothScroll() {
    
    $(".nav-section").click( function() {
    
        var linkHref = $(this).attr('href');
        
        $('html, body').animate( {
            scrollTop: $(linkHref).offset().top
        }, 500);
    });

}

//New Class for navigation during scroll
function scrollMenu() {
    
    var menuHeight = $('#main-nav').height();
    var scrolled = $(window).scrollTop();
    
    if(scrolled >= menuHeight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}

//Button back to top
function backToTop() {
    
    var btt= $('.scrollToTop');
    
    btt.click( function () {
        $("html, body").animate ({
            scrollTop: 0
        }, 500);
    });

    var scrolled = $(window).scrollTop();
    var height = $("#main-nav").height();
    
        if (scrolled > height) {
            ".scrollToTop".fadeIn;
        } else {
            ".scrollToTop".fadeOut;
        }
}
    



