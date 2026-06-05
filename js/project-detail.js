/* ==========================================================================
   LÓGICA DE DETALLE DE PROYECTO (PROJECT DETAIL)
   Componentes: Visor Lightbox para la Galería de Imágenes
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('project-lightbox');
  const lightboxImg = document.getElementById('project-lightbox-img');
  const lightboxCaption = document.getElementById('project-lightbox-caption');
  const closeBtn = lightbox ? lightbox.querySelector('.lightbox-close') : null;
  const prevBtn = lightbox ? lightbox.querySelector('.lightbox-prev') : null;
  const nextBtn = lightbox ? lightbox.querySelector('.lightbox-next') : null;
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (lightbox && lightboxImg && galleryItems.length > 0) {
    let currentIndex = 0;

    const showImage = (index) => {
      if (index < 0 || index >= galleryItems.length) return;
      currentIndex = index;
      const currentItem = galleryItems[currentIndex];
      const imgUrl = currentItem.getAttribute('data-image');
      const title = currentItem.getAttribute('data-title');

      lightboxImg.src = imgUrl;
      lightboxCaption.textContent = title;
    };

    // Abrir Lightbox al hacer clic en un elemento de la galería
    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        showImage(index);
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
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
      let nextIndex = currentIndex + 1;
      if (nextIndex >= galleryItems.length) {
        nextIndex = 0;
      }
      showImage(nextIndex);
    };

    const showPrev = () => {
      let prevIndex = currentIndex - 1;
      if (prevIndex < 0) {
        prevIndex = galleryItems.length - 1;
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
