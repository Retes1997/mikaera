/* ==========================================================================
   LÓGICA DE DETALLE DE PROYECTO (PROJECT DETAIL)
   Proyecto: Mikáera Studio - Portafolio de Fotografía Profesional
   Desarrollador: Antigravity AI
   Descripción: Este script controla el visor de imágenes ampliado (Lightbox)
                de la página estática del detalle del proyecto. Habilita
                la navegación fluida con teclado y puntero, y gestiona
                el bloqueo de scroll en el body para mejorar la experiencia de usuario.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- ELEMENTOS DEL VISOR LIGHTBOX ---
  const lightbox = document.getElementById('project-lightbox');
  const lightboxImg = document.getElementById('project-lightbox-img');
  const lightboxCaption = document.getElementById('project-lightbox-caption');
  
  // Capturar botones de control dentro del lightbox
  const closeBtn = lightbox ? lightbox.querySelector('.lightbox-close') : null;
  const prevBtn = lightbox ? lightbox.querySelector('.lightbox-prev') : null;
  const nextBtn = lightbox ? lightbox.querySelector('.lightbox-next') : null;
  
  // Elementos de imagen pertenecientes a la galería editorial de la página
  const galleryItems = document.querySelectorAll('.gallery-item');

  // Inicializar visor únicamente si existen los elementos requeridos en el DOM
  if (lightbox && lightboxImg && galleryItems.length > 0) {
    let currentIndex = 0; // Índice de la imagen activa actual

    // --- FUNCIÓN DE RENDERIZACIÓN DE IMAGEN ---
    // Recibe el índice de la foto solicitada, actualiza el estado local y
    // carga de forma segura la URL y descripción en los nodos correspondientes.
    const showImage = (index) => {
      if (index < 0 || index >= galleryItems.length) return;
      currentIndex = index;
      
      const currentItem = galleryItems[currentIndex];
      const imgUrl = currentItem.getAttribute('data-image');
      const title = currentItem.getAttribute('data-title');

      lightboxImg.src = imgUrl;
      lightboxCaption.textContent = title;
    };

    // --- EVENT TRIGGERS: ABRIR EL VISOR ---
    // Asigna eventos de clic a cada contenedor de imagen de la galería.
    // Al hacer clic, abre el lightbox en pantalla completa y bloquea el desplazamiento del body.
    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        showImage(index);
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false'); // Accesibilidad
        document.body.classList.add('no-scroll');      // Evitar scroll de fondo
      });
    });

    // --- EVENT TRIGGERS: CERRAR EL VISOR ---
    // Oculta el lightbox, libera el scroll del body y limpia la URL de la imagen
    // tras completarse la transición CSS para evitar saltos o parpadeos visuales.
    const closeLightbox = () => {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
      
      // Retrasar el vaciado de los atributos hasta que la transición termine (300ms)
      setTimeout(() => {
        lightboxImg.src = '';
        lightboxCaption.textContent = '';
      }, 300);
    };

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    
    // Cierra el lightbox si el usuario hace clic fuera de la imagen (en el fondo translúcido)
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // --- CONTROLES DE NAVEGACIÓN ---
    // Avanza a la siguiente imagen. Cuenta con lógica circular (vuelve a la primera si supera el límite).
    const showNext = () => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= galleryItems.length) {
        nextIndex = 0; // Bucle circular al inicio
      }
      showImage(nextIndex);
    };

    // Retrocede a la imagen anterior. Cuenta con lógica circular (vuelve a la última si baja de cero).
    const showPrev = () => {
      let prevIndex = currentIndex - 1;
      if (prevIndex < 0) {
        prevIndex = galleryItems.length - 1; // Bucle circular al final
      }
      showImage(prevIndex);
    };

    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);

    // --- CONTROLES POR TECLADO ---
    // Habilita una navegación interactiva y accesible usando las flechas de dirección (Izquierda/Derecha)
    // y el cierre del visor con la tecla Escape.
    document.addEventListener('keydown', (e) => {
      // Ignorar si el lightbox no está visible en pantalla
      if (!lightbox.classList.contains('active')) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      }
      if (e.key === 'ArrowRight') {
        showNext();
      }
      if (e.key === 'ArrowLeft') {
        showPrev();
      }
    });
  }
});
