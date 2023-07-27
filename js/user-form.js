import { closeModalByClickingCloseBtnOrSubmit } from './modal.js';

const refs = {
  registerForm: document.querySelector('#registration'),
  signInForm: document.querySelector('#sign-in'),
  username: document.querySelector('.username'),
};

refs.registerForm.addEventListener('submit', submitForm);
refs.signInForm.addEventListener('submit', submitForm);

getUserName();

function submitForm(e) {
  e.preventDefault();
  const user = {};
  const formData = new FormData(refs.registerForm);
  for (const [key, value] of formData) {
    user[key] = value;
  }
  localStorage.setItem('username', user.name);
  closeModalByClickingCloseBtnOrSubmit();
  getUserName();
  e.target.reset();
}

function getUserName() {
  const name = localStorage.getItem('username');
  refs.username.textContent = name;
}
