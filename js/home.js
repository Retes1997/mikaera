/* ==========================================================================
   LÓGICA DE PORTADA (HOME PAGE)
   Componentes: Filtros de Galería, Visor Lightbox y Modales de Proyecto
   ========================================================================== */

// --- DICCIONARIO DE DATOS DEMO PARA LOS 18 PROYECTOS ---
const PROJECTS_DATA = {
  "1": {
    categoryTag: "Studio",
    titleHtml: "Luz y Sombras <span>de Otoño</span>",
    client: "Revista Vogue Latam",
    year: "2025",
    service: "Dirección Creativa & Fotografía",
    heroImage: "assets/images/portfolio/proyecto-1/hero.webp",
    conceptHighlight: "Un estudio íntimo sobre el contraste estacional en interiores, capturando la interacción sutil entre la luz dorada y las sombras orgánicas de la tarde.",
    conceptParagraphs: [
      "Para esta editorial, buscamos romper con la rigidez tradicional del estudio fotográfico y trasladar la sesión a un espacio cálido con acabados de madera y ventanales amplios. La luz natural filtrada a través de las cortinas sirvió como difusor principal, revelando las texturas de las prendas y la vulnerabilidad en las miradas de los modelos de forma natural y poética.",
      "El color se mantuvo apagado, favoreciendo tonos tierra, dorados y grises oscuros, lo cual consolida una atmósfera atemporal y cinematográfica congruente con la visión de la marca."
    ],
    credits: {
      styling: "Sofía López",
      model: "Ana María Silva (Elite Model)",
      makeup: "Carlos Ruiz",
      camera: "Sony A7R V + FE 85mm f/1.4 GM"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-1/toma-1.webp", title: "Luz y Sombras de Otoño - Toma I", wide: true },
      { url: "assets/images/portfolio/proyecto-1/toma-2.webp", title: "Luz y Sombras de Otoño - Toma II", wide: false },
      { url: "assets/images/portfolio/proyecto-1/toma-3.webp", title: "Luz y Sombras de Otoño - Toma III", wide: false },
      { url: "assets/images/portfolio/proyecto-1/toma-4.webp", title: "Luz y Sombras de Otoño - Toma IV", wide: false },
      { url: "assets/images/portfolio/proyecto-1/toma-5.webp", title: "Luz y Sombras de Otoño - Toma V", wide: true }
    ]
  },
  "2": {
    categoryTag: "Studio",
    titleHtml: "Esencia <span>Íntima</span>",
    client: "Particular",
    year: "2025",
    service: "Retrato Artístico & Estilismo",
    heroImage: "assets/images/portfolio/proyecto-2/hero.webp",
    conceptHighlight: "La exploración del yo a través del retrato minimalista en blanco y negro, enfocándose en la expresión pura y el contraste directo del claroscuro.",
    conceptParagraphs: [
      "En 'Esencia Íntima', despojamos la escena de cualquier elemento distractor. Utilizando un único punto de luz y un fondo gris texturizado, nos centramos en capturar la microexpresión y la honestidad emocional del sujeto en un entorno controlado pero libre de pretensiones.",
      "El resultado es una serie de retratos potentes que dialogan directamente con el espectador, demostrando que la sencillez técnica puede evocar una enorme complejidad visual y psicológica."
    ],
    credits: {
      styling: "Propio",
      model: "Lucía Méndez",
      makeup: "Clara Medina",
      camera: "Canon R5 + RF 50mm f/1.2 L"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-2/toma-1.webp", title: "Esencia Íntima - Silueta", wide: true },
      { url: "assets/images/portfolio/proyecto-2/toma-2.webp", title: "Esencia Íntima - Mirada", wide: false },
      { url: "assets/images/portfolio/proyecto-2/toma-3.webp", title: "Esencia Íntima - Contraste", wide: false },
      { url: "assets/images/portfolio/proyecto-2/toma-4.webp", title: "Esencia Íntima - Perfil", wide: false },
      { url: "assets/images/portfolio/proyecto-2/toma-5.webp", title: "Esencia Íntima - Luz Suave", wide: true }
    ]
  },
  "3": {
    categoryTag: "Parque",
    titleHtml: "Amor en <span>el Olivar</span>",
    client: "Particular",
    year: "2025",
    service: "Pre-boda & Dirección Visual",
    heroImage: "assets/images/portfolio/proyecto-3/hero.webp",
    conceptHighlight: "Un reportaje pre-boda impregnado de romanticismo clásico, aprovechando la arquitectura natural y la serenidad del histórico bosque de olivos.",
    conceptParagraphs: [
      "Esta sesión captura la espontaneidad y la complicidad de la pareja bajo el follaje centenario del parque. El juego de luces que se filtra a través de las hojas crea un patrón texturizado que envuelve a los novios en un ambiente de ensueño.",
      "Priorizando los momentos espontáneos sobre las poses rígidas, la narrativa visual fluye con naturalidad, reflejando el afecto genuino y la ilusión del nuevo comienzo que están por emprender."
    ],
    credits: {
      styling: "Karen Ramos",
      model: "Valeria & Esteban",
      makeup: "Mariana Díaz",
      camera: "Fujifilm GFX 100S + GF 110mm f/2"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-3/toma-1.webp", title: "Amor en el Olivar - Unión", wide: true },
      { url: "assets/images/portfolio/proyecto-3/toma-2.webp", title: "Amor en el Olivar - Caminata", wide: false },
      { url: "assets/images/portfolio/proyecto-3/toma-3.webp", title: "Amor en el Olivar - Detalles", wide: false },
      { url: "assets/images/portfolio/proyecto-3/toma-4.webp", title: "Amor en el Olivar - Abrazo", wide: false },
      { url: "assets/images/portfolio/proyecto-3/toma-5.webp", title: "Amor en el Olivar - Atardecer", wide: true }
    ]
  },
  "4": {
    categoryTag: "15 Años",
    titleHtml: "Contraste <span>Urbano</span>",
    client: "Particular",
    year: "2026",
    service: "Sesión 15 Años Creativa",
    heroImage: "assets/images/portfolio/proyecto-4/hero.webp",
    conceptHighlight: "Una sesión de quince años con un enfoque moderno y vanguardista, utilizando la arquitectura brutalista y las luces de la ciudad como telón de fondo.",
    conceptParagraphs: [
      "Lejos de la tradicional sesión de quince años en jardines clásicos, esta propuesta explora el dinamismo de la urbe. Elegimos locaciones con líneas geométricas pronunciadas y texturas de concreto expuesto para contrastar con la delicadeza del vestuario.",
      "La interacción de la luz artificial de la ciudad al atardecer junto con flashes de estudio portátiles resalta la personalidad segura y enérgica de la quinceañera, marcando una nueva pauta en el retrato juvenil."
    ],
    credits: {
      styling: "Santiago Vera",
      model: "Camila Torres",
      makeup: "Melissa Wong",
      camera: "Sony A7 IV + FE 35mm f/1.4 GM"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-4/toma-1.webp", title: "Contraste Urbano - Pasos", wide: true },
      { url: "assets/images/portfolio/proyecto-4/toma-2.webp", title: "Contraste Urbano - Foco", wide: false },
      { url: "assets/images/portfolio/proyecto-4/toma-3.webp", title: "Contraste Urbano - Textura", wide: false },
      { url: "assets/images/portfolio/proyecto-4/toma-4.webp", title: "Contraste Urbano - Vuelo", wide: false },
      { url: "assets/images/portfolio/proyecto-4/toma-5.webp", title: "Contraste Urbano - Luces", wide: true }
    ]
  },
  "5": {
    categoryTag: "15 Años",
    titleHtml: "Mirada <span>Profunda</span>",
    client: "Particular",
    year: "2026",
    service: "15 Años Editorial & Moda",
    heroImage: "assets/images/portfolio/proyecto-5/hero.webp",
    conceptHighlight: "Un retrato editorial que fusiona la moda contemporánea con la delicadeza clásica de la adolescencia, enfocándose en la fuerza de la mirada.",
    conceptParagraphs: [
      "Esta sesión de quince años adopta un tono editorial de alta costura. Utilizando esquemas de iluminación suaves inspirados en la pintura renacentista, resaltamos los rasgos faciales y la sofisticación del estilismo seleccionado.",
      "La paleta cromática pastel y la dirección artística reposada crean una estética madura y poética que eleva el recuerdo de esta etapa de transición a una obra de arte visual."
    ],
    credits: {
      styling: "Sofía López",
      model: "Fernanda Rojas",
      makeup: "Carlos Ruiz",
      camera: "Sony A7R V + FE 85mm f/1.4 GM"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-5/toma-1.webp", title: "Mirada Profunda - Expresión", wide: true },
      { url: "assets/images/portfolio/proyecto-5/toma-2.webp", title: "Mirada Profunda - Ángulo", wide: false },
      { url: "assets/images/portfolio/proyecto-5/toma-3.webp", title: "Mirada Profunda - Contraluz", wide: false },
      { url: "assets/images/portfolio/proyecto-5/toma-4.webp", title: "Mirada Profunda - Retrato", wide: false },
      { url: "assets/images/portfolio/proyecto-5/toma-5.webp", title: "Mirada Profunda - Brillo", wide: true }
    ]
  },
  "6": {
    categoryTag: "Parque",
    titleHtml: "Silencio <span>Natural</span>",
    client: "Particular",
    year: "2026",
    service: "Editorial de Moda en la Naturaleza",
    heroImage: "assets/images/portfolio/proyecto-6/hero.webp",
    conceptHighlight: "La serenidad del campo y la luz dorada del atardecer enmarcan una sesión editorial al aire libre que respira libertad y conexión orgánica.",
    conceptParagraphs: [
      "Buscamos un escape hacia la naturaleza para retratar la sutileza de las texturas y los tejidos en un entorno campestre y libre. Los pastizales dorados y el viento suave se convirtieron en elementos activos de la composición.",
      "El estilismo boho-chic y la iluminación a contraluz aportaron un aura mágica y nostálgica, capturando retratos artísticos de una manera sumamente orgánica y espontánea."
    ],
    credits: {
      styling: "Boho-Chic Style",
      model: "Jimena Castro",
      makeup: "Mariana Díaz",
      camera: "Canon R6 II + RF 85mm f/2 Macro"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-6/toma-1.webp", title: "Silencio Natural - Bosque", wide: true },
      { url: "assets/images/portfolio/proyecto-6/toma-2.webp", title: "Silencio Natural - Camino", wide: false },
      { url: "assets/images/portfolio/proyecto-6/toma-3.webp", title: "Silencio Natural - Rayos de Sol", wide: false },
      { url: "assets/images/portfolio/proyecto-6/toma-4.webp", title: "Silencio Natural - Follaje", wide: false },
      { url: "assets/images/portfolio/proyecto-6/toma-5.webp", title: "Silencio Natural - Pradera", wide: true }
    ]
  },
  "7": {
    categoryTag: "Familia",
    titleHtml: "Risas de <span>la Tarde</span>",
    client: "Familia Ramos",
    year: "2025",
    service: "Fotografía Familiar en Exteriores",
    heroImage: "assets/images/portfolio/proyecto-7/hero.webp",
    conceptHighlight: "Una tarde de diversión familiar en exteriores, capturando la espontaneidad y el juego bajo la luz dorada en un entorno natural único.",
    conceptParagraphs: [
      "Esta sesión se centró en la interacción lúdica de la familia en el parque. Dejando de lado las poses estructuradas, alentamos el juego, las risas espontáneas y los abrazos cotidianos, logrando retratos llenos de vida y calidez.",
      "La luz cálida de la tarde y la frescura del entorno aportaron un marco idílico que resalta la conexión emocional y la felicidad compartida entre padres e hijos."
    ],
    credits: {
      styling: "Propio",
      model: "Familia Ramos",
      makeup: "Clara Medina",
      camera: "Sony A7 IV + FE 50mm f/1.2 GM"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-7/toma-1.webp", title: "Risas de la Tarde - Diversión", wide: true },
      { url: "assets/images/portfolio/proyecto-7/toma-2.webp", title: "Risas de la Tarde - Retrato", wide: false },
      { url: "assets/images/portfolio/proyecto-7/toma-3.webp", title: "Risas de la Tarde - Detalle", wide: false },
      { url: "assets/images/portfolio/proyecto-7/toma-4.webp", title: "Risas de la Tarde - Picnic", wide: false },
      { url: "assets/images/portfolio/proyecto-7/toma-5.webp", title: "Risas de la Tarde - Atardecer", wide: true }
    ]
  },
  "8": {
    categoryTag: "Familia",
    titleHtml: "Dulce <span>Espera</span>",
    client: "Particular",
    year: "2025",
    service: "Maternidad Exterior El Olivar",
    heroImage: "assets/images/portfolio/proyecto-8/hero.webp",
    conceptHighlight: "La dulce espera documentada en un ambiente íntimo y natural, donde la maternidad se fusiona con la poesía visual del bosque de olivos.",
    conceptParagraphs: [
      "Retratar la maternidad en el parque El Olivar nos permitió crear una atmósfera pacífica y sagrada. Enfocados en la conexión maternal, utilizamos vestidos fluidos que interactúan con el viento y la luz suave filtrada por los olivos centenarios.",
      "El resultado es una colección de imágenes que irradian serenidad, capturando la belleza y el asombro de la vida que crece en un entorno de paz absoluta."
    ],
    credits: {
      styling: "Karen Ramos",
      model: "Diana & Roberto",
      makeup: "Melissa Wong",
      camera: "Canon R5 + RF 85mm f/1.2 L"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-8/toma-1.webp", title: "Dulce Espera - Perfil", wide: true },
      { url: "assets/images/portfolio/proyecto-8/toma-2.webp", title: "Dulce Espera - Conexión", wide: false },
      { url: "assets/images/portfolio/proyecto-8/toma-3.webp", title: "Dulce Espera - Manos", wide: false },
      { url: "assets/images/portfolio/proyecto-8/toma-4.webp", title: "Dulce Espera - Mirada", wide: false },
      { url: "assets/images/portfolio/proyecto-8/toma-5.webp", title: "Dulce Espera - Luz del Bosque", wide: true }
    ]
  },
  "9": {
    categoryTag: "Parque",
    titleHtml: "Destello <span>Mágico</span>",
    client: "Particular",
    year: "2025",
    service: "Retrato Creativo al Aire Libre",
    heroImage: "assets/images/portfolio/proyecto-9/hero.webp",
    conceptHighlight: "Un retrato artístico individual en exteriores que utiliza destellos de luz natural para crear una atmósfera fantástica y etérea.",
    conceptParagraphs: [
      "En esta sesión individual, experimentamos con prismas y ópticas clásicas para generar destellos de luz (flares) que se superponen artísticamente sobre la modelo, logrando un look de ensueño sin recurrir a postproducción digital.",
      "Las texturas orgánicas del parque y la paleta de colores verdes y dorados complementan a la perfección el concepto místico de la sesión."
    ],
    credits: {
      styling: "Santiago Vera",
      model: "Andrea Soler",
      makeup: "Carlos Ruiz",
      camera: "Sony A7R V + Helios 44-2 58mm f/2"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-9/toma-1.webp", title: "Destello Mágico - Reflejo", wide: true },
      { url: "assets/images/portfolio/proyecto-9/toma-2.webp", title: "Destello Mágico - Agua", wide: false },
      { url: "assets/images/portfolio/proyecto-9/toma-3.webp", title: "Destello Mágico - Bosque", wide: false },
      { url: "assets/images/portfolio/proyecto-9/toma-4.webp", title: "Destello Mágico - Hojas", wide: false },
      { url: "assets/images/portfolio/proyecto-9/toma-5.webp", title: "Destello Mágico - Radiante", wide: true }
    ]
  },
  "10": {
    categoryTag: "Familia",
    titleHtml: "Miradas <span>Compartidas</span>",
    client: "Particular",
    year: "2026",
    service: "Sesión de Maternidad en Estudio",
    heroImage: "assets/images/portfolio/proyecto-10/hero.webp",
    conceptHighlight: "Sesión de embarazo en estudio que celebra las formas y la silueta materna a través de un juego dramático de luces y sombras.",
    conceptParagraphs: [
      "Esta sesión en estudio se enfocó en el minimalismo y en la belleza geométrica del cuerpo materno. Con esquemas de iluminación focalizados y fondos neutros, esculpimos la silueta resaltando la fuerza y la gracia de la maternidad.",
      "El uso de telas vaporosas aportó dinamismo y fluidez a la composición, logrando retratos clásicos y elegantes de gran valor artístico."
    ],
    credits: {
      styling: "Propio",
      model: "Gabriela & Carlos",
      makeup: "Mariana Díaz",
      camera: "Sony A7R V + FE 85mm f/1.4 GM"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-10/toma-1.webp", title: "Miradas Compartidas - Ilusión", wide: true },
      { url: "assets/images/portfolio/proyecto-10/toma-2.webp", title: "Miradas Compartidas - Rostro", wide: false },
      { url: "assets/images/portfolio/proyecto-10/toma-3.webp", title: "Miradas Compartidas - Manos", wide: false },
      { url: "assets/images/portfolio/proyecto-10/toma-4.webp", title: "Miradas Compartidas - Silueta", wide: false },
      { url: "assets/images/portfolio/proyecto-10/toma-5.webp", title: "Miradas Compartidas - Abrazo", wide: true }
    ]
  },
  "11": {
    categoryTag: "Promoción",
    titleHtml: "Futuro <span>Brillante</span>",
    client: "Colegio Mayor de Lima",
    year: "2025",
    service: "Fotografía de Promoción & Retrato",
    heroImage: "assets/images/portfolio/proyecto-11/hero.webp",
    conceptHighlight: "Una sesión grupal e individual celebrando la culminación de la etapa escolar, capturando la amistad, la emoción y la promesa del futuro.",
    conceptParagraphs: [
      "Para esta sesión de promoción, reunimos a los graduados en un ambiente al aire libre que combinaba áreas verdes con la arquitectura clásica del campus. Buscamos capturar la espontaneidad de sus risas, los abrazos sinceros y la complicidad de los años compartidos, huyendo de los retratos rígidos tradicionales.",
      "El resultado es una bitácora visual fresca y llena de vida que servirá como un recuerdo imperecedero de su juventud y amistad al cerrar este importante capítulo de sus vidas."
    ],
    credits: {
      styling: "Propio",
      model: "Promoción 2025",
      makeup: "Clara Medina",
      camera: "Sony A7 IV + FE 50mm f/1.2 GM"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-11/toma-1.webp", title: "Futuro Brillante - Celebración", wide: true },
      { url: "assets/images/portfolio/proyecto-11/toma-2.webp", title: "Futuro Brillante - Amistad", wide: false },
      { url: "assets/images/portfolio/proyecto-11/toma-3.webp", title: "Futuro Brillante - Retrato", wide: false },
      { url: "assets/images/portfolio/proyecto-11/toma-4.webp", title: "Futuro Brillante - Logro", wide: false },
      { url: "assets/images/portfolio/proyecto-11/toma-5.webp", title: "Futuro Brillante - Alegría", wide: true }
    ]
  },
  "12": {
    categoryTag: "Cumple años",
    titleHtml: "Celebración <span>Dorada</span>",
    client: "Particular",
    year: "2026",
    service: "Fotografía de Cumpleaños & Smash Cake",
    heroImage: "assets/images/portfolio/proyecto-12/hero.webp",
    conceptHighlight: "Una sesión de cumpleaños infantil llena de color, globos y la alegría espontánea de apagar la primera vela en un set especialmente diseñado.",
    conceptParagraphs: [
      "Esta sesión de 'Smash Cake' fue diseñada con una paleta de colores suaves y globos en tonos champaña y dorado. Capturamos la curiosidad y la diversión del bebé al interactuar libremente con su pastel por primera vez, sin poses forzadas, permitiendo que su inocencia y espontaneidad brillen en cada toma.",
      "Los destellos de luz cálida y la naturalidad del set crearon un ambiente mágico que retrata la felicidad pura de la infancia en este primer gran hito familiar."
    ],
    credits: {
      styling: "Karen Ramos",
      model: "Thiago (1 añito)",
      makeup: "No aplica",
      camera: "Canon R5 + RF 50mm f/1.2 L"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-12/toma-1.webp", title: "Celebración Dorada - Globos", wide: true },
      { url: "assets/images/portfolio/proyecto-12/toma-2.webp", title: "Celebración Dorada - Pastel", wide: false },
      { url: "assets/images/portfolio/proyecto-12/toma-3.webp", title: "Celebración Dorada - Sorpresa", wide: false },
      { url: "assets/images/portfolio/proyecto-12/toma-4.webp", title: "Celebración Dorada - Risas", wide: false },
      { url: "assets/images/portfolio/proyecto-12/toma-5.webp", title: "Celebración Dorada - Vela", wide: true }
    ]
  },
  "13": {
    categoryTag: "15 Años",
    titleHtml: "Quince <span>Primaveras</span>",
    client: "Particular",
    year: "2026",
    service: "Retrato Conceptual con Efecto de Destellos",
    heroImage: "assets/images/portfolio/proyecto-13/hero.webp",
    conceptHighlight: "Una propuesta conceptual y mágica para celebrar los quince años, donde las luces de hadas y los destellos nocturnos crean un universo de fantasía.",
    conceptParagraphs: [
      "En esta sesión experimental, introdujimos luces decorativas de micro-LED y efectos de refracción óptica para crear un velo de destellos alrededor de la modelo. La oscuridad del estudio permitió que estas luces fueran las protagonistas absolutas.",
      "El vestuario brillante y el maquillaje con detalles de glitter complementaron la estética mágica, logrando retratos juveniles llenos de misterio y encanto visual."
    ],
    credits: {
      styling: "Santiago Vera",
      model: "Sofía Valdivia",
      makeup: "Clara Medina",
      camera: "Sony A7R V + FE 50mm f/1.2 GM"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-13/toma-1.webp", title: "Quince Primaveras - Luces", wide: true },
      { url: "assets/images/portfolio/proyecto-13/toma-2.webp", title: "Quince Primaveras - Brillo", wide: false },
      { url: "assets/images/portfolio/proyecto-13/toma-3.webp", title: "Quince Primaveras - Expresión", wide: false },
      { url: "assets/images/portfolio/proyecto-13/toma-4.webp", title: "Quince Primaveras - Detalles", wide: false },
      { url: "assets/images/portfolio/proyecto-13/toma-5.webp", title: "Quince Primaveras - Ensueño", wide: true }
    ]
  },
  "14": {
    categoryTag: "Graduación",
    titleHtml: "Éxito <span>Académico</span>",
    client: "Particular",
    year: "2026",
    service: "Retrato de Graduación & Editorial",
    heroImage: "assets/images/portfolio/proyecto-14/hero.webp",
    conceptHighlight: "Una sesión de retrato individual que conmemora el logro de culminar la etapa universitaria, reflejando madurez, orgullo y optimismo hacia la nueva etapa profesional.",
    conceptParagraphs: [
      "En esta sesión de graduación, buscamos plasmar la solemnidad y el júbilo del logro alcanzado. Utilizando la arquitectura clásica del campus universitario y la luz suave del atardecer, retratamos al graduando con su toga y birrete tradicional, logrando composiciones limpias y de alto valor editorial.",
      "Cada retrato busca destacar la mirada enfocada y decidida de quien está listo para dar su siguiente paso en el mundo profesional, capturando la esencia intelectual y la emoción genuina de este importante hito."
    ],
    credits: {
      styling: "Propio",
      model: "Gabriel Mendoza",
      makeup: "Mariana Díaz",
      camera: "Sony A7R V + FE 85mm f/1.4 GM"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-14/toma-1.webp", title: "Éxito Académico - Retrato Editorial", wide: true },
      { url: "assets/images/portfolio/proyecto-14/toma-2.webp", title: "Éxito Académico - Celebración", wide: false },
      { url: "assets/images/portfolio/proyecto-14/toma-3.webp", title: "Éxito Académico - Detalle de Toga", wide: false },
      { url: "assets/images/portfolio/proyecto-14/toma-4.webp", title: "Éxito Académico - Campus", wide: false },
      { url: "assets/images/portfolio/proyecto-14/toma-5.webp", title: "Éxito Académico - Diploma", wide: true }
    ]
  },
  "15": {
    categoryTag: "Boda",
    titleHtml: "Boda <span>en el Acantilado</span>",
    client: "Particular",
    year: "2026",
    service: "Fotografía de Boda Editorial & Exterior",
    heroImage: "assets/images/portfolio/proyecto-15/hero.webp",
    conceptHighlight: "El día de bodas documentado de forma íntima y artística en un acantilado marino, capturando el amor eterno y la elegancia nupcial bajo la luz dorada del atardecer.",
    conceptParagraphs: [
      "Para esta sesión nupcial, trasladamos a los recién casados al espectacular borde de un acantilado frente al océano. El contraste entre la majestuosidad de la naturaleza y la delicadeza del vestido de novia blanco de encaje fino creó una narrativa visual poética y grandiosa.",
      "Aprovechando el viento marino para dar movimiento a los velos y los últimos rayos cálidos de sol para perfilar las siluetas en un abrazo eterno, documentamos la complicidad e ilusión del primer día de su unión matrimonial."
    ],
    credits: {
      styling: "Sofía López",
      model: "Camila & Daniel",
      makeup: "Melissa Wong",
      camera: "Canon R5 + RF 28-70mm f/2 L"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-15/toma-1.webp", title: "Boda en el Acantilado - Novios", wide: true },
      { url: "assets/images/portfolio/proyecto-15/toma-2.webp", title: "Boda en el Acantilado - El Beso", wide: false },
      { url: "assets/images/portfolio/proyecto-15/toma-3.webp", title: "Boda en el Acantilado - Detalles", wide: false },
      { url: "assets/images/portfolio/proyecto-15/toma-4.webp", title: "Boda en el Acantilado - Abrazo", wide: false },
      { url: "assets/images/portfolio/proyecto-15/toma-5.webp", title: "Boda en el Acantilado - Atardecer", wide: true }
    ]
  },
  "16": {
    categoryTag: "Studio",
    titleHtml: "Retrato <span>de Luz</span>",
    client: "Particular",
    year: "2026",
    service: "Retrato Artístico de Pareja en Estudio",
    heroImage: "assets/images/portfolio/proyecto-16/hero.webp",
    conceptHighlight: "Estudio de retrato de pareja en blanco y negro, explorando la simetría facial, la proximidad física y la honestidad de la mirada compartida.",
    conceptParagraphs: [
      "Esta sesión en estudio se despojó de todo color para centrarse en el contraste absoluto y las líneas de expresión. Con una luz lateral dura y una dirección minimalista, capturamos la intimidad en su forma más pura.",
      "La cercanía de los rostros y la complicidad de las expresiones crean una atmósfera cargada de tensión dramática y belleza sobria."
    ],
    credits: {
      styling: "Propio",
      model: "Laura & Ignacio",
      makeup: "Mariana Díaz",
      camera: "Fujifilm GFX 100S + GF 110mm f/2"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-16/toma-1.webp", title: "Retrato de Luz - Cercanía", wide: true },
      { url: "assets/images/portfolio/proyecto-16/toma-2.webp", title: "Retrato de Luz - Rostro", wide: false },
      { url: "assets/images/portfolio/proyecto-16/toma-3.webp", title: "Retrato de Luz - Mirada", wide: false },
      { url: "assets/images/portfolio/proyecto-16/toma-4.webp", title: "Retrato de Luz - Perfil", wide: false },
      { url: "assets/images/portfolio/proyecto-16/toma-5.webp", title: "Retrato de Luz - Blanco & Negro", wide: true }
    ]
  },
  "17": {
    categoryTag: "Corporativo",
    titleHtml: "Esencia <span>Profesional</span>",
    client: "Consultores Asociados",
    year: "2026",
    service: "Retrato Corporativo & Personal Branding",
    heroImage: "assets/images/portfolio/proyecto-17/hero.webp",
    conceptHighlight: "Una sesión editorial de retratos ejecutivos orientada a reflejar confianza, profesionalismo y liderazgo moderno para profesionales del sector empresarial.",
    conceptParagraphs: [
      "En 'Esencia Profesional', buscamos ir más allá del clásico headshot corporativo aburrido y plano. Trabajamos con una iluminación tridimensional en estudio con fondos texturizados neutros para resaltar la personalidad y la determinación del líder empresarial.",
      "La dirección visual combinó posturas naturales con expresiones seguras, logrando retratos con carácter y presencia que fortalecen la identidad de marca personal y transmiten credibilidad en plataformas corporativas internacionales."
    ],
    credits: {
      styling: "Karen Ramos",
      model: "Martina Díaz & Lucas Soler",
      makeup: "Clara Medina",
      camera: "Sony A7 IV + FE 85mm f/1.4 GM"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-17/toma-1.webp", title: "Esencia Profesional - Retrato Directivo", wide: true },
      { url: "assets/images/portfolio/proyecto-17/toma-2.webp", title: "Esencia Profesional - Confianza", wide: false },
      { url: "assets/images/portfolio/proyecto-17/toma-3.webp", title: "Esencia Profesional - Liderazgo", wide: false },
      { url: "assets/images/portfolio/proyecto-17/toma-4.webp", title: "Esencia Profesional - Detalle de Traje", wide: false },
      { url: "assets/images/portfolio/proyecto-17/toma-5.webp", title: "Esencia Profesional - Expresión", wide: true }
    ]
  },
  "18": {
    categoryTag: "Corporativo",
    titleHtml: "Sinergia <span>Creativa</span>",
    client: "Agencia Nitro",
    year: "2026",
    service: "Fotografía de Espacios & Cultura Corporativa",
    heroImage: "assets/images/portfolio/proyecto-18/hero.webp",
    conceptHighlight: "Un reportaje fotográfico documental que captura la dinámica colaborativa, la innovación y el ambiente laboral de un equipo de diseño en su espacio de trabajo diario.",
    conceptParagraphs: [
      "Este reportaje para Agencia Nitro documenta la vida real dentro de su moderna oficina en Miraflores. Nos enfocamos en las reuniones espontáneas, las sesiones de lluvia de ideas y la interacción diaria del equipo, destacando un ambiente de trabajo dinámico e integrador.",
      "Evitando poses rígidas, la cámara se integró en el flujo natural de la oficina, capturando detalles arquitectónicos, la luz natural del espacio y la sinergia colectiva que define la cultura innovadora de la marca."
    ],
    credits: {
      styling: "Propio",
      model: "Equipo Creativo Nitro",
      makeup: "No aplica",
      camera: "Leica M11 + Summilux 35mm f/1.4"
    },
    gallery: [
      { url: "assets/images/portfolio/proyecto-18/toma-1.webp", title: "Sinergia Creativa - Colaboración", wide: true },
      { url: "assets/images/portfolio/proyecto-18/toma-2.webp", title: "Sinergia Creativa - Espacio de Trabajo", wide: false },
      { url: "assets/images/portfolio/proyecto-18/toma-3.webp", title: "Sinergia Creativa - Lluvia de Ideas", wide: false },
      { url: "assets/images/portfolio/proyecto-18/toma-4.webp", title: "Sinergia Creativa - Detalles Oficina", wide: false },
      { url: "assets/images/portfolio/proyecto-18/toma-5.webp", title: "Sinergia Creativa - Equipo de Diseño", wide: true }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // --- ELEMENTOS COMPARTIDOS DEL PORTAFOLIO ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const loadMoreBtn = document.getElementById('load-more-btn');

  // --- ELEMENTOS DEL MODAL DE DETALLE DE PROYECTO ---
  const projectModal = document.getElementById('project-modal');
  const projectModalClose = document.getElementById('project-modal-close');

  // --- ELEMENTOS DEL VISOR GENERAL DE IMÁGENES (LIGHTBOX) ---
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');

  // Estado compartido para el visor de imágenes (Lightbox)
  let lightboxItems = []; // Almacena URLs y descripciones de las imágenes activas
  let currentIndex = 0;   // Índice de la imagen abierta en el lightbox

  // --- ELEMENTOS Y ESTADO DEL CARRUSEL EN EL MODAL DE DETALLES ---
  const carouselContainer = document.getElementById('project-modal-carousel-container');
  const carouselPrevBtn = document.getElementById('project-modal-carousel-prev');
  const carouselNextBtn = document.getElementById('project-modal-carousel-next');

  const galleryGrid = document.getElementById('project-modal-gallery-grid');
  const carouselTrackWrapper = document.querySelector('.project-modal-carousel-track-wrapper');
  const carouselDotsContainer = document.getElementById('project-modal-carousel-dots');

  // Estado del Autoplay y desplazamiento del Carrusel
  let autoplayTimer = null;
  let activeSegmentIndex = 0;
  let programmaticScrollTimeout = null;
  let isProgrammaticScrolling = false;
  const AUTOPLAY_DELAY = 5000; // 5 segundos por imagen antes del deslizamiento automático

  let cachedScrollPositions = []; // Almacena las alineaciones de scroll exactas para cada imagen

  // --- FUNCIÓN: CACHE DE POSICIONES DE DESPLAZAMIENTO (SCROLL TARGET CACHING) ---
  // Las imágenes del carrusel se deslizan libremente. Para asegurar un desplazamiento preciso (snap),
  // calculamos el offset físico izquierdo de cada imagen con respecto a la rejilla contenedora.
  // Esto previene fallas causadas por anchos dinámicos o paddings del contenedor en dispositivos móviles.
  const cacheScrollPositions = () => {
    if (!carouselTrackWrapper || !galleryGrid) return;
    
    const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
    if (galleryItems.length === 0) {
      cachedScrollPositions = [];
      updateCarouselControlsVisibility();
      return;
    }

    // Obtener el padding izquierdo de la rejilla para alineación perfecta de la primera diapositiva
    const paddingLeft = parseInt(window.getComputedStyle(galleryGrid).paddingLeft) || 24;
    // Límite físico máximo de scroll horizontal
    const maxScroll = Math.max(0, carouselTrackWrapper.scrollWidth - carouselTrackWrapper.clientWidth);

    // 1. Calcular la posición de scroll destino para cada item individual
    const rawTargets = Array.from(galleryItems).map((item) => {
      let target = item.offsetLeft - paddingLeft;
      return Math.max(0, Math.min(target, maxScroll));
    });

    // 2. Filtrar duplicados: Cuando hay elementos muy pequeños o alineados al final,
    // sus destinos de scroll son idénticos. Removemos duplicados con tolerancia de 5px.
    const uniqueTargets = [];
    rawTargets.forEach((target) => {
      if (!uniqueTargets.some(t => Math.abs(t - target) < 5)) {
        uniqueTargets.push(target);
      }
    });

    // Garantizar que la posición base (0) esté presente en el arreglo
    if (uniqueTargets.length === 0) {
      uniqueTargets.push(0);
    }

    // Ordenar ascendentemente
    uniqueTargets.sort((a, b) => a - b);
    cachedScrollPositions = uniqueTargets;

    // Resguardar el índice activo dentro del nuevo rango calculado (evita desbordamientos al achicar pantalla)
    if (activeSegmentIndex >= cachedScrollPositions.length) {
      activeSegmentIndex = Math.max(0, cachedScrollPositions.length - 1);
    }

    rebuildDotsUI();
    updateCarouselControlsVisibility();
  };

  // --- FUNCIÓN: RECONSTRUIR PUNTOS INDICADORES (DOTS) ---
  // Genera dinámicamente un punto de paginación por cada posición de scroll exclusiva identificada.
  const rebuildDotsUI = () => {
    if (!carouselDotsContainer) return;
    
    carouselDotsContainer.innerHTML = '';
    
    cachedScrollPositions.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${idx === activeSegmentIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Ir a diapositiva ${idx + 1}`);
      
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        activeSegmentIndex = idx;
        scrollToPosition(activeSegmentIndex);
        updateDotsUI();
        resetAutoplayTimer(); // Detiene e inicia el temporizador de reproducción
      });
      carouselDotsContainer.appendChild(dot);
    });
  };

  // --- FUNCIÓN: GESTIÓN DE VISIBILIDAD DE CONTROLES ---
  // Oculta completamente las flechas y puntos si todo el carrusel entra en la pantalla
  // (es decir, cuando no hay necesidad de hacer scroll).
  const updateCarouselControlsVisibility = () => {
    const showControls = cachedScrollPositions.length > 1;
    if (carouselPrevBtn) {
      carouselPrevBtn.style.display = showControls ? 'flex' : 'none';
    }
    if (carouselNextBtn) {
      carouselNextBtn.style.display = showControls ? 'flex' : 'none';
    }
    if (carouselDotsContainer) {
      carouselDotsContainer.style.display = showControls ? 'flex' : 'none';
    }
  };

  // --- FUNCIÓN: IDENTIFICAR DIAPOSITIVA ACTIVA (SCROLL POSITION DETECTOR) ---
  // Compara la posición de desplazamiento actual con los targets en caché para identificar
  // qué diapositiva está más cerca del área visible del usuario.
  const getActivePositionIndex = () => {
    if (cachedScrollPositions.length === 0) return 0;
    
    const scrollLeft = carouselTrackWrapper.scrollLeft;
    let closestIndex = 0;
    let minDiff = Infinity;
    
    cachedScrollPositions.forEach((pos, idx) => {
      const diff = Math.abs(pos - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    
    return closestIndex;
  };

  // --- FUNCIÓN: SINCRONIZAR ESTADO DE LOS DOTS ---
  const updateDotsUI = () => {
    if (!carouselDotsContainer) return;
    const dots = carouselDotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, idx) => {
      if (idx === activeSegmentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  // --- FUNCIÓN: SCROLL SUAVE A UN ÍNDICE ESPECÍFICO ---
  // Realiza el desplazamiento programático usando scroll behavior suave.
  // Usa una bandera de control (isProgrammaticScrolling) para suspender temporalmente
  // el detector manual y evitar loops infinitos o tartamudeos visuales.
  const scrollToPosition = (index) => {
    if (cachedScrollPositions.length > 0 && index >= 0 && index < cachedScrollPositions.length) {
      const scrollTarget = cachedScrollPositions[index];
      
      isProgrammaticScrolling = true;
      if (programmaticScrollTimeout) clearTimeout(programmaticScrollTimeout);
      
      carouselTrackWrapper.scrollTo({ left: scrollTarget, behavior: 'smooth' });
      
      // La animación de scroll suave tarda típicamente ~500ms.
      // Damos 600ms de tolerancia antes de habilitar los listeners de scroll manual.
      programmaticScrollTimeout = setTimeout(() => {
        isProgrammaticScrolling = false;
      }, 600);
    }
  };

  // --- EVENT TRIGGER: REDIMENSIONAMIENTO DE PANTALLA ---
  // Si la pantalla cambia de tamaño, las posiciones offsetLeft cambian.
  // Recalculamos la caché del carrusel inmediatamente.
  window.addEventListener('resize', () => {
    if (projectModal && projectModal.classList.contains('active')) {
      cacheScrollPositions();
    }
  });

  // --- FUNCIONES: AUTOPLAY DEL CARRUSEL ---
  // Cicla de forma automática por las imágenes cada 5 segundos si el modal está abierto
  // y el visor Lightbox ampliado no está cubriendo la vista.
  const startAutoplay = () => {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => {
      if (!projectModal || !projectModal.classList.contains('active')) return;
      if (lightbox && lightbox.classList.contains('active')) return; // Pausa si se está visualizando una imagen ampliada
      
      if (cachedScrollPositions.length > 0) {
        activeSegmentIndex = (activeSegmentIndex + 1) % cachedScrollPositions.length;
        scrollToPosition(activeSegmentIndex);
        updateDotsUI();
      }
    }, AUTOPLAY_DELAY);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  const resetAutoplayTimer = () => {
    stopAutoplay();
    startAutoplay();
  };

  // Asignar eventos a las flechas de control del carrusel
  if (carouselPrevBtn && carouselTrackWrapper) {
    carouselPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (cachedScrollPositions.length > 0) {
        let prevIndex = activeSegmentIndex - 1;
        if (prevIndex < 0) prevIndex = cachedScrollPositions.length - 1; // Bucle circular al final
        
        activeSegmentIndex = prevIndex;
        scrollToPosition(activeSegmentIndex);
        updateDotsUI();
        resetAutoplayTimer();
      }
    });
  }

  if (carouselNextBtn && carouselTrackWrapper) {
    carouselNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (cachedScrollPositions.length > 0) {
        let nextIndex = (activeSegmentIndex + 1) % cachedScrollPositions.length; // Bucle circular al inicio
        
        activeSegmentIndex = nextIndex;
        scrollToPosition(activeSegmentIndex);
        updateDotsUI();
        resetAutoplayTimer();
      }
    });
  }

  // --- EVENT TRIGGER: SCROLL MANUAL EN EL CARRUSEL ---
  // Si el usuario arrastra o navega el carrusel con gestos táctiles,
  // capturamos la posición al detenerse y actualizamos los puntos indicadores (dots).
  let scrollTimeout;
  if (carouselTrackWrapper && carouselDotsContainer) {
    carouselTrackWrapper.addEventListener('scroll', () => {
      if (isProgrammaticScrolling) return; // Ignorar eventos scroll disparados por la función scrollToPosition()
      
      const activeIdx = getActivePositionIndex();
      if (activeIdx !== activeSegmentIndex) {
        activeSegmentIndex = activeIdx;
        updateDotsUI();
      }
      
      // Debounce sutil: Reinicia el autoplay timer tras 150ms una vez finalizado el gesto manual.
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        resetAutoplayTimer();
      }, 150);
    });
  }

  // --- 1. PORTAFOLIO INTERACTIVO (FILTRO DE CATEGORÍAS Y CARGA PROGRESIVA) ---
  // Para lograr animaciones de filtrado fluidas de 60fps sin saltos, implementamos la técnica FLIP:
  // - First: Guardamos las posiciones físicas iniciales de los elementos.
  // - Last: Realizamos el cambio de diseño (mostrar/ocultar elementos).
  // - Invert: Calculamos la diferencia de coordenadas y trasladamos los elementos hacia su origen inicial inmediatamente.
  // - Play: Activamos la transición CSS y quitamos la traslación, logrando un deslizamiento fluido impecable.
  if (filterButtons.length > 0 && portfolioItems.length > 0) {
    const getInitialLimit = () => {
      if (window.innerWidth <= 576) return 3; // 3 elementos en vertical (1 columna)
      if (window.innerWidth <= 992) return 4; // 4 elementos en vertical (2 columnas)
      return 6; // 6 elementos en vertical (3 columnas)
    };
    const getItemsPerRow = () => {
      if (window.innerWidth <= 576) return 3; // Carga 3 en móvil (3 filas de 1)
      if (window.innerWidth <= 992) return 2; // Carga 2 en tablet (1 fila de 2)
      return 3; // Carga 3 en desktop (1 fila de 3)
    };
    const INITIAL_LIMIT = getInitialLimit();
    const ITEMS_PER_ROW = getItemsPerRow();
    let currentLimit = INITIAL_LIMIT;
    let activeFilter = 'all';

    const filterGallery = (filterValue, updateUrl = true) => {
      activeFilter = filterValue;
      
      // --- FLIP: FIRST ---
      // Medir y guardar los rectángulos de colisión iniciales de todos los ítems visibles en la pantalla
      const firstPositions = [];
      portfolioItems.forEach(item => {
        if (!item.classList.contains('hidden')) {
          firstPositions.push({
            element: item,
            rect: item.getBoundingClientRect()
          });
        }
      });

      let matchingCount = 0;

      // Aplicar el filtro de categorías cambiando visibilidad (.hidden)
      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        const matchesCategory = (filterValue === 'all' || category === filterValue);

        if (matchesCategory) {
          if (matchingCount < currentLimit) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
          matchingCount++;
        } else {
          item.classList.add('hidden');
        }
      });

      // Visibilidad del botón "Cargar más"
      if (loadMoreBtn) {
        if (matchingCount > currentLimit) {
          loadMoreBtn.style.display = 'inline-flex';
        } else {
          loadMoreBtn.style.display = 'none';
        }
      }

      // --- FLIP: LAST & INVERT ---
      // Medir la nueva posición física de los elementos y aplicar la traslación inversa
      // desactivando transiciones CSS para que el cambio sea instantáneo en el mismo frame.
      portfolioItems.forEach(item => {
        if (!item.classList.contains('hidden')) {
          const first = firstPositions.find(p => p.element === item);
          if (first) {
            const lastRect = item.getBoundingClientRect();
            const deltaX = first.rect.left - lastRect.left;
            const deltaY = first.rect.top - lastRect.top;

            if (deltaX !== 0 || deltaY !== 0) {
              item.style.transition = 'none';
              item.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            }
          } else {
            // Si el elemento era invisible y ahora se muestra, aparece escalando desde el centro
            item.style.transition = 'none';
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
          }
        }
      });

      // Forzar reflujo de renderizado del navegador (Reflow layout flush)
      void document.body.offsetHeight;

      // --- FLIP: PLAY ---
      // Reactivar transiciones y restaurar transformaciones a su posición natural ('none')
      requestAnimationFrame(() => {
        portfolioItems.forEach(item => {
          if (!item.classList.contains('hidden')) {
            item.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
            item.style.transform = 'none';
            item.style.opacity = '1';
          }
        });
      });

      // Actualizar los parámetros de la URL para guardar el estado de filtrado (SEO y compartibilidad)
      if (updateUrl) {
        const url = new URL(window.location);
        if (filterValue === 'all') {
          url.searchParams.delete('categoria');
        } else {
          url.searchParams.set('categoria', filterValue);
        }
        window.history.pushState({}, '', url);
      }
    };

    // ELEMENTOS DEL DROPDOWN
    const portfolioDropdown = document.getElementById('portfolio-dropdown');
    const dropdownTrigger = document.getElementById('dropdown-trigger-btn');
    const triggerText = dropdownTrigger ? dropdownTrigger.querySelector('.trigger-text') : null;

    // Agregar listeners a los botones de filtro de categorías
    filterButtons.forEach(button => {
      // Evitar asociar doble comportamiento si es el botón trigger en sí mismo
      if (button.classList.contains('dropdown-trigger')) return;

      button.addEventListener('click', () => {
        // Remover clase activa de todos los filtros (principales y del dropdown)
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Asignar estado activo al elemento cliqueado
        button.classList.add('active');

        // Determinar si es un item secundario (dentro del dropdown)
        const isDropdownItem = button.classList.contains('dropdown-item');

        if (isDropdownItem) {
          // Activar el botón trigger visualmente y cambiar su texto por la categoría seleccionada
          if (dropdownTrigger) {
            dropdownTrigger.classList.add('active');
            if (triggerText) triggerText.textContent = button.textContent;
          }
        } else {
          // Desactivar estado activo del trigger del dropdown y resetear su texto original
          if (dropdownTrigger) {
            dropdownTrigger.classList.remove('active');
            if (triggerText) triggerText.textContent = 'Más Categorías';
          }
        }

        // Cerrar el dropdown
        if (portfolioDropdown && dropdownTrigger) {
          portfolioDropdown.classList.remove('open');
          dropdownTrigger.setAttribute('aria-expanded', 'false');
        }

        const filterValue = button.getAttribute('data-filter');
        currentLimit = INITIAL_LIMIT; // Reiniciar límite al cambiar categoría
        filterGallery(filterValue, true);
      });
    });

    // Event listener para el toggle de apertura y cierre del dropdown
    if (dropdownTrigger && portfolioDropdown) {
      dropdownTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = portfolioDropdown.classList.toggle('open');
        dropdownTrigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Cerrar el menú si se hace clic fuera del componente en la página
      document.addEventListener('click', (e) => {
        if (!portfolioDropdown.contains(e.target)) {
          portfolioDropdown.classList.remove('open');
          dropdownTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      // Cerrar el menú si se presiona la tecla Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && portfolioDropdown.classList.contains('open')) {
          portfolioDropdown.classList.remove('open');
          dropdownTrigger.setAttribute('aria-expanded', 'false');
          dropdownTrigger.focus();
        }
      });
    }

    // Listener del botón de carga progresiva "Cargar más"
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        currentLimit += ITEMS_PER_ROW; // Incrementa una fila (3 elementos)
        filterGallery(activeFilter, false);
      });
    }

    // Cargar estado inicial del filtro guardado en los query parameters de la URL (si existe)
    const urlParams = new URLSearchParams(window.location.search);
    const activeCategory = urlParams.get('categoria');
    if (activeCategory) {
      const targetButton = document.querySelector(`.filter-btn[data-filter="${activeCategory}"]`);
      if (targetButton) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        targetButton.classList.add('active');

        // Sincronizar el trigger si el filtro de la URL es un item del dropdown
        if (targetButton.classList.contains('dropdown-item')) {
          if (dropdownTrigger) {
            dropdownTrigger.classList.add('active');
            if (triggerText) triggerText.textContent = targetButton.textContent;
          }
        }

        currentLimit = INITIAL_LIMIT;
        filterGallery(activeCategory, false);
      } else {
        currentLimit = INITIAL_LIMIT;
        filterGallery('all', false);
      }
    } else {
      currentLimit = INITIAL_LIMIT;
      filterGallery('all', false);
    }
  }

  // --- 2. LOGICA DEL VISOR DE IMÁGENES COMPARTIDO (LIGHTBOX GALLERY) ---
  // Inyecta URLs de imágenes del portafolio o de modales activos de forma dinámica.
  const showImage = (index) => {
    if (index < 0 || index >= lightboxItems.length) return;
    currentIndex = index;
    const currentItem = lightboxItems[currentIndex];
    lightboxImg.src = currentItem.src;
    lightboxCaption.textContent = currentItem.title;
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    
    // Si el modal detallado del proyecto no está en la pantalla, reactivamos scroll general
    if (!projectModal || !projectModal.classList.contains('active')) {
      document.body.classList.remove('no-scroll');
    } else {
      startAutoplay(); // Reanudar reproducción automática en el modal de fondo
    }
    
    // Esperar a terminar animación antes de vaciar las fuentes de imagen
    setTimeout(() => {
      lightboxImg.src = '';
      lightboxCaption.textContent = '';
    }, 300);
  };

  const showNext = () => {
    if (lightboxItems.length === 0) return;
    let nextIndex = (currentIndex + 1) % lightboxItems.length;
    showImage(nextIndex);
  };

  const showPrev = () => {
    if (lightboxItems.length === 0) return;
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = lightboxItems.length - 1;
    showImage(prevIndex);
  };

  // Inicializar listeners del Lightbox
  if (lightbox && lightboxImg) {
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);

    // Conectar lupa del portafolio para zoom directo sin abrir el modal
    const lightboxTriggers = document.querySelectorAll('[data-lightbox-trigger]');
    lightboxTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevenir burbujeo hacia la tarjeta (evitando abrir el modal de proyecto)

        const item = trigger.closest('.portfolio-item');
        if (item) {
          // Capturar todas las fotos que estén visibles actualmente en la grilla filtrada
          const visibleItems = Array.from(portfolioItems).filter(vi => !vi.classList.contains('hidden'));
          
          lightboxItems = visibleItems.map(vi => ({
            src: vi.getAttribute('data-image'),
            title: vi.getAttribute('data-title')
          }));

          const matchSrc = item.getAttribute('data-image');
          currentIndex = lightboxItems.findIndex(li => li.src === matchSrc);
          if (currentIndex === -1) currentIndex = 0;

          showImage(currentIndex);
          lightbox.classList.add('active');
          lightbox.setAttribute('aria-hidden', 'false');
          document.body.classList.add('no-scroll');
        }
      });
    });
  }

  // --- 3. MODAL DE DETALLE DE PROYECTO (POBLADO DINÁMICO) ---
  // Inyecta asíncronamente el contenido del proyecto clickeado desde PROJECTS_DATA
  // reconstruyendo la ficha técnica y la galería de fotos en tiempo real.
  const closeProjectModal = () => {
    if (projectModal) {
      projectModal.classList.remove('active');
      projectModal.setAttribute('aria-hidden', 'true');
      stopAutoplay(); // Apagar temporizador
      
      // Solo restaurar scroll general si el lightbox tampoco está cubriendo la vista
      if (!lightbox || !lightbox.classList.contains('active')) {
        document.body.classList.remove('no-scroll');
      }
    }
  };

  if (portfolioItems.length > 0 && projectModal) {
    portfolioItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const projectId = item.getAttribute('data-project-id');
        const data = PROJECTS_DATA[projectId];
        if (!data) return;

        // Capturar los nodos de inyección de contenido
        const heroImg = document.getElementById('project-modal-hero-img');
        const categoryTag = document.getElementById('project-modal-category');
        const titleMain = document.getElementById('project-modal-title');
        const client = document.getElementById('project-modal-client');
        const year = document.getElementById('project-modal-year');
        const service = document.getElementById('project-modal-service');
        const conceptContainer = document.getElementById('project-modal-concept-paragraphs');
        const creditStyling = document.getElementById('project-modal-credit-styling');
        const creditModel = document.getElementById('project-modal-credit-model');
        const creditMakeup = document.getElementById('project-modal-credit-makeup');
        const creditCamera = document.getElementById('project-modal-credit-camera');
        const galleryGrid = document.getElementById('project-modal-gallery-grid');

        // Cargar imagen de cabecera con control lazy load progresivo
        if (heroImg) {
          heroImg.src = data.heroImage;
          heroImg.classList.remove('lazy-image--loaded');
          if (heroImg.complete) {
            heroImg.classList.add('lazy-image--loaded');
          } else {
            heroImg.addEventListener('load', function onload() {
              heroImg.classList.add('lazy-image--loaded');
              heroImg.removeEventListener('load', onload);
            });
          }
        }
        
        // Cargar textos básicos
        if (categoryTag) categoryTag.textContent = data.categoryTag;
        if (titleMain) titleMain.innerHTML = data.titleHtml;
        if (client) client.textContent = data.client;
        if (year) year.textContent = data.year;
        if (service) service.textContent = data.service;

        // Construir párrafos del concepto editorial
        if (conceptContainer) {
          conceptContainer.innerHTML = '';
          data.conceptParagraphs.forEach((pText, index) => {
            const p = document.createElement('p');
            // Primer párrafo lleva estilo destacado (intro-paragraph-highlight)
            p.className = index === 0 ? 'intro-paragraph-highlight' : 'intro-paragraph';
            p.textContent = pText;
            conceptContainer.appendChild(p);
          });
        }

        // Cargar créditos / Ficha técnica
        if (creditStyling) creditStyling.textContent = data.credits.styling;
        if (creditModel) creditModel.textContent = data.credits.model;
        if (creditMakeup) creditMakeup.textContent = data.credits.makeup;
        if (creditCamera) creditCamera.textContent = data.credits.camera;

        // Inyectar fotos del carrusel de tomas seleccionadas
        if (galleryGrid) {
          galleryGrid.innerHTML = '';

          data.gallery.forEach((img, idx) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'gallery-item';
            itemDiv.setAttribute('data-title', img.title);
            itemDiv.setAttribute('data-image', img.url);

            itemDiv.innerHTML = `
              <div class="gallery-img-container">
                <img src="${img.url}" alt="${img.title}" class="gallery-img lazy-image" loading="lazy">
                <div class="gallery-item-overlay">
                  <span class="gallery-item-zoom">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="portfolio-zoom-svg">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </span>
                </div>
              </div>
            `;

            // Control de opacidad gradual (lazy loading fade-in) para las fotos del carrusel
            const imgEl = itemDiv.querySelector('.lazy-image');
            if (imgEl) {
              if (imgEl.complete) {
                imgEl.classList.add('lazy-image--loaded');
                cacheScrollPositions(); // Medir offsets inmediatamente
              } else {
                imgEl.addEventListener('load', () => {
                  imgEl.classList.add('lazy-image--loaded');
                  cacheScrollPositions(); // Recalcular ya que la carga de imagen puede afectar anchos
                });
              }
            }

            // Asignar clic para abrir la foto del carrusel en el lightbox ampliado
            itemDiv.addEventListener('click', () => {
              const modalGalleryItems = Array.from(galleryGrid.querySelectorAll('.gallery-item'));
              
              lightboxItems = modalGalleryItems.map(gi => ({
                src: gi.getAttribute('data-image'),
                title: gi.getAttribute('data-title')
              }));

              currentIndex = idx;
              showImage(currentIndex);
              stopAutoplay(); // Detener autoplay mientras el usuario hace zoom detallado

              lightbox.classList.add('active');
              lightbox.setAttribute('aria-hidden', 'false');
              document.body.classList.add('no-scroll');
            });

            galleryGrid.appendChild(itemDiv);
          });
        }

        // --- RENDER MODAL ACTIVE ---
        projectModal.classList.add('active');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');

        // Resetear el scroll del carrusel horizontal a cero
        const trackWrapper = document.querySelector('.project-modal-carousel-track-wrapper');
        if (trackWrapper) {
          trackWrapper.scrollLeft = 0;
        }
        
        activeSegmentIndex = 0;
        cacheScrollPositions();
        
        // Retrasar levemente el cálculo final del offset (100ms) para garantizar que
        // las fuentes, fuentes de icono y el DOM estén consolidados en el render.
        setTimeout(() => {
          cacheScrollPositions();
        }, 100);
        
        startAutoplay(); // Encender ciclo automático
      });
    });

    if (projectModalClose) {
      projectModalClose.addEventListener('click', closeProjectModal);
    }

    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // --- 4. CONTROLES POR TECLADO GLOBAL ---
  // Soporte de accesibilidad para interactuar y cerrar pantallas modales con la tecla Escape,
  // y avanzar en el lightbox mediante las teclas de flechas (Izquierda/Derecha).
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightbox && lightbox.classList.contains('active')) {
        closeLightbox();
      } else if (projectModal && projectModal.classList.contains('active')) {
        closeProjectModal();
      }
    }
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    }
  });
});
