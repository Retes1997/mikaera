/* ==========================================================================
   LÓGICA DE CONTACTO (CONTACT PAGE)
   Proyecto: Mikáera Studio - Portafolio de Fotografía Profesional
   Desarrollador: Antigravity AI
   Descripción: Este script maneja la validación e interactividad del formulario
                de contacto, incluyendo el auto-ajuste dinámico de altura del textarea,
                el contador de caracteres en tiempo real con alertas y el envío asíncrono
                a la API de Web3Forms mediante Fetch.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // --- 1. AUTO-AJUSTE DINÁMICO DE ALTURA PARA EL TEXTAREA DE MENSAJES ---
  // Evita scrollbars internas molestas en el textarea de mensaje, permitiendo que
  // el campo crezca verticalmente de forma fluida a medida que el usuario escribe.
  const messageTextarea = document.getElementById('message');
  if (messageTextarea) {
    const autoResize = () => {
      // Restablece temporalmente la altura a 'auto' para permitir que el scrollHeight se reduzca si el usuario borra texto
      messageTextarea.style.height = 'auto';
      // Asigna la nueva altura exacta basada en el scrollHeight actual del contenido
      messageTextarea.style.height = `${messageTextarea.scrollHeight}px`;
    };

    // Ajusta la altura dinámicamente con cada entrada de caracteres
    messageTextarea.addEventListener('input', autoResize);
    
    // --- INICIALIZACIÓN DE LA ALTURA BASADA EN EL PLACEHOLDER ---
    // Truco técnico: Al cargar la página, se copia temporalmente el placeholder en el valor para calcular
    // el scrollHeight inicial correcto (evitando que la línea empiece superpuesta al placeholder)
    // y luego se limpia inmediatamente para no entorpecer la escritura del usuario.
    const originalValue = messageTextarea.value;
    if (!originalValue && messageTextarea.placeholder) {
      messageTextarea.value = messageTextarea.placeholder;
      autoResize();
      messageTextarea.value = ''; // Limpiar el valor temporal
    } else {
      autoResize(); // Si ya tiene texto previo (ej: autocompletado), se auto-ajusta a dicho texto
    }
  }

  // --- 2. CONTADOR DE CARACTERES EN TIEMPO REAL ---
  // Proporciona retroalimentación visual al usuario sobre la longitud del mensaje.
  // Agrega una clase de advertencia (.warning) cuando el usuario alcanza el 80% de la capacidad máxima (500 caracteres).
  const textarea = document.getElementById('message');
  const charCounter = document.getElementById('char-counter');
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  if (textarea && charCounter) {
    const maxLength = textarea.getAttribute('maxlength') || 500;
    
    const updateCharCount = () => {
      const length = textarea.value.length;
      charCounter.textContent = `${length} / ${maxLength} caracteres`;
      
      // Alerta de proximidad al límite: Si el texto supera el 80% (400 caracteres), cambia a color dorado
      if (length >= maxLength * 0.8) {
        charCounter.classList.add('warning');
      } else {
        charCounter.classList.remove('warning');
      }
    };

    textarea.addEventListener('input', updateCharCount);
    updateCharCount(); // Inicialización inicial
  }

  // --- 3. VALIDACIÓN Y ENVÍO ASÍNCRONO DEL FORMULARIO CON WEB3FORMS (AJAX) ---
  // Procesa el envío del formulario en segundo plano mediante Fetch API para evitar
  // recargas abruptas de pantalla y conservar la continuidad estética del sitio.
  if (contactForm && toast) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Detener el envío síncrono del navegador por defecto

      const submitBtn = contactForm.querySelector('.form-submit-btn');
      const originalText = submitBtn.textContent;
      
      // --- INTERFAZ EN ESTADO DE CARGA ---
      // Desactiva el botón de envío para evitar múltiples clics que dupliquen mensajes (debouncing)
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      submitBtn.style.opacity = '0.7';

      // Captura de datos del formulario en un objeto FormData compatible con la API
      const formData = new FormData(contactForm);

      // Realiza la petición POST de forma asíncrona
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // --- RESTAURAR BOTÓN ---
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = '1';

        if (data.success) {
          // --- NOTIFICACIÓN TOAST DE ÉXITO ---
          // Revela el Toast animado en la esquina inferior izquierda
          toast.classList.add('active');
          
          // Limpiar el formulario y reiniciar campos dinámicos
          contactForm.reset();
          if (charCounter) {
            charCounter.textContent = `0 / 500 caracteres`;
            charCounter.classList.remove('warning');
          }
          if (textarea) {
            textarea.style.height = 'auto'; // Restablece la altura base del textarea
          }

          // Ocultar el Toast automáticamente después de 4 segundos
          setTimeout(() => {
            toast.classList.remove('active');
          }, 4000);
        } else {
          // Error devuelto por la API (ej: llave de acceso incorrecta o inactiva)
          console.error('Error devuelto por la API Web3Forms:', data);
          alert('No pudimos procesar el envío: ' + (data.message || 'Verifica la clave de acceso en contacto.html.'));
        }
      })
      .catch(error => {
        // --- MANEJO DE ERRORES DE RED ---
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = '1';

        console.error('Error crítico de red en fetch:', error);
        alert('Hubo un problema de conexión. Revisa tu red de internet e inténtalo nuevamente.');
      });
    });
  }
});
