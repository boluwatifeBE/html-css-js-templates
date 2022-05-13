$(function () {
	('use strict');

	//========= Course Page Scroll NavBar and Sticky ==========//

	// Select all »a« elements with a parent class »links« and add a function that is executed on click
	$('.links a').on('click', function (e) {
		// Define variable of the clicked »a« element (»this«) and get its href value.
		var href = $(this).attr('href');

		// Run a scroll animation to the position of the element which has the same id like the href value.
		$('html, body').animate(
			{
				scrollTop: $(href).offset().top - 170,
			},
			'300'
		);

		// Prevent the browser from showing the attribute name of the clicked link in the address bar
		e.preventDefault();
	});

	var courseScrollLink = $('.course-nav-item a');
	$(window).scroll(function () {
		var scrollbarLocation = $(this).scrollTop();

		courseScrollLink.each(function () {
			var sectionOffset = $(this.hash).offset().top - 210;

			if (sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}

			// if ($(window).scrollTop() < 1) {
			// 	$(this).parent().removeClass('active');
			// 	$('.home-top').parent().addClass('active');
			// }
		});
	});

	//========== Remove Sticky from Course Side Bar on getting to Footer
	function sticky_relocate() {
		var window_top = $(window).scrollTop();
		var footer_top = $('.footer-for-stick').offset().top;
		var div_top = $('#sticky-anchor').offset().top;
		var div_height = $('.course-sidebar').height();

		var padding = 300; // tweak here or get from margins etc

		if (window_top + div_height > footer_top - padding)
			$('.course-sidebar').css({
				top: (window_top + div_height - footer_top + padding) * -1,
			});
		else if (window_top > 800) {
			$('.course-sidebar').addClass('stick');
			$('.course-sidebar').css({ top: 187 });
		} else {
			$('.course-sidebar').removeClass('stick');
		}
	}

	$(function () {
		$(window).scroll(sticky_relocate);
		sticky_relocate();
	});
});
