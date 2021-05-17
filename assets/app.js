(function() {
	"use strict";

	// Add Scripts Here

	// Top Nav
	const topNavButton = document.querySelector(".topNavToggle")
	const topNavList = document.querySelector(".topNav").getElementsByTagName("ul")

	// Show Details
	const showDetailsButton = document.getElementById("show-details")
	const details = document.getElementsByClassName("info")

	// Copy Button
	const copyButton = document.getElementsByClassName("copy")[0]
	const copyMessage = document.getElementById("copy-message")


	if (window.screen.width >= 600) {

		// Disable the menu button on large screens
		topNavButton.classList.toggle("invisible")
		topNavList[0].classList.toggle("closed")

		// Show hidden elements on large screens
		// These are in loops because I assume there would be multiple on the actual site
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

	copyButton.addEventListener("click", function(e) {
		copyMessage.classList.toggle("closed")
		copyMessage.style.top = ((e.clientY - 50) + document.documentElement.scrollTop) + "px"
		copyMessage.style.left = (e.clientX - 40) + "px"

		setTimeout(function() {
			copyMessage.classList.toggle("closed")
		}, 1000)
	})

})();
