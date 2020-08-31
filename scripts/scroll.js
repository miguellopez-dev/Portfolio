const stickyNav = document.querySelector('.header-nav');

window.onscroll = function () {
	myFunction();
};

function myFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		stickyNav.classList.add('header-nav-shadow');
	} else {
		stickyNav.classList.remove('header-nav-shadow');
	}
}
