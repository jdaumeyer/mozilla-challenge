(function() {
	"use strict";

	const toggleTopNavButton = document.querySelector(".topNavToggle")
	const topNav = document.querySelector(".topNav")
	// Add Scripts Here
	var toggleTopNav = function() {
		topNav.getElementsByTagName("ul")[0].classList.toggle("invisible")

		toggleTopNavButton.getElementsByTagName("i")[0].classList.toggle("flip-forward");
	}

	/*
	 * toggles visiblilty of a subtree and animates the button
	 *
	 */
	var toggleMenu = function(element, button) {
		element.classList.toggle("invisible")
		button.getElementsByTagName("i")[0].classList.toggle("flip-forward");

	}

	toggleTopNavButton.addEventListener("click", function(e){
		toggleMenu(topNav.getElementsByTagName("ul")[0], toggleTopNavButton)
	})
})();
