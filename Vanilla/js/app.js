

function initialize(){
	var introItems1 = document.querySelectorAll(".introAnim1");
	var footButtons = document.querySelectorAll(".footButtons span");
		fadeIn(introItems1, 0.5, 0.7)();
		setTimeout(function(){
			drawMask();
			fadeIn(footButtons, 0.7, 0.3)();
		},10.000);
}

initialize();

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
};

// example use

	var intro = document.querySelector("#intro");
	var introItem = document.querySelector('.introItem1');
	var about = document.querySelector(".aboutContent");
	var contact = document.querySelector("#contact");

	var current = intro;

function shiftTo(section){

	var sectionTo;

	if (section === "intro") {sectionTo = intro;}
	if (section === "about") {sectionTo = about;}
	if (section === "contact"){sectionTo = contact;}

	fadeOut(current);
	fadeIn2(sectionTo);
	current = sectionTo;

	// if (current === "intro" && section === "about"){
	// 	introItem.classList += " moveLeft";

	// 	setTimeout(function(){
	// 		fadeIn2(about);
	// 		setTimeout(function(){
	// 			fadeOut(intro);
	// 			setTimeout(function(){
	// 				introItem.classList.remove("moveLeft");
	// 				current = section;
	// 			}, 500);
	// 		} ,500);
	// 	}, 500);
	// }


}
