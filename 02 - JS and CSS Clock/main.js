<<<<<<< HEAD
const hourHand = document.querySelector(".hour-hand");
const minsHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
const digitalSecondHand = document.querySelector(".digital-second-hand");
const digitalMinuteHand = document.querySelector(".digital-min-hand");
const digitalHourHand = document.querySelector(".digital-hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegress = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegress}deg)`;

  if (secondsDegrees === 90) secondHand.style.transition = "all 0s";
  else secondHand.style.transition = "all 0.05s";

  if (minsDegrees === 90) minHand.style.transition = "all 0s";
  else minsHand.style.transition = "all 0.1s";

  //   console.log("it's： " + hour + ":" + mins + ":" + seconds);
  digitalSecondHand.innerText = seconds;
  digitalMinuteHand.innerText = mins;
  digitalHourHand.innerText = hour;
}

setInterval(setDate, 1000);
setDate();
=======
const hourHand = document.querySelector(".hour-hand");
const minsHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
const digitalSecondHand = document.querySelector(".digital-second-hand");
const digitalMinuteHand = document.querySelector(".digital-min-hand");
const digitalHourHand = document.querySelector(".digital-hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegress = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegress}deg)`;

  if (secondsDegrees === 90) secondHand.style.transition = "all 0s";
  else secondHand.style.transition = "all 0.05s";

  if (minsDegrees === 90) minHand.style.transition = "all 0s";
  else minsHand.style.transition = "all 0.1s";

  //   console.log("it's： " + hour + ":" + mins + ":" + seconds);
  digitalSecondHand.innerText = seconds;
  digitalMinuteHand.innerText = mins;
  digitalHourHand.innerText = hour;
}

setInterval(setDate, 1000);
setDate();
>>>>>>> 9a58c2eb54ea1dac9d17756f52880740bcb29d62
