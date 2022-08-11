const hamburger = document.querySelector('.fa-bars')

/* Will change hamburger menu based on user action */
const listAction = () => {
	const menuList = document.querySelector('.menu-list')

	if (hamburger.classList.contains('fa-bars')) {
        menuList.classList.add('display-menu-list')
		hamburger.classList.remove('fa-bars')
		hamburger.classList.add('fa-times')
	} else {
        menuList.classList.remove('display-menu-list')
		hamburger.classList.remove('fa-times')
		hamburger.classList.add('fa-bars')
	}
}

hamburger.addEventListener('click', listAction)
