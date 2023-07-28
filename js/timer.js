const refs = {
  days: document.querySelector('[data-timer-days]'),
  visualTimerDays: document.querySelector('[data-visual-timer-days]'),
  hours: document.querySelector('[data-timer-hours]'),
  visualTimerHours: document.querySelector('[data-visual-timer-hours]'),
  minutes: document.querySelector('[data-timer-minutes]'),
  visualTimerMinutes: document.querySelector('[data-visual-timer-minutes]'),
  seconds: document.querySelector('[data-timer-seconds]'),
  visualTimerSeconds: document.querySelector('[data-visual-timer-Seconds]'),
};

timerDisplayInDays();
timerDisplayInHours();
timerDisplayInMinutes();
timerDisplayInSeconds();

getCurrentDate();

function getCurrentDate() {
  // Отримання поточної дати
  const currentDate = new Date();
  // Визначення дня тижня (0 - неділя, 1 - понеділок, ..., 6 - субота)
  const currentDayOfWeek = currentDate.getDay();

  // Визначення дати попереднього понеділка
  const previousMonday = new Date(currentDate);
  previousMonday.setDate(
    currentDate.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -6 : 1)
  );

  // Визначення дати наступного понеділка
  const nextMonday = new Date(currentDate);
  const res = currentDate.getDate() + (8 - currentDayOfWeek);
  console.log('res', res);
  nextMonday.setDate(currentDate.getDate() + (8 - currentDayOfWeek));

  // Вивід результатів у зручному форматі
  console.log('currentDate:', currentDate.getTime());
  console.log('previousMonday:', previousMonday.getTime());
  console.log('nextMonday:', nextMonday.getTime());
  console.log(
    'Наступний понеділок:',
    nextMonday.toString().split(' ').slice(0, 4)
  );

  const passedSinceLastMonday =
    currentDate.getTime() - previousMonday.getTime();
  console.log('passedSinceLastMonday:', passedSinceLastMonday);

  const passedDays = passedSinceLastMonday / 86400000;
  console.log('passedDays:', passedDays);

  const leftUntilNextMondayDays = nextMonday.getTime() - currentDate.getTime();
  console.log('leftUntilNextMondayDays:', leftUntilNextMondayDays / 86400000);

  const leftUntilNextMondayHours = nextMonday.getTime() - currentDate.getTime();
  console.log('leftUntilNextMondayHours:', leftUntilNextMondayHours / 3600000);

  const leftUntilNextMondayMinutes =
    nextMonday.getTime() - currentDate.getTime();
  console.log(
    'leftUntilNextMondayMinutes:',
    leftUntilNextMondayMinutes / 60000
  );
}

//

function timerDisplayInDays() {
  const value = refs.days.textContent;
  //   refs.visualTimerDays.style.animationDuration = '2s';
}

function timerDisplayInHours() {
  let hoursCount = refs.days.textContent;
}

function timerDisplayInMinutes() {
  let minutesCount = refs.days.textContent;
}

function timerDisplayInSeconds() {
  let secondsCount = refs.days.textContent;
}

// animation: timerState 60s linear forwards;

// кожного тижня нова акція
// в пн 00:00 - 7 днів 00 год 00 хв 00 сек
// в ср в 12:30 - 4 днів 11 год 30 хв 00 сек приблизно
// коло для днів буде не повним в середині тижня, але повним на початку
//  коло годин відображає число тільки від 1 до 23 в середині дня не повне

// 1 sec = 1000ms
// 60 sec or 1 min = 60000
// 60 sec * 60 min = 3 600 000 sec/hour
// 1 day = 86 400 000 sec
