$(document).ready(function() {

// Приклеенное меню
	var nav = $('#menu');
     
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            nav.addClass("menu-wrap--fixed");
        } else {
            nav.removeClass("menu-wrap--fixed");
        }
    });

});