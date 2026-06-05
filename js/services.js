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
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200',
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
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200',
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
      image: 'https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?q=80&w=1200',
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
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200',
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
      image: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?q=80&w=1200',
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
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200',
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
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200',
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
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200',
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
      image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200',
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
      image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1200',
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
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200',
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
      image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1200',
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
});
