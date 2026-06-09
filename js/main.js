/* ==========================================================================
   LÓGICA JAVASCRIPT GLOBAL Y MAQUETACIÓN
   Proyecto: Mikáera Studio - Portafolio de Fotografía Profesional
   Desarrollador: Antigravity AI
   Descripción: Este script maneja la interactividad global del sitio web,
                incluyendo accesibilidad, manipulación de temas (Dark/Light),
                transiciones suaves entre páginas, carga progresiva de imágenes
                y adaptabilidad del menú móvil (hamburguesa).
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // --- 1. CONFIGURACIÓN DEL SELECTOR DE IDIOMA ---
  // Captura el selector de idioma para demostración de i18n (Internacionalización).
  // Cuenta con micro-animaciones en escala para retroalimentación física inmediata (haptic-like feedback).
  const langSelector = document.querySelector('.lang-selector');
  if (langSelector) {
    langSelector.addEventListener('click', (e) => {
      e.preventDefault();
      
      const langTextNode = langSelector.querySelector('span');
      const currentLang = langTextNode.textContent.trim();
      
      // Alternancia simulada para fines de demostración visual (ES <=> EN)
      if (currentLang === 'PE / ES') {
        langTextNode.textContent = 'US / EN';
        console.log('Idioma cambiado a Inglés (EN).');
      } else {
        langTextNode.textContent = 'PE / ES';
        console.log('Idioma cambiado a Español (ES).');
      }
      
      // Micro-animación física de escala (Scale-down & Scale-up)
      langSelector.style.transform = 'scale(0.95)';
      setTimeout(() => {
        langSelector.style.transform = 'none';
      }, 150);
    });
  }

  // --- 2. CABECERA PEGAJOSA (STICKY HEADER) ---
  // Se encarga de reducir la altura y agregar un fondo borroso translúcido al header principal
  // cuando el usuario se desplaza verticalmente más de 50px.
  // Esto mantiene la navegación disponible sin obstruir el contenido visual.
  const header = document.getElementById('main-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };
    // Escuchar el evento de desplazamiento general de la ventana
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inicializar el estado inmediatamente en la carga de la página
  }

  // --- 3. EFECTO PARALLAX SUAVE EN EL BACKGROUND DEL HERO ---
  // Solo se aplica si existe la sección hero (.hero-section) en la página actual (Pantalla de Inicio).
  // Desplaza suavemente la imagen de fondo a un ritmo más lento que el scroll general para crear profundidad visual.
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      // Multiplicador de 0.1 para que el desplazamiento del fondo sea sutil (10% del scroll real)
      heroSection.style.backgroundPositionY = `${50 + (scrollPos * 0.1)}%`;
    });
  }

  // --- 4. MENÚ HAMBURGUESA RESPONSIVO (DISPOSITIVOS MÓVILES) ---
  // Controla el despliegue del menú en dispositivos táctiles o pantallas pequeñas.
  // Bloquea el desplazamiento del body (.no-scroll) cuando el menú está abierto para evitar scroll doble.
  // Implementa directrices de accesibilidad usando atributos "aria-expanded".
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNavigation = document.querySelector('.main-navigation');
  const mainHeader = document.getElementById('main-header');

  if (menuToggle && mainNavigation && mainHeader) {
    menuToggle.addEventListener('click', () => {
      // Alterna la clase 'menu-open' en el header para cambiar las barras de la hamburguesa a una 'X'
      const isOpen = mainHeader.classList.toggle('menu-open');
      mainNavigation.classList.toggle('active');
      
      // Bloquear o desbloquear el scroll general del body en móviles
      document.body.classList.toggle('no-scroll', isOpen);
      
      // Accesibilidad: Informa al lector de pantalla si el menú móvil se desplegó
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Cierra automáticamente el menú móvil cuando el usuario hace clic en cualquier enlace interno.
    // Esto asegura que la navegación fluya sin quedarse atascada en pantallas táctiles.
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
  // Revela progresivamente los elementos con la clase `.scroll-reveal` cuando entran en la pantalla.
  // Diseñado con un IntersectionObserver para rendimiento eficiente del renderizado (evitando eventos scroll continuos).
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Detiene la observación para que la animación ocurra solo una vez
        }
      });
    }, {
      threshold: 0.1, // Dispara la animación cuando el 10% del elemento es visible
      rootMargin: '0px 0px -50px 0px' // Compensación sutil en la parte inferior para anticipar la revelación
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  }

  // --- 6. DETECCIÓN DE CARGA DE IMÁGENES SUAVES (PROGRESSIVE REVEAL) ---
  // Previene el efecto feo de "parpadeo" o carga entrecortada al revelar las imágenes progresivamente.
  // Agrega la clase `.lazy-image--loaded` únicamente cuando el archivo de imagen se ha cargado por completo.
  const lazyImages = document.querySelectorAll('.lazy-image');
  
  if (lazyImages.length > 0) {
    lazyImages.forEach(img => {
      // Si la imagen ya está en la caché del navegador al momento de ejecutarse el script
      if (img.complete) {
        img.classList.add('lazy-image--loaded');
      } else {
        // De lo contrario, espera a que termine de cargarse por completo en la red
        img.addEventListener('load', () => {
          img.classList.add('lazy-image--loaded');
        });
      }
    });
  }

  // --- 7. FALLBACK DE SEGURIDAD PARA EL PRELOADER ---
  // Evita que la pantalla de pre-carga (preloader) bloquee permanentemente el sitio si
  // ocurre un error de carga crítico en un script o recurso pesado de red.
  // Después de 3 segundos exactos, fuerza la ocultación del overlay del preloader.
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      if (!preloader.classList.contains('preloader--hidden')) {
        preloader.classList.add('preloader--hidden');
        console.log('Preloader ocultado por fallback de seguridad (3s).');
      }
    }, 3000);
  }

  // --- 9. CONMUTADOR DE TEMAS (DARK / LIGHT / ACCESIBILIDAD) ---
  // Mikáera Studio cuenta con un tema dual impecable.
  // Inyectamos la estructura HTML moderna con un botón deslizante dorado e iconos SVG para
  // un aspecto visual uniforme e interactivo premium.
  const themeSwitchers = document.querySelectorAll('.theme-switcher');
  
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

  // Aplica el tema seleccionado agregando o quitando el atributo 'data-theme' del body.
  // Registra la elección en LocalStorage para conservar la preferencia en futuras visitas.
  const applyTheme = (themeName) => {
    const activeTheme = themeName === 'light' ? 'light' : 'dark';
    
    if (activeTheme === 'dark') {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
    
    localStorage.setItem('mikaera-theme', activeTheme);
    
    // Sincronizar el estado de todos los switches presentes (ej: header e inline)
    themeSwitchers.forEach(switcher => {
      switcher.setAttribute('data-active-theme', activeTheme);
    });
  };

  // Inicialización segura del tema almacenado (Fondo oscuro por defecto)
  let savedTheme = localStorage.getItem('mikaera-theme') || 'dark';
  if (savedTheme !== 'light' && savedTheme !== 'dark') {
    savedTheme = 'dark';
  }
  applyTheme(savedTheme);

  // Escuchar interacciones en los conmutadores de tema
  // Asegura que sea accesible por teclado (tecla Enter / Espacio) asignando roles y tab index.
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

    // Soporte para navegación e interacción con lectores de pantalla y teclado
    switcher.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
      }
    });
  });

  // --- 10. TRANSICIONES DE PÁGINAS SUAVES (PAGE FADE-OUT) ---
  // Intercepta los clics en enlaces internos para desvanecer la página actual a negro antes
  // de cargar el nuevo recurso de red. Esto proporciona una transición premium libre de destellos en blanco.
  const internalLinks = document.querySelectorAll('a[href]');
  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Ignorar clics con teclas de control (Ctrl/Cmd para abrir en nueva pestaña)
      // O enlaces que tengan clases excluidas explícitamente como overlays o lightbox triggers.
      if (link.classList.contains('portfolio-link-overlay') || link.classList.contains('no-transition')) {
        return;
      }

      const href = link.getAttribute('href');
      let isInternal = false;
      
      if (href) {
        // Ignorar protocolos especiales de comunicación o marcadores de anclaje
        if (!href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('#') && !href.startsWith('javascript:')) {
          if (link.getAttribute('target') !== '_blank' && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
            // Validar que pertenezca al mismo dominio
            if (!href.startsWith('http') || href.startsWith(window.location.origin)) {
              const currentUrlWithoutHash = window.location.href.split('#')[0];
              const targetUrl = new URL(href, window.location.href);
              
              // Evitar interceptar si es solo una navegación interna en la misma página (ej: index.html#portafolio)
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
          // Desvanecer quitando la clase oculta (pantalla negra)
          preloaderElement.classList.remove('preloader--hidden');
          
          // Retraso controlado de 100ms para un fundido instantáneo y reactivo antes del salto de URL
          setTimeout(() => {
            window.location.href = href;
          }, 100);
        } else {
          window.location.href = href;
        }
      }
    });
  });

  console.log('JavaScript global del Layout cargado correctamente.');
});

// --- 11. SOPORTE PARA LA CACHÉ DETRÁS/ADELANTE DEL NAVEGADOR (BFCACHE) ---
// La bfcache (Back-Forward Cache) congela las páginas al navegar. Cuando un usuario retrocede,
// la página se puede mostrar con el preloader negro colgado. Este listener de 'pageshow'
// detecta si la página se cargó desde la caché e inmediatamente oculta el preloader.
window.addEventListener('pageshow', (event) => {
  const preloader = document.getElementById('preloader');
  if (event.persisted && preloader) {
    preloader.classList.add('preloader--hidden');
    console.log('Preloader ocultado al cargar desde la caché del historial (bfcache).');
  }
});

// --- 8. OCULTAR PRELOADER AL COMPLETAR CARGA DE TODOS LOS RECURSOS ---
// Listener principal para ocultar la pantalla negra de pre-carga una vez que las hojas de estilos,
// imágenes y fuentes críticas terminan de cargarse por completo en el navegador.
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader && !preloader.classList.contains('preloader--hidden')) {
    preloader.classList.add('preloader--hidden');
    console.log('Preloader ocultado al cargar todos los recursos.');
  }
});
