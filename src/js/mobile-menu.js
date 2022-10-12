(() => {
  const mobileMenu = document.querySelector('[data-menu]');
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');

  const closeLinks = document.querySelectorAll('[data-close-menu]');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
   
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
     
  };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

  const closeMenuFromLink = () => {
      
    if (mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    } 

  };

  
  closeLinks.forEach(link => { 
    link.addEventListener('click', closeMenuFromLink);
  });
})();