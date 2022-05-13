$(function () {
	('use strict');
	//ELEMENT SELECTORS
	var player = document.querySelector('.player');
	var video = document.querySelector('#video');
	var playBtn = document.querySelector('.play-btn');
	var volumeBtn = document.querySelector('.volume-btn');
	var volumeSlider = document.querySelector('.volume-slider');
	var volumeFill = document.querySelector('.volume-filled');
	var progressSlider = document.querySelector('.progress');
	var progressFill = document.querySelector('.progress-filled');
	var textCurrent = document.querySelector('.time-current');
	var textTotal = document.querySelector('.time-total');
	var speedBtns = document.querySelectorAll('.speed-item');
	var fullscreenBtn = document.querySelector('.fullscreen');

	var controls = document.querySelector('.controls');

	//GLOBAL VARS
	let lastVolume = 1;
	let isMouseDown = false;

	//PLAYER FUNCTIONS
	function togglePlay() {
		if (video.paused) {
			video.play();
			controls.classList.add('onplay');
			controls.classList.remove('onpaused');
		} else {
			video.pause();
			controls.classList.add('onpaused');
			controls.classList.remove('onplay');
		}
		playBtn.classList.toggle('paused');
	}
	function togglePlayBtn() {
		playBtn.classList.toggle('playing');
	}

	function toggleMute() {
		if (video.volume) {
			lastVolume = video.volume;
			video.volume = 0;
			volumeBtn.classList.add('muted');
			volumeFill.style.width = 0;
		} else {
			video.volume = lastVolume;
			volumeBtn.classList.remove('muted');
			volumeFill.style.width = `${lastVolume * 100}%`;
		}
	}
	function changeVolume(e) {
		volumeBtn.classList.remove('muted');
		let volume = e.offsetX / volumeSlider.offsetWidth;
		volume < 0.1 ? (volume = 0) : (volume = volume);
		volumeFill.style.width = `${volume * 100}%`;
		video.volume = volume;
		if (volume > 0.7) {
			volumeBtn.classList.add('loud');
		} else if (volume < 0.7 && volume > 0) {
			volumeBtn.classList.remove('loud');
		} else if (volume == 0) {
			volumeBtn.classList.add('muted');
		}
		lastVolume = volume;
	}
	function neatTime(time) {
		// var hours = Math.floor((time % 86400)/3600)
		var minutes = Math.floor((time % 3600) / 60);
		var seconds = Math.floor(time % 60);
		seconds = seconds > 9 ? seconds : `0${seconds}`;
		return `${minutes}:${seconds}`;
	}
	function updateProgress(e) {
		progressFill.style.width = `${(video.currentTime / video.duration) * 100}%`;
		textCurrent.innerHTML = `${neatTime(video.currentTime)} / ${neatTime(
			video.duration
		)}`;
		// textTotal.innerHTML = neatTime(video.duration);
		// console.log(progressFill.style.width);
	}
	function setProgress(e) {
		const newTime = e.offsetX / progressSlider.offsetWidth;
		progressFill.style.width = `${newTime * 100}%`;
		video.currentTime = newTime * video.duration;
	}
	function launchIntoFullscreen(element) {
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.webkitRequestFullscreen) {
			element.webkitRequestFullscreen();
		} else if (element.msRequestFullscreen) {
			element.msRequestFullscreen();
		}
	}
	function exitFullscreen() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}
	var fullscreen = false;
	function toggleFullscreen() {
		fullscreen ? exitFullscreen() : launchIntoFullscreen(player);
		fullscreen = !fullscreen;
	}
	function setSpeed(e) {
		// console.log(parseFloat(this.dataset.speed));
		video.playbackRate = this.dataset.speed;
		speedBtns.forEach((speedBtn) => speedBtn.classList.remove('active'));
		this.classList.add('active');
	}

	var up = document.querySelectorAll('.speed-item');
	var down = $('.speed-dropbtn');

	$(up).on('click', function () {
		var innerValue = $(this).html();

		down.html(innerValue);
	});

	function handleKeypress(e) {
		switch (e.key) {
			case ' ':
				togglePlay();
			case 'ArrowRight':
				video.currentTime += 5;
			case 'ArrowLeft':
				video.currentTime -= 5;
			default:
				return;
		}
	}

	//====== VIDEO PLAYLIST
	$(function () {
		$('#course-preview-playlist li').on('click', function () {
			$('#video').attr({
				src: $(this).attr('movieurl'),
				poster: '',
				autoplay: 'autoplay',
			});
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			// event.preventDefault();

			//====== Play Button
			$(this)
				.siblings()
				.find('.course-preview-content.active')
				.removeClass('active');
			$(this).find('.course-preview-content').addClass('active');

			//
			// $(this).children('.course-preview-content').addClass('active');
			// event.preventDefault();
		});
		$('#video').attr({
			src: $('#course-preview-playlist li').eq(0).attr('movieurl'),
			poster: $('#course-preview-playlist li').eq(0).attr('moviesposter'),
		});
	});

	// $('#course-preview-modal-quickview').on('show.bs.modal', function (event) {
	// 	var button = $(event.relatedTarget); // Button that triggered the modal
	// 	var videoTarget = button.data('videopreview'); // Extract info from data-* attributes

	// 	var modal = $(this);
	// 	modal.find('#course-preview-playlist li').attr('movieurl');

	// 	// modal.find('.modal-title').text('New message to ' + recipient);
	// 	// modal.find('.modal-body input').val(recipient);
	// });

	//EVENT LISTENERS
	playBtn.addEventListener('click', togglePlay);
	video.addEventListener('click', togglePlay);
	video.addEventListener('play', togglePlayBtn);
	video.addEventListener('pause', togglePlayBtn);
	video.addEventListener('ended', togglePlayBtn);
	video.addEventListener('timeupdate', updateProgress);
	video.addEventListener('canplay', updateProgress);
	volumeBtn.addEventListener('click', toggleMute);
	window.addEventListener('mousedown', () => (isMouseDown = true));
	window.addEventListener('mouseup', () => (isMouseDown = false));
	// volumeSlider.addEventListener('mouseover', changeVolume);
	volumeSlider.addEventListener('click', changeVolume);
	progressSlider.addEventListener('click', setProgress);
	fullscreenBtn.addEventListener('click', toggleFullscreen);
	speedBtns.forEach((speedBtn) => {
		speedBtn.addEventListener('click', setSpeed);
	});
	window.addEventListener('keydown', handleKeypress);
});
