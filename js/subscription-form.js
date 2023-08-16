import { refs } from './refs.js';
import { openSubscriptionModal, closeSubscriptionModal } from './modal.js';

refs.subscriptionForm.addEventListener('submit', submitSubscriptionForm);

changeSubscriptionStatus();

export function changeSubscriptionStatus() {
  const email = localStorage.getItem('email');

  if (email) {
    refs.subscriptionStatus.classList.remove('is-hidden');
    refs.subscriptionForm.classList.add('is-hidden');
  } else {
    refs.subscriptionStatus.classList.add('is-hidden');
    refs.subscriptionForm.classList.remove('is-hidden');
  }
}

function submitSubscriptionForm(e) {
  e.preventDefault();
  openSubscriptionModal();

  const user = {};
  const formData = new FormData(refs.subscriptionForm);
  for (const [key, value] of formData) {
    user[key] = value;
  }

  const username = localStorage.getItem('username');

  if (username) {
    localStorage.setItem('email', user.email);
    refs.subscriptionStatus.classList.remove('is-hidden');
    refs.subscriptionForm.classList.add('is-hidden');
  }

  e.target.reset();

  setTimeout(() => {
    closeSubscriptionModal();
  }, 1500);
}
