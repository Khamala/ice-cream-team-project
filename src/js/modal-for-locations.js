(() => {
    const refs = {
      openFranchiseModalBtn: document.querySelector('[data-locations-modal-open]'),
      closeFranchiseModalBtn: document.querySelector('[data-locations-modal-close]'),
      modal: document.querySelector('[data-locations-modal]'),
    };
  
    refs.openFranchiseModalBtn.addEventListener('click', toggleModal);
    refs.closeFranchiseModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('locations-modal__is-hidden');
      document.body.classList.toggle('no-scroll');
    }
})();