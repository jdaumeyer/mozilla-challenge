(function() {
	"use strict";

	// Add Scripts Here

	// Top Nav
	const topNavButton = document.querySelector(".topNavToggle");
	const topNavList = document.querySelector(".topNav").getElementsByTagName("ul");

	// Show Details
	const showDetailsButton = document.getElementById("show-details");
	const details = document.getElementsByClassName("info");

	// Copy Button
	const copyButton = document.getElementsByClassName("copy")[0];
	const copyMessage = document.getElementById("copy-message");



	/*
	 * ======================
	 * = Desktop Breakpoint =
	 * ======================
	 */
	if (window.screen.width >= 600) {

		// Disable the menu button on large screens
		topNavButton.classList.toggle("invisible");
		topNavList[0].classList.toggle("closed");

		// Show hidden elements on large screens
		// These are in loops because I assume there would be multiple on an actual site
		for (let e of document.getElementsByClassName("forwardto")) {
			e.classList.toggle("invisible");
		}
		for (let e of document.getElementsByClassName("change-name")) {
			e.classList.toggle("invisible");
		}
	}

	/*
	 * Toggles a list of elements and animates the associated button (if needed)
	 */
	var toggleElements = function(elements, button=null) {
		for (let e of elements) {
			e.classList.toggle("closed");
		}

		button?.getElementsByTagName("i")[0].classList.toggle("flip-forward");
	}


	/*
	 * ===================
	 * = Event Listeners =
	 * ===================
	 */

	topNavButton.addEventListener("click", function(e){
		toggleElements(topNavList, topNavButton);
	})

	showDetailsButton.addEventListener("click", function(e) {
		toggleElements(details, showDetailsButton);
	})

	copyButton.addEventListener("click", function(e) {
		// Display Copy message and set it's position
		copyMessage.classList.toggle("closed");
		copyMessage.style.top = ((e.clientY - 50) + document.documentElement.scrollTop) + "px";
		copyMessage.style.left = (e.clientX - 40) + "px";

		// Actually Copy the Text
		const textarea = document.createElement('textarea');

		let copyText = document.getElementsByTagName("h4")[0].innerText;

		// Set the textarea text to copyText, select it then copy it
		textarea.value = copyText;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		document.body.removeChild(textarea);

		// Hide copy message again after a bit
		setTimeout(function() {
			copyMessage.classList.toggle("closed");
		}, 1500);
	})

})();
