(function() {
	"use strict";

	// Add Scripts Here

	// Top Nav
	const topNavButton = document.querySelector(".topNavToggle")
	const topNav = document.querySelector(".topNav")

	// Show Details
	const showDetailsButton = document.getElementById("show-details")
	const details = document.getElementsByClassName("info")

	/*
	 * toggles visiblilty of a subtree and animates the button
	 *
	 */
	var toggleMenu = function(element, button) {
		for (let e of element) {
			e.classList.toggle("closed")
			console.log(e)
		}
		button.getElementsByTagName("i")[0].classList.toggle("flip-forward");

	}

	topNavButton.addEventListener("click", function(e){
		toggleMenu(topNav.getElementsByTagName("ul"), topNavButton)
	})

	showDetailsButton.addEventListener("click", function(e) {
		toggleMenu(details, showDetailsButton)
	})


})();
