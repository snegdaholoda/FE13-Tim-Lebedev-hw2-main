$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots: true,
        fade: true,
        adaptiveHeight: true,
        speed: 2000,
        easing:'ease',
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        waitForAnimate: false,
        appendDots:$('.slider_description'),
    });
});

$(document).ready(function() {
	$('.header_burger').click(function(event) {
		$('.header_burger,.header-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});