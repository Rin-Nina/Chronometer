"use strict";
// get element

let timerEl = document.querySelector("#timer");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

// Initialize variables
let startTime = 0;
let lapTime = 0;
let interval;

// Format time as HH:MM:SS
function formatTime(miliseconds) {
  const totalSeconds = Math.floor(miliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

// Update the display
function updateDisplay() {
  timerEl.textContent = formatTime(lapTime);
}

//start stopwatch
startBtn.addEventListener("click", function () {
  console.log("start");
  if (!interval) {
    startTime = Date.now() - lapTime;
    interval = setInterval(() => {
      lapTime = Date.now() - startTime;
      updateDisplay();
    }, 1000);
  }
});

// stop stopwatch
let stopWatch = function () {
  console.log("stop");
  clearInterval(interval);
  interval = null;
};
stopBtn.addEventListener("click", stopWatch);

// reset stopwatch
resetBtn.addEventListener("click", function () {
  console.log("reset");
  //stop watch
  stopWatch();
  lapTime = 0;
  updateDisplay();
});

// Initialize the display
updateDisplay();
