import { closeModalByClickingCloseBtnOrSubmit } from './modal.js';
import { refs } from './refs.js';

refs.registerForm.addEventListener('submit', submitRegisterForm);
refs.signInForm.addEventListener('submit', submitSignInForm);
refs.signOut.addEventListener('click', handlerSignOut);

getUserName();

function submitRegisterForm(e) {
  e.preventDefault();
  submitAnyUserForm(refs.registerForm);
}

function submitSignInForm(e) {
  e.preventDefault();
  submitAnyUserForm(refs.signInForm);
  e.target.reset();
}

function submitAnyUserForm(form) {
  formDataHandler(form);
  closeModalByClickingCloseBtnOrSubmit();
  visibilitySignOutBtn();
  getUserName();
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
    visibilitySignOutBtn();
    hiddenAccountBtn();
  } else {
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
