$(function () {
	('use strict');

	//====== Parallax Scroll
	const parallax1 = document.querySelector('.slider-parallax');

	window.addEventListener('scroll', function () {
		let offset = window.pageYOffset;
		parallax1.style.transform = 'translateY(' + offset * 0.3 + 'px)';
	});
});
