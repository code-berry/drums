// Grabbing all the buttons
var buttons = document.querySelectorAll('div button');

// Setting variable for how many buttons there are
var numButtons = buttons.length;

var i = 0, audio;

// Loop to add event listeners for each buttons
// and also to add the sounds to the buttons
while (i < numButtons) {
	buttons[i].addEventListener('click', addSound(i));
	i++;
}

// Event listener for keydown events
window.onkeydown = function(event) {
	if (event.keyCode === 87) {
		playThatSound('tom1');
		toggler('w');
	} else if (event.keyCode === 65) {
		playThatSound('tom2');
		toggler('a');
	} else if (event.keyCode === 83) {
		playThatSound('tom3');
		toggler('s');
	} else if (event.keyCode === 68) {
		playThatSound('tom4');
		toggler('d');
	} else if (event.keyCode === 74) {
		playThatSound('snare');
		toggler('j');
	} else if (event.keyCode === 75) {
		playThatSound('crash');
		toggler('k');
	} else if (event.keyCode === 76) {
		playThatSound('kick');
		toggler('l');
	} 
}

// Using filename string manipulation to play sound files
// on click... Not the smartest move, but I just wanted to
// try it this way.
function addSound(i) {
	var element = buttons[i];
	var styles = getComputedStyle(element);
	var soundName = styles.backgroundImage;
	// This is of course pretty spotty lol
	soundName = soundName.slice(80, -6);
	element.addEventListener('click', function() {
		var audio = new Audio('sounds/'+soundName+'.mp3');
		audio.play();
		element.classList.add('pressed');
		setTimeout(function () {
			element.classList.remove('pressed');
		}, 100);
	});
}

// Individual function for keystroke events
function playThatSound(instrument) {
	var audio = new Audio('sounds/'+instrument+'.mp3');
	audio.play();
}

// CSS toggler function for keystroke events & page animation
function toggler(className) {
	document.querySelector('.' + className).classList.add('pressed');
	setTimeout(function() {
		document.querySelector('.' + className).classList.remove('pressed');
	}, 100);
}

// Fun time! I'll give it a 6.5/10??? Is anyone even reading this??