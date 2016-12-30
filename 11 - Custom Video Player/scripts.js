let videoPlayer = document.querySelector('.player__video');

// ** PAUSE/PLAY BUTTON ** //
let playBtn = document.querySelector('.toggle');

function togglePlay() {
	if (videoPlayer.paused) {
		videoPlayer.play();
		playBtn.innerHTML = '<button class="player__button toggle" title="Toggle Play">►</button>'
	}
	else {
		videoPlayer.pause();
		playBtn.innerHTML = '<button class="player__button toggle" title="Toggle Play">❚ ❚</button>'
	}
}

playBtn.addEventListener('click', togglePlay);
videoPlayer.addEventListener('click', togglePlay);

// ** VOLUME ** //

let volumeSlider = document.querySelector('input[name=volume]');

function changeVolume() {
	videoPlayer.volume = this.value;
}

volumeSlider.addEventListener('change', changeVolume);
volumeSlider.addEventListener('mousemove', changeVolume);

// ** VIDEO SPEED ** //

let speedSlider = document.querySelector('input[name=playbackRate');

function toggleSpeed() {
	videoPlayer.playbackRate = this.value;
}

speedSlider.addEventListener('change', toggleSpeed);
speedSlider.addEventListener('mousemove', toggleSpeed);

// ** PROGRESS BAR ** //
let progressBar = document.querySelector('.progress');
let progressElapsed = document.querySelector('.progress__filled');

function changeProgress() {
	progressElapsed.style.flexBasis = videoPlayer.currentTime/videoPlayer.duration * 100 + '%';
}

function scrub(e) {
	let percentClicked = e.offsetX/progressBar.offsetWidth * videoPlayer.duration;
	videoPlayer.currentTime = percentClicked;
}

videoPlayer.addEventListener('timeupdate', changeProgress);

let mousedown = false;
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', mousedown ? scrub : '');
progressBar.addEventListener('mousedown', () => mousedown = true)
progressBar.addEventListener('mouseup', () => mousedown = false)

// ** FAST FORWARD & REWIND ** //

let skipButtons = document.querySelectorAll('[data-skip]');

function toggleSkip() {
	videoPlayer.currentTime += Number(this.dataset.skip)
}

skipButtons.forEach(button => button.addEventListener('click', toggleSkip));

//full screen & progress bar at beginning

// ** FULLSCREEN ** //

let fullscreenBtn = document.querySelector('button[title=Fullscreen]')

function enableFullScreen() {
	videoPlayer.webkitEnterFullscreen();
}

function exitFullScreen(e) {
 if (e.key === 'Escape') {
 	videoPlayer.webkitExitFullscreen();
 }
}

fullscreenBtn.addEventListener('click', enableFullScreen)
document.addEventListener('keydown', exitFullScreen)






