// Shrink onScroll
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 200) {
		$(".header").addClass("shrink");
	} else {
		$(".header").removeClass("shrink");
	}
});


// Slider Awards
$('.slider-awards').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 768,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 320,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});