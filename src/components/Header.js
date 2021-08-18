import React, {useState} from 'react';

const Header = () => {
	const [themeName, setThemeName] = useState('light');
	const themeToggle = () => {
		let appNode = document.querySelector('.App');
		if(appNode.className.includes("light")){
			setThemeName("dark");
			appNode.classList.remove("light");
			appNode.classList.add("dark");
		}else if(appNode.className.includes("dark")){
			setThemeName('light');
			appNode.classList.remove("dark");
			appNode.classList.add("light");
		}
	}

	let darkLightToggle = ""
	if(themeName === 'light'){
		darkLightToggle = <div className="light-dark-toggle" onClick={() => themeToggle()}><i className="fas fa-cloud-moon"></i>Dark Mode</div>
	}else if(themeName === 'dark'){
		darkLightToggle = <div className="light-dark-toggle" onClick={() => themeToggle()}><i className="fas fa-lightbulb"></i>Light Mode</div>
	}

	return(
		<header>
		<div className="title">Where in the world?</div>


		{darkLightToggle}
		</header>
		)
}

export default Header;