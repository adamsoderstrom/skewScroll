function skewScroll(element = document.getElementById('skewscroll'),strength = 0.1) {
	console.log('booting skewScroll...');
	let currentPixel = window.pageYOffset;
	console.log(element);
	console.log(strength);

	const looper = function() {
		const newPixel = window.pageYOffset;
		const diff = newPixel - currentPixel;
		const speed = diff * strength;

		element.style.transform = "skewY(" + speed + "deg)";

		currentPixel = newPixel;

		requestAnimationFrame(looper);
	}
	looper();
	console.log('skewScroll booted!');
}