document.addEventListener('DOMContentLoaded', () => {
	let accessSearchEngine = document.getElementById("access-search-engine");

	accessSearchEngine.addEventListener("click", () => {
		var e = new KeyboardEvent("keydown", {
			bubbles : true,
			cancelable : true,
			keyCode : 75,
			key : 'k',
			ctrlKey : true
		});
		document.dispatchEvent(e);
	});
})

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