/* ==========================================================================
   LÓGICA JAVASCRIPT GLOBAL Y MAQUETACIÓN
   Proyecto: Mikáera Studio - Portafolio de Fotografía Profesional
   Desarrollador: Antigravity AI
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // --- 1. CONFIGURACIÓN DEL SELECTOR DE IDIOMA ---
  // Captura el selector de idioma para demostración de i18n
  const langSelector = document.querySelector('.lang-selector');
  if (langSelector) {
    langSelector.addEventListener('click', (e) => {
      e.preventDefault();
      
      const langTextNode = langSelector.querySelector('span');
      const currentLang = langTextNode.textContent.trim();
      
      // Alternancia básica para demostración (ES <=> EN)
      if (currentLang === 'PE / ES') {
        langTextNode.textContent = 'US / EN';
        console.log('Idioma cambiado a Inglés (EN).');
      } else {
        langTextNode.textContent = 'PE / ES';
        console.log('Idioma cambiado a Español (ES).');
      }
      
      // Micro-animación de escala al hacer clic
      langSelector.style.transform = 'scale(0.95)';
      setTimeout(() => {
        langSelector.style.transform = 'none';
      }, 150);
    });
  }

  // --- 2. HEADER PEGAJOSO (STICKY HEADER) ---
  const header = document.getElementById('main-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inicializar al cargar
  }

  // --- 3. EFECTO PARALLAX SUAVE EN EL BACKGROUND DEL HERO ---
  // Solo se aplica si existe el hero section (Pantalla de Inicio)
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      heroSection.style.backgroundPositionY = `${50 + (scrollPos * 0.1)}%`;
    });
  }

  // --- 4. MENÚ HAMBURGUESA RESPONSIVO (MÓVIL) ---
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNavigation = document.querySelector('.main-navigation');
  const mainHeader = document.getElementById('main-header');

  if (menuToggle && mainNavigation && mainHeader) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainHeader.classList.toggle('menu-open');
      mainNavigation.classList.toggle('active');
      document.body.classList.toggle('no-scroll', isOpen); // Bloquear scroll en body
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar el menú al hacer clic en cualquier enlace
    const closeMenuLinks = mainNavigation.querySelectorAll('.nav-link');
    closeMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainHeader.classList.remove('menu-open');
        mainNavigation.classList.remove('active');
        document.body.classList.remove('no-scroll');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- 5. ANIMACIÓN REVEAL ON SCROLL (INTERSECTION OBSERVER) ---
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Revelar solo una vez
        }
      });
    }, {
      threshold: 0.1, // Elemento visible al 10%
      rootMargin: '0px 0px -50px 0px' // Disparo anticipado sutil
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  }

  // --- 6. DETECCION DE CARGA PARA IMAGENES SUAVES (PROGRESSIVE REVEAL) ---
  const lazyImages = document.querySelectorAll('.lazy-image');
  
  if (lazyImages.length > 0) {
    lazyImages.forEach(img => {
      // Si la imagen ya se cargó (por ejemplo, desde la caché del navegador)
      if (img.complete) {
        img.classList.add('lazy-image--loaded');
      } else {
        img.addEventListener('load', () => {
          img.classList.add('lazy-image--loaded');
        });
      }
    });
  }

  // --- 7. FALLBACK DE SEGURIDAD PARA EL PRELOADER ---
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      if (!preloader.classList.contains('preloader--hidden')) {
        preloader.classList.add('preloader--hidden');
        console.log('Preloader ocultado por fallback de seguridad (3s).');
      }
    }, 3000);
  }

  // --- 9. CONMUTADOR DE TEMAS (DARK / LIGHT / WARM) ---
  const themeButtons = document.querySelectorAll('[data-theme-select]');
  
  const applyTheme = (themeName) => {
    if (themeName === 'dark') {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', themeName);
    }
    
    localStorage.setItem('mikaera-theme', themeName);
    
    themeButtons.forEach(btn => {
      if (btn.getAttribute('data-theme-select') === themeName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  };

  // Inicializar tema guardado
  const savedTheme = localStorage.getItem('mikaera-theme') || 'dark';
  applyTheme(savedTheme);

  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const theme = button.getAttribute('data-theme-select');
      applyTheme(theme);
    });
  });

  console.log('JavaScript global del Layout cargado correctamente.');
});

// --- 8. OCULTAR PRELOADER AL COMPLETAR CARGA DE RECURSOS ---
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader && !preloader.classList.contains('preloader--hidden')) {
    preloader.classList.add('preloader--hidden');
    console.log('Preloader ocultado al cargar todos los recursos.');
  }
});
