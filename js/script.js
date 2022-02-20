const navItens = document.querySelectorAll('.links a'),
 navbar = document.querySelector('.big-wrapper'),
 menuMobile = document.querySelector(".hamburger-menu"),
 toggleBtn = document.querySelector(".toggle-btn");


/* ABRE/FECHA MENU MOBILE*/
menuMobile.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/* FECHA MENU MOBILE AO CLICAR NO LINK/MENU */
navItens.forEach((navIten) => {
    navIten.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});

/* FAZ A TRANSIÇÃO ENTRE O TEMA DASRk/LIGHT */
 toggleBtn.addEventListener('click', () => {    
  navbar.classList.toggle('dark')
});
 

