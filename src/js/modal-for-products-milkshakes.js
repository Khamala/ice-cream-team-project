(() => {
    const refs = {
      openIceCaffeeModalBtn: document.querySelector('[data-milkshakes-modal-open]'),
      closeIceCaffeeModalBtn: document.querySelector('[data-milkshakes-modal-close]'),
      modal: document.querySelector('[data-milkshakes-modal]'),
    };
  
    refs.openIceCaffeeModalBtn.addEventListener('click', toggleModal);
    refs.closeIceCaffeeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('milkshakes-modal__is-hidden');
      document.body.classList.toggle('no-scroll');
    }
})();