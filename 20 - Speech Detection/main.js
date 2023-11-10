window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

console.log(recognition);

recognition.interimResults = true;
recognition.lang = "en-US";

let p = document.createElement("p");
const word = document.querySelector(".words");

word.append(p);

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  const poopScript = transcript.replace(/poop|poo|shit|dump/gi, "💩");
  p.textContent = poopScript;

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    word.append(p);
  }
});

recognition.addEventListener("end", recognition.start);

recognition.start();
