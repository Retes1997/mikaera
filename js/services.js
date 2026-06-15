/* ==========================================================================
   LÓGICA DE SERVICIOS (SERVICES CATALOG PAGE)
   Proyecto: Mikáera Studio - Portafolio de Fotografía Profesional
   Desarrollador: Antigravity AI
   Descripción: Este script maneja la interactividad del catálogo de servicios,
                la inyección dinámica de datos en el modal detallado de paquetes,
                el selector de 3 paquetes por servicio y el acordeón FAQ.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // --- 1. BASE DE DATOS LOCAL Y DETALLES DE PAQUETES ---
  const serviceDetails = {
    'bodas-parejas': {
      num: '01',
      title: 'Sesión Bodas & Parejas',
      text: 'Fotografía documental y artística que inmortaliza el amor, complicidad y conexión de la pareja.',
      image: 'assets/images/services/servicio-11.webp',
      packages: {
        basic: {
          name: 'Esencial',
          price: 'S/ 700',
          duration: '1.5 Horas',
          features: [
            '25 fotografías en alta resolución editadas profesionalmente.',
            'Ideal para bodas civiles íntimas o pre-boda en exteriores.',
            'Dirección de poses natural y espontánea.',
            'Galería en línea privada por 1 mes para descarga.'
          ]
        },
        standard: {
          name: 'Premium',
          price: 'S/ 1,300',
          duration: '3 Horas',
          features: [
            '60 fotografías en alta resolución editadas profesionalmente.',
            'Ideal para bodas completas, pre-boda o aniversarios.',
            'Dirección visual completa y estilo documental.',
            'Galería en línea privada por 3 meses para descarga.',
            'Reunión de diseño previa para planificar la locación.'
          ]
        },
        premium: {
          name: 'Deluxe',
          price: 'S/ 2,400',
          duration: '6 Horas',
          features: [
            '120 fotografías en alta resolución editadas profesionalmente.',
            'Cobertura extendida del evento o múltiples locaciones.',
            'Un foto libro impreso de recuerdo premium (20x20cm).',
            'Galería en línea privada permanente.',
            'Asesoramiento completo de vestuario y locaciones.'
          ]
        }
      }
    },
    'maternidad-familia': {
      num: '02',
      title: 'Maternidad & Familias',
      text: 'Retratos familiares cálidos y atemporales que celebran la dulce espera y los lazos familiares más fuertes.',
      image: 'assets/images/services/servicio-7.webp',
      packages: {
        basic: {
          name: 'Esencial',
          price: 'S/ 350',
          duration: '1 Hora',
          features: [
            '15 fotografías en alta resolución editadas digitalmente.',
            'Apto para un máximo de 3 integrantes.',
            'Sesión en locación única (estudio o parque seleccionado).',
            'Galería digital privada para descarga.'
          ]
        },
        standard: {
          name: 'Premium',
          price: 'S/ 600',
          duration: '2 Horas',
          features: [
            '30 fotografías en alta resolución editadas digitalmente.',
            'Apto para un máximo de 5 integrantes (mascotas bienvenidas).',
            'Fotos grupales e individuales de cada miembro de la familia.',
            'Uso de telas y túnicas artísticas del estudio para maternidad.',
            'Guía de armonización de vestuario (colores y texturas).'
          ]
        },
        premium: {
          name: 'Deluxe',
          price: 'S/ 1,000',
          duration: '3 Horas',
          features: [
            '60 fotografías en alta resolución editadas digitalmente.',
            'Apto para familiares extendidos (hasta 8 integrantes).',
            'Incluye un maquillaje básico para la futura madre.',
            'Uso de múltiples fondos y vestuario ilimitado.',
            'Un foto libro impreso de recuerdo premium (20x20cm).'
          ]
        }
      }
    },
    'quinceanos-editorial': {
      num: '03',
      title: 'Quinceañeras & Editorial',
      text: 'Fotografía de moda y retrato creativo con dirección conceptual para documentar esta etapa de forma única.',
      image: 'assets/images/services/servicio-4.webp',
      packages: {
        basic: {
          name: 'Esencial',
          price: 'S/ 500',
          duration: '1.5 Horas',
          features: [
            '20 fotografías en alta resolución editadas digitalmente.',
            'Estudio o una locación en exteriores.',
            'Hasta 2 cambios de vestuario.',
            'Galería en línea para descarga.'
          ]
        },
        standard: {
          name: 'Premium',
          price: 'S/ 900',
          duration: '3 Horas',
          features: [
            '40 fotografías en alta resolución editadas digitalmente.',
            'Dirección visual con estilo editorial / de moda.',
            'Hasta 3 cambios de vestuario durante la sesión.',
            'Asesoramiento de styling y lookboard conceptual previo.',
            'Un foto libro impreso de recuerdo premium (20x20cm).'
          ]
        },
        premium: {
          name: 'Deluxe',
          price: 'S/ 1,600',
          duration: '5 Horas',
          features: [
            '80 fotografías en alta resolución editadas profesionalmente.',
            'Locación libre y cambios de vestuario ilimitados.',
            'Incluye servicio de maquillaje y peinado profesional.',
            'Un foto libro de lujo impreso + 1 foto enmarcada de regalo.',
            'Galería digital privada con descarga permanente.'
          ]
        }
      }
    },
    'branding-identidad': {
      num: '04',
      title: 'Corporativo & Branding',
      text: 'Sesiones de retrato corporativo, marca personal y estilo de vida ejecutivo para profesionales e independientes.',
      image: 'assets/images/portfolio/proyecto-17/toma-1.webp',
      packages: {
        basic: {
          name: 'Esencial',
          price: 'S/ 380',
          duration: '1 Hora',
          features: [
            '8 fotografías editadas profesionalmente en alta resolución.',
            'Retrato clásico con fondo neutro en estudio.',
            'Ideal para perfiles profesionales y LinkedIn.',
            'Entrega en formato digital optimizado.'
          ]
        },
        standard: {
          name: 'Premium',
          price: 'S/ 700',
          duration: '2 Horas',
          features: [
            '20 fotografías en alta resolución editadas profesionalmente.',
            'Esquemas de iluminación y fondos adaptados a la identidad de tu marca.',
            'Uso de equipamiento de iluminación profesional y dirección de expresión.',
            'Entrega de fotos en formato optimizado para LinkedIn, web and prensa.',
            'Derechos de uso comercial completos incluidos.'
          ]
        },
        premium: {
          name: 'Deluxe',
          price: 'S/ 1,300',
          duration: '4 Horas',
          features: [
            '50 fotografías en alta resolución editadas profesionalmente.',
            'Cobertura del equipo de trabajo y espacios de oficina.',
            'Retratos directivos individuales y fotos de ambiente/reuniones.',
            'Maquillaje básico para corregir brillos e imperfecciones en luces.',
            'Asesoramiento en la narrativa visual e identidad corporativa.'
          ]
        }
      }
    },
    'graduacion': {
      num: '05',
      title: 'Sesión Graduaciones',
      text: 'Retratos individuales y con la familia para celebrar y perennizar tu éxito académico y profesional.',
      image: 'assets/images/portfolio/proyecto-14/toma-1.webp',
      packages: {
        basic: {
          name: 'Esencial',
          price: 'S/ 250',
          duration: '45 Minutos',
          features: [
            '8 fotografías en alta resolución editadas digitalmente.',
            'Sesión individual en estudio con toga, birrete y diploma.',
            'Entrega en galería digital para descarga rápida.'
          ]
        },
        standard: {
          name: 'Premium',
          price: 'S/ 450',
          duration: '1.5 Horas',
          features: [
            '20 fotografías en alta resolución editadas digitalmente.',
            'Sesión de retratos con toga, birrete y diploma en estudio o exteriores.',
            'Participación de padres y familiares cercanos en la sesión.',
            'Asesoría de dirección y posturas solemnes.',
            'Entrega en galería digital en un plazo de 7 días hábiles.'
          ]
        },
        premium: {
          name: 'Deluxe',
          price: 'S/ 800',
          duration: '3 Horas',
          features: [
            '50 fotografías en alta resolución editadas digitalmente.',
            'Cobertura familiar extendida en locación exterior o estudio.',
            'Retratos individuales, familiares y grupales.',
            'Incluye una foto impresa ampliada y enmarcada de regalo.',
            'Entrega prioritaria en 4 días hábiles.'
          ]
        }
      }
    },
    'promocion': {
      num: '06',
      title: 'Sesión Promociones',
      text: 'Sesiones grupales creativas en exteriores o estudio para capturar la energía y compañerismo de la promoción.',
      image: 'assets/images/portfolio/proyecto-11/toma-1.webp',
      packages: {
        basic: {
          name: 'Esencial',
          price: 'S/ 500',
          duration: '1.5 Horas',
          features: [
            '20 fotografías editadas del grupo principal.',
            'Locación seleccionada en exteriores.',
            'Descarga digital de todas las tomas de grupo seleccionadas.'
          ]
        },
        standard: {
          name: 'Premium',
          price: 'S/ 900',
          duration: '3 Horas',
          features: [
            '40 fotografías editadas del grupo y retratos individuales de cada alumno.',
            'Locación a elección en exteriores o set especial en nuestro estudio.',
            'Fotos grupales de compañerismo, dinámicas y divertidas.',
            'Asesoría en combinación de prendas y accesorios.',
            'Galería en línea privada para descarga ilimitada.'
          ]
        },
        premium: {
          name: 'Deluxe',
          price: 'S/ 1,600',
          duration: '5 Horas',
          features: [
            '90 fotografías en alta resolución editadas del grupo e individuales.',
            'Set temático decorado y personalizado.',
            'Incluye un Reel/TikTok de resumen de la sesión.',
            'Foto impresa de grupo de regalo para cada alumno participante.',
            'Acceso ilimitado permanente a la galería privada.'
          ]
        }
      }
    },
    'parque': {
      num: '07',
      title: 'Sesión Exteriores',
      text: 'Sesiones fotográficas en exteriores con luz natural suave, rodeados de naturaleza o entornos urbanos estéticos.',
      image: 'assets/images/services/servicio-6.webp',
      packages: {
        basic: {
          name: 'Esencial',
          price: 'S/ 250',
          duration: '1 Hora',
          features: [
            '15 fotografías en alta resolución editadas digitalmente.',
            'Sesión en el Parque El Olivar de San Isidro.',
            'Ideal para retratos individuales rápidos en exteriores.',
            'Entrega digital para descarga.'
          ]
        },
        standard: {
          name: 'Premium',
          price: 'S/ 450',
          duration: '2 Horas',
          features: [
            '35 fotografías en alta resolución editadas digitalmente.',
            'Sesión en exteriores con luz natural (hora dorada sugerida).',
            'Locación a tu elección en la ciudad (parques, calles, playas).',
            'Ideal para retratos individuales, de pareja o familias pequeñas.',
            'Asesoría para elegir los puntos más fotogénicos de la locación.'
          ]
        },
        premium: {
          name: 'Deluxe',
          price: 'S/ 800',
          duration: '3.5 Horas',
          features: [
            '70 fotografías en alta resolución editadas digitalmente.',
            'Múltiples locaciones y cambios de vestuario ilimitados.',
            'Ideal para portafolios de modelaje o sesiones artísticas complejas.',
            'Entrega prioritaria rápida en 3 días hábiles.'
          ]
        }
      }
    },
    'studio': {
      num: '08',
      title: 'Sesión Studio',
      text: 'Sesión de retrato profesional en estudio climatizado, utilizando fondos sin fin y esquemas de luces avanzados.',
      image: 'assets/images/services/servicio-9.webp',
      packages: {
        basic: {
          name: 'Esencial',
          price: 'S/ 300',
          duration: '45 Minutos',
          features: [
            '8 fotografías en alta resolución editadas digitalmente.',
            'Retrato artístico con fondo neutro de un solo color.',
            'Ideal para renovar fotos personales o artísticas sencillas.'
          ]
        },
        standard: {
          name: 'Premium',
          price: 'S/ 500',
          duration: '1.5 Horas',
          features: [
            '20 fotografías en alta resolución editadas digitalmente.',
            'Esquema de luces personalizado según tu estilo o concepto.',
            'Hasta 2 cambios de vestuario durante la sesión.',
            'Fondo infinito (blanco, negro, gris o beige).',
            'Asesoría y dirección de expresión corporal.'
          ]
        },
        premium: {
          name: 'Deluxe',
          price: 'S/ 950',
          duration: '3 Horas',
          features: [
            '50 fotografías en alta resolución editadas digitalmente.',
            'Cambios ilimitados de fondos y vestuario.',
            'Incluye servicio de maquillaje básico corrector en set.',
            'Ideal para portafolios creativos avanzados.',
            'Entrega prioritaria en 4 días hábiles.'
          ]
        }
      }
    },
    'cumpleanos': {
      num: '09',
      title: 'Studio Cumpleaños',
      text: 'Celebra tu día especial con una sesión de retratos divertida, confeti ecológico y la mejor energía.',
      image: 'assets/images/services/servicio-3.webp',
      packages: {
        basic: {
          name: 'Esencial',
          price: 'S/ 220',
          duration: '45 Minutos',
          features: [
            '10 fotografías en alta resolución editadas digitalmente.',
            'Set básico decorado con globos.',
            'Sesión individual rápida para festejar tu cumpleaños.'
          ]
        },
        standard: {
          name: 'Premium',
          price: 'S/ 380',
          duration: '1.5 Horas',
          features: [
            '20 fotografías en alta resolución editadas digitalmente.',
            'Set decorado con globos y confeti ecológico.',
            'Música a elección del cumpleañero para crear el mejor ambiente.',
            'Fotografías individuales y con hasta 2 acompañantes.',
            'Entrega rápida en un plazo máximo de 5 días hábiles.'
          ]
        },
        premium: {
          name: 'Deluxe',
          price: 'S/ 650',
          duration: '2.5 Horas',
          features: [
            '45 fotografías en alta resolución editadas digitalmente.',
            'Decoración temática personalizada avanzada (Smash Cake opcional).',
            'Fotografías con hasta 4 acompañantes o familiares.',
            'Entrega prioritaria rápida en 3 días hábiles.'
          ]
        }
      }
    }
  };

  // --- VARIABLES DE ESTADO LOCAL ---
  let currentServiceKey = null;
  let currentPackageKey = 'standard'; // 'basic', 'standard', 'premium'

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

  // --- FUNCIÓN PARA REDIBUJAR LOS DATOS DEL PAQUETE ACTIVO ---
  const renderActivePackage = () => {
    if (!currentServiceKey) return;
    const service = serviceDetails[currentServiceKey];
    if (!service) return;
    const pkg = service.packages[currentPackageKey];
    if (!pkg) return;

    // Poblar textos
    if (modalServiceImg) {
      modalServiceImg.src = service.image;
      modalServiceImg.alt = service.title;
    }
    if (modalServiceNum) modalServiceNum.textContent = service.num;
    if (modalServiceTitle) modalServiceTitle.textContent = service.title;
    if (modalServiceText) modalServiceText.textContent = service.text;
    if (modalServiceDuration) modalServiceDuration.textContent = pkg.duration;
    if (modalServicePrice) modalServicePrice.textContent = pkg.price;

    // Construir lista de características
    if (modalServiceFeaturesList) {
      modalServiceFeaturesList.innerHTML = '';
      pkg.features.forEach(feat => {
        const li = document.createElement('li');
        li.textContent = feat;
        modalServiceFeaturesList.appendChild(li);
      });
    }

    // Actualizar botones del selector de paquetes
    const tabs = document.querySelectorAll('.package-tab');
    tabs.forEach(tab => {
      if (tab.getAttribute('data-package') === currentPackageKey) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Configurar enlace del botón de contratación con parámetros dinámicos
    const ctaBtn = serviceModal ? serviceModal.querySelector('.modal-cta-btn') : null;
    if (ctaBtn) {
      ctaBtn.href = `contacto.html?service=${currentServiceKey}&package=${currentPackageKey}`;
    }
  };

  // --- FUNCIÓN PARA MOSTRAR DETALLE DE UN SERVICIO POR SU CLAVE ---
  const showServiceDetail = (serviceKey) => {
    currentServiceKey = serviceKey;
    currentPackageKey = 'standard'; // Restablece por defecto al paquete recomendado/estándar
    renderActivePackage();

    // Mostrar modal y bloquear scroll
    if (serviceModal) {
      serviceModal.classList.add('active');
      serviceModal.setAttribute('aria-hidden', 'false');
    }
    document.body.classList.add('no-scroll');
  };

  // Inicializar listeners del modal solo si existen en la página
  if (serviceModal && modalServiceTitle) {
    const detailButtons = document.querySelectorAll('.service-detail-btn');
    
    // Listeners para abrir modal desde las tarjetas
    detailButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = e.target.closest('.service-card');
        if (!card) return;
        const serviceKey = card.getAttribute('data-service');
        showServiceDetail(serviceKey);
      });
    });

    // Listeners para clics en las pestañas del selector de paquetes
    const packageTabs = document.querySelectorAll('.package-tab');
    packageTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        currentPackageKey = tab.getAttribute('data-package');
        renderActivePackage();
      });
    });

    // Función para cerrar modal
    const closeServiceModal = () => {
      serviceModal.classList.remove('active');
      serviceModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeServiceModal);
    
    // Cerrar al hacer clic fuera
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

    // Auto-abrir modal si hay parámetros en la URL (?service=...)
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    const packageParam = urlParams.get('package');
    if (serviceParam && serviceDetails[serviceParam]) {
      if (packageParam && ['basic', 'standard', 'premium'].includes(packageParam)) {
        currentPackageKey = packageParam;
      }
      setTimeout(() => {
        showServiceDetail(serviceParam);
        if (packageParam) {
          currentPackageKey = packageParam;
          renderActivePackage();
        }
      }, 200);
    }
  }

  // --- 2. ACORDEÓN INTERACTIVO DE PREGUNTAS FRECUENTES (FAQ) ---
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const item = question.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const isActive = item.classList.contains('active');

        // Colapsar adyacentes
        const allItems = document.querySelectorAll('.faq-item');
        allItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').style.height = '0px';
            otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          }
        });

        // Alternar actual
        if (!isActive) {
          item.classList.add('active');
          answer.style.height = `${answer.scrollHeight}px`;
          question.setAttribute('aria-expanded', 'true');
        } else {
          item.classList.remove('active');
          answer.style.height = '0px';
          question.setAttribute('aria-expanded', 'false');
        }
      });
    });

    window.addEventListener('resize', () => {
      const activeItem = document.querySelector('.faq-item.active');
      if (activeItem) {
        const activeAnswer = activeItem.querySelector('.faq-answer');
        activeAnswer.style.height = `${activeAnswer.scrollHeight}px`;
      }
    });
  }
});
