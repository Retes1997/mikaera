# 📸 Mikáera Studio - Guía Rápida y Humana del Portafolio

> [!NOTE]
> **Este archivo es exclusivamente el Manual de Usuario y Mantenimiento de Mikáera Studio.** Si lo que deseas es crear un nuevo sitio web independiente tomando este proyecto como plantilla base, debes consultar el archivo [creacion_nuevo_proyecto.md](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/creacion_nuevo_proyecto.md).

¡Bienvenido! Este es el portafolio profesional de fotografía y dirección visual para **Mikáera Studio** (Andrez Escobar).

Esta guía está redactada de forma directa y sencilla para que entiendas cómo funciona la web, cómo reemplazar el contenido de demostración por tus fotos y textos reales, y cómo mantener el sitio impecable, responsivo y ultra-rápido.

---

## 📂 ¿Cómo está organizado el proyecto? (Lo esencial)

No te preocupes por la cantidad de archivos internos, solo necesitas conocer estas carpetas clave si deseas realizar modificaciones:

* **`assets/images/`**: Aquí guardas todas tus fotos organizadas por carpetas (`portfolio/` para las galerías de trabajos, `services/` para las portadas de tus paquetes, y `about/` para tus fotos de perfil).
* **`css/`**: Los estilos visuales. Si necesitas cambiar un color, fuente o espaciado global, el archivo principal es [css/base/variables.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/css/base/variables.css) (ahí están declarados todos los colores del modo claro/oscuro).
* **`js/`**: La lógica de interacción (filtros de galería, carga dinámica de modales, carruseles y validación de formularios).

---

## ⚡ Paso a Paso: Cómo cambiar la información demo por la real

Aquí tienes el checklist directo para personalizar tu sitio en minutos de forma autónoma:

### 1. Cambiar las fotos y textos de tu Portafolio (Inicio)
Toda la información de la galería principal se administra desde un solo archivo: [js/home.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/js/home.js).
Abre ese archivo y edita el objeto `PROJECTS_DATA` reemplazando los textos de muestra por los tuyos. Cada proyecto sigue esta estructura lógica:

```javascript
"1": { // ID único que debe coincidir con el HTML
  categoryTag: "Estudio", // Categoría visual en la tarjeta
  titleHtml: "Luz y Sombras <span>de Otoño</span>", // El texto dentro de <span> se pintará de color dorado
  client: "Revista Vogue Latam",
  year: "2025",
  service: "Dirección Creativa & Fotografía",
  heroImage: "assets/images/portfolio/proyecto-1/hero.webp", // Portada vertical (recomendado: 800 x 1000px)
  conceptHighlight: "Frase corta e impactante sobre el concepto.",
  conceptParagraphs: [ // Párrafos explicativos
    "Párrafo 1...",
    "Párrafo 2..."
  ],
  credits: { // Créditos creativos que aparecen a la derecha
    styling: "Sofía López",
    model: "Ana María Silva",
    makeup: "Carlos Ruiz",
    camera: "Sony A7R V"
  },
  gallery: [ // Fotos que rotan automáticamente en el carrusel de este proyecto
    // 'wide: true' para fotos horizontales y 'wide: false' para fotos verticales/cuadradas
    { url: "assets/images/portfolio/proyecto-1/toma-1.webp", title: "Título I", wide: true },
    { url: "assets/images/portfolio/proyecto-1/toma-2.webp", title: "Título II", wide: false }
  ]
}
```

### 2. Cambiar tus Paquetes y Tarifas (Servicios)
Abre el archivo [js/services.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/js/services.js) y edita el objeto `serviceDetails` para actualizar la información que se despliega en el modal de detalles de tus servicios:

