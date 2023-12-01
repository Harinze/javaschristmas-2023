//   ===  CHALLENGE   ==== 

    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.


// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.



// index.js


//     ==      SOLUTION === //

const countdownDisplay = document.getElementById("countdown-display");

function renderCountdown(targetMonth, targetDay) {
  const today = new Date();
  const currentYear = today.getFullYear();

  const targetDate = new Date(currentYear, targetMonth, targetDay);

  const timeRemaining = targetDate - today;
  const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  countdownDisplay.innerHTML = `
    <div class="countdown-item">
      <span class="countdown-value">${daysRemaining}</span>
      <span class="countdown-unit">day(s)</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-value">${hoursRemaining}</span>
      <span class="countdown-unit">hour(s)</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-value">${minutesRemaining}</span>
      <span class="countdown-unit">minute(s)</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-value">${secondsRemaining}</span>
      <span class="countdown-unit">second(s)</span>
    </div>
  `;
}


renderCountdown(11, 25);
setInterval(() => renderCountdown(11, 25), 1000);

