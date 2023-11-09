//This code retrieves the durations of all the videos in a video playlist, sums these durations in seconds and then parses this total duration into hours, minutes, and seconds, writing it to the console.

const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
//   console.log(timeNodes);

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
