(function() {
	"use strict";

	// Add Scripts Here

	// Top Nav
	const toggleTopNavButton = document.querySelector(".topNavToggle")
	const topNav = document.querySelector(".topNav")

	// Show Details
	const showDetailsButton = document.getElementById("show-details")
	const details = document.getElementsByClassName("email-details")[0]


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

	showDetailsButton.addEventListener("click", function(e) {
		toggleMenu(details, showDetailsButton)
	})


})();
