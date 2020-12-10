/* Credit: https://www.w3schools.com/howto/howto_js_dropdown.asp */
function dropdownfunc() {
	if($(window).width() < 1000) {
		document.getElementById("topnav").classList.toggle("show");
	}
}
