(() => {
    const refs = {
      openFranchiseModalBtn: document.querySelector('[data-products-modal-open]'),
      closeFranchiseModalBtn: document.querySelector('[data-products-modal-close]'),
      modal: document.querySelector('[data-products-modal]'),
    };
  
    refs.openFranchiseModalBtn.addEventListener('click', toggleModal);
    refs.closeFranchiseModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('products-modal__is-hidden');
      document.body.classList.toggle('no-scroll');
    }
})();