const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('a');
const navbg = document.querySelector('.nav-bg');

burger.addEventListener('click', () => {
	nav.classList.toggle('nav-open');
	burger.classList.toggle('toggle');
	navbg.classList.toggle('nav-bg-active');
});

links.forEach((link) => {
	link.addEventListener('click', () => {
		nav.classList.toggle('nav-open');
		burger.classList.toggle('toggle');
		navbg.classList.toggle('nav-bg-active');
	});
});

navbg.addEventListener('click', () => {
	nav.classList.toggle('nav-open');
	burger.classList.toggle('toggle');
	navbg.classList.toggle('nav-bg-active');
});
