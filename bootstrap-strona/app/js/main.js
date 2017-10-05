'use strict';

$(document).ready(function() {
    scrollMenu();
    smoothScroll();
});

$(window).scroll(function() {
    scrollMenu();
});

function smoothScroll() {
    
    $('#main-nav a[href*="#"]:not([href="#"])').click(function(){
        
        var navHeight = $('#main-nav').outerHeight();
        
		$('html, body').animate( 
            { scrollTop: $(this.hash).offset().top - navHeight
        }, 500 );
	});
}

function scrollMenu() {
    
    var menuHeight = $('#main-nav').outerHeight();
    var scrolled = $(window).scrollTop();
    
    if(scrolled >= menuHeight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}