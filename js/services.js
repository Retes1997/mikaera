/* ==========================================================================
   LÓGICA DE SERVICIOS (SERVICES CATALOG PAGE)
   Componentes: Catálogo, base de datos local de paquetes y Ventana Modal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. BASE DE DATOS LOCAL Y MODAL DE SERVICIOS INTERACTIVO ---
  const serviceDetails = {
    'pareja': {
      num: '01',
      title: 'Sesión Pareja',
      text: 'Retratos de pareja íntimos y artísticos con iluminación de estudio controlada y dirección visual.',
      duration: '2 Horas',
      price: 'S/ 450',
      image: 'assets/images/services/servicio-1.webp',
      features: [
        '25 fotografías en alta resolución editadas digitalmente.',
        'Galería en línea privada para selección y descarga de fotos.',
        'Hasta 2 cambios de vestuario durante la sesión.',
        'Dirección visual, de poses y asesoría de styling previa.',
        'Sesión realizada en nuestro estudio climatizado.'
      ]
    },
    'estudio': {
      num: '02',
      title: 'Estudio',
      text: 'Sesión en fondo infinito y esquemas de luces avanzados para retratos profesionales y de marca personal.',
      duration: '1.5 Horas',
      price: 'S/ 350',
      image: 'assets/images/services/servicio-2.webp',
      features: [
        '15 fotografías en alta resolución editadas digitalmente.',
        'Esquema de luces personalizado según tu perfil o marca.',
        'Entrega de fotos en formato digital optimizadas para LinkedIn/Redes.',
        'Fondo infinito (blanco, negro, gris o beige).',
        'Asesoría de expresión corporal durante la sesión.'
      ]
    },
    'cumpleanos': {
      num: '03',
      title: 'Studio cumpleaños',
      text: 'Celebra tu día especial con una sesión divertida, globos, confeti y la mejor energía en nuestro estudio.',
      duration: '1 Hora',
      price: 'S/ 300',
      image: 'assets/images/services/servicio-3.webp',
      features: [
        '20 fotografías en alta resolución editadas digitalmente.',
        'Set decorado con globos y confeti ecológico.',
        'Música a elección del cumpleañero para crear el mejor ambiente.',
        'Fotografías individuales y con hasta 2 acompañantes.',
        'Entrega rápida en un plazo máximo de 5 días hábiles.'
      ]
    },
    'quince-anos': {
      num: '04',
      title: '15 años',
      text: 'Fotografía artística y de moda para quinceañeras, creando recuerdos mágicos de esta bella transición.',
      duration: '3 Horas',
      price: 'S/ 800',
      image: 'assets/images/services/servicio-4.webp',
      features: [
        '40 fotografías en alta resolución editadas digitalmente.',
        'Dirección visual con estilo editorial / de moda.',
        'Hasta 3 cambios de vestuario (incluye vestidos de gala).',
        'Asesoramiento en maquillaje y peinado (colaboradores opcionales).',
        'Foto libro impreso premium (20x20cm) de recuerdo.'
      ]
    },
    'familiar-studio': {
      num: '05',
      title: 'Familiar Studio',
      text: 'Retratos familiares atemporales y elegantes en estudio, inmortalizando el lazo familiar más fuerte.',
      duration: '2 Horas',
      price: 'S/ 500',
      image: 'assets/images/services/servicio-5.webp',
      features: [
        '30 fotografías en alta resolución editadas digitalmente.',
        'Apto para un máximo de 5 integrantes (mascotas bienvenidas).',
        'Fotos grupales e individuales de cada miembro de la familia.',
        'Guía de armonización de vestuario (colores y texturas).',
        'Entrega en galería digital protegida con contraseña.'
      ]
    },
    'parque-olivar': {
      num: '06',
      title: 'Sesión parque Olivar',
      text: 'Sesiones fotográficas rodeadas de los olivos históricos y la luz suave del Parque El Olivar de San Isidro.',
      duration: '2 Horas',
      price: 'S/ 400',
      image: 'assets/images/services/servicio-6.webp',
      features: [
        '35 fotografías en alta resolución editadas digitalmente.',
        'Sesión en exteriores con luz natural mágica (hora dorada sugerida).',
        'Locación icónica: Parque El Olivar de San Isidro.',
        'Ideal para retratos personales, de pareja o familiares pequeños.',
        'Asesoría para elegir los puntos más fotogénicos del parque.'
      ]
    },
    'embarazo': {
      num: '07',
      title: 'Sesión Embarazo',
      text: 'Fotografía de maternidad artística e íntima que celebra la belleza y la emoción del inicio de una nueva vida.',
      duration: '2 Horas',
      price: 'S/ 450',
      image: 'assets/images/services/servicio-7.webp',
      features: [
        '25 fotografías en alta resolución editadas digitalmente.',
        'Uso de telas, túnicas y accesorios artísticos del estudio.',
        'Participación de la pareja y/o hermanos mayores sin costo extra.',
        'Iluminación suave que resalta la silueta maternal de forma elegante.',
        'Asesoría sobre el mejor momento gestacional para la sesión (semana 28-32).'
      ]
    },
    'familiar-exterior': {
      num: '08',
      title: 'Sesión Familiar',
      text: 'Sesión dinámica e interactiva en exteriores donde capturamos risas y momentos inolvidables en familia.',
      duration: '2 Horas',
      price: 'S/ 450',
      image: 'assets/images/services/servicio-8.webp',
      features: [
        '40 fotografías en alta resolución editadas digitalmente.',
        'Sesión interactiva y dinámica (nada de poses forzadas).',
        'Locación a elegir en exteriores (parques, playa, etc.).',
        'Hasta 6 integrantes de la familia.',
        'Entrega en galería digital con descarga ilimitada de alta calidad.'
      ]
    },
    'sesion-studio': {
      num: '09',
      title: 'Sesión en STUDIO',
      text: 'Dirección visual y producción fotográfica de alto nivel para editoriales, catálogos y marcas en estudio.',
      duration: '4 Horas',
      price: 'S/ 1200',
      image: 'assets/images/services/servicio-9.webp',
      features: [
        '50 fotografías en alta resolución editadas profesionalmente.',
        'Desarrollo de concepto visual previo mediante Moodboard y reunión de diseño.',
        'Derechos de uso comercial completos para web, redes y catálogo.',
        'Uso de equipamiento de iluminación y modificadores de nivel profesional.',
        'Edición detallada de pieles y texturas (Retoque de nivel comercial).'
      ]
    },
    'sesion-destello': {
      num: '10',
      title: 'Sesión ✨',
      text: 'Una experiencia visual mágica y creativa con luces, efectos de brillo y dirección conceptual.',
      duration: '2 Horas',
      price: 'S/ 500',
      image: 'assets/images/services/servicio-10.webp',
      features: [
        '20 fotografías en alta resolución con retoque artístico y de fantasía.',
        'Efectos creativos: prismas, filtros de destello, iluminación neon o cálida extrema.',
        'Dirección conceptual para retratar un look soñador u onírico.',
        'Asesoría de maquillaje artístico para complementar los destellos.',
        'Una sesión diseñada para perfiles artísticos o creativos independientes.'
      ]
    },
    'pareja-lifestyle': {
      num: '11',
      title: 'Pareja',
      text: 'Reportajes fotográficos naturales para documentar aniversarios, citas o simplemente el amor diario.',
      duration: '1.5 Horas',
      price: 'S/ 380',
      image: 'assets/images/services/servicio-11.webp',
      features: [
        '30 fotografías en alta resolución con estilo espontáneo / documental.',
        'Ubicación a elección: cafetería favorita, calles del centro, parque o en casa.',
        'Dirección basada en juegos y dinámicas de interacción real.',
        'Retratos casuales, íntimos y llenos de honestidad.',
        'Galería digital disponible por 3 meses.'
      ]
    },
    'infantil': {
      num: '12',
      title: 'Infantil',
      text: 'Fotografía infantil paciente y divertida que captura la espontaneidad, gestos y fantasía de los niños.',
      duration: '1.5 Horas',
      price: 'S/ 350',
      image: 'assets/images/services/servicio-12.webp',
      features: [
        '20 fotografías en alta resolución editadas digitalmente.',
        'Dirección paciente, divertida y adaptada al ritmo de tu niño/a.',
        'Uso de juguetes y dinámicas de juego para capturar risas reales.',
        'Fotos del niño individual e integrando a los padres de familia.',
        'Entrega en formato digital de alta resolución.'
      ]
    }
  };


  const serviceModal = document.getElementById('service-modal');
  const modalServiceImg = document.getElementById('modal-service-img');
  const modalServiceNum = document.getElementById('modal-service-num');
  const modalServiceTitle = document.getElementById('modal-service-title');
  const modalServiceText = document.getElementById('modal-service-text');
  const modalServiceFeaturesList = document.getElementById('modal-service-features-list');
  const modalServiceDuration = document.getElementById('modal-service-duration');
  const modalServicePrice = document.getElementById('modal-service-price');
  const modalCloseBtn = serviceModal ? serviceModal.querySelector('.modal-close') : null;

  if (serviceModal && modalServiceTitle) {
    const detailButtons = document.querySelectorAll('.service-detail-btn');
    
    detailButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.service-card');
        if (!card) return;
        const serviceKey = card.getAttribute('data-service');
        const data = serviceDetails[serviceKey];
        if (!data) return;

        // Cargar datos en el modal
        modalServiceImg.src = data.image;
        modalServiceImg.alt = data.title;
        modalServiceNum.textContent = data.num;
        modalServiceTitle.textContent = data.title;
        modalServiceText.textContent = data.text;
        modalServiceDuration.textContent = data.duration;
        modalServicePrice.textContent = data.price;

        // Cargar lista de features
        modalServiceFeaturesList.innerHTML = '';
        data.features.forEach(feat => {
          const li = document.createElement('li');
          li.textContent = feat;
          modalServiceFeaturesList.appendChild(li);
        });

        // Mostrar el modal
        serviceModal.classList.add('active');
        serviceModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
      });
    });

    const closeServiceModal = () => {
      serviceModal.classList.remove('active');
      serviceModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeServiceModal);
    
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) {
        closeServiceModal();
      }
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (serviceModal.classList.contains('active') && e.key === 'Escape') {
        closeServiceModal();
      }
    });
  }

  // --- 2. ACORDEÓN INTERACTIVO DE PREGUNTAS FRECUENTES (FAQ) ---
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const item = question.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const isActive = item.classList.contains('active');

        // Cerrar todos los demás items (Acordeón exclusivo)
        const allItems = document.querySelectorAll('.faq-item');
        allItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').style.height = '0px';
            otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          }
        });

        // Alternar el item actual
        if (!isActive) {
          item.classList.add('active');
          // Asignar la altura real de scroll (scrollHeight) para que transicione suavemente en CSS
          answer.style.height = `${answer.scrollHeight}px`;
          question.setAttribute('aria-expanded', 'true');
        } else {
          item.classList.remove('active');
          answer.style.height = '0px';
          question.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Ajustar dinámicamente la altura en caso de redimensionamiento de pantalla
    window.addEventListener('resize', () => {
      const activeItem = document.querySelector('.faq-item.active');
      if (activeItem) {
        const activeAnswer = activeItem.querySelector('.faq-answer');
        activeAnswer.style.height = `${activeAnswer.scrollHeight}px`;
      }
    });
  }

  // --- 3. ALINEACIÓN AUTOMÁTICA DEL DISEÑO DE TARJETAS DE SERVICIOS (ESTÉTICA PREMIUM) ---
  const alignServiceCardsLayout = () => {
    const cards = document.querySelectorAll('.services-page .service-card');
    if (cards.length === 0) return;

    // Asignar el atributo 'title' nativo a los títulos para que muestren su texto completo al pasar el cursor (hover)
    cards.forEach(card => {
      const title = card.querySelector('.service-title');
      if (title && !title.getAttribute('title')) {
        title.setAttribute('title', title.textContent.trim());
      }
    });

    const texts = [];

    // 1. Resetear estilos previos en descripciones para poder medir las dimensiones naturales
    cards.forEach(card => {
      const text = card.querySelector('.service-text');
      if (text) {
        text.style.display = 'block';
        text.style.webkitLineClamp = 'none';
        text.style.webkitBoxOrient = 'horizontal';
        text.style.overflow = 'visible';
        text.style.height = 'auto';
        texts.push(text);
      }
    });

    // 2. Agrupar las tarjetas por fila basándonos en su posición vertical absoluta en el documento
    const rowsMap = new Map();
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const absoluteTop = rect.top + (window.scrollY || window.pageYOffset || 0);
      // Agrupamos con un umbral de 20px por variaciones de redondeo y bordes
      const topPos = Math.round(absoluteTop / 20) * 20;
      if (!rowsMap.has(topPos)) {
        rowsMap.set(topPos, []);
      }
      rowsMap.get(topPos).push(card);
    });

    // 3. Procesar cada fila para alinear descripciones (al menor número de líneas)
    rowsMap.forEach((rowCards) => {
      // Si solo hay un elemento en la fila (ej: en móvil o tarjeta huérfana al final), lo dejamos fluir natural
      if (rowCards.length <= 1) return;

      const rowTexts = [];
      rowCards.forEach(card => {
        const text = card.querySelector('.service-text');
        if (text) rowTexts.push(text);
      });

      // B. Alinear Descripciones: Encontrar la cantidad de líneas mínima y truncar el excedente
      let minLines = Infinity;
      const textsWithLines = [];

      rowTexts.forEach(text => {
        const style = window.getComputedStyle(text);
        let lineHeight = parseFloat(style.lineHeight);

        // Si line-height no está especificado en px (ej: "normal"), estimar con fontSize
        if (isNaN(lineHeight)) {
          const fontSize = parseFloat(style.fontSize) || 14;
          lineHeight = fontSize * 1.7; // Factor de interlineado (1.7)
        }

        const lines = Math.round(text.offsetHeight / lineHeight) || 1;
        textsWithLines.push({ text, lines });

        if (lines < minLines) {
          minLines = lines;
        }
      });

      // Aplicar el line-clamp del menor número de líneas de forma uniforme
      if (minLines > 0 && minLines !== Infinity) {
        textsWithLines.forEach(item => {
          item.text.style.display = '-webkit-box';
          item.text.style.webkitLineClamp = minLines.toString();
          item.text.style.webkitBoxOrient = 'vertical';
          item.text.style.overflow = 'hidden';
        });
      }
    });
  };

  // Ejecutar la alineación inicial
  alignServiceCardsLayout();

  // Ejecutar en redimensionamientos de forma optimizada (60fps)
  let resizeTimeout;
  window.addEventListener('resize', () => {
    if (resizeTimeout) cancelAnimationFrame(resizeTimeout);
    resizeTimeout = requestAnimationFrame(alignServiceCardsLayout);
  });
});

