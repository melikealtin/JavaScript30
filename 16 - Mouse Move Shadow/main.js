const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 500; //500px

function shadow(e) {
  const { offsetHeight: height, offsetWidth: width } = hero;
  let { offsetX: x, offsetY: y } = e;
  //   console.log(x, y);
  //   console.log(e.target);

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0  #8d8f9d,
      ${xWalk * -1}px ${yWalk}px 0 #31D2F7,
      ${yWalk}px ${xWalk * -1}px 0 #F495BF,
      ${yWalk * -1}px ${xWalk}px 0 #FFF100
    `;
}

hero.addEventListener("mousemove", shadow);
