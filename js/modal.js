(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
    lockPadding: document.querySelectorAll('.lock-padding'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModalByClickingCloseBtn);
  refs.modal.addEventListener('click', closeModalByClickingOnBackdrop);
  document.addEventListener('keydown', closeModalByEscape);

  function openModal() {
    // const lockPaddingValue =
    //   window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    // refs.body.style.paddingRight = lockPaddingValue;
    // refs.lockPadding.forEach(
    //   (el) => (el.style.paddingRight = lockPaddingValue)
    // );
    bodyLock();
    refs.body.classList.add('lock');
    refs.modal.classList.add('open');
  }

  function closeModalByClickingCloseBtn() {
    refs.modal.classList.remove('open');
    // refs.lockPadding.forEach((el) => (el.style.paddingRight = '0px'));
    bodyUnLock();
    refs.body.style.paddingRight = '0px';
    refs.body.classList.remove('lock');
  }

  function closeModalByClickingOnBackdrop(e) {
    if (e.target === document.querySelector('.modal__backdrop')) {
      refs.modal.classList.remove('open');
      // refs.lockPadding.forEach((el) => (el.style.paddingRight = '0px'));
      bodyUnLock();
      refs.body.style.paddingRight = '0px';
      refs.body.classList.remove('lock');
    }
  }

  function closeModalByEscape(e) {
    if (e.code === 'Escape') {
      refs.modal.classList.remove('open');
      // refs.lockPadding.forEach((el) => (el.style.paddingRight = '0px'));
      bodyUnLock();
      refs.body.style.paddingRight = '0px';
      refs.body.classList.remove('lock');
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (refs.lockPadding.length > 0) {
      for (let index = 0; index < refs.lockPadding.length; index++) {
        const el = refs.lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    refs.body.style.paddingRight = lockPaddingValue;
    refs.body.classList.add('lock');
  }

  function bodyUnLock() {
    if (refs.lockPadding.length > 0) {
      for (let index = 0; index < refs.lockPadding.length; index++) {
        const el = refs.lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    refs.body.style.paddingRight = '0px';
    refs.body.classList.remove('lock');
  }
})();
