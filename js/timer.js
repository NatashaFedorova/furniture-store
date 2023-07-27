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
  //   const date = new Date('2023-07-24');
  //   console.log(date.getDay()); // Повертає день тижня Sunday - Saturday : 0 - 6

  // Отримання поточної дати
  const currentDate = new Date();

  // Визначення дня тижня (0 - неділя, 1 - понеділок, ..., 6 - субота)
  const currentDayOfWeek = currentDate.getDay();

  console.log(
    'currentDate',
    currentDate.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -6 : 1)
  );

  // Визначення дати попереднього понеділка
  const previousMonday = new Date(currentDate);
  previousMonday.setDate(
    currentDate.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -6 : 1)
  );

  // Визначення дати наступного понеділка
  const nextMonday = new Date(currentDate);
  nextMonday.setDate(currentDate.getDate() + (8 - currentDayOfWeek));

  // Вивід результатів у зручному форматі
  console.log('Поточна дата:', currentDate.toDateString());
  console.log('Попередній понеділок:', previousMonday.toDateString());
  console.log('Наступний понеділок:', nextMonday.toDateString());
}

//

function timerDisplayInDays() {
  const value = refs.days.textContent;
  //   console.log(value);
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
