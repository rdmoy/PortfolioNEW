

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


function aboutShift(){

	var shiftTo = document.querySelector('.matchIntro1');
	var shiftItem = document.querySelector('.introItem1');
	var divOffset = offset(shiftTo);
	var item = shiftItem.style.top;
	var introAnimation = document.querySelector('.introAnimation');
	var aboutContent = document.querySelector('.content');

	aboutContent.style.transition = 'none';
	aboutContent.style.WebkitTransition ='none';
	aboutContent.classList += "shiftIn";
	introAnimation.classList += "shiftOut"
	shiftItem.style.position = "absolute";
	// shiftItem.style.top = divOffset.top;
	shiftItem.style.left = divOffset.left;




}