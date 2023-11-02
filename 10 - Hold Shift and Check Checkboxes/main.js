const checkboxes = document.querySelectorAll('.inbox input[type= "checkbox"]');
// console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
  // Avoid checking all checkboxes after holding and clicking on the same checkbox again.
  if (this === lastChecked) return;
  let inBetween = false;

  // For checking multiple checkboxes inbetween
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      //   console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them in between!");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  // For unchecking multiple checkboxes inbetween
  else if (e.shiftKey && !this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = false;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
