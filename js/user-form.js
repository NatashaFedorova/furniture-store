import { bodyUnLock, closeModalByClickingCloseBtnOrSubmit } from './modal.js';

const refs = {
  registerForm: document.querySelector('#registration'),
  signInForm: document.querySelector('#sign-in'),
  registrationFormSubmitter: document.querySelector(
    '.registration-form-submitter'
  ),
  signInFormSubmitter: document.querySelector('.sign-in-form-submitter'),
  username: document.querySelector('.usermane'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
};

refs.registerForm.addEventListener('submit', submitForm);
refs.signInForm.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  const user = {};
  const formData = new FormData(refs.registerForm);
  for (const [key, value] of formData) {
    user[key] = value;
  }
  localStorage.setItem('username', user.name);
  closeModalByClickingCloseBtnOrSubmit();
  e.target.reset();
}
