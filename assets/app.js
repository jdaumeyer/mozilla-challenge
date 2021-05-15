(function() {
	"use strict";

	// Add Scripts Here

	// Top Nav
	const topNavButton = document.querySelector(".topNavToggle")
	const topNavList = document.querySelector(".topNav").getElementsByTagName("ul")

	// Show Details
	const showDetailsButton = document.getElementById("show-details")
	const details = document.getElementsByClassName("info")

	if (window.screen.width >= 600) {
		topNavButton.classList.toggle("invisible")
		topNavList[0].classList.toggle("closed")
		for (let e of document.getElementsByClassName("forwardto")) {
			e.classList.toggle("invisible")
		}
		for (let e of document.getElementsByClassName("change-name")) {
			e.classList.toggle("invisible")
		}
	}

	/*
	 * toggles visiblilty of a subtree and animates the button
	 *
	 */
	var toggleMenu = function(element, button) {
		for (let e of element) {
			e.classList.toggle("closed")
		}
		button.getElementsByTagName("i")[0].classList.toggle("flip-forward");

	}

	topNavButton.addEventListener("click", function(e){
		toggleMenu(topNavList, topNavButton)
	})

	showDetailsButton.addEventListener("click", function(e) {
		toggleMenu(details, showDetailsButton)
	})


})();
