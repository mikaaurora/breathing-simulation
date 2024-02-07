var positionX = 0;
var velocity = 100;
var height = 80;
var width = 80;
var lineHeight = 80;
var fontSize = 12; // Initial font size for "breathe in" text
var reverse = false;
var ball = document.getElementById('ball');

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

setInterval(moveBall, 1500);

document.addEventListener('DOMContentLoaded', (event) => {
  var audioElement = document.querySelector('audio');
  audioElement.play().catch(error => {
    console.log("Audio play failed due to autoplay restrictions. User interaction required.");
  });
});
