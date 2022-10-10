(() => {
    const refs = {
      openFranchiseModalBtn: document.querySelector('[data-about-modal-open]'),
      closeFranchiseModalBtn: document.querySelector('[data-about-modal-close]'),
      modal: document.querySelector('[data-about-modal]'),
    };
  
    refs.openFranchiseModalBtn.addEventListener('click', toggleModal);
    refs.closeFranchiseModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('about-modal__is-hidden');
      document.body.classList.toggle('no-scroll');
    }
})();