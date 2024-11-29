let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;

// DOM Elements
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const themePicker = document.getElementById("theme");

// Format time as MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// Update timer display
function updateDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
}

// Start or pause timer
startBtn.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(timerInterval);
    startBtn.textContent = "Start";
  } else {
    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timerInterval);
        alert("Time's up! Take a break.");
      }
    }, 1000);
    startBtn.textContent = "Pause";
  }
  isRunning = !isRunning;
});

// Reset timer
resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timeLeft = 25 * 60;
  updateDisplay();
  startBtn.textContent = "Start";
  isRunning = false;
});

// Change theme
themePicker.addEventListener("input", (event) => {
  document.body.style.backgroundColor = event.target.value;
});

// Initialize
updateDisplay();
