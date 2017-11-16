

function drawMask() {
	var delay = 0;
	var paths = document.querySelectorAll('.mask');
	for (var i = paths.length - 1; i >= 0; i--) {
		var length = paths[i].getTotalLength();
		// Clear any previous transition
		paths[i].style.transition = 'none';
  		paths[i].style.WebkitTransition ='none';

		// Set up the starting positions
		paths[i].style.stroke = "#fdfbfb"
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

drawMask();
// reverseMask();

// document.getElementById()