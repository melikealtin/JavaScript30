//Get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

const fullscreenButton = player.querySelector(".fullscreen");
const muteButton = player.querySelector(".mute");

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  //   console.log("update the button");
  const icon = this.paused
    ? '<i class="fa-solid fa-play"></i>'
    : '<i class="fa-solid fa-pause"></i>';
  toggle.innerHTML = icon;
  //   console.log({ toggle });
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  // update volume & playbackRate
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  // offsetX => tell you how much into the progress bar
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    player.requestFullscreen();
    fullscreenButton.innerHTML = `<i class="fa-solid fa-compress"></i>`;
  } else {
    document.exitFullscreen();
    fullscreenButton.innerHTML = `<i class="fa-solid fa-expand"></i>`;
  }
}

function toggleMute() {
  if (video.volume !== 0) {
    video.volume = 0;
    muteButton.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
  } else {
    video.volume = ranges[0].value;
    muteButton.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
  }
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", () => {
  if (mousedown) {
    scrub;
  }
});
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

fullscreenButton.addEventListener("click", toggleFullscreen);
muteButton.addEventListener("click", toggleMute);
