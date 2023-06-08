const showSection = () => {
	const sections = document.querySelectorAll('.page');
	const links = document.querySelectorAll('.navigation__link, .page-nav__link');
	const hash = window.location.hash.substring(1);

	for (const section of sections) {
		section.style.display = section.id === hash ? 'block' : ' none';

	}

	for (const link of links) {
		const linkURL = link.getAttribute('href');
		// console.log('linkURL: ', linkURL);
		const hashIndex = linkURL.indexOf('#');
		// console.log('hashIndex: ', hashIndex);
		const linkHash = hashIndex !== -1 ? linkURL.substring(hashIndex + 1) : '';
		// console.log('linkHash: ', linkHash);

		let classActive = '';

		if (link.classList.contains('navigation__link')) {
			classActive = 'navigation__link_active';
		}

		if (link.classList.contains('page-nav__link')) {
			classActive = 'page-nav__link_active';
		}

		if (linkHash === hash) {
			link.classList.add(classActive);
		} else {
			link.classList.remove(classActive);

		}
	}
}

export const pageControlInit = () => {
	window.addEventListener('load', showSection);
	window.addEventListener('hashchange', showSection);
}