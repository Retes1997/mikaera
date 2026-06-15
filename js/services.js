/* ==========================================================================
   LÓGICA DE SERVICIOS (SERVICES CATALOG PAGE)
   Proyecto: Mikáera Studio - Portafolio de Fotografía Profesional
   Desarrollador: Antigravity AI
   Descripción: Este script maneja la interactividad del catálogo de servicios,
                la inyección dinámica de datos en el modal detallado de paquetes,
                y la lógica del acordeón auto-colapsable (exclusivo) de preguntas frecuentes.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // --- 1. BASE DE DATOS LOCAL Y MODAL DE SERVICIOS INTERACTIVO ---
  // Estructura de diccionario de datos (key-value) conteniendo las especificaciones completas
  // de los 12 paquetes de fotografía y dirección visual ofrecidos por el estudio.
  // Permite mantener el código HTML limpio e inyectar detalles dinámicamente según la tarjeta seleccionada.
  const serviceDetails = {
    'bodas-parejas': {
      num: '01',
      title: 'Sesión Bodas & Parejas',
      text: 'Fotografía documental y artística que inmortaliza el amor, complicidad y conexión de la pareja.',
      duration: '3 Horas',
      price: 'S/ 1,200',
      image: 'assets/images/services/servicio-11.webp',
      features: [
        '60 fotografías en alta resolución editadas profesionalmente.',
        'Ideal para sesiones pre-boda, bodas civiles íntimas o aniversarios.',
        'Dirección de poses natural y reportaje de estilo documental.',
        'Galería en línea privada para selección y descarga.',
        'Reunión de diseño previa para planificar la locación y el estilo.'
      ]
    },
    'maternidad-familia': {
      num: '02',
      title: 'Maternidad & Familias',
      text: 'Retratos familiares cálidos y atemporales que celebran la dulce espera y los lazos familiares más fuertes.',
      duration: '2 Horas',
      price: 'S/ 500',
      image: 'assets/images/services/servicio-7.webp',
      features: [
        '30 fotografías en alta resolución editadas digitalmente.',
        'Apto para un máximo de 5 integrantes (mascotas bienvenidas).',
        'Fotos grupales e individuales de cada miembro de la familia.',
        'Uso de telas y túnicas artísticas del estudio para maternidad.',
        'Guía de armonización de vestuario (colores y texturas).'
      ]
    },
    'quinceanos-editorial': {
      num: '03',
      title: 'Quinceañeras & Editorial',
      text: 'Fotografía de moda y retrato creativo con dirección conceptual para documentar esta etapa de forma única.',
      duration: '3 Horas',
      price: 'S/ 850',
      image: 'assets/images/services/servicio-4.webp',
      features: [
        '40 fotografías en alta resolución editadas digitalmente.',
        'Dirección visual con estilo editorial / de moda.',
        'Hasta 3 cambios de vestuario durante la sesión.',
        'Asesoramiento de styling y lookboard conceptual previo.',
        'Un foto libro impreso de recuerdo premium (20x20cm).'
      ]
    },
    'branding-identidad': {
      num: '04',
      title: 'Corporativo & Branding',
      text: 'Sesiones de retrato corporativo, marca personal y estilo de vida ejecutivo para profesionales e independientes.',
      duration: '2 Horas',
      price: 'S/ 650',
      image: 'assets/images/portfolio/proyecto-17/toma-1.webp',
      features: [
        '20 fotografías en alta resolución editadas profesionalmente.',
        'Esquemas de iluminación y fondos adaptados a la identidad de tu marca.',
        'Uso de equipamiento de iluminación profesional y dirección de expresión.',
        'Entrega de fotos en formato optimizado para LinkedIn, web y prensa.',
        'Derechos de uso comercial completos incluidos.'
      ]
    },
    'graduacion': {
      num: '05',
      title: 'Sesión Graduaciones',
      text: 'Retratos individuales y con la familia para celebrar y perennizar tu éxito académico y profesional.',
      duration: '1.5 Horas',
      price: 'S/ 400',
      image: 'assets/images/portfolio/proyecto-14/toma-1.webp',
      features: [
        '20 fotografías en alta resolución editadas digitalmente.',
        'Sesión de retratos con toga, birrete y diploma en estudio o exteriores.',
        'Participación de padres y familiares cercanos en la sesión.',
        'Asesoría de dirección y posturas solemnes.',
        'Entrega en galería digital en un plazo máximo de 7 días hábiles.'
      ]
    },
    'promocion': {
      num: '06',
      title: 'Sesión Promociones',
      text: 'Sesiones grupales creativas en exteriores o estudio para capturar la energía y compañerismo de la promoción.',
      duration: '3 Horas',
      price: 'S/ 800',
      image: 'assets/images/portfolio/proyecto-11/toma-1.webp',
      features: [
        '40 fotografías editadas del grupo y retratos individuales de cada alumno.',
        'Locación a elección en exteriores o set especial en nuestro estudio.',
        'Fotos grupales de compañerismo, dinámicas y divertidas.',
        'Asesoría en combinación de prendas y accesorios.',
        'Galería en línea privada para descarga ilimitada para todos los alumnos/padres.'
      ]
    },
    'parque': {
      num: '07',
      title: 'Sesión Exteriores',
      text: 'Sesiones fotográficas en exteriores con luz natural suave, rodeados de naturaleza o entornos urbanos estéticos.',
      duration: '2 Horas',
      price: 'S/ 400',
      image: 'assets/images/services/servicio-6.webp',
      features: [
        '35 fotografías en alta resolución editadas digitalmente.',
        'Sesión en exteriores con luz natural (hora dorada sugerida).',
        'Locación: Parque El Olivar de San Isidro u otra de tu elección.',
        'Ideal para retratos individuales, de pareja o familias pequeñas.',
        'Asesoría para elegir los puntos más fotogénicos de la locación.'
      ]
    },
    'studio': {
      num: '08',
      title: 'Sesión Studio',
      text: 'Sesión de retrato profesional en estudio climatizado, utilizando fondos sin fin y esquemas de luces avanzados.',
      duration: '1.5 Horas',
      price: 'S/ 450',
      image: 'assets/images/services/servicio-9.webp',
      features: [
        '20 fotografías en alta resolución editadas digitalmente.',
        'Esquema de luces personalizado según tu estilo o concepto.',
        'Hasta 2 cambios de vestuario durante la sesión.',
        'Fondo infinito (blanco, negro, gris o beige).',
        'Asesoría y dirección de expresión corporal.'
      ]
    },
    'cumpleanos': {
      num: '09',
      title: 'Studio Cumpleaños',
      text: 'Celebra tu día especial con una sesión de retratos divertida, confeti ecológico y la mejor energía.',
      duration: '1 Hora',
      price: 'S/ 350',
      image: 'assets/images/services/servicio-3.webp',
      features: [
        '20 fotografías en alta resolución editadas digitalmente.',
        'Set decorado con globos y confeti ecológico.',
        'Música a elección del cumpleañero para crear el mejor ambiente.',
        'Fotografías individuales y con hasta 2 acompañantes.',
        'Entrega rápida en un plazo máximo de 5 días hábiles.'
      ]
    }
  };


  // --- CAPTURA DE COMPONENTES DEL MODAL EN EL DOM ---
  const serviceModal = document.getElementById('service-modal');
  const modalServiceImg = document.getElementById('modal-service-img');
  const modalServiceNum = document.getElementById('modal-service-num');
  const modalServiceTitle = document.getElementById('modal-service-title');
  const modalServiceText = document.getElementById('modal-service-text');
  const modalServiceFeaturesList = document.getElementById('modal-service-features-list');
  const modalServiceDuration = document.getElementById('modal-service-duration');
  const modalServicePrice = document.getElementById('modal-service-price');
  const modalCloseBtn = serviceModal ? serviceModal.querySelector('.modal-close') : null;

  // --- FUNCIÓN PARA MOSTRAR DETALLE DE UN SERVICIO POR SU CLAVE ---
  const showServiceDetail = (serviceKey) => {
    const data = serviceDetails[serviceKey];
    if (!data) return;

    // --- POBLACIÓN DE DATOS DINÁMICOS ---
    if (modalServiceImg) {
      modalServiceImg.src = data.image;
      modalServiceImg.alt = data.title;
    }
    if (modalServiceNum) modalServiceNum.textContent = data.num;
    if (modalServiceTitle) modalServiceTitle.textContent = data.title;
    if (modalServiceText) modalServiceText.textContent = data.text;
    if (modalServiceDuration) modalServiceDuration.textContent = data.duration;
    if (modalServicePrice) modalServicePrice.textContent = data.price;

    // Limpiar y construir la lista de beneficios del paquete
    if (modalServiceFeaturesList) {
      modalServiceFeaturesList.innerHTML = '';
      data.features.forEach(feat => {
        const li = document.createElement('li');
        li.textContent = feat;
        modalServiceFeaturesList.appendChild(li);
      });
    }

    // --- MOSTRAR EL MODAL Y BLOQUEAR EL SCROLL ---
    if (serviceModal) {
      serviceModal.classList.add('active');
      serviceModal.setAttribute('aria-hidden', 'false'); // Accesibilidad
    }
    document.body.classList.add('no-scroll');      // Previene desplazamientos dobles
  };

  // Inicializar listeners del modal solo si existen en la página
  if (serviceModal && modalServiceTitle) {
    const detailButtons = document.querySelectorAll('.service-detail-btn');
    
    detailButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar comportamientos por defecto del enlace '#'
        const card = e.target.closest('.service-card');
        if (!card) return;
        const serviceKey = card.getAttribute('data-service');
        showServiceDetail(serviceKey);
      });
    });

    // --- FUNCIÓN PARA CERRAR EL MODAL ---
    const closeServiceModal = () => {
      serviceModal.classList.remove('active');
      serviceModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeServiceModal);
    
    // Cierra el modal si el usuario hace clic fuera del contenedor (.modal-container)
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) {
        closeServiceModal();
      }
    });

    // Accesibilidad por teclado: Cierra el modal de servicio al presionar la tecla Escape
    document.addEventListener('keydown', (e) => {
      if (serviceModal.classList.contains('active') && e.key === 'Escape') {
        closeServiceModal();
      }
    });

    // --- AUTO-ABRIR MODAL POR PARÁMETRO DE URL (?service=...) ---
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam && serviceDetails[serviceParam]) {
      // Retrasar ligeramente para asegurar transiciones y carga fluidas del DOM
      setTimeout(() => {
        showServiceDetail(serviceParam);
      }, 200);
    }
  }

  // --- 2. ACORDEÓN INTERACTIVO DE PREGUNTAS FRECUENTES (FAQ) ---
  // Estructura modular exclusiva: Al abrir una pregunta, colapsa automáticamente
  // cualquier otra que esté desplegada.
  // Usa "scrollHeight" para permitir animaciones fluidas basadas en altura dinámica
  // en lugar de alturas fijas (que romperían la adaptabilidad).
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const item = question.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const isActive = item.classList.contains('active');

        // --- COLAPSAR PREGUNTAS ACTIVAS ADYACENTES ---
        const allItems = document.querySelectorAll('.faq-item');
        allItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').style.height = '0px';
            otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          }
        });

        // --- ALTERNAR EL ESTADO DE LA PREGUNTA SELECCIONADA ---
        if (!isActive) {
          item.classList.add('active');
          // Asignar el scrollHeight exacto para que transicione suavemente mediante CSS (height transition)
          answer.style.height = `${answer.scrollHeight}px`;
          question.setAttribute('aria-expanded', 'true');
        } else {
          item.classList.remove('active');
          answer.style.height = '0px';
          question.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // --- RECALCULAR ALTURA EN CAMBIO DE PANTALLA ---
    // Si el usuario redimensiona la pantalla (o gira el dispositivo móvil) con una pregunta abierta,
    // recalculamos la altura en tiempo real para evitar recortes de texto.
    window.addEventListener('resize', () => {
      const activeItem = document.querySelector('.faq-item.active');
      if (activeItem) {
        const activeAnswer = activeItem.querySelector('.faq-answer');
        activeAnswer.style.height = `${activeAnswer.scrollHeight}px`;
      }
    });
  }
});
