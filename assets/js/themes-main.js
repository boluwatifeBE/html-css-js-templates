$(function () {
	('use strict');

	//===== Prealoder

	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	//===== Sticky
	//======== VENDORTISE NAVBAR STICKY ===============
	$(window).on('scroll', function (event) {
		var scroll = $(window).scrollTop();
		if (scroll <= 0) {
			$('.vendortise-navbar-area').removeClass('sticky');
		} else {
			$('.vendortise-navbar-area').addClass('sticky');
		}
	});

	//======== AGENCY NAVBAR STICKY ===============
	$(window).on('scroll', function (event) {
		var scroll = $(window).scrollTop();
		if (scroll <= 660) {
			$('.navbar-area').removeClass('sticky');
		} else {
			$('.navbar-area').addClass('sticky');
		}
	});

	//======== PORFOLIO NAVBAR STICKY ===============
	$(window).on('scroll', function (event) {
		var scroll = $(window).scrollTop();
		if (scroll <= 770) {
			$('.portfolio-navbar-area').removeClass('sticky');
		} else {
			$('.portfolio-navbar-area').addClass('sticky');
		}
	});

	//======== INSTRUCTOR NAVBAR STICKY ===============
	$(window).on('scroll', function (event) {
		var scroll = $(window).scrollTop();
		if (scroll <= 610) {
			$('.instructor-navbar-area').removeClass('sticky');
		} else {
			$('.instructor-navbar-area').addClass('sticky');
		}
	});

	//======== COURSE NAVBAR STICKY ===============
	$(window).on('scroll', function (event) {
		var scroll = $(window).scrollTop();
		if (scroll <= 600) {
			$('.course-sticky').removeClass('sticky');
		} else {
			$('.course-sticky').addClass('sticky');
		}
	});

	//===== Home Top Scroll Active

	$('.home-top').on('click', function (event) {
		event.preventDefault();

		$('html, body').animate(
			{
				scrollTop: 0,
			},
			900
		);
	});

	//========= All  Pages NavBar Page Scroll

	var scrollLink = $('.page-scroll');
	// Active link switching
	$(window).scroll(function () {
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function () {
			var sectionOffset = $(this.hash).offset().top - 73;

			if (sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}

			if ($(window).scrollTop() < 1) {
				$(this).parent().removeClass('active');
				$('.home-top').parent().addClass('active');
			}
		});
	});

	//===== close navbar-collapse when a  clicked

	// $('.navbar-nav a').on('click', function () {
	// 	$('.navbar-collapse').removeClass('show');
	// });

	// $('.navbar-toggler').on('click', function () {
	// 	$(this).toggleClass('active');
	// });

	// $('.navbar-nav a').on('click', function () {
	// 	$('.navbar-toggler').removeClass('active');
	// });

	//===== Sidebar

	// $('[href="#side-menu-left"], .overlay-left').on('click', function (event) {
	// 	$('.sidebar-left, .overlay-left').addClass('open');
	// });

	// $('[href="#close"], .overlay-left').on('click', function (event) {
	// 	$('.sidebar-left, .overlay-left').removeClass('open');
	// });

	//============= OWL CAROUSEL AREA ===========//
	//======= Slider carousel

	$('.slider-carousel').owlCarousel({
		loop: true,
		margin: 0,
		autoplay: false,
		lazyLoad: true,
		responsiveClass: true,
		smartSpeed: 500,
		autoplayTimeout: 6000,
		dots: true,
		navText: [
			"<i class='lni lni-chevron-left'></i>",
			"<i class='lni lni-chevron-right'></i>",
		],
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			600: {
				items: 1,
				nav: true,
			},
			1000: {
				items: 1,
				nav: true,
			},
		},
	});

	//===== Our Services carousel

	$('.services-carousel').owlCarousel({
		loop: true,
		loop: $('.owl-carousel .item').size() > 1 ? true : false,
		rewind: true,
		autoplay: false,
		smartSpeed: 500,
		autoplayTimeout: 10000,
		margin: 30,
		nav: false,
		arrows: false,
		dots: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});

	//===== Pricing Carousel

	$('.pricing-carousel').owlCarousel({
		loop: true,
		loop: $('.owl-carousel .item').size() > 1 ? true : false,
		// center: true,
		rewind: true,
		autoplay: false,
		smartSpeed: 500,
		autoplayTimeout: 10000,
		margin: 20,
		nav: false,
		arrows: false,
		dots: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1000: {
				items: 3,
			},
		},
	});

	//=====  Testimonial carousel

	$('.testimonial-carousel').owlCarousel({
		loop: true,
		loop: $('.owl-carousel .item').size() > 1 ? true : false,
		rewind: true,
		margin: 30,
		autoplay: false,
		lazyLoad: true,
		responsiveClass: true,
		smartSpeed: 500,
		autoplayTimeout: 8000,
		dots: true,
		nav: false,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 2,
			},
		},
	});

	//===== Team Carousel

	$('.team-carousel').owlCarousel({
		loop: true,
		loop: $('.owl-carousel .item').size() > 1 ? true : false,
		rewind: true,
		autoplay: false,
		smartSpeed: 500,
		autoplayTimeout: 10000,
		margin: 30,
		nav: false,
		arrows: false,
		dots: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1000: {
				items: 3,
			},
		},
	});

	//===== Skills carousel

	$('.skills-carousel').owlCarousel({
		loop: true,
		loop: $('.owl-carousel .item').size() > 1 ? true : false,
		rewind: true,
		autoplay: false,
		smartSpeed: 500,
		autoplayTimeout: 10000,
		margin: 30,
		nav: false,
		arrows: false,
		dots: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});

	//===== certificate carousel

	$('.certificate-carousel').owlCarousel({
		loop: true,
		loop: $('.owl-carousel .item').size() > 1 ? true : false,
		rewind: true,
		autoplay: false,
		smartSpeed: 500,
		autoplayTimeout: 10000,
		margin: 30,
		nav: false,
		arrows: false,
		dots: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 2,
			},
		},
	});

	//===== course-recommend carousel

	$('.course-recommend-carousel').owlCarousel({
		stagePadding: 50,
		loop: true,
		margin: 20,
		autoplay: false,
		lazyLoad: true,
		responsiveClass: true,
		smartSpeed: 500,
		autoplayTimeout: 6000,
		dots: false,
		navText: [
			"<i class='lni lni-chevron-left'></i>",
			"<i class='lni lni-chevron-right'></i>",
		],
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
				stagePadding: 0,
				dots: true,
			},
			450: {
				items: 1,
				nav: true,
			},
			600: {
				items: 1,
				nav: true,
			},
			768: {
				items: 2,
				nav: true,
			},
			992: {
				items: 1,
				nav: true,
			},
			1200: {
				items: 2,
				nav: true,
			},
		},
	});

	// $('.course-recommend-carousel').owlCarousel({
	// 	stagePadding: 40,
	// 	loop: true,
	// 	loop: $('.owl-carousel .item').size() > 1 ? true : false,
	// 	rewind: true,
	// 	autoplay: false,
	// 	smartSpeed: 500,
	// 	autoplayTimeout: 10000,
	// 	margin: 30,
	// 	navText: [
	// 		"<i class='lni lni-chevron-left'></i>",
	// 		"<i class='lni lni-chevron-right'></i>",
	// 	],
	// 	arrows: false,
	// 	dots: false,
	// 	autoplayHoverPause: true,
	// 	responsiveClass: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1,
	// 		},
	// 		600: {
	// 			items: 1,
	// 		},
	// 		1000: {
	// 			items: 2,
	// 		},
	// 	},
	// });

	//===== About Us Counter
	var cu = new counterUp({
		start: 0,
		duration: 5000,
		intvalues: true,
		interval: 50,
		append: ' ',
	});
	cu.start();

	///===== Progress Bar

	if ($('.progress_line').length) {
		$('.progress_line').appear(
			function () {
				var el = $(this);
				var percent = el.data('width');
				$(el).css('width', percent + '%');
			},
			{
				accY: 0,
			}
		);
	}

	//====== List / Grid View
	$(document).ready(function () {
		$('#list').click(function (event) {
			event.preventDefault();
			$('#list-grid-view .item').addClass('list-group-item');
			$('#grid').removeClass('active');
			$(this).addClass('active');
		});

		$('#grid').click(function (event) {
			event.preventDefault();
			$('#list-grid-view .item').removeClass('list-group-item');
			// $('#list-grid-view .item').addClass('grid-group-item');
			$('#list').removeClass('active');
			$(this).addClass('active');
		});
	});

	//============= MODAL AREA ===========//

	//===== Our Service Modal
	var serviceBtn = document.querySelectorAll('#service-modal-btn');
	$(serviceBtn).on('click', function () {
		// console.log($(this).html());
		$('#service-form-textbox').html($(this).val());
		$(this).parent().hide();
		$('#service-form-input').children().removeClass('hidden');
	});

	//===== Our Pricing Modal
	var serviceBtn = document.querySelectorAll('#price-modal-btn');
	$(serviceBtn).on('click', function () {
		// console.log($(this).html());
		$('#price-form-textbox').html($(this).val());
		$(this).parent().hide();
		$('#price-form-input').children().removeClass('hidden');
	});

	//========= Course Modal

	// $('#course-preview-modal-quickview').on('hide', function () {
	// 	window.location.reload();
	// });
	$('#course-preview-modal-quickview').on('hide.bs.modal', function (e) {
		window.location.reload();
	});

	//===== Isotope Project 4 Filter

	//===== Gallery Fliter
	$('.container').imagesLoaded(function () {
		var $grid = $('.grid').isotope({
			// options
			transitionDuration: '1s',
		});

		// filter items on button click
		$('.portfolio-menu ul').on('click', 'li', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue,
			});
		});

		//for menu active class
		$('.portfolio-menu ul li').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
	});

	//======= Product Filter
	$('.container').imagesLoaded(function () {
		var $grid = $('.grid-2').isotope({
			// options
			transitionDuration: '1s',
		});

		// filter items on button click
		$('.product-menu ul').on('click', 'li', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue,
			});
		});

		//for menu active class
		$('.product-menu ul li').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
	});

	//===== Pricing Compare Table

	$('.compare-price-btn').on('click', 'li', function () {
		var pos = $(this).index() + 2;
		$('tr').find('td:not(:eq(0))').hide();
		$('td:nth-child(' + pos + ')').css('display', 'table-cell');
		$('tr').find('th:not(:eq(0))').hide();
		$('li').removeClass('active');
		$(this).addClass('active');
	});

	//======= Show More / Show Less Toggle
	var courseSectionBtn = document.querySelectorAll('#course-section-btn');

	$(courseSectionBtn).on('click', function () {
		$(this).toggleClass('expanded');

		if ($(this).hasClass('expanded')) {
			$(this).html('See Less');
		} else {
			$(this).html('See All');
		}
	});

	//====== Show More / Show Less Course Content
	var $this = $('.course-syllabus-description');
	if ($this.find('.course-section').length > 3) {
		$('.course-syllabus-description').append(
			'<div class="course-section-toggle"><a href="javascript:;" class="showMore"></a></div>'
		);
	}

	// If more than 2 Education course-syllabus-description, hide the remaining
	$('.course-syllabus-description .course-section')
		.slice(0, 3)
		.addClass('shown');
	$('.course-syllabus-description .course-section').not('.shown').hide();
	$('.course-syllabus-description .showMore').on('click', function () {
		$('.course-syllabus-description .course-section').not('.shown').toggle(300);
		$(this).toggleClass('showLess');
	});

	//====== Magnific Popup

	$('.video-popup').magnificPopup({
		type: 'iframe',
		// other options
	});

	//===== Magnific Popup

	$('.image-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});

	//===== Back to top

	// Show or hide the sticky footer button
	$(window).on('scroll', function (event) {
		if ($(this).scrollTop() > 600) {
			$('.back-to-top').fadeIn(200);
		} else {
			$('.back-to-top').fadeOut(200);
		}
	});

	//Animate the scroll to Top
	$('.back-to-top').on('click', function (event) {
		event.preventDefault();

		$('html, body').animate(
			{
				scrollTop: 0,
			},
			1000
		);
	});

	//====== WOW Scroll
	var wow = new WOW({
		//disabled for mobile
		// mobile: false,
	});
	wow.init();

	//======= Adabtive Background Color SLiders

	$(document).ready(function () {
		var opts = {
			selector: 'img[data-adaptive-background="slider-image-adaptive"]', // a CSS selector which denotes which images to grab/process
			parent: 'div[class="slider-items"]', // a CSS selector which denotes which parent to apply the background color to.
		};
		$.adaptiveBackground.run(opts);
	});

	//======= Adabtive Background Color Course Banner

	$(document).ready(function () {
		var opts = {
			selector: 'img[data-adaptive-background="course-preview"]', // a CSS selector which denotes which images to grab/process
			parent: 'div[class="course-banner"]', // a CSS selector which denotes which parent to apply the background color to.
			parentSiblings: 'div[class="course-sticky"]',
		};
		$.adaptiveBackground.run(opts);
	});

	//======= Rotate Icons
	$('.btn-header-link').click(function () {
		$(this).children().toggleClass('rotate-down');
	});

	$('.review-report-box button').click(function () {
		$('.review-report-box span').html('Thank you for your feedback');
	});

	$('.truncate-this').Cuttr({
		//options here
		truncate: 'character',
		length: 45,
	});
});
