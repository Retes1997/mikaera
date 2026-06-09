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
    
    // Ajuste inicial dinámico basado en el placeholder (se adapta automáticamente al texto)
    const originalValue = messageTextarea.value;
    if (!originalValue && messageTextarea.placeholder) {
      messageTextarea.value = messageTextarea.placeholder;
      autoResize();
      messageTextarea.value = '';
    } else {
      autoResize();
    }
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

  // --- 3. VALIDACIÓN Y ENVÍO DEL FORMULARIO CON WEB3FORMS (REAL) ---
  if (contactForm && toast) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Evitar recarga de página por defecto

      const submitBtn = contactForm.querySelector('.form-submit-btn');
      const originalText = submitBtn.textContent;
      
      // Mostrar estado de carga en el botón
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      submitBtn.style.opacity = '0.7';

      // Capturar los datos del formulario (incluye los campos input y variables ocultas)
      const formData = new FormData(contactForm);

      // Realizar la petición POST asíncrona a Web3Forms
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Restaurar estado del botón
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = '1';

        if (data.success) {
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
        } else {
          // Manejo de error retornado por la API (ej: clave inválida o expirada)
          console.error('Error retornado por Web3Forms:', data);
          alert('Error al enviar: ' + (data.message || 'Verifica tu Access Key en contacto.html.'));
        }
      })
      .catch(error => {
        // Restaurar estado del botón ante un error de red
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = '1';

        console.error('Error de red al conectar con Web3Forms:', error);
        alert('Hubo un error de conexión al enviar el mensaje. Revisa tu internet e inténtalo de nuevo.');
      });
    });
  }
});
