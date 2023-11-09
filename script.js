"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

// open modal window routine
const openModal = function() {
	console.log("Button clicked");
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
}
// close modal window routine
const closeModal = function() {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
}

// declarations of behaviour
for (let i = 0; i < btnsShowModal.length; i++) {
	btnsShowModal[i].addEventListener("click", openModal);
	btnCloseModal.addEventListener("click", closeModal);
	overlay.addEventListener("click", closeModal);
}


document.addEventListener("keydown", function(e) {
	console.log(e.key);
	if (e.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});	
/*
UNEXPECTED BEHAVIOUR CHECKED:
when 'space' or 'enter' key pressed the 'click' event
happens, and 'openModal' is executed.
*/