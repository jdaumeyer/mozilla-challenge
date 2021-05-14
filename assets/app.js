(function() {
	"use strict";

	const toggleTopNavButton = document.querySelector(".topNavToggle")
	const topNav = document.querySelector(".topNav")
	// Add Scripts Here
	var toggleTopNav = function() {
		topNav.getElementsByTagName("ul")[0].classList.toggle("invisible")
	}

	toggleTopNavButton.addEventListener("click", function(e){
		toggleTopNav()
	})
})();
