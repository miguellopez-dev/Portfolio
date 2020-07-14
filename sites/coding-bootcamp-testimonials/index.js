const firstPicture = document.querySelector('.top-container1');
const firstText = document.querySelector('.comment1');
const secondPicture = document.querySelector('.top-container2');
const secondText = document.querySelector('.comment2');

const first = [firstPicture, firstText];
const second = [secondPicture, secondText];

const right = document.querySelector('.top-container1 .right');
const left = document.querySelector('.top-container2 .left');

right.addEventListener('click', () => {
	first.forEach(function (item, index) {
		first[index].style.transform = 'translateX(-200%)';
	});

	second.forEach(function (item, index) {
		second[index].style.transform = 'translateX(0)';
	});
});

left.addEventListener('click', () => {
	second.forEach(function (item, index) {
		second[index].style.transform = 'translateX(300%)';
	});

	first.forEach(function (item, index) {
		first[index].style.transform = 'translateX(0)';
	});
});
