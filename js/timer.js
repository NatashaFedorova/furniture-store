const refs = {
  saleSection: document.querySelector('[data-sale-section]'),
  days: document.querySelector('[data-timer-days]'),
  visualTimerDays: document.querySelector('[data-visual-timer-days]'),
  hours: document.querySelector('[data-timer-hours]'),
  visualTimerHours: document.querySelector('[data-visual-timer-hours]'),
  minutes: document.querySelector('[data-timer-minutes]'),
  visualTimerMinutes: document.querySelector('[data-visual-timer-minutes]'),
  seconds: document.querySelector('[data-timer-seconds]'),
  visualTimerSeconds: document.querySelector('[data-visual-timer-seconds]'),
};

setInterval(updateTimer, 1000);

function determiningTimeUntilTheEndOfSpecialOffers() {
  // get current date
  const currentDate = new Date();
  // const currentDate = new Date('2023-08-03T22:11:32'); // for example

  // get the current day of the week (0 - sunday, 1 - monday, ..., 6 - saturday)
  const currentDayOfWeek = currentDate.getDay();

  const nextMonday = new Date(currentDate.toString().split(' ').slice(0, 4));
  if (currentDayOfWeek === 0) {
    nextMonday.setDate(currentDate.getDate() + 1);
  } else {
    nextMonday.setDate(currentDate.getDate() + (8 - currentDayOfWeek));
  }

  // 1 sec = 1000ms
  // 60 sec or 1 min = 60000ms
  // 1 hour or 60 min = 3600000ms
  // 1 day = 86400000 ms

  const leftUntilNextMondayDays =
    (nextMonday.getTime() - currentDate.getTime()) / 86400000;

  const leftUntilNextMondayHours =
    (nextMonday.getTime() - currentDate.getTime()) / 3600000;

  const leftUntilNextMondayMinutes =
    (nextMonday.getTime() - currentDate.getTime()) / 60000;

  const leftUntilNextMondaySeconds =
    (nextMonday.getTime() - currentDate.getTime()) / 1000;

  console.log({
    days: parseInt(leftUntilNextMondayDays),
    hours: parseInt(leftUntilNextMondayHours),
    minutes: parseInt(leftUntilNextMondayMinutes),
    seconds: parseInt(leftUntilNextMondaySeconds),
  });

  return {
    days: parseInt(leftUntilNextMondayDays),
    hours: parseInt(leftUntilNextMondayHours),
    minutes: parseInt(leftUntilNextMondayMinutes),
    seconds: parseInt(leftUntilNextMondaySeconds),
  };
}

// (208px / 7) * (7 - days)  - number of days passed in pixels
function timerDisplayInDays() {
  const { days } = determiningTimeUntilTheEndOfSpecialOffers();

  if (days === 0) {
    refs.days.textContent = 0;
  } else {
    const valueStrokeDashoffset = parseInt((210 / 7) * (7 - days));
    refs.visualTimerDays.style.strokeDashoffset = `-${valueStrokeDashoffset}`;
    refs.visualTimerDays.classList.remove('is-hidden');
    refs.days.textContent = days;
  }
}

// (208 / 24) * (hours - 24 *  days)  - the number of hours spent taking into account full days
function timerDisplayInHours() {
  const { days, hours } = determiningTimeUntilTheEndOfSpecialOffers();
  const numberOfHoursToRender = parseInt(hours - 24 * days);

  if (numberOfHoursToRender === 0) {
    refs.hours.textContent = 0;
  } else {
    const valueStrokeDashoffset = parseInt(
      (208 / 24) * (24 - numberOfHoursToRender)
    );
    refs.visualTimerHours.style.strokeDashoffset = `-${valueStrokeDashoffset}`;
    refs.visualTimerHours.classList.remove('is-hidden');
    refs.hours.textContent = numberOfHoursToRender;
  }
}

// (208px / 168) * (168 - hours)  - number of days passed
function timerDisplayInMinutes() {
  const { hours, minutes } = determiningTimeUntilTheEndOfSpecialOffers();
  const numberOfMinutesToRender = parseInt(minutes - hours * 60);

  if (minutes === 0) {
    refs.minutes.textContent = 0;
  } else {
    const valueStrokeDashoffset = parseInt(
      (208 / 60) * (60 - numberOfMinutesToRender)
    );
    refs.visualTimerMinutes.style.strokeDashoffset = `-${valueStrokeDashoffset}`;
    refs.visualTimerMinutes.classList.remove('is-hidden');
    refs.minutes.textContent = numberOfMinutesToRender;
  }
}

function timerDisplayInSeconds() {
  const { minutes, seconds } = determiningTimeUntilTheEndOfSpecialOffers();
  const numberOfSecondsToRender = parseInt(seconds - minutes * 60);
  console.log(numberOfSecondsToRender);

  if (minutes === 0) {
    refs.seconds.textContent = 0;
  } else {
    const valueStrokeDashoffset = (208 / 60) * (60 - numberOfSecondsToRender);
    refs.visualTimerSeconds.style.strokeDashoffset = `-${valueStrokeDashoffset}`;
    refs.visualTimerSeconds.classList.remove('is-hidden');
    refs.seconds.textContent = numberOfSecondsToRender;
  }
}

function updateTimer() {
  timerDisplayInDays();
  timerDisplayInHours();
  timerDisplayInMinutes();
  timerDisplayInSeconds();
}

// кожного тижня нова акція
// в пн 00:00 - 7 днів 00 год 00 хв 00 сек
// в ср в 12:30 - 4 днів 11 год 30 хв 00 сек приблизно
// коло для днів буде не повним в середині тижня, але повним на початку
//  коло годин відображає число тільки від 1 до 23 в середині дня не повне
