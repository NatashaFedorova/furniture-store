import { refs } from './refs.js';

refs.openModalBtn.addEventListener('click', openUserModal);
refs.closeModalBtn.forEach((el) =>
  el.addEventListener('click', closeModalByClickingCloseBtnOrSubmit)
);
refs.registerAndSignInModal.addEventListener(
  'click',
  closeModalByClickingOnBackdrop
);
refs.registrationLink.addEventListener('click', changeActiveCard);
refs.signInLink.addEventListener('click', changeActiveCard);
refs.subscriptionModal.addEventListener(
  'click',
  closeModalByClickingOnBackdrop
);
document.addEventListener('keydown', closeModalByEscape);

function openUserModal() {
  bodyLock();
  refs.body.classList.add('lock');
  refs.registerAndSignInModal.classList.add('open');
  refs.registrationCard.classList.add('open');
  refs.signInLink.classList.add('no-active');
}

function changeActiveCard() {
  resetForms();
  refs.cards.forEach((el) => el.classList.toggle('open'));
  refs.itemWithActiveLink.forEach((el) => el.classList.toggle('no-active'));
}

export function closeModalByClickingCloseBtnOrSubmit() {
  closeUserModal();
}

function closeModalByClickingOnBackdrop(e) {
  if (e.target === document.querySelector('.modal__backdrop')) closeUserModal();
}

function closeModalByEscape(e) {
  if (e.code === 'Escape') closeUserModal();
}

function closeUserModal() {
  refs.registerAndSignInModal.classList.remove('open');
  refs.body.classList.remove('lock');
  resetForms();
  bodyUnLock();

  setTimeout(() => {
    refs.itemWithActiveLink.forEach((el) => el.classList.remove('no-active'));
    refs.cards.forEach((el) => el.classList.remove('open'));
  }, 100);
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  refs.lockPadding.forEach((el) => (el.style.paddingRight = lockPaddingValue));
  refs.body.style.paddingRight = lockPaddingValue;
  refs.body.classList.add('lock');
}

export function bodyUnLock() {
  refs.lockPadding.forEach((el) => (el.style.paddingRight = '0px'));
  refs.body.style.paddingRight = '0px';
  refs.body.classList.remove('lock');
}

function resetForms() {
  refs.registerForm.reset();
  refs.signInForm.reset();
}

export function openSubscriptionModal() {
  bodyLock();
  refs.body.classList.add('subscription-modal-open');
  refs.body.classList.add('lock');
  refs.subscriptionModal.classList.add('open');
}

export function closeSubscriptionModal() {
  refs.body.classList.remove('subscription-modal-open');
  refs.subscriptionModal.classList.remove('open');
  refs.body.classList.remove('lock');

  bodyUnLock();
}