```javascript
'pareja': { // Coincide con el atributo data-service en servicios.html
  num: '01',
  title: 'Sesión Pareja',
  text: 'Resumen rápido de lo que incluye.',
  duration: '2 Horas',
  price: 'S/ 450',
  image: 'assets/images/services/servicio-1.webp', // Portada del servicio
  features: [ // Lista ordenada de beneficios
    '25 fotografías editadas en alta resolución.',
    'Galería privada online.',
    'Hasta 2 cambios de vestuario.'
  ]
}
```

### 3. Activar tu Formulario de Contacto para recibir correos
1. Entra gratis en [Web3Forms](https://web3forms.com/), introduce tu correo electrónico y recibirás una clave (*Access Key*) en tu bandeja.
2. Abre [contacto.html](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/contacto.html) y busca la siguiente línea en la estructura del formulario:
   `<input type="hidden" name="access_key" value="AQUÍ_VA_TU_ACCESS_KEY" />`
3. Reemplaza `AQUÍ_VA_TU_ACCESS_KEY` por tu clave. A partir de ese momento, los mensajes de tus clientes llegarán directamente a tu buzón personal.

### 4. Configurar tu número de WhatsApp
Abre tus archivos HTML, busca la sección `BOTÓN DE WHATSAPP FLOTANTE` al final de la página y actualiza el enlace con tu número de teléfono real (usando el prefijo de país, ej: `51` para Perú):
```html
<a href="https://wa.me/51999999999?text=Hola%20Andrez,%20me%20interesa..." class="whatsapp-float" ...>
```


---

## 🎨 Reglas de Oro de Diseño y Código (Para mantener la web impecable)

Si tú o algún colaborador realiza cambios futuros, sigan estas pautas para mantener la estética premium y velocidad del sitio, y utilícenlas como base para la creación de futuros proyectos:

1. **Usa siempre imágenes optimizadas (WebP):** Nunca subas fotos pesadas en JPG o PNG. Conviértelas a formato `.webp` y respeta resoluciones lógicas (máximo `1920px` de ancho para banners y `800px` para retratos verticales).
2. **Utiliza `width: 100%` en lugar de `100vw`:** Para elementos del flujo del documento (como el Hero o las secciones), usa siempre `100%`. La unidad `vw` calcula el ancho sumando la barra de desplazamiento física del navegador, lo cual provoca desbordes horizontales accidentales en pantallas de escritorio.
3. **El truco de la barra de scroll estable:** El sitio tiene configurada la propiedad `scrollbar-gutter: stable` en el archivo [reset.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/css/base/reset.css). Esto reserva un canal constante en la pantalla para la barra de desplazamiento, asegurando que el diseño nunca dé "saltos" molestos hacia los lados cuando el usuario navegue entre páginas de diferente longitud.
4. **Programación segura en JavaScript:** Si creas o editas algún script, comprueba siempre si el elemento existe en el HTML antes de asignarle un escuchador de eventos (ej. `if (miBoton) { miBoton.addEventListener(...) }`). Esto previene que se lancen errores fatales en consola al visitar páginas que no contienen dicho botón.
5. **Respeta los Design Tokens:** Nunca escribas códigos de color o tamaños fijos (*hardcoded*) en el CSS de tus secciones. Usa siempre las variables centralizadas de [variables.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/css/base/variables.css) (ej: `var(--color-bg)` o `var(--color-accent)`). Así, el sitio mantendrá la armonía de forma automática tanto en modo claro como en modo oscuro.
6. **Alineación del diseño de servicios en horizontal:** Para mantener una simetría visual de alta gama en la página de Servicios, las tarjetas se alinean automáticamente. A) Los títulos `.service-title` se limitan estrictamente a 1 línea en CSS (`white-space: nowrap`), truncándose con puntos suspensivos (`...`) si exceden el ancho; al pasar el cursor (hover), el navegador muestra de inmediato un cuadro flotante con el título completo mediante el atributo `title` asignado en `js/services.js`. B) Las descripciones `.service-text` se alinean por fila: el script detecta cuál es la descripción con menos líneas en esa fila y trunca las demás a esa misma cantidad agregando `...`. Esto asegura una cuadrícula impecable y uniforme en escritorio/tablets, mientras que en móviles fluye libremente.
7. **Diseño de modales responsivos y estables (dvh):** Al crear o modificar ventanas emergentes (modales) en el proyecto, utiliza siempre la propiedad `max-height: 90dvh` (con su respectivo fallback de compatibilidad `max-height: 90vh`) junto con `overflow-y: auto`. La unidad de altura dinámica del viewport (`dvh`) recalculará el espacio útil de pantalla en dispositivos móviles solo cuando las barras de herramientas del navegador se contraigan o expandan dinámicamente, evitando que los pies del modal (como botones de reserva) queden ocultos bajo la interfaz del sistema o que la caja sufra saltos visuales estáticos permanentes.
8. **Usabilidad y Contraste de Textos en Selectores (Móvil):** No dependas de los estados `:hover` para que los textos de navegación o filtrado sean legibles. Los colores de texto por defecto en menús, botones y listas desplegables deben tener un alto contraste nativo inicial (mínimo `#e2e2e2` sobre fondos oscuros y `#1e1e1e` sobre claros) para asegurar una usabilidad táctil clara en móviles donde el cursor físico no existe.
9. **Filtros Híbridos para Portafolios (Inline + Dropdown):** Para evitar que una fila larga de botones se fragmente o se amontone en varias líneas en pantallas medianas o móviles (rompiendo el estilo minimalista editorial), mantén visibles solo los 4-5 filtros más relevantes de forma inline y agrupa el resto en un selector desplegable premium con efecto de cristal esmerilado (*glassmorphism*). Cuando un elemento del dropdown esté activo, el botón trigger principal debe cambiar su texto de forma dinámica para reflejar la categoría seleccionada.
10. **Alineación Simétrica de Elementos Flotantes (Sidebar Spacing):** Elementos flotantes como barras laterales fijas, botones de redes o indicadores de origen no deben usar valores fijos de posicionamiento absoluto o márgenes arbitrarios (como `4%` o `20px`) que rompan la alineación. Deben enlazarse siempre a la variable horizontal del margen global (`right: var(--container-padding-x);`). Esto garantiza que el lateral derecho mantenga exactamente el mismo "aire" que el menú superior y que los elementos izquierdos (logo, textos), creando una retícula simétrica e invisible.
11. **Ejes de Composición y Balance del Peso Visual (Hero Alignment):** Evita la fatiga visual que produce colocar contenidos alineados a diferentes planos verticales independientes. Si en el Hero tienes un bloque denso de texto a la izquierda y un sidebar vertical a la derecha, alínealos sobre el mismo eje horizontal central (`align-items: center;` en el contenedor flex). Esto equilibra el peso de ambos bloques y elimina espacios vacíos raros o asimétricos en el centro de la pantalla.
12. **Coreografía de Carga Secuencial (Staggered Animation Reveal):** Para dotar de dinamismo y un aspecto de lujo editorial al sitio al cargar (estilo Apple o Leica), no animes secciones completas de golpe. En su lugar, aplica animaciones de desvanecimiento con traslación (`fadeInUp`) directamente sobre los elementos hijos de manera escalonada mediante retardos progresivos (`animation-delay: 0.15s`, `0.3s`, `0.45s`, `0.6s`, `0.7s`). Esto crea una revelación guiada extremadamente fluida y sofisticada.
13. **Fórmula de Elevación de Diseños Estáticos (mockups Figma / imágenes PNG):** Al trasladar maquetas de Figma o capturas PNG a código, no te limites a clonar píxeles estáticos. Debes aplicar por defecto pautas de interactividad premium que no estén representadas en la imagen plana:
    *   *Micro-animaciones interactivas:* Transiciones suaves de color y escala al hacer hover en botones y enlaces (`transition: var(--transition-smooth);`).
    *   *Transición de Toggles:* Desplegables y modales que aparezcan con desvanecimiento gradual en lugar de cambios bruscos de visibilidad.
    *   *Adaptabilidad a Tabletas:* Diseñar una distribución de rejilla intermedia equilibrada (generalmente con variables CSS que adapten los márgenes del 8% al 5%) para asegurar que la web sea hermosa en pantallas táctiles y laptops de baja resolución, no solo en móvil y escritorio de 1920px.
