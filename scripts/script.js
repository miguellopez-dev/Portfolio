let burger, nav, navbg, links, img;
burger = document.querySelector('.burger');
nav = document.querySelector('.nav-links');
links = nav.querySelectorAll('a');
navbg = document.querySelector('.dark-bg-nav');

burger.addEventListener('click', () => {
	nav.classList.toggle('nav-open');
	navbg.classList.toggle('dark-bg-active');
	burger.classList.toggle('toggle');
});

links.forEach((link) => {
	link.addEventListener('click', () => {
		nav.classList.toggle('nav-open');
		navbg.classList.toggle('dark-bg-active');
		burger.classList.toggle('toggle');
	});
});

navbg.addEventListener('click', () => {
	nav.classList.toggle('nav-open');
	navbg.classList.toggle('dark-bg-active');
	burger.classList.toggle('toggle');
});

img1 = document.querySelectorAll('.imgs');
let expandImg = document.getElementById('expandedImg');
let infoText = document.getElementById('infoText');
let expandText = document.getElementById('expandText');
let col = document.getElementById('collapse');

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

//Form validation

let form = document.contact;

form.addEventListener('input', () => {
	let mark = document.querySelectorAll('.required');

	//  Decide if you are going to try to implement your own form verification .

	let atPos = form.email.value.indexOf('@');
	let dotPos = form.email.value.indexOf('.');

	if (atPos < 1 || dotPos - atPos < 2) {
		mark[0].innerHTML = '&ast;';
	} else {
		mark[0].textContent = '';
	}

	// if (form.email.value.length >= 1) {
	// 	mark[0].textContent = '';
	// } else {
	// 	mark[0].innerHTML = '&ast;';
	// }

	if (form.message.value.length >= 5) {
		mark[1].textContent = '';
	} else {
		mark[1].innerHTML = '&ast;';
	}
});

// Copyright date

let copy = new Date();
document.getElementById('date').innerHTML = copy.getFullYear();
