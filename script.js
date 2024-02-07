var positionX = 0;
var velocity = 100;
var height = 80;
var width = 80;
var lineHeight = 80;
var fontSize = 12; // Initial font size for "breathe in" text
var reverse = false;
var ball = document.getElementById('ball');
var intervalId; // To store the interval ID

// Set initial text for the ball
ball.innerHTML = 'Click to begin.';

function startCountdown() {
  var countdownValue = 3; // Start countdown from 3
  ball.innerHTML = countdownValue; // Show initial countdown value

  var countdownInterval = setInterval(function() {
    countdownValue--;
    if (countdownValue > 0) {
      ball.innerHTML = countdownValue; // Update countdown value
    } else {
      clearInterval(countdownInterval); // Clear countdown interval
      ball.innerHTML = 'breathe in'; // Reset ball text to start the sequence
      intervalId = setInterval(moveBall, 1500); // Start the moveBall interval

      var backgroundAudio = document.getElementById('backgroundAudio'); // Get the audio element
      backgroundAudio.loop = true; // Set the audio to loop
      backgroundAudio.play().catch(error => {
        console.log("Audio play failed: " + error); // Log any errors for debugging
      });
    }
  }, 1000); // Update every second
}


function moveBall() {
  var Xmin = 0;
  var Xmax = 300;

  if (reverse) {
    positionX -= velocity;
    height /= 1.25;
    width /= 1.25;
    lineHeight /= 1.25;
    fontSize /= 1.25; // Decrease font size
    ball.innerHTML = 'breathe out';
  } else {
    positionX += velocity;
    height *= 1.25;
    width *= 1.25;
    lineHeight *= 1.25;
    fontSize *= 1.25; // Increase font size
    ball.innerHTML = 'breathe in';
  }

  ball.style.left = positionX + 'px';
  ball.style.height = height + 'px';
  ball.style.width = width + 'px';
  ball.style.lineHeight = lineHeight + 'px';
  ball.style.fontSize = fontSize + 'px'; // Apply the updated font size

  if (positionX > Xmax || positionX === Xmin) {
    reverse = !reverse;
  }
}


// Add click event listener to start the countdown when the ball is clicked
ball.addEventListener('click', function() {
  // Prevent multiple intervals from being set if the ball is clicked more than once
  if (!intervalId) {
    startCountdown(); // Start the countdown, which will eventually start the audio
  }
});