14. **Directiva de Responsividad y Auditoría Preventiva Automática:** Para garantizar una experiencia de usuario de alta fidelidad en cualquier dispositivo, cada vez que se diseñe, modifique o implemente una interfaz, se debe realizar una auditoría preventiva automática bajo los siguientes criterios obligatorios:
    *   *Evitar Desbordamiento Horizontal:* Ningún elemento del flujo debe empujar el ancho del documento más allá del viewport. Se prohíbe el uso de `width: 100vw` en elementos del flujo para evitar que la barra de scroll de escritorio genere desborde horizontal.
    *   *Auditoría de Resoluciones Intermedias (Breakpoints Críticos):* Es obligatorio verificar el comportamiento de la maqueta en la franja de `768px` a `1024px` (tabletas verticales/horizontales y laptops compactas), asegurando que los textos no se encabalguen y los elementos tengan suficiente "aire".
    *   *Zonas Táctiles de Alta Frecuencia:* Todo botón, toggle o enlace interactivo en resoluciones móviles debe cumplir con una zona táctil mínima de `44px x 44px` (idealmente `48px x 48px`) para evitar frustración al presionar con el dedo.
    *   *Prevención de Zoom Invasivo en iOS:* Todos los campos de formulario (`input`, `textarea`) deben tener un tamaño de fuente mínimo de `16px` en móviles para evitar que el navegador Safari en iPhone fuerce un zoom automático que descuadre el encuadre visual.
    *   *Estabilidad de Alturas en Interfaz Móvil (`dvh`):* Los elementos de pantalla completa como menús overlay o modales interactivos deben maquetarse con `dvh` (Dynamic Viewport Height) para evitar que las barras de direcciones retráctiles de los navegadores móviles tapen botones clave.
