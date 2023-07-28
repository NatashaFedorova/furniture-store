import { closeModalByClickingCloseBtnOrSubmit } from './modal.js';

const refs = {
  registerForm: document.querySelector('[data-registration]'),
  signInForm: document.querySelector('[data-sign-in]'),
  welcomeUser: document.querySelector('[data-welcome-user]'),
  username: document.querySelector('[data-username]'),
  account: document.querySelector('[data-account]'),
  signOut: document.querySelector('[data-sign-out]'),
};

refs.registerForm.addEventListener('submit', submitRegisterForm);
refs.signInForm.addEventListener('submit', submitSignInForm);
refs.signOut.addEventListener('click', handlerSignOut);

getUserName();

function submitRegisterForm(e) {
  e.preventDefault();
  formDataHandler(refs.registerForm);
  closeModalByClickingCloseBtnOrSubmit();
  getUserName();
  visibilitySignOutBtn();
  e.target.reset();
}

function submitSignInForm(e) {
  e.preventDefault();
  formDataHandler(refs.signInForm);
  closeModalByClickingCloseBtnOrSubmit();
  visibilitySignOutBtn();
  getUserName();
  e.target.reset();
}

function formDataHandler(form) {
  const user = {};
  const formData = new FormData(form);
  for (const [key, value] of formData) {
    user[key] = value;
  }
  localStorage.setItem('username', user.name);
}

function getUserName() {
  const name = localStorage.getItem('username');
  if (name) {
    refs.username.textContent = name;
    visibilityWelcomeUser();
    hiddenAccountBtn();
  } else {
    hiddenSignOutBtn();
    hiddenWelcomeUser();
  }
}

function handlerSignOut() {
  localStorage.removeItem('username');
  hiddenWelcomeUser();
  hiddenSignOutBtn();
  visibilityAccountBtn();
}

function visibilitySignOutBtn() {
  refs.signOut.classList.remove('is-hidden');
}

function hiddenSignOutBtn() {
  refs.signOut.classList.add('is-hidden');
}

function visibilityAccountBtn() {
  refs.account.classList.remove('is-hidden');
}

function hiddenAccountBtn() {
  refs.account.classList.add('is-hidden');
}

function visibilityWelcomeUser() {
  refs.welcomeUser.classList.remove('is-hidden');
}

function hiddenWelcomeUser() {
  refs.welcomeUser.classList.add('is-hidden');
}
