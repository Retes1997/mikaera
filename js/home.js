/* ==========================================================================
   LÓGICA DE PORTADA (HOME PAGE)
   Componentes: Filtros de Galería y Visor Lightbox
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. PORTAFOLIO INTERACTIVO (FILTRO DE CATEGORÍAS) ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterButtons.length > 0 && portfolioItems.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remover active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Añadir active al botón presionado
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }

  // --- 2. VISOR DE IMÁGENES (LIGHTBOX GALLERY) ---
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');

  if (lightbox && lightboxImg) {
    let visibleItems = [];
    let currentIndex = 0;

    // Obtener las fotos visibles actualmente (filtradas o todas)
    const updateVisibleItems = () => {
      visibleItems = Array.from(portfolioItems).filter(item => !item.classList.contains('hidden'));
    };

    const showImage = (index) => {
      if (index < 0 || index >= visibleItems.length) return;
      currentIndex = index;
      const currentItem = visibleItems[currentIndex];
      const imgUrl = currentItem.getAttribute('data-image');
      const title = currentItem.getAttribute('data-title');

      lightboxImg.src = imgUrl;
      lightboxCaption.textContent = title;
    };

    // Abrir Lightbox al hacer clic en el botón de zoom del portafolio
    const lightboxTriggers = document.querySelectorAll('[data-lightbox-trigger]');
    
    lightboxTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Evitar redirección al detalle del proyecto
        
        const item = trigger.closest('.portfolio-item');
        if (item) {
          updateVisibleItems();
          currentIndex = visibleItems.indexOf(item);
          if (currentIndex !== -1) {
            showImage(currentIndex);
            lightbox.classList.add('active');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.classList.add('no-scroll');
          }
        }
      });
    });

    // Cerrar Lightbox
    const closeLightbox = () => {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
      setTimeout(() => {
        lightboxImg.src = '';
        lightboxCaption.textContent = '';
      }, 300);
    };

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Navegación (Siguiente/Anterior)
    const showNext = () => {
      updateVisibleItems();
      if (visibleItems.length === 0) return;
      let nextIndex = currentIndex + 1;
      if (nextIndex >= visibleItems.length) {
        nextIndex = 0; // Bucle al inicio
      }
      showImage(nextIndex);
    };

    const showPrev = () => {
      updateVisibleItems();
      if (visibleItems.length === 0) return;
      let prevIndex = currentIndex - 1;
      if (prevIndex < 0) {
        prevIndex = visibleItems.length - 1; // Bucle al final
      }
      showImage(prevIndex);
    };

    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);

    // Navegación por teclado
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    });
  }
});
