/* ==========================================================================
   LÓGICA DE CONTACTO (CONTACT PAGE)
   Componentes: Formulario, contador de caracteres y Notificación Toast
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. AUTO-AJUSTE DINÁMICO DE ALTURA PARA EL TEXTAREA DE MENSAJES ---
  const messageTextarea = document.getElementById('message');
  if (messageTextarea) {
    const autoResize = () => {
      // Restablece la altura a un valor base
      messageTextarea.style.height = 'auto';
      // Asigna la nueva altura según la altura del contenido
      messageTextarea.style.height = `${messageTextarea.scrollHeight}px`;
    };

    // Ajusta la altura a medida que el usuario escribe
    messageTextarea.addEventListener('input', autoResize);
    // Ajuste inicial al cargar
    autoResize();
  }

  // --- 2. CONTADOR DE CARACTERES EN TIEMPO REAL ---
  const textarea = document.getElementById('message');
  const charCounter = document.getElementById('char-counter');
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  if (textarea && charCounter) {
    const maxLength = textarea.getAttribute('maxlength') || 500;
    
    const updateCharCount = () => {
      const length = textarea.value.length;
      charCounter.textContent = `${length} / ${maxLength} caracteres`;
      
      // Cambiar estilo cuando se acerca al límite (80%)
      if (length >= maxLength * 0.8) {
        charCounter.classList.add('warning');
      } else {
        charCounter.classList.remove('warning');
      }
    };

    textarea.addEventListener('input', updateCharCount);
    updateCharCount(); // Inicialización
  }

  // --- 3. VALIDACIÓN Y ENVÍO DEL FORMULARIO (SIMULADO CON TOAST) ---
  if (contactForm && toast) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Evitar recarga de página por defecto

      const submitBtn = contactForm.querySelector('.form-submit-btn');
      const originalText = submitBtn.textContent;
      
      // Mostrar estado de carga en el botón
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      submitBtn.style.opacity = '0.7';

      // Simular petición AJAX (1.2s de carga)
      setTimeout(() => {
        // Restaurar estado del botón
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = '1';

        // Mostrar Toast de éxito
        toast.classList.add('active');
        
        // Limpiar el formulario y reiniciar los elementos
        contactForm.reset();
        if (charCounter) {
          charCounter.textContent = `0 / 500 caracteres`;
          charCounter.classList.remove('warning');
        }
        if (textarea) {
          textarea.style.height = 'auto'; // Resetear altura autoajustable
        }

        // Ocultar Toast tras 4 segundos automáticamente
        setTimeout(() => {
          toast.classList.remove('active');
        }, 4000);

      }, 1200);
    });
  }
});
