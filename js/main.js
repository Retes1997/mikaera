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

  // --- 9. CONMUTADOR DE TEMAS (DARK / LIGHT) ---
  const themeSwitchers = document.querySelectorAll('.theme-switcher');
  
  // Inyectar estructura HTML moderna de switch deslizante con iconos de Sol/Luna
  themeSwitchers.forEach(switcher => {
    switcher.innerHTML = `
      <div class="theme-switcher-slider"></div>
      <div class="theme-switcher-icon theme-switcher-icon--dark" title="Tema Oscuro">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="theme-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </div>
      <div class="theme-switcher-icon theme-switcher-icon--light" title="Tema Claro">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="theme-icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      </div>
    `;
  });

  const applyTheme = (themeName) => {
    const activeTheme = themeName === 'light' ? 'light' : 'dark';
    
    if (activeTheme === 'dark') {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
    
    localStorage.setItem('mikaera-theme', activeTheme);
    
    themeSwitchers.forEach(switcher => {
      switcher.setAttribute('data-active-theme', activeTheme);
    });
  };

  // Inicializar tema guardado de forma segura
  let savedTheme = localStorage.getItem('mikaera-theme') || 'dark';
  if (savedTheme !== 'light' && savedTheme !== 'dark') {
    savedTheme = 'dark';
  }
  applyTheme(savedTheme);

  // Escuchar clics y teclado en todo el contenedor del selector de tema (cápsula)
  themeSwitchers.forEach(switcher => {
    switcher.setAttribute('tabindex', '0');
    switcher.setAttribute('role', 'button');
    
    const toggleTheme = () => {
      const currentTheme = localStorage.getItem('mikaera-theme') || 'dark';
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(nextTheme);
    };

    switcher.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });

    // Soporte para accesibilidad por teclado (Enter / Espacio)
    switcher.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
      }
    });
  });

  // --- 10. TRANSICIONES DE PÁGINAS SUAVES (PAGE FADE-OUT) ---
  const internalLinks = document.querySelectorAll('a[href]');
  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Ignorar overlays del portafolio o enlaces con exclusión explícita
      if (link.classList.contains('portfolio-link-overlay') || link.classList.contains('no-transition')) {
        return;
      }

      const href = link.getAttribute('href');
      let isInternal = false;
      
      if (href) {
        // Evitar protocolos de mensajería, javascript y anclas a la misma página
        if (!href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('#') && !href.startsWith('javascript:')) {
          // Permitir que el usuario abra en nueva pestaña con Ctrl/Cmd o target="_blank"
          if (link.getAttribute('target') !== '_blank' && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
            // Validar que sea del mismo dominio
            if (!href.startsWith('http') || href.startsWith(window.location.origin)) {
              // Evitar interceptar si es solo un cambio de ancla en la página actual
              const currentUrlWithoutHash = window.location.href.split('#')[0];
              const targetUrl = new URL(href, window.location.href);
              if (targetUrl.href.split('#')[0] !== currentUrlWithoutHash) {
                isInternal = true;
              }
            }
          }
        }
      }

      if (isInternal) {
        e.preventDefault();
        const preloaderElement = document.getElementById('preloader');
        
        if (preloaderElement) {
          // Quitar clase oculta para que se desvanezca a negro
          preloaderElement.classList.remove('preloader--hidden');
          
          // Esperar a que se complete el fundido antes de navegar
          setTimeout(() => {
            window.location.href = href;
          }, 200); // 200ms para una navegación súper rápida y responsiva
        } else {
          window.location.href = href;
        }
      }
    });
  });

  console.log('JavaScript global del Layout cargado correctamente.');
});

// --- 11. SOPORTE PARA CACHÉ DEL NAVEGADOR (BFCACHE) ---
// Ocultar preloader de inmediato si el usuario regresa con el botón de "Atrás"
window.addEventListener('pageshow', (event) => {
  const preloader = document.getElementById('preloader');
  if (event.persisted && preloader) {
    preloader.classList.add('preloader--hidden');
    console.log('Preloader ocultado al cargar desde la caché del historial (bfcache).');
  }
});

// --- 8. OCULTAR PRELOADER AL COMPLETAR CARGA DE RECURSOS ---
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader && !preloader.classList.contains('preloader--hidden')) {
    preloader.classList.add('preloader--hidden');
    console.log('Preloader ocultado al cargar todos los recursos.');
  }
});
