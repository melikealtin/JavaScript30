//The Geolocation API works in secure contexts, meaning on websites that use the HTTPS protocol. This is a security measure taken by browsers to protect user privacy.

const speed = document.querySelector(".speed-value");
const arrow = document.querySelector(".arrow");

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    console.error(err);
  }
);
