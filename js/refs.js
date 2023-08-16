export const refs = {
  registerForm: document.querySelector('[data-registration]'),
  signInForm: document.querySelector('[data-sign-in]'),
  welcomeUser: document.querySelector('[data-welcome-user]'),
  username: document.querySelector('[data-username]'),
  account: document.querySelector('[data-account]'),
  signOut: document.querySelector('[data-sign-out]'),

  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelectorAll('[data-modal-close]'),
  registerAndSignInModal: document.querySelector(
    '[data-modal-register-sign-in]'
  ),
  subscriptionModal: document.querySelector('[data-modal-subscription]'),
  subscriptionForm: document.querySelector('[data-subscription-form]'),

  subscriptionStatus: document.querySelector('[data-subscription-status]'),

  body: document.querySelector('body'),
  lockPadding: document.querySelectorAll('.lock-padding'),

  itemWithActiveLink: document.querySelectorAll('.list-of-links_link'),
  registrationLink: document.querySelector('.registration-link'),
  signInLink: document.querySelector('.sign-in-link'),
  registrationCard: document.querySelector('.registration-card'),
  cards: document.querySelectorAll('.card'),

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
