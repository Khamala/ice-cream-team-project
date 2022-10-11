(() => {
    const refs = {
      openIceCreamModalBtn: document.querySelector('[data-products-modal-open]'),
      closeIceCreamModalBtn: document.querySelector('[data-products-modal-close]'),
      modal: document.querySelector('[data-products-modal]'),
    };
  
    refs.openIceCreamModalBtn.addEventListener('click', toggleModal);
    refs.closeIceCreamModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('products-modal__is-hidden');
      document.body.classList.toggle('no-scroll');
    }
})();