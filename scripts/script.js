let burger, nav, navbg, links;
burger = document.querySelector('.burger');
nav = document.querySelector('.nav-links');
links = nav.querySelectorAll('a');
navbg = document.querySelector('.dark-bg-nav');

//Mobile nav bar
const toggleAllTheThings = () => {
	nav.classList.toggle('nav-open');
	navbg.classList.toggle('dark-bg-active');
	burger.classList.toggle('toggle');
};

burger.addEventListener('click', () => {
	toggleAllTheThings();
});

links.forEach((link) => {
	link.addEventListener('click', () => {
		nav.classList.remove('nav-open');
		navbg.classList.remove('dark-bg-active');
		burger.classList.remove('toggle');
	});
});

navbg.addEventListener('click', () => {
	toggleAllTheThings();
});

// Img Gallery

img1 = document.querySelectorAll('.imgs');
const expandImg = document.getElementById('expandedImg');
const infoText = document.getElementById('infoText');
const expandText = document.getElementById('expandText');
const col = document.getElementById('collapse');

expandImg.src = img1[0].children[0].getAttribute('src');
infoText.innerHTML = img1[0].children[1].innerHTML;

class ImgContent {
	constructor(tumbImg, description) {
		this.tumbImg = tumbImg;
		this.description = description;
	}
}

function imgPop() {
	let expandStuff = new ImgContent(
		this.children[0].getAttribute('src'),
		this.children[1].innerHTML
	);

	expandImg.src = expandStuff.tumbImg;
	infoText.innerHTML = expandStuff.description;

	expandImg.parentElement.style.display = 'block';
}

img1.forEach((item) => {
	item.addEventListener('click', imgPop);
});

// Copyright date

let copy = new Date();
document.getElementById('date').innerHTML = copy.getFullYear();
