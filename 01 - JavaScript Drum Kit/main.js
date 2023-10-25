function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;

  //We reduce the keydown time to zero
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function endSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!key) return;
  key.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
window.addEventListener("keyup", endSound);
