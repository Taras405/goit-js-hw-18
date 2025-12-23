const timerEl = document.querySelector(".timer");
const messageEl = document.querySelector(".message");

function startTimer(seconds) {
  let timeInSeconds = seconds;

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }

  timerEl.textContent = formatTime(timeInSeconds);
  const timerInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    if (timeInSeconds > 0) {
      timeInSeconds--;
      timerEl.textContent = formatTime(timeInSeconds);
    } else {
      clearInterval(timerInterval);
      messageEl.textContent = "Час вийшов";
    }

    if (timeInSeconds === 30) {
      messageEl.textContent = "Пройшла половина часу";
    }
  }
}

startTimer(35); // 60



const timerFastEl = document.querySelector(".timer-fast");
const messageFastEl = document.querySelector(".message-fast");
const startFastBtn = document.getElementById("startFastBtn");

function startFastTimer(milliseconds) {
  let timeLeft = milliseconds;

  startFastBtn.disabled = true;

  const timerInterval = setInterval(() => {
    timeLeft--;

    timerFastEl.textContent = (timeLeft / 1000).toFixed(1) + "s";

    if (timeLeft === 10000) {
      messageFastEl.textContent = "Залишилось менше 10 секунд!";
      timerFastEl.classList.add("animate-fast");
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      messageFastEl.textContent = "Час вийшов!";
      timerFastEl.classList.remove("animate-fast");
      startFastBtn.disabled = false;
    }
  }, 1);
}

startFastBtn.addEventListener("click", () => {
  startFastTimer(11000); // 30000
});

