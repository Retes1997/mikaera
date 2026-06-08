/* ==========================================================================
   LÓGICA DE PORTADA (HOME PAGE)
   Componentes: Filtros de Galería, Visor Lightbox y Modales de Proyecto
   ========================================================================== */

// --- DICCIONARIO DE DATOS DEMO PARA LOS 18 PROYECTOS ---
const PROJECTS_DATA = {
  "1": {
    categoryTag: "Estudio",
    titleHtml: "Luz y Sombras <span>de Otoño</span>",
    client: "Revista Vogue Latam",
    year: "2025",
    service: "Dirección Creativa & Fotografía",
    heroImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200",
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
      { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200", title: "Luz y Sombras de Otoño - Toma I", wide: true },
      { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200", title: "Luz y Sombras de Otoño - Toma II", wide: false },
      { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200", title: "Luz y Sombras de Otoño - Toma III", wide: false },
      { url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200", title: "Luz y Sombras de Otoño - Toma IV", wide: false },
      { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200", title: "Luz y Sombras de Otoño - Toma V", wide: true }
    ]
  },
  "2": {
    categoryTag: "Estudio",
    titleHtml: "Esencia <span>Íntima</span>",
    client: "Particular",
    year: "2025",
    service: "Retrato Artístico & Estilismo",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200",
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
      { url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200", title: "Esencia Íntima - Silueta", wide: true },
      { url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200", title: "Esencia Íntima - Mirada", wide: false },
      { url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1200", title: "Esencia Íntima - Contraste", wide: false },
      { url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200", title: "Esencia Íntima - Perfil", wide: false },
      { url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200", title: "Esencia Íntima - Luz Suave", wide: true }
    ]
  },
  "3": {
    categoryTag: "Estudio",
    titleHtml: "Amor en <span>el Olivar</span>",
    client: "Particular",
    year: "2025",
    service: "Pre-boda & Dirección Visual",
    heroImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200",
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
      { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200", title: "Amor en el Olivar - Unión", wide: true },
      { url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200", title: "Amor en el Olivar - Caminata", wide: false },
      { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200", title: "Amor en el Olivar - Detalles", wide: false },
      { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200", title: "Amor en el Olivar - Abrazo", wide: false },
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200", title: "Amor en el Olivar - Atardecer", wide: true }
    ]
  },
  "4": {
    categoryTag: "15 años",
    titleHtml: "Contraste <span>Urbano</span>",
    client: "Particular",
    year: "2026",
    service: "Sesión 15 Años Creativa",
    heroImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200",
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
      { url: "https://images.unsplash.com/photo-1513829096999-4978602297f7?q=80&w=1200", title: "Contraste Urbano - Pasos", wide: true },
      { url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200", title: "Contraste Urbano - Foco", wide: false },
      { url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200", title: "Contraste Urbano - Textura", wide: false },
      { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200", title: "Contraste Urbano - Vuelo", wide: false },
      { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200", title: "Contraste Urbano - Luces", wide: true }
    ]
  },
  "5": {
    categoryTag: "15 años",
    titleHtml: "Mirada <span>Profunda</span>",
    client: "Particular",
    year: "2026",
    service: "15 Años Editorial & Moda",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200",
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
      { url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200", title: "Mirada Profunda - Expresión", wide: true },
      { url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200", title: "Mirada Profunda - Ángulo", wide: false },
      { url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200", title: "Mirada Profunda - Contraluz", wide: false },
      { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200", title: "Mirada Profunda - Retrato", wide: false },
      { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200", title: "Mirada Profunda - Brillo", wide: true }
    ]
  },
  "6": {
    categoryTag: "15 años",
    titleHtml: "Silencio <span>Natural</span>",
    client: "Particular",
    year: "2026",
    service: "15 Años Exterior Rústico",
    heroImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200",
    conceptHighlight: "La serenidad del campo y la luz dorada del atardecer enmarcan la celebración de los quince años, en una sesión que respira libertad.",
    conceptParagraphs: [
      "Buscamos un escape hacia la naturaleza para retratar la transición hacia la juventud en un entorno campestre y libre. Los pastizales dorados y el viento suave se convirtieron en elementos activos de la composición.",
      "El estilismo boho-chic y la iluminación a contraluz aportaron un aura mágica y nostálgica, capturando la esencia alegre y soñadora de la quinceañera de una manera sumamente orgánica."
    ],
    credits: {
      styling: "Propio",
      model: "Jimena Castro",
      makeup: "Mariana Díaz",
      camera: "Canon R6 II + RF 85mm f/2 Macro"
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200", title: "Silencio Natural - Bosque", wide: true },
      { url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200", title: "Silencio Natural - Camino", wide: false },
      { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200", title: "Silencio Natural - Rayos de Sol", wide: false },
      { url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200", title: "Silencio Natural - Follaje", wide: false },
      { url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200", title: "Silencio Natural - Pradera", wide: true }
    ]
  },
  "7": {
    categoryTag: "Parque Olivar",
    titleHtml: "Risas de <span>la Tarde</span>",
    client: "Familia Ramos",
    year: "2025",
    service: "Fotografía Familiar en Exteriores",
    heroImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200",
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
      { url: "https://images.unsplash.com/photo-1484712401471-05c7215e66eb?q=80&w=1200", title: "Risas de la Tarde - Diversión", wide: true },
      { url: "https://images.unsplash.com/photo-1471897458553-529b9a3c3010?q=80&w=1200", title: "Risas de la Tarde - Retrato", wide: false },
      { url: "https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?q=80&w=1200", title: "Risas de la Tarde - Detalle", wide: false },
      { url: "https://images.unsplash.com/photo-1481841580057-e2b9927a05c6?q=80&w=1200", title: "Risas de la Tarde - Picnic", wide: false },
      { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", title: "Risas de la Tarde - Atardecer", wide: true }
    ]
  },
  "8": {
    categoryTag: "Parque Olivar",
    titleHtml: "Dulce <span>Espera</span>",
    client: "Particular",
    year: "2025",
    service: "Maternidad Exterior El Olivar",
    heroImage: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200",
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
      { url: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200", title: "Dulce Espera - Perfil", wide: true },
      { url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200", title: "Dulce Espera - Conexión", wide: false },
      { url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200", title: "Dulce Espera - Manos", wide: false },
      { url: "https://images.unsplash.com/photo-1584273112727-6c16cd6a2673?q=80&w=1200", title: "Dulce Espera - Mirada", wide: false },
      { url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200", title: "Dulce Espera - Luz del Bosque", wide: true }
    ]
  },
  "9": {
    categoryTag: "Parque Olivar",
    titleHtml: "Destello <span>Mágico</span>",
    client: "Particular",
    year: "2025",
    service: "Retrato Creativo al Aire Libre",
    heroImage: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1200",
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
      { url: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1200", title: "Destello Mágico - Reflejo", wide: true },
      { url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1200", title: "Destello Mágico - Agua", wide: false },
      { url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200", title: "Destello Mágico - Bosque", wide: false },
      { url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200", title: "Destello Mágico - Hojas", wide: false },
      { url: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200", title: "Destello Mágico - Radiante", wide: true }
    ]
  },
  "10": {
    categoryTag: "Embarazo",
    titleHtml: "Miradas <span>Compartidas</span>",
    client: "Particular",
    year: "2026",
    service: "Sesión de Maternidad en Estudio",
    heroImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200",
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
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200", title: "Miradas Compartidas - Ilusión", wide: true },
      { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200", title: "Miradas Compartidas - Rostro", wide: false },
      { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200", title: "Miradas Compartidas - Manos", wide: false },
      { url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200", title: "Miradas Compartidas - Silueta", wide: false },
      { url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200", title: "Miradas Compartidas - Abrazo", wide: true }
    ]
  },
  "11": {
    categoryTag: "Embarazo",
    titleHtml: "Inocencia <span>y Luz</span>",
    client: "Particular",
    year: "2026",
    service: "Maternidad Íntima con Luz Natural",
    heroImage: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1200",
    conceptHighlight: "Retrato maternal con luz natural en interiores, priorizando la suavidad, la ternura y la intimidad de los momentos previos al nacimiento.",
    conceptParagraphs: [
      "Utilizando la luz suave de un ventanal y un set minimalista con tonos crema, creamos un ambiente de calma e introspección. Buscamos capturar la paz interior y la conexión silenciosa de la futura madre con su bebé.",
      "La sencillez del entorno y la iluminación natural de tono suave destacan la belleza natural del embarazo de una manera pura y honesta."
    ],
    credits: {
      styling: "Sofía López",
      model: "Natalia Espinoza",
      makeup: "Carlos Ruiz",
      camera: "Sony A7 IV + FE 50mm f/1.2 GM"
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1473679478577-44f079048a1c?q=80&w=1200", title: "Inocencia y Luz - Ventana", wide: true },
      { url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200", title: "Inocencia y Luz - Posa", wide: false },
      { url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1200", title: "Inocencia y Luz - Sonrisa", wide: false },
      { url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200", title: "Inocencia y Luz - Acercamiento", wide: false },
      { url: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1200", title: "Inocencia y Luz - Halo", wide: true }
    ]
  },
  "12": {
    categoryTag: "Embarazo",
    titleHtml: "Celebración <span>Dorada</span>",
    client: "Particular",
    year: "2026",
    service: "Maternidad en Exterior al Atardecer",
    heroImage: "https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?q=80&w=1200",
    conceptHighlight: "Una celebración de la maternidad al aire libre, aprovechando los tonos cálidos del atardecer para iluminar este momento tan especial.",
    conceptParagraphs: [
      "Llevamos a cabo esta sesión en un campo abierto durante la hora dorada, logrando que los rayos del sol envolvieran a la madre en un halo de luz cálida y mágica. Los colores vibrantes de la naturaleza celebran la vida.",
      "El dinamismo de los vestidos largos y la espontaneidad del movimiento crearon una atmósfera de alegría y plenitud que refleja fielmente la emoción de la espera."
    ],
    credits: {
      styling: "Karen Ramos",
      model: "Milagros & Jorge",
      makeup: "Melissa Wong",
      camera: "Canon R5 + RF 85mm f/1.2 L"
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200", title: "Celebración Dorada - Caricia", wide: true },
      { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200", title: "Celebración Dorada - Mirada", wide: false },
      { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200", title: "Celebración Dorada - Perfil", wide: false },
      { url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200", title: "Celebración Dorada - Afecto", wide: false },
      { url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200", title: "Celebración Dorada - Ocaso", wide: true }
    ]
  },
  "13": {
    categoryTag: "Sesión ✨",
    titleHtml: "Quince <span>Primaveras</span>",
    client: "Particular",
    year: "2026",
    service: "Retrato Conceptual con Efecto de Destellos",
    heroImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200",
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
      { url: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1200", title: "Quince Primaveras - Luces", wide: true },
      { url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200", title: "Quince Primaveras - Brillo", wide: false },
      { url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200", title: "Quince Primaveras - Expresión", wide: false },
      { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200", title: "Quince Primaveras - Detalles", wide: false },
      { url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200", title: "Quince Primaveras - Ensueño", wide: true }
    ]
  },
  "14": {
    categoryTag: "Sesión ✨",
    titleHtml: "Unión <span>Eterna</span>",
    client: "Particular",
    year: "2026",
    service: "Sesión de Pareja Cinematográfica",
    heroImage: "https://images.unsplash.com/photo-1609234656388-0ff363383899?q=80&w=1200",
    conceptHighlight: "Un retrato de pareja nocturno que utiliza luces artificiales de la ciudad y destellos creativos para narrar una historia de amor contemporánea.",
    conceptParagraphs: [
      "Aprovechamos la vibrante vida urbana nocturna para retratar la conexión de la pareja. Mediante el uso de luces de neón urbanas y flashes con geles de color, creamos una atmósfera cinemática inspirada en el cine de autor.",
      "Las tomas espontáneas cruzando la calle y los reflejos en las ventanas añaden un toque de dinamismo y modernidad que rompe con la fotografía de pareja convencional."
    ],
    credits: {
      styling: "Propio",
      model: "Elena & Alejandro",
      makeup: "Carlos Ruiz",
      camera: "Sony A7 IV + FE 35mm f/1.4 GM"
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200", title: "Unión Eterna - Nocturno", wide: true },
      { url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200", title: "Unión Eterna - Abrazo", wide: false },
      { url: "https://images.unsplash.com/photo-1609234656388-0ff363383899?q=80&w=1200", title: "Unión Eterna - Retrato", wide: false },
      { url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200", title: "Unión Eterna - Pasión", wide: false },
      { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200", title: "Unión Eterna - Brillos", wide: true }
    ]
  },
  "15": {
    categoryTag: "Sesión ✨",
    titleHtml: "Atardecer <span>de Dos</span>",
    client: "Particular",
    year: "2026",
    service: "Parejas en Exteriores Hora Dorada",
    heroImage: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=1200",
    conceptHighlight: "La complicidad de la pareja capturada en la inmensidad de un acantilado costero durante los últimos minutos de sol, envueltos en un destello de luz dorada.",
    conceptParagraphs: [
      "Esta sesión en exteriores explora la relación con el paisaje a través de tomas amplias y poéticas. El sol poniéndose sobre el horizonte marino generó un contraluz intenso que perfiló las siluetas de la pareja de forma espectacular.",
      "La paleta cromática se reduce a tonos azules profundos del océano y el naranja ardiente del cielo, capturando un momento íntimo y grandioso a la vez."
    ],
    credits: {
      styling: "Sofía López",
      model: "Camila & Daniel",
      makeup: "Melissa Wong",
      camera: "Canon R5 + RF 28-70mm f/2 L"
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=1200", title: "Atardecer de Dos - Horizonte", wide: true },
      { url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200", title: "Atardecer de Dos - Silueta", wide: false },
      { url: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1200", title: "Atardecer de Dos - Calidez", wide: false },
      { url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200", title: "Atardecer de Dos - Risa", wide: false },
      { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200", title: "Atardecer de Dos - Inmensidad", wide: true }
    ]
  },
  "16": {
    categoryTag: "Pareja",
    titleHtml: "Retrato <span>de Luz</span>",
    client: "Particular",
    year: "2026",
    service: "Retrato Artístico de Pareja en Estudio",
    heroImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
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
      { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200", title: "Retrato de Luz - Cercanía", wide: true },
      { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200", title: "Retrato de Luz - Rostro", wide: false },
      { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200", title: "Retrato de Luz - Mirada", wide: false },
      { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200", title: "Retrato de Luz - Perfil", wide: false },
      { url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200", title: "Retrato de Luz - Blanco & Negro", wide: true }
    ]
  },
  "17": {
    categoryTag: "Pareja",
    titleHtml: "Detalles <span>en Verde</span>",
    client: "Particular",
    year: "2026",
    service: "Fotografía de Pareja Orgánica & Lifestyle",
    heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200",
    conceptHighlight: "Sesión de pareja que celebra el amor cotidiano y la frescura, enmarcada por los tonos verdes y la luz natural de un jardín botánico.",
    conceptParagraphs: [
      "Buscamos un ambiente fresco y lleno de vida para capturar la cotidianidad y la frescura de la pareja. Los senderos del jardín botánico y la variedad de hojas verdes aportaron una textura orgánica vibrante a las fotos.",
      "Priorizando momentos divertidos e interacciones reales, la sesión refleja la alegría y la sencillez de compartir el día a día en un entorno natural."
    ],
    credits: {
      styling: "Karen Ramos",
      model: "Martina & Lucas",
      makeup: "Clara Medina",
      camera: "Sony A7 IV + FE 85mm f/1.4 GM"
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200", title: "Detalles en Verde - Follaje", wide: true },
      { url: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200", title: "Detalles en Verde - Sendero", wide: false },
      { url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200", title: "Detalles en Verde - Miradas", wide: false },
      { url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200", title: "Detalles en Verde - Textura", wide: false },
      { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200", title: "Detalles en Verde - Complicidad", wide: true }
    ]
  },
  "18": {
    categoryTag: "Pareja",
    titleHtml: "Historias <span>del Camino</span>",
    client: "Particular",
    year: "2026",
    service: "Reportaje Documental de Pareja",
    heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200",
    conceptHighlight: "Una bitácora fotográfica de pareja en formato de reportaje documental, capturando la espontaneidad del viaje y el espíritu libre.",
    conceptParagraphs: [
      "Esta sesión se planteó como un viaje de exploración. Acompañamos a la pareja en su recorrido por caminos rurales y parajes rústicos, documentando la complicidad del trayecto más que la llegada.",
      "El estilo fotográfico documental, con grano sutil y colores inspirados en la película analógica, otorga a las fotos un carácter nostálgico e imperecedero."
    ],
    credits: {
      styling: "Propio",
      model: "Paula & Renzo",
      makeup: "Carlos Ruiz",
      camera: "Leica M11 + Summilux 35mm f/1.4"
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200", title: "Historias del Camino - Ruta", wide: true },
      { url: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=1200", title: "Historias del Camino - Viaje", wide: false },
      { url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200", title: "Historias del Camino - Horizonte", wide: false },
      { url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200", title: "Historias del Camino - Detalle", wide: false },
      { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200", title: "Historias del Camino - Naturaleza", wide: true }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // --- ELEMENTOS COMPARTIDOS ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const loadMoreBtn = document.getElementById('load-more-btn');

  const projectModal = document.getElementById('project-modal');
  const projectModalClose = document.getElementById('project-modal-close');

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');

  // Estado compartido para el visor de imágenes (Lightbox)
  let lightboxItems = [];
  let currentIndex = 0;

  // --- ELEMENTOS Y ESTADO DEL CARRUSEL EN EL MODAL ---
  const carouselContainer = document.getElementById('project-modal-carousel-container');
  const carouselPrevBtn = document.getElementById('project-modal-carousel-prev');
  const carouselNextBtn = document.getElementById('project-modal-carousel-next');
  const carouselDotsContainer = document.getElementById('project-modal-carousel-dots');
  const carouselProgressBar = document.getElementById('project-modal-carousel-progress');
  const galleryGrid = document.getElementById('project-modal-gallery-grid');

  let currentCarouselIndex = 0;

  const slideCount = () => {
    return galleryGrid ? galleryGrid.querySelectorAll('.gallery-item').length : 0;
  };

  const resetProgressAnimation = () => {
    if (carouselProgressBar && carouselContainer) {
      carouselContainer.classList.remove('autoplay-active');
      void carouselProgressBar.offsetWidth; // Forzar reflujo de renderizado
      if (projectModal && projectModal.classList.contains('active') && (!lightbox || !lightbox.classList.contains('active'))) {
        carouselContainer.classList.add('autoplay-active');
      }
    }
  };

  const updateCarousel = () => {
    if (galleryGrid) {
      galleryGrid.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;
    }
    if (carouselDotsContainer) {
      const dots = carouselDotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => {
        if (idx === currentCarouselIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
    // Reiniciar animación de la barra
    resetProgressAnimation();
  };

  const nextSlide = () => {
    const total = slideCount();
    if (total === 0) return;
    currentCarouselIndex = (currentCarouselIndex + 1) % total;
    updateCarousel();
  };

  const prevSlide = () => {
    const total = slideCount();
    if (total === 0) return;
    currentCarouselIndex = (currentCarouselIndex - 1 + total) % total;
    updateCarousel();
  };

  const goToSlide = (index) => {
    currentCarouselIndex = index;
    updateCarousel();
  };

  const startAutoSlide = () => {
    if (carouselContainer) {
      carouselContainer.classList.remove('autoplay-paused');
      carouselContainer.classList.add('autoplay-active');
    }
  };

  const pauseAutoSlide = () => {
    if (carouselContainer) {
      carouselContainer.classList.add('autoplay-paused');
    }
  };

  if (carouselPrevBtn) {
    carouselPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevSlide();
    });
  }

  if (carouselNextBtn) {
    carouselNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextSlide();
    });
  }

  if (carouselProgressBar) {
    carouselProgressBar.addEventListener('animationend', () => {
      nextSlide();
    });
  }

  // --- 1. PORTAFOLIO INTERACTIVO (FILTRO DE CATEGORÍAS Y CARGA PROGRESIVA) ---
  if (filterButtons.length > 0 && portfolioItems.length > 0) {
    const INITIAL_LIMIT = 6;
    const ITEMS_PER_ROW = 3;
    let currentLimit = INITIAL_LIMIT;
    let activeFilter = 'all';

    const filterGallery = (filterValue, updateUrl = true) => {
      activeFilter = filterValue;
      let matchingCount = 0;

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

      // Controlar visibilidad del botón "Cargar más"
      if (loadMoreBtn) {
        if (matchingCount > currentLimit) {
          loadMoreBtn.style.display = 'inline-flex';
        } else {
          loadMoreBtn.style.display = 'none';
        }
      }

      // Actualizar la URL de forma progresiva
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

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remover active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Añadir active al botón presionado
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        currentLimit = INITIAL_LIMIT; // Reiniciar límite al cambiar de filtro
        filterGallery(filterValue, true);
      });
    });

    // Event listener para el botón de cargar más
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        currentLimit += ITEMS_PER_ROW;
        filterGallery(activeFilter, false);
      });
    }

    // Leer el estado del filtro desde la URL al cargar la página
    const urlParams = new URLSearchParams(window.location.search);
    const activeCategory = urlParams.get('categoria');
    if (activeCategory) {
      const targetButton = document.querySelector(`.filter-btn[data-filter="${activeCategory}"]`);
      if (targetButton) {
        // Activar el botón correspondiente
        filterButtons.forEach(btn => btn.classList.remove('active'));
        targetButton.classList.add('active');
        currentLimit = INITIAL_LIMIT;
        // Filtrar la galería sin actualizar la URL
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

  // --- 2. LOGICA DEL VISOR DE IMÁGENES (LIGHTBOX GALLERY) ---
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
    // Si el modal de proyecto NO está abierto, reactivamos scroll general
    if (!projectModal || !projectModal.classList.contains('active')) {
      document.body.classList.remove('no-scroll');
    } else {
      // Reanudar el carrusel de fotos si el modal sigue abierto
      startAutoSlide();
    }
    setTimeout(() => {
      lightboxImg.src = '';
      lightboxCaption.textContent = '';
    }, 300);
  };

  const showNext = () => {
    if (lightboxItems.length === 0) return;
    let nextIndex = currentIndex + 1;
    if (nextIndex >= lightboxItems.length) {
      nextIndex = 0; // Bucle al inicio
    }
    showImage(nextIndex);
  };

  const showPrev = () => {
    if (lightboxItems.length === 0) return;
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = lightboxItems.length - 1; // Bucle al final
    }
    showImage(prevIndex);
  };

  if (lightbox && lightboxImg) {
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);

    // Zoom triggers en portafolio de la grilla principal
    const lightboxTriggers = document.querySelectorAll('[data-lightbox-trigger]');
    lightboxTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Evitar que abra el modal del proyecto

        const item = trigger.closest('.portfolio-item');
        if (item) {
          // Obtener las fotos visibles actualmente (filtradas)
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

  // --- 3. MODAL DE DETALLE DE PROYECTO (DINÁMICO) ---
  const portfolioLinkOverlays = document.querySelectorAll('.portfolio-link-overlay');

  const closeProjectModal = () => {
    if (projectModal) {
      projectModal.classList.remove('active');
      projectModal.setAttribute('aria-hidden', 'true');
      // Pausar la reproducción automática del carrusel
      pauseAutoSlide();
      // Solo quitamos no-scroll si el lightbox tampoco está abierto
      if (!lightbox || !lightbox.classList.contains('active')) {
        document.body.classList.remove('no-scroll');
      }
    }
  };

  if (portfolioLinkOverlays.length > 0 && projectModal) {
    portfolioLinkOverlays.forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const item = overlay.closest('.portfolio-item');
        if (!item) return;

        const projectId = item.getAttribute('data-project-id');
        const data = PROJECTS_DATA[projectId];
        if (!data) return;

        // Población de elementos del DOM
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
        if (categoryTag) categoryTag.textContent = data.categoryTag;
        if (titleMain) titleMain.innerHTML = data.titleHtml;
        if (client) client.textContent = data.client;
        if (year) year.textContent = data.year;
        if (service) service.textContent = data.service;

        // Párrafos conceptuales
        if (conceptContainer) {
          conceptContainer.innerHTML = '';
          data.conceptParagraphs.forEach((pText, index) => {
            const p = document.createElement('p');
            p.className = index === 0 ? 'intro-paragraph-highlight' : 'intro-paragraph';
            p.textContent = pText;
            conceptContainer.appendChild(p);
          });
        }

        // Ficha Técnica / Créditos
        if (creditStyling) creditStyling.textContent = data.credits.styling;
        if (creditModel) creditModel.textContent = data.credits.model;
        if (creditMakeup) creditMakeup.textContent = data.credits.makeup;
        if (creditCamera) creditCamera.textContent = data.credits.camera;

        // Galería de fotos dinámica en el modal (Carrusel)
        if (galleryGrid) {
          galleryGrid.innerHTML = '';
          
          if (carouselDotsContainer) {
            carouselDotsContainer.innerHTML = '';
          }

          data.gallery.forEach((img, idx) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'gallery-item';
            itemDiv.setAttribute('data-title', img.title);
            itemDiv.setAttribute('data-image', img.url);

            itemDiv.innerHTML = `
              <div class="gallery-img-container">
                <img src="${img.url}" alt="${img.title}" class="gallery-img lazy-image" loading="lazy">
                <div class="gallery-item-overlay">
                  <span class="gallery-item-zoom">+</span>
                </div>
              </div>
            `;

            // Asegurar el progressive reveal de imágenes dinámicas
            const imgEl = itemDiv.querySelector('.lazy-image');
            if (imgEl) {
              if (imgEl.complete) {
                imgEl.classList.add('lazy-image--loaded');
              } else {
                imgEl.addEventListener('load', () => {
                  imgEl.classList.add('lazy-image--loaded');
                });
              }
            }

            // Escuchador de clics para el lightbox interno de este proyecto
            itemDiv.addEventListener('click', () => {
              const modalGalleryItems = Array.from(galleryGrid.querySelectorAll('.gallery-item'));
              
              lightboxItems = modalGalleryItems.map(gi => ({
                src: gi.getAttribute('data-image'),
                title: gi.getAttribute('data-title')
              }));

              currentIndex = idx;
              showImage(currentIndex);

              // Detener la reproducción automática al abrir Lightbox
              pauseAutoSlide();

              lightbox.classList.add('active');
              lightbox.setAttribute('aria-hidden', 'false');
              document.body.classList.add('no-scroll');
            });

            galleryGrid.appendChild(itemDiv);

            // Crear el punto indicador de carrusel correspondiente
            if (carouselDotsContainer) {
              const dot = document.createElement('button');
              dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
              dot.setAttribute('aria-label', `Ir a diapositiva ${idx + 1}`);
              dot.addEventListener('click', (e) => {
                e.stopPropagation();
                goToSlide(idx);
              });
              carouselDotsContainer.appendChild(dot);
            }
          });
        }

        // Mostrar el modal y arrancar el carrusel
        currentCarouselIndex = 0;
        updateCarousel();
        startAutoSlide();

        projectModal.classList.add('active');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
      });
    });

    // Cierre del modal con botón ×
    if (projectModalClose) {
      projectModalClose.addEventListener('click', closeProjectModal);
    }

    // Cierre al hacer clic fuera del modal (overlay)
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // Teclado general (ESC, flechas lightbox)
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