15. **Directiva de Integración y Despliegue Continuo Automático (CI/CD Local):** Al finalizar la resolución de cualquier prompt de cambios, el desarrollador/IA debe ejecutar de manera automática, consecutiva e inmediata el siguiente ciclo de despliegue para garantizar que el repositorio local, la nube y la web en producción estén en sincronización absoluta:
    *   *Git Staging & Commit:* Añadir todos los archivos modificados (`git add .`) y crear una confirmación semántica descriptiva (ej. `git commit -m "style: ..."`).
    *   *GitHub Sync:* Subir los commits inmediatamente al repositorio remoto en GitHub (`git push`).
    *   *Cloudflare Pages Deploy:* Ejecutar la publicación en producción del directorio raíz mediante Wrangler (`npx wrangler pages deploy .`), asegurando que los cambios se reflejen al instante en la web pública.
16. **Directiva de Aislamiento para Nuevos Proyectos (Evitación de Colisiones):** Si utilizas este repositorio como plantilla para crear un sitio web nuevo, es obligatorio seguir los pasos de aislamiento y desvinculación descritos en [creacion_nuevo_proyecto.md](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/creacion_nuevo_proyecto.md) antes de realizar cualquier cambio o despliegue. Esto evita sobrescribir la base de datos de temas, las analíticas de Umami y el despliegue en producción de Cloudflare de Mikáera Studio.
17. **Directiva de Revisión de Calidad Exhaustiva Preventiva y Educación Didáctica:** Para garantizar que el sitio funcione siempre a la perfección y libre de errores ocultos, el desarrollador/IA debe auditar exhaustiva y preventivamente el código del proyecto tras cada modificación. Cualquier advertencia visual del IDE (como rutas de esquemas rotas, variables sin usar o estilos huérfanos) debe resolverse de manera proactiva y autónoma. Asimismo, es obligatorio explicar estos ajustes de forma didáctica, sencilla y paso a paso al usuario para asegurar su entendimiento progresivo de la estructura técnica sin saturarlo de tecnicismos complejos.

