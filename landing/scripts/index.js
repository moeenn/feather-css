const scrollTo = (sectionID) => {
	const featuresSection = document.querySelector(sectionID);
	featuresSection.scrollIntoView();
};

const main = () => {
	const featuresLink = document.querySelector('#nav-features');
	featuresLink.addEventListener('click', (event) => {
		event.preventDefault();
		scrollTo('#features');
	});
};

main();