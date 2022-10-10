(() => {
    const refs = {
      openIceCaffeeModalBtn: document.querySelector('[data-ice-caffee-modal-open]'),
      closeIceCaffeeModalBtn: document.querySelector('[data-ice-caffee-modal-close]'),
      modal: document.querySelector('[data-ice-caffee-modal]'),
    };
  
    refs.openIceCaffeeModalBtn.addEventListener('click', toggleModal);
    refs.closeIceCaffeeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('ice-caffee-modal__is-hidden');
      document.body.classList.toggle('no-scroll');
    }
})();