function fadeIn(element, initDelay, otherDelay){

return function(){
	var delay = initDelay;
		for (var i=0; i< element.length; i++){


			element[i].style.opacity="0";
			/* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
			element[i].style.webkitAnimation="fadeIn ease 1";
			element[i].style.mozAnimation="fadeIn ease 1";
			element[i].style.animation="fadeIn ease 1";

			/* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/
			element[i].style.webkitAnimationFillMode="forwards";
			element[i].style.mozAnimationFillMode="forwards";
			element[i].style.animationFillMode="forwards";
			
			element[i].style.animationDuration=".8s";

			var theDelay = delay + "s";
			element[i].style.webkitAnimationDelay=theDelay;
			element[i].style.mozAnimationDelay=theDelay;
			element[i].style.animationDelay=theDelay;

			delay+=otherDelay;
		}
	}
}

function fadeIn2(element) {
    var opacity = 0;
    function decrease () {
        opacity += 0.05;
        if (opacity >= 1){
            // complete
            element.style.opacity = 1;
            return true;
        }
        element.style.opacity = opacity;
        requestAnimationFrame(decrease);
    }
    decrease();
}

function fadeOut(element) {
    var opacity = 1;
    function decrease () {
        opacity -= 0.05;
        if (opacity <= 0){
            // complete
            element.style.opacity = 0;
            return true;
        }
        element.style.opacity = opacity;
        requestAnimationFrame(decrease);
    }
    decrease();
}

//ANIMATION FUNCTIONS
function drawMask() {
	var delay = 1;
	var paths = document.querySelectorAll('.mask');
	for (var i = paths.length - 1; i >= 0; i--) {
		var length = paths[i].getTotalLength();
		// Clear any previous transition
		paths[i].style.transition = 'none';
		paths[i].style.WebkitTransition ='none';

		// Set up the starting positions
		paths[i].style.stroke = "#fdfbfb";
		paths[i].style.strokeWidth = 70;
		paths[i].style.strokeDasharray = length + ' ' + length;
		paths[i].style.strokeDashoffset = length;

		// Trigger a layout so styles are calculated & the browser picks up the starting position before animating
		paths[i].getBoundingClientRect();

		// Define our transition
		paths[i].style.clipPath = "url(#clipped)";

		paths[i].style.transition = 'stroke-dashoffset .25s linear';
		paths[i].style.WebkitTransition = 'stroke-dashoffset .25s linear';

		var theDelay = delay + "s";
		paths[i].style.WebkitTransitionDelay = theDelay;

		delay += .27;
		paths[i].style.strokeDashoffset = '0';
	};
}

function reverseMask(){
	var delay = 0;
	var paths = document.querySelectorAll('.mask');
	for (var i = 0; i <= paths.length - 1; i++) {
		var length = paths[i].getTotalLength();
		// Clear any previous transition
		paths[i].style.transition = 'none';
		paths[i].style.WebkitTransition ='none';

		// Set up the starting positions
		paths[i].style.stroke = "#fdfbfb"
		paths[i].style.strokeWidth = 70;
		paths[i].style.strokeDasharray = length + ' ' + length;
		paths[i].style.strokeDashoffset = "-" + length;

		// Trigger a layout so styles are calculated & the browser picks up the starting position before animating
		paths[i].getBoundingClientRect();

		// Define our transition
		paths[i].style.clipPath = "url(#clipped)";

		paths[i].style.transition = 'stroke-dashoffset .25s linear';
		paths[i].style.WebkitTransition = 'stroke-dashoffset .25s linear';

		var theDelay = delay + "s";
		paths[i].style.WebkitTransitionDelay = theDelay;

		delay += .27;
		paths[i].style.strokeDashoffset = '0';
	};
}