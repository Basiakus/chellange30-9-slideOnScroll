const allSlide = document.querySelectorAll('img');

function status() {
	const pageHeight = this.scrollY;
	const slideglobalHeight = this.offsetTop + this.height;

	allSlide.forEach(slide => {
		const middleOfPage = (window.innerHeight / 2) + window.scrollY;
		const heightOfPage = window.scrollY;
		const topOfslide = slide.offsetTop;
		const middleOfSlide = slide.offsetTop + slide.height / 2;
		if(middleOfPage >= topOfslide && heightOfPage < middleOfSlide) {
			slide.classList.add('show');
		} else {
			slide.classList.remove('show');
		}
	});
}

window.addEventListener('scroll', status);