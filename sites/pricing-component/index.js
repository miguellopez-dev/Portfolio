const annuallyMonthlyText = document.querySelectorAll('.selection p');
const check = document.getElementById('toggle');

const priceYear = document.querySelectorAll('.yearly');
const priceMonth = document.querySelectorAll('.monthly');

check.addEventListener('click', () => {
	if (check.checked) {
		// Reomves Hide class from monthly and adds it to annually
		annuallyMonthlyText[0].classList.remove('dark');
		annuallyMonthlyText[1].classList.add('dark');

		// Changes the hide class on the prices
		priceYear.forEach(function (i) {
			i.classList.add('hide');
		});
		priceMonth.forEach(function (i) {
			i.classList.remove('hide');
		});
	} else {
		// Reomves Hide class from annually and adds it monthly
		annuallyMonthlyText[0].classList.add('dark');
		annuallyMonthlyText[1].classList.remove('dark');

		// Changes the hide class on the prices
		priceYear.forEach(function (i) {
			i.classList.remove('hide');
		});
		priceMonth.forEach(function (i) {
			i.classList.add('hide');
		});
	}
});

// Defaults the checkbox to unchecked
if (check) {
	check.checked = false;
}
