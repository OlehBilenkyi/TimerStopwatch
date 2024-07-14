// JavaScript (script.js)
// Секундомер
let stopwatchInterval;
let stopwatchTime = 0;
const stopwatchDisplay = document.getElementById('stopwatch-display');
const startStopwatchButton = document.getElementById('start-stopwatch');
const stopStopwatchButton = document.getElementById('stop-stopwatch');
const resetStopwatchButton = document.getElementById('reset-stopwatch');

startStopwatchButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        updateStopwatchDisplay();
    }, 1000);
});

stopStopwatchButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
});

resetStopwatchButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    updateStopwatchDisplay();
});

function updateStopwatchDisplay() {
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime % 3600) / 60);
    const seconds = stopwatchTime % 60;
    stopwatchDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Таймер
let timerInterval;
let timerTime = 0;
const timerDisplay = document.getElementById('timer-display');
const startTimerButton = document.getElementById('start-timer');
const stopTimerButton = document.getElementById('stop-timer');
const resetTimerButton = document.getElementById('reset-timer');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

startTimerButton.addEventListener('click', () => {
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    timerTime = minutes * 60 + seconds;
    updateTimerDisplay();
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timerTime <= 0) {
            clearInterval(timerInterval);
            return;
        }
        timerTime--;
        updateTimerDisplay();
    }, 1000);
});

stopTimerButton.addEventListener('click', () => {
    clearInterval(timerInterval);
});

resetTimerButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerTime = 0;
    updateTimerDisplay();
});

function updateTimerDisplay() {
    const minutes = Math.floor(timerTime / 60);
    const seconds = timerTime % 60;
    timerDisplay.textContent = `${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
    return value.toString().padStart(2, '0');
}
