const ratingPage = document.getElementById('rating');
const thankPage = document.getElementById('thank');
const btns = Array.from(document.getElementById('btns-holder').children);
const submitBtn = document.getElementById('submit-btn');
const placeholder = document.getElementById('placeholder');

let rating; // from 1 - 5
const btnOnClick = (event) => {
	if (rating !== event.target.value) {
		if (rating) btns[rating - 1].classList.remove('text-orange');
		rating = event.target.value;
		btns[rating - 1].classList.add('text-orange');
	}
};
btns.forEach((btn) => btn.addEventListener('click', btnOnClick));

submitBtn.addEventListener(
	'click',
	() => {
		if (!rating) return;
		btns.forEach((btn) => btn.removeEventListener('click', btnOnClick));
		ratingPage.classList.add('hidden');
		placeholder.innerHTML = `You selected ${rating} out of 5`;
		thankPage.classList.remove('hidden');
		thankPage.classList.add('flex');
	},
	{ once: true }
);
