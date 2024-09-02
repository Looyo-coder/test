(function () {
  "use strict";

  /**
   * Aplicar la clase .scrolled al cuerpo a medida que la página se desplaza hacia abajo
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Alternar navegación móvil
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Oculta Movíl nav
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Activar o desactivar los menús desplegables de navegación móvil
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Precargador
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Botón de desplazamiento hacia arriba
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animar los elementos de habilidades al pasar sobre ellos
   */

  window.onload = function () {

    document.querySelector("#HTML").addEventListener("mouseover", function () {
      animateprogress("#HTML", 40);
    });
    document.querySelector("#css").addEventListener("mouseover", function () {
      animateprogress("#css", 35);
    });
    document.querySelector("#bootstrap").addEventListener("mouseover", function () {
      animateprogress("#bootstrap", 35);
    });
    document.querySelector("#javascript").addEventListener("mouseover", function () {
      animateprogress("#javascript", 35);
    });
    document.querySelector("#python").addEventListener("mouseover", function () {
      animateprogress("#python", 15);
    });
    document.querySelector("#github").addEventListener("mouseover", function () {
      animateprogress("#github", 35);
    });

  }
  function animateprogress(id, val) {

    var getRequestAnimationFrame = function () {  
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(enroute, 1 / 60 * 1000);
        };

    };

    var fpAnimationFrame = getRequestAnimationFrame();
    var i = 0;
    var animacion = function () {

      if (i <= val) {
        document.querySelector(id).setAttribute("value", i);      
        document.querySelector(id + "+ span").innerHTML = i + "%";     
        i++;
        fpAnimationFrame(animacion);          
      }

    }

    fpAnimationFrame(animacion);   

  }

  /**
   * Posición de desplazamiento correcta al cargar la página para URL que contienen enlaces hash.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Menú de navegación Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();