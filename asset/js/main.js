 
    const mainNavLinks = document.querySelectorAll('#navbarSupportedContent > ul > li > a.nav-link');
      mainNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
    const navbarCollapse = document.querySelector('#navbarSupportedContent');
    if(link.getAttribute('data-bs-toggle') === 'dropdown') return;

    if(window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
      bsCollapse.hide();
    }
  });
});

// Dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
      dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('#navbarSupportedContent');
      if(window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
          bsCollapse.hide();
      }
    });
  });

// Secondary dropdowns (inner menu)
    const secondaryDropdowns = document.querySelectorAll('.secondray-drop-down > .dropdown-item');
      secondaryDropdowns.forEach(link => {
        link.addEventListener('click', (e) => {
          if(window.innerWidth < 992){
            e.preventDefault();
    const innerMenu = link.nextElementSibling;
          if(innerMenu.style.display === 'block'){
              innerMenu.style.display = 'none';
         }else {
              innerMenu.style.display = 'block';
        }
      }
    });
  });


  const scrollButton = document.querySelector('.scroll-top-button');
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
            scrollButton.style.display = 'flex';
    }else {
            scrollButton.style.display = 'none';
          }
    });