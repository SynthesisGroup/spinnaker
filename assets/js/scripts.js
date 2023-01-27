// Shrink onScroll
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 200) {
		$(".header").addClass("shrink");
	} else {
		$(".header").removeClass("shrink");
	}
});