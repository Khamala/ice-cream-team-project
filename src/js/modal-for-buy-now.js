(() => {
    const refs = {
      openBuyModalBtn: document.querySelector('[data-buy-modal-open]'),
      closeBuyModalBtn: document.querySelector('[data-buy-modal-close]'),
      modal: document.querySelector('[data-buy-modal]'),
      openBuyMobModalBtn: document.querySelector('[data-buy-mob-modal-open]'),
    };
  
    refs.openBuyModalBtn.addEventListener('click', toggleModal);
    refs.openBuyMobModalBtn.addEventListener('click', toggleModal);
    refs.closeBuyModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('buynow-modal__is-hidden');
      document.body.classList.toggle('no-scroll');
    }
})();