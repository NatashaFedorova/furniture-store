(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', closeModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');

    if (!refs.modal.classList.contains('is-hidden')) {
      refs.modal.classList.add('no-scroll');
    } else {
      refs.modal.classList.remove('no-scroll');
    }
  }

  function closeModal(e) {
    if (e.target === document.querySelector('.backdrop')) {
      refs.modal.classList.add('is-hidden');
      refs.modal.classList.remove('no-scroll');
    }
  }
})();