---

## 📋 Checklist de Lanzamiento: ¿Qué debe estar funcionando al 100%?

Para asegurar un lanzamiento impecable del portafolio de Mikáera Studio, realiza las siguientes pruebas y validaciones:

### 1. 🔗 Redes Sociales y WhatsApp
*   [ ] **Enlaces de redes:** Verificar que los iconos de Instagram, Facebook y Vimeo en la barra lateral flotante, pie de página y fichas de proyectos redirijan a las cuentas definitivas del estudio.
*   [ ] **WhatsApp flotante:** Comprobar que el número en los botones flotantes de WhatsApp y modales de reserva incluya el prefijo de país (`51` para Perú) y que el mensaje predefinido se cargue correctamente en el chat (ej: `https://wa.me/51992625035?text=Hola%20Andrez...`).

### 2. 📧 Formulario de Contacto & Correo
*   [ ] **Web3Forms Key:** Asegurar que la clave *Access Key* generada de forma gratuita en Web3Forms esté colocada en [contacto.html](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/contacto.html).
*   [ ] **Validaciones en UI:** Escribir un mensaje de prueba para verificar que el textarea crezca dinámicamente de forma fluida y que el contador de caracteres alerte con color dorado al superar el 80% (400 caracteres).
*   [ ] **Envío asíncrono (AJAX):** Validar que al enviar el formulario aparezca la notificación Toast de éxito en la esquina inferior y que el correo llegue de forma inmediata a tu buzón sin recargar la página.


### 4. 🎨 Diseño, Colores & Accesibilidad
*   [ ] **Conmutador de Temas:** Probar el cambio entre modo claro y oscuro. Validar que la preferencia del usuario se guarde en `localStorage` y que los elementos carguen en el modo correcto al navegar entre páginas.
*   [ ] **Variables CSS (Design Tokens):** Verificar en [css/base/variables.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/css/base/variables.css) que los colores correspondan a la paleta champaña, dorada y gris seleccionada y que no haya valores de color harcodeados en las hojas de estilo específicas.
*   [ ] **Contraste de Texto:** Validar que los textos secundarios (`--color-text-secondary`) e indicativos sigan siendo legibles sobre el fondo en ambos modos.

### 5. 🔀 Redirecciones & Navegación (CTAs)
*   [ ] **Enlaces del Header/Footer:** Asegurar que los menús de navegación redirijan a las páginas correspondientes (`index.html`, `servicios.html`, `contacto.html`) y que los anclajes internos de sección (ej. `#portafolio` en index) funcionen suavemente.
*   [ ] **Botones de Reserva (CTA):** Verificar que todos los botones "Reservar Sesión" en la cabecera, modales de portafolio y modales de servicios lleven al formulario de contacto de manera fluida.
*   [ ] **Carruseles y Modales:** Comprobar el autoplay del carrusel en los detalles del portafolio y verificar que la navegación circular (flechas del lightbox) funcione de forma continua.

### 6. 📊 KPIs & Analítica
*   [ ] **Script de Umami:** Asegurar que el script de analítica de Umami en los `<head>` contenga tu `data-website-id` de producción oficial.
*   [ ] **Eventos Personalizados:** Verificar que los clics en botones de conversión (reservas de sesión, WhatsApp de barra lateral, envíos de formulario) registren eventos personalizados (`data-umami-event`) en tu panel de estadísticas.

### 7. ⚡ Rendimiento & Carga
*   [ ] **Imágenes en WebP:** Asegurar que todas las fotos en `assets/images/` estén convertidas a formato `.webp` y comprimidas adecuadamente (máximo 800px para galería, 1920px para banners hero).
*   [ ] **Lazy Loading:** Validar que las imágenes del portafolio se carguen a demanda al hacer scroll y muestren la transición suave de opacidad al completarse.
*   [ ] **Estabilidad del Scroll:** Verificar que no existan desbordes horizontales accidentales en resoluciones de pantalla comunes (escritorio, tablet y móvil).

