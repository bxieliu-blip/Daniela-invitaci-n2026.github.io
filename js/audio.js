const badLoveAudio = new Audio('badlove.wav');
badLoveAudio.preload = 'auto';

function playBadLove() {
  badLoveAudio.currentTime = 0;
  badLoveAudio.play();
}

function stopBadLove() {
  badLoveAudio.pause();
  badLoveAudio.currentTime = 0;
}

window.playBadLove = playBadLove;
window.stopBadLove = stopBadLove;
pr