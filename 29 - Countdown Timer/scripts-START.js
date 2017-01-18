let timeLeftElement = document.querySelector('.display__time-left');
let endTimeElement = document.querySelector('.display__end-time');
let buttons = document.querySelectorAll('button');
let form = document.querySelector('[name=customForm');
let input = form.querySelector('input');
let countdown;

function startTimer() {
	timer(this.dataset.time);
}

function timer(seconds) {
	clearInterval(countdown);
	let now = Date.now();
	let then = now + seconds * 1000;
	displayTimeLeft(seconds);
	displayEndTime(then);

	countdown = setInterval(() => {
		let secondsLeft = Math.round((then - Date.now()) / 1000);

		if (secondsLeft < 1) {
			clearInterval(countdown);
		}

		displayTimeLeft(secondsLeft);
	}, 1000);

}

function displayTimeLeft(seconds) {
	let minutes = Math.floor(seconds / 60);
	let remainingSeconds = seconds % 60;
	timeLeftElement.innerHTML = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
	document.title = timeLeftElement.innerHTML;
}

function displayEndTime(timestamp) {
	const endTime = new Date(timestamp);
	let hours = endTime.getHours();
	const minutes = endTime.getMinutes();
	endTimeElement.innerHTML = `Be back at ${hours > 12 ? hours-= 12 : hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}


buttons.forEach(button => {
	button.addEventListener('click', startTimer);
})

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let minutes = input.value;
	form.reset();
	timer(minutes * 60);
});