---

## 📊 Guía de Negocio: Analítica (KPIs) y Optimización de Conversión (CRO)

Para un estudio fotográfico premium, el sitio web no es solo una galería bonita; es una **herramienta de adquisición de clientes de alto valor**. Esta sección detalla los sistemas de optimización implementados en el código y cómo utilizarlos para hacer crecer tu negocio.

### 1. 📈 Analítica de Conversión (Umami Analytics)
En lugar de herramientas complejas y pesadas como Google Analytics (que ralentizan el sitio y requieren consentimientos de cookies invasivos), el portafolio utiliza **Umami Analytics**. Es liviano, privado y rápido.

El sitio tiene configurados **eventos de seguimiento específicos** que miden el comportamiento de tus usuarios. Puedes ver estas métricas en tu panel de control de Umami:

*   **Medición de Reservas (CTA Principal):**
    *   `Click Reservar Sesión - Hero`: Mide cuántas personas se interesan por tus servicios inmediatamente al entrar.
    *   `Click Reservar Sesión - Modal Proyecto`: Mide el impacto inspiracional de tus proyectos individuales (cuántos reservan después de ver un modal de fotos).
    *   `Click Reservar Sesión - Servicios`: Mide la efectividad de tu catálogo de tarifas.
*   **Canales de Contacto Directo:**
    *   `Click WhatsApp - Barra Lateral` y `Click WhatsApp - Flotante`: Mide qué tan preferido es el canal de chat instantáneo versus el correo.
    *   `Formulario de Contacto - Envío Exitoso` (configurado en [js/contact.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/js/contact.js)): Mide las cotizaciones formales completadas.

> [!TIP]
> **Cómo usar estos datos:** Si notas que el evento `Click Reservar Sesión - Modal Proyecto` es alto pero los envíos de formulario son bajos, significa que tus fotos enamoran al cliente pero el formulario de contacto tiene algún obstáculo (o la tarifa es muy alta). Utiliza esta relación de conversión para optimizar tu oferta.

### 2. ⚡ Optimización de la Conversión (CRO - Conversion Rate Optimization)
Diseñamos el flujo del usuario para minimizar la "fricción" (el esfuerzo que hace el cliente para contratarte):
*   **CTA Inmediato en Modales:** Cada vez que el cliente abre una galería de fotos y se inspira, tiene un botón "Reservar Sesión" al final del modal. No necesita cerrar la foto y buscar la página de contacto.
*   **Textarea Adaptable:** En [contacto.html](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/contacto.html), el cuadro de texto para el mensaje no tiene barra de scroll. Crece contigo mientras escribes, lo que psicológicamente hace que escribir se sienta más fluido y natural.
*   **Contador con Alerta:** Ayuda al usuario a saber cuánto ha escrito sin sobrepasar el límite de la API, previniendo errores de envío frustrantes.


---

## 🗣️ Cómo pedirle cambios a Antigravity (IA)

Cuando trabajes conmigo para solicitar nuevos diseños o funciones, utiliza esta fórmula simple en tus mensajes para obtener resultados óptimos al primer intento:
* **El Objetivo (Qué):** Qué sección o elemento necesitas (ej: "Añadir un acordeón de Preguntas Frecuentes").
* **La Ubicación (Dónde):** En qué página y entre qué secciones va (ej: "En index.html, justo debajo de Testimonios").
* **El Estilo (Cómo):** Qué colores o comportamientos debe adoptar (ej: "Que use el estilo premium oscuro, texto dorado de acento y transiciones suaves de altura").

¡Yo me encargo de programarlo todo siguiendo el orden estructural y BEM del portafolio!
