# Mikáera Studio - Portafolio Profesional

Sitio web minimalista y premium para **Mikáera Studio**, el portafolio de fotografía y videografía profesional de Andrez Escobar.

Este proyecto está construido bajo una **arquitectura modular y escalable (Vanilla HTML/CSS/JS)** diseñada específicamente para facilitar la programación independiente de páginas y secciones por múltiples desarrolladores sin generar conflictos en Git ni efectos secundarios en el diseño.

---

## 📂 Estructura del Proyecto

```text
proyecto-web/
├── assets/                  # Recursos estáticos del sitio
│   ├── icons/               # Iconos en formato SVG
│   └── images/              # Logotipos, banderas y recursos de imagen
│       ├── about/           # Fotografías biográficas
│       ├── portfolio/       # Galería organizada por subcarpetas de proyectos
│       └── services/        # Imágenes de las tarjetas de servicios
├── css/                     # Estilos organizados por capas
│   ├── base/
│   │   ├── reset.css        # Reseteo CSS, tipografía común y estilos del Layout
│   │   └── variables.css    # Design Tokens (Colores, fuentes, espaciados y sombras)
│   ├── components/
│   │   ├── buttons.css      # Componente unificado de botones (.btn)
│   │   ├── lightbox.css     # Estilos de la galería lightbox
│   │   ├── modal.css        # Estilos de las ventanas emergentes
│   │   ├── preloader.css    # Estilos del preloader de pantalla
│   │   ├── reveal.css       # Estilos de animaciones al hacer scroll
│   │   ├── toast.css        # Alertas de notificaciones
│   │   └── whatsapp.css     # Botón flotante de WhatsApp Premium
│   ├── layout/
│   │   ├── header.css       # Barra de navegación principal
│   │   ├── footer.css       # Pie de página
│   │   └── sidebar.css      # Barra lateral flotante de redes sociales
│   ├── pages/
│   │   ├── home.css         # Estilos específicos de la página de Inicio (index.html)
│   │   ├── services.css     # Estilos específicos de la página de Servicios (servicios.html)
│   │   ├── contact.css      # Estilos específicos de la página de Contacto (contacto.html)
│   │   └── project-detail.css # Estilos específicos del detalle de proyecto (proyecto-detalle.html)
│   └── styles.css           # Archivo indexador que importa todos los estilos en orden
├── js/                      # Lógica de programación aislada
│   ├── main.js              # Lógica global del Layout (Header, menú móvil, scroll reveals, transiciones)
│   ├── home.js              # Lógica específica de la página de Inicio (Filtros FLIP, Lightbox y Carrusel)
│   ├── services.js          # Lógica específica de Servicios (Carga dinámica de datos de modal y FAQ)
│   ├── contact.js           # Lógica específica de Contacto (Contador de texto, validación, Toast y Web3Forms)
│   └── project-detail.js    # Lógica específica del Detalle de Proyecto (Lightbox interno)
├── index.html               # Página de Inicio
├── servicios.html           # Página de Servicios y Tarifas
├── contacto.html            # Página de Formulario de Contacto
├── proyecto-detalle.html    # Plantilla de Detalle de Proyecto (Portafolio)
└── README.md                # Esta guía de desarrollo
```

---

## ⚡ Características y Herramientas Premium (Explicadas para Humanos)

El sitio cuenta con una serie de herramientas de nivel profesional que optimizan la velocidad, la estética visual, el posicionamiento en Google y la interacción en redes sociales. A continuación, se detalla qué hace cada característica, dónde está programada y cómo debes configurarla para pasar a producción con tu información real.

---

### 1. Diccionario de Datos del Portafolio (`PROJECTS_DATA` en `js/home.js`)
* **¿Qué hace?**  
  Toda la información del portafolio en la página principal se almacena en un diccionario JavaScript centralizado. Al hacer clic en un proyecto de la galería, se abre un modal interactivo que carga dinámicamente el título, el cliente, el año, el servicio brindado, un texto descriptivo, créditos del equipo y una galería de fotos con cambio automático de 5 segundos.
* **¿Dónde está programado?**  
  Archivo de datos y lógica de interacción: [js/home.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/js/home.js) (desde la línea 6 hasta la 1000 aprox.).
* **¿Cómo cambiarlo por tus proyectos reales?**  
  Abre `js/home.js` y modifica el objeto `PROJECTS_DATA` reemplazando los bloques demostrativos por tus datos reales. Aquí tienes la estructura exacta explicada paso a paso:
  ```javascript
  const PROJECTS_DATA = {
    "1": { // ID único que debe coincidir con el atributo 'data-id' en el HTML
      categoryTag: "Estudio", // Etiqueta visual de categoría
      titleHtml: "Luz y Sombras <span>de Otoño</span>", // Título. Lo que pongas dentro de <span> se pintará de color dorado accent.
      client: "Revista Vogue Latam", // Nombre de tu cliente o marca
      year: "2025", // Año del proyecto
      service: "Dirección Creativa & Fotografía", // Tipo de servicio brindado
      heroImage: "assets/images/portfolio/proyecto-1/hero.webp", // Portada que se muestra en el grid
      conceptHighlight: "Frase corta e impactante sobre el concepto del proyecto.", 
      conceptParagraphs: [ // Texto dividido en párrafos que explica el proyecto
        "Párrafo 1 detallando el concepto fotográfico y locación...",
        "Párrafo 2 detallando la colorimetría o ambiente..."
      ],
      credits: { // Créditos creativos que aparecen a la derecha en el modal
        styling: "Sofía López",
        model: "Ana María Silva",
        makeup: "Carlos Ruiz",
        camera: "Sony A7R V + FE 85mm f/1.4 GM"
      },
      gallery: [ // Carrusel interno de imágenes del proyecto
        // 'wide: true' hace que la imagen tome doble columna (horizontal). 'wide: false' la hace de una sola columna (cuadrada/vertical).
        { url: "assets/images/portfolio/proyecto-1/toma-1.webp", title: "Título de la foto 1", wide: true },
        { url: "assets/images/portfolio/proyecto-1/toma-2.webp", title: "Título de la foto 2", wide: false }
      ]
    }
  };
  ```
* **Especificaciones recomendadas para tus imágenes:**
  * **Portada (`heroImage`):** Formato WebP, resolución de **800 x 1000 píxeles** (orientación vertical) para que encaje perfectamente en la cuadrícula masry.
  * **Fotos horizontales (`wide: true`):** Formato WebP, resolución de **1920 x 1080 píxeles** (máximo 300 KB).
  * **Fotos verticales (`wide: false`):** Formato WebP, resolución de **800 x 1000 píxeles** (máximo 200 KB).

---

### 2. Diccionario de Datos de Servicios (`serviceDetails` en `js/services.js`)
* **¿Qué hace?**  
  De forma similar al portafolio, las tarjetas de la página de Servicios abren un modal detallado al dar clic en "Ver Detalles". Toda la información de duración, precios y lista de beneficios se genera de manera dinámica en JavaScript.
* **¿Dónde está programado?**  
  Archivo de datos y lógica: [js/services.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/js/services.js) (desde la línea 7 hasta la 188).
* **¿Cómo cambiarlo por tus paquetes reales?**  
  Abre `js/services.js` y edita la constante `serviceDetails` siguiendo esta plantilla de campos:
  ```javascript
  const serviceDetails = {
    'pareja': { // Clave que coincide con el atributo 'data-service' en el HTML de servicios.html
      num: '01', // Número de servicio (ej: 01, 02)
      title: 'Sesión Pareja', // Nombre del paquete
      text: 'Resumen corto de lo que incluye.', // Descripción breve
      duration: '2 Horas', // Tiempo aproximado de la sesión
      price: 'S/ 450', // Precio en tu moneda local
      image: 'assets/images/services/servicio-1.webp', // Imagen de previsualización del paquete
      features: [ // Lista ordenada de beneficios que se pintará en el modal
        '25 fotografías en alta resolución editadas digitalmente.',
        'Galería en línea privada para descarga.',
        'Hasta 2 cambios de vestuario.'
      ]
    }
  };
  ```

---

### 3. Integración del Formulario de Contacto (Web3Forms)
* **¿Qué hace?**  
  Conecta el formulario de contacto con la API de Web3Forms de forma asíncrona (AJAX). Cuando el cliente presiona "Enviar Mensaje", los datos se validan, el botón de envío muestra "Enviando..." y se deshabilita para evitar clics dobles, y al completarse con éxito se despliega una alerta elegante tipo Toast y se limpia el formulario.
* **¿Dónde está programado?**  
  * Estructura HTML: [contacto.html](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/contacto.html) (dentro del tag `<form id="contact-form">`).
  * Estilos Toast: [css/components/toast.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/css/components/toast.css)
  * Lógica de Petición AJAX: [js/contact.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/js/contact.js)
* **¿Cómo configurarlo para recibir correos en tu buzón personal?**  
  1. Ingresa gratis en [Web3Forms](https://web3forms.com/) y registra el correo electrónico donde deseas recibir las notificaciones de tus clientes. Te enviarán una clave de acceso única (Access Key) a tu correo.
  2. Abre [contacto.html](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/contacto.html) y busca las siguientes líneas del formulario:
     ```html
     <!-- Reemplaza el value por tu Access Key real de Web3Forms -->
     <input type="hidden" name="access_key" value="AQUÍ_VA_TU_ACCESS_KEY" />
     
     <!-- Opciones de personalización de correos (Cámbialas por tus preferencias) -->
     <input type="hidden" name="subject" value="Nuevo Mensaje - Mikáera Studio" />
     <input type="hidden" name="from_name" value="Mikáera Web Form" />
     
     <!-- Filtro anti-spam invisible (Honeypot) -->
     <input type="checkbox" name="botcheck" class="hidden" style="display: none;" />
     ```
  3. Reemplaza `"AQUÍ_VA_TU_ACCESS_KEY"` por la clave que recibiste. A partir de ese momento, cada envío se enviará directo a tu bandeja.

---

### 4. Marcado Estructurado JSON-LD (SEO Local en Google)
* **¿Qué hace?**  
  Es un bloque de metadatos invisibles en formato Schema.org dentro del código de cada página. Google lee este bloque para catalogar tu marca directamente y posicionarla de forma premium en búsquedas de mapas locales (por ejemplo, cuando alguien busque "fotógrafo retrato Lima" o el nombre de tu marca "Mikáera Studio").
* **¿Dónde está programado?**  
  En el `<head>` de los 4 archivos HTML del proyecto, dentro de la etiqueta `<script type="application/ld+json">`.
* **¿Cómo configurarlo con tu información real?**  
  Abre cada página HTML (`index.html`, `servicios.html`, `contacto.html`, `proyecto-detalle.html`) y busca el script JSON-LD. Modifica los textos entre comillas siguiendo esta guía:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mikáera Studio", // Nombre comercial de tu marca o estudio
    "image": "assets/images/logo.svg", // Ruta a tu logotipo
    "url": "https://mikaerastudio.com", // Tu dominio real una vez publicado el sitio
    "telephone": "+51 999 999 999", // Tu teléfono o WhatsApp de contacto comercial
    "priceRange": "$$", // Rango de precios ($ = económico, $$ = moderado, $$$ = exclusivo)
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Camino Real 1234", // Dirección física de tu estudio u oficina
      "addressLocality": "San Isidro", // Distrito
      "addressRegion": "Lima", // Provincia / Departamento
      "postalCode": "15073", // Código postal
      "addressCountry": "PE" // Código de país en formato ISO (PE para Perú)
    },
    "geo": { // Coordenadas geográficas exactas de tu ubicación (búscalas en Google Maps)
      "@type": "GeoCoordinates",
      "latitude": -12.0968,
      "longitude": -77.0356
    },
    "openingHoursSpecification": { // Días y horarios de atención al cliente
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [ // Enlaces oficiales de tus redes sociales para que Google las asocie a tu ficha de negocio
      "https://www.instagram.com/mikaera.studio",
      "https://www.facebook.com/mikaera.studio",
      "https://vimeo.com/mikaerastudio"
    ],
    "founder": {
      "@type": "Person",
      "name": "Andrez Escobar", // Tu nombre como fundador y fotógrafo principal
      "jobTitle": "Director Visual & Fotógrafo",
      "sameAs": "https://www.instagram.com/andrez.escobar" // Tu Instagram personal
    }
  }
  ```

---

### 5. Metadatos de Redes Sociales (Open Graph y Twitter Cards)
* **¿Qué hace?**  
  Genera la tarjeta de previsualización con título personalizado, descripción premium e imagen destacada del portafolio cuando se comparte el enlace en chats de WhatsApp, Instagram, Facebook, Twitter, Telegram, etc.
* **¿Dónde está programado?**  
  En el `<head>` de los 4 archivos HTML del proyecto, justo debajo de las etiquetas SEO clásicas.
* **¿Cómo configurarlo?**  
  Para que las redes sociales puedan descargar la imagen de vista previa, la etiqueta `og:image` requiere obligatoriamente una **URL absoluta** (que inicie con `http://` o `https://`). Cuando configures tu dominio final, abre los HTML y cambia la dirección temporal por la tuya:
  ```html
  <!-- index.html (Vista previa del primer proyecto) -->
  <meta property="og:url" content="https://tudominio.com" />
  <meta property="og:image" content="https://tudominio.com/assets/images/portfolio/proyecto-1/hero.webp" />
  <meta name="twitter:image" content="https://tudominio.com/assets/images/portfolio/proyecto-1/hero.webp" />
  
  <!-- servicios.html (Vista previa de servicios) -->
  <meta property="og:url" content="https://tudominio.com/servicios.html" />
  <meta property="og:image" content="https://tudominio.com/assets/images/services/servicio-1.webp" />
  
  <!-- contacto.html (Vista previa del retrato del autor) -->
  <meta property="og:url" content="https://tudominio.com/contacto.html" />
  <meta property="og:image" content="https://tudominio.com/assets/images/about/andrez-escobar.webp" />
  
  <!-- proyecto-detalle.html (Detalle de un proyecto del portafolio) -->
  <meta property="og:url" content="https://tudominio.com/proyecto-detalle.html" />
  <meta property="og:image" content="https://tudominio.com/assets/images/portfolio/proyecto-detalle/hero.webp" />
  ```
* **Medida sugerida para las imágenes de preview:**
  * Crea imágenes WebP o JPG optimizadas con dimensiones exactas de **1200 x 630 píxeles** (proporción 1.91:1) para que no se recorten en los chats de WhatsApp o Facebook.

---

### 6. Transición de Página Limpia (Page Fade Transition)
* **¿Qué hace?**  
  Al hacer clic en un enlace interno, la web realiza un pestañeo de fundido a color sólido de **100ms** (de manera ultra veloz) y redirige. La nueva página carga bajo el mismo fondo sólido y, cuando está lista, se desvanece de inmediato en **100ms**, logrando una transición fluida que previene los parpadeos en blanco tradicionales.
* **¿Dónde está programado?**  
  * CSS: [css/components/preloader.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/css/components/preloader.css)
  * JS: [js/main.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/js/main.js) (tiempo de redirección de 100ms coordinado con el preloader).

---

### 7. Gestor de Tema Claro/Oscuro sin Parpadeo (Zero-Flash)
* **¿Qué hace?**  
  Almacena la preferencia del usuario en `localStorage`. Cuenta con un script inline ligero colocado en la parte superior del `<body>` que lee esta preferencia y aplica el atributo `data-theme` antes de pintar cualquier elemento HTML en la pantalla. Esto elimina el parpadeo blanco/negro al navegar.
* **¿Dónde está programado?**  
  * Script de Carga Temprana: En cada HTML, justo debajo de la etiqueta `<body>`:
    ```html
    <script>
      (function() {
        const savedTheme = localStorage.getItem('mikaera-theme') || 'dark';
        if (savedTheme === 'light') {
          document.body.setAttribute('data-theme', 'light');
        }
      })();
    </script>
    ```
  * Hoja de Estilos de Tokens: [css/base/variables.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/css/base/variables.css) (en el bloque `[data-theme="light"]`).

---

### 8. Animaciones de Scroll (`.scroll-reveal`)
* **¿Qué hace?**  
  Detecta mediante la API nativa de JavaScript `IntersectionObserver` cuándo un elemento entra en el campo visual del usuario al hacer scroll hacia abajo, aplicando la clase `.active` para desencadenar una transición CSS suave de opacidad y desplazamiento vertical de forma fluida.
* **¿Dónde está programado?**  
  * Estilos visuales: [css/components/reveal.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/css/components/reveal.css)
  * Lógica JavaScript: [js/main.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/js/main.js) (dentro del apartado de `IntersectionObserver`).
* **¿Cómo utilizarlo en tus secciones?**  
  Cualquier elemento al que le agregues la clase `scroll-reveal` en el HTML se ocultará automáticamente y se revelará con animación en cuanto el usuario haga scroll hacia él:
  ```html
  <div class="my-section scroll-reveal">
    <h2>Título animado</h2>
  </div>
  ```

---

### 9. Botón Flotante de WhatsApp Premium
* **¿Qué hace?**  
  Es un widget fijado en la esquina inferior derecha con animación de latido sutil para captar la atención de prospectos de manera no intrusiva.
* **¿Dónde está programado?**  
  * CSS: [css/components/whatsapp.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/css/components/whatsapp.css)
  * Estructura HTML: Al final del body de todas las páginas HTML.
* **¿Cómo configurarlo con tu número de teléfono real?**  
  Abre tus archivos HTML, busca la sección `BOTÓN DE WHATSAPP FLOTANTE` y modifica la etiqueta de enlace `<a>` indicando tu número de Perú (`51`) sin espacios, guiones o el signo `+`, y escribe tu mensaje codificado para la web (usa `%20` en lugar de espacios):
  ```html
  <a href="https://wa.me/51999999999?text=Hola%20Mikáera%20Studio,%20deseo%20reservar%20una%20sesión..." class="whatsapp-btn" target="_blank" rel="noopener">
  ```

---

## 📱 Estándares de Diseño Responsivo y UX Móvil

Para asegurar que todo cambio o nueva sección mantenga el nivel premium responsivo del sitio web, se deben aplicar las siguientes directrices y reglas técnicas:

### 1. Puntos de Quiebre Estructurados (Breakpoints)
Las hojas de estilo utilizan cuatro puntos de quiebre fijos para reorganizar las capas de diseño en CSS:
* **Escritorio Alta Resolución (`min-width: 1600px`):** Para pantallas grandes. Aumenta ligeramente el tamaño de la tipografía del Hero (`58px`) y las dimensiones de secciones para evitar que el sitio se sienta vacío.
* **Tablets y Laptops Pequeñas (`max-width: 1024px`):** Reorganiza las grillas de portafolios, testimonios y servicios de 3 columnas a **2 columnas** (`grid-template-columns: repeat(2, 1fr)`). Ajusta los márgenes laterales del sitio de `8%` a `5%`.
* **Smartphones Generales (`max-width: 768px`):**
  * Colapsa las grillas a **1 sola columna** (`grid-template-columns: 1fr`).
  * Reorganiza la sección del Hero y el Sobre Mí para que fluyan de manera vertical y centrada.
  * Oculta la navegación horizontal y activa el menú hamburguesa móvil en pantalla completa.
* **Móviles Pequeños (`max-width: 480px`):** Reduce tipografías (ej. título del Hero a `28px`) y achica paddings de botones y modales para evitar desbordes en pantallas angostas (como el iPhone SE).

### 2. Tipografía Fluida (Fluid Typography)
No uses tamaños fijos en píxeles (`px`) para títulos principales en móvil. Todos los encabezados utilizan la función `clamp(min, preferred, max)` en [css/base/variables.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/css/base/variables.css), lo cual permite que la letra escale suave y continuamente según el ancho de la pantalla:
* `--font-size-h1`: `clamp(2.2rem, 5vw, 3.5rem)`
* `--font-size-h2`: `clamp(1.8rem, 4vw, 2.4rem)`
* `--font-size-h3`: `clamp(1.2rem, 3vw, 1.6rem)`

### 3. Menú Móvil Hamburguesa e Interacción de Scroll (Scroll Lock)
Al presionar el botón de menú móvil:
1. El botón hamburguesa rota sus barras para formar una "X" usando transformaciones CSS de 0.4s.
2. Se le añade la clase `.active` a la etiqueta `.main-navigation`, desplegando un overlay a pantalla completa con los enlaces de navegación.
3. Se inyecta la clase `body.no-scroll` en el elemento `body` para evitar que el usuario pueda hacer scroll en la página de fondo mientras el menú está abierto. Al hacer clic en cualquier enlace, el menú se cierra automáticamente y se libera el scroll.

### 4. Carrusel de Testimonios Deslizable (Swipe Slider) en Móvil
En computadoras, las opiniones se muestran en un grid estático. En móviles (`max-width: 768px`), el grid de testimonios se convierte en una lista deslizable con soporte de arrastre nativo:
```css
.testimonials-section .testimonials-grid {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Oculta barra en Firefox */
}
```
* Cada tarjeta de testimonio se ajusta a un ancho de `85%` (`flex: 0 0 85%`) y se alinea al inicio de la pantalla (`scroll-snap-align: start`). El `15%` restante permite ver la esquina de la tarjeta siguiente, invitando de forma visual y natural al usuario a deslizar horizontalmente con el dedo.

### 5. Modales y Tap Targets (Tamaño de Clic Táctil)
* **Tap Targets:** Todos los botones de interacción móvil (como la "X" para cerrar el modal o los botones de navegación de fotos) respetan las guías de diseño de Apple y Google, teniendo una dimensión mínima de **`44px x 44px`** para que puedan ser presionados fácilmente con el dedo sin cometer errores táctiles.
* **Autolimitación de Lightbox:** Las fotos ampliadas con el signo `+` se autolimitan verticalmente a un máximo del `70vh` (70% del alto de la pantalla del celular). Esto asegura que siempre quede espacio visible en la parte inferior para mostrar el título de la foto y evitar que la imagen se coma toda la pantalla del teléfono.

---

## 💎 Manual de Estilo Visual (Aesthetics & UI/UX)

Para que el proyecto mantenga su estética de "alta gama / editorial", todo cambio o adición debe respetar estos principios visuales:

* **Paleta de Colores**:
  * Fondo: Negro absoluto o ultra-oscuro (`#0d0d0d`).
  * Textos: Blanco puro (`#ffffff`) para jerarquía alta; gris plata (`#a6a6a6` o `#cccccc`) para secundarios.
  * Acento: Dorado cálido champaña (`#c5a880`) usado con extrema moderación (detalles, enlaces, bordes finos, iconos).
* **Tipografía y Aire**:
  * Fuente principal: *Montserrat* con espaciado amplio de caracteres (`letter-spacing: 0.15em` a `0.3em`).
  * Densidad visual baja: Mucho "aire" y espacio en blanco. Las secciones usan rellenos laterales del `8%` y rellenos verticales amplios (`120px`).
* **Micro-interacciones**:
  * Transiciones: Movimientos suaves de `0.4s` utilizando la curva de velocidad bezier `cubic-bezier(0.25, 0.8, 0.25, 1)`.
  * Efecto Elevación: Elevaciones de `translateY(-2px)` a `-5px` con sombras suaves en elementos interactivos al pasar el cursor (hover).

---

## 🎨 Guía de Desarrollo para Colaboradores

Para mantener el código limpio y libre de errores en equipo, todos los desarrolladores deben seguir obligatoriamente estas tres reglas:

### 1. Usar siempre los "Design Tokens" (variables.css)
**No está permitido escribir valores fijos (hardcoded) de píxeles o colores en las páginas**. Si necesitas dar estilos, utiliza las variables del archivo `css/base/variables.css`:
* **Colores**: `var(--color-bg)`, `var(--color-text-primary)`, `var(--color-accent)`.
* **Espaciados**: Utilizar la escala basada en 8px: `var(--space-xs)` (8px), `var(--space-sm)` (16px), `var(--space-md)` (24px), `var(--space-lg)` (48px), `var(--space-xl)` (80px), `var(--space-xxl)` (120px).
* **Tipografías**: Usar los tamaños fluidos responsivos `var(--font-size-h1)`, `var(--font-size-h2)`, `var(--font-size-body)`.

### 2. Aislamiento CSS por Sección (Namespacing)
Cuando programes una sección nueva, debes encapsular todos sus estilos dentro del selector de su sección o página padre.
* **Mal hecho ❌** (Afecta a todo el sitio):
  ```css
  h2 { font-size: 24px; margin-bottom: 20px; }
  .title { color: gold; }
  ```
* **Bien hecho ✅** (Afecta únicamente a tu sección):
  ```css
  .about-section h2 { font-size: 24px; margin-bottom: var(--space-sm); }
  .about-section .about-title { color: var(--color-accent); }
  ```

### 3. Uso de Componentes UI
Si necesitas colocar un botón en tu sección, utiliza el componente estandarizado de `css/components/buttons.css` en tu HTML:
* **Botón Principal**: `<a href="#" class="btn btn--primary">Texto</a>`
* **Botón Filtro / Secundario**: `<button class="btn btn--accent">Texto</button>`
* **Botón de Enlace de Texto**: `<button class="btn btn--link">Texto</button>`

### 4. Gestión y Optimización de Recursos (Imágenes y Archivos)
Cuando el usuario cargue o preocupe imágenes, documentos o recursos gráficos para el sitio, se deben procesar de forma proactiva bajo los siguientes estándares de rendimiento web:
* **Reconocimiento Proactivo:** La IA debe confirmar de inmediato el recibimiento de los recursos indicando algo como: *"Me has compartido estos recursos, procederé a convertirlos al formato más óptimo y estándar para la web sin perder calidad visual"*.
* **Conversión a WebP:** Las imágenes fotográficas pesadas (PNG, JPEG, etc.) deben ser convertidas y guardadas preferiblemente en formato `.webp` o `.avif` para acelerar la carga de la página.
* **Redimensión Lógica:** Limitar el tamaño de las imágenes a resoluciones racionales de pantalla (máximo `1920px` de ancho para banners panorámicos, y `800px` para elementos de tarjetas o grids de portafolio).
* **Nombres Semánticos (Kebab-Case):** Renombrar archivos usando nombres descriptivos y limpios en minúsculas y con guiones (ej. `sesion-pareja-olivar-01.webp` en lugar de `IMG_5923.JPG`).
* **Carga Progresiva (Lazy Loading):** Asignar siempre el atributo `loading="lazy"` y la clase `.lazy-image` a las imágenes que aparezcan más abajo de la primera sección visible (below the fold).

### 5. Estructura de Nomenclatura de Archivos (Naming Conventions)
Para que el portafolio y los servicios crezcan de forma ordenada y sin confusión, utiliza la siguiente estructura fija de nombres para tus archivos multimedia:

| Tipo de Recurso | Ruta de Carpeta | Nombre de Archivo | Propósito |
| :--- | :--- | :--- | :--- |
| **Portada de Proyecto** | `assets/images/portfolio/proyecto-[ID]/` | `hero.webp` | Imagen principal de miniatura y banner del proyecto. |
| **Galería de Proyecto** | `assets/images/portfolio/proyecto-[ID]/` | `toma-[1, 2, 3...].webp` | Fotos internas que se despliegan en el modal y la galería de detalles. |
| **Tarjeta de Servicio** | `assets/images/services/` | `servicio-[ID].webp` | Imagen representativa de la tarjeta y modal de cada servicio. |
| **Sobre Mí (About)** | `assets/images/about/` | `andrez-escobar.webp` | Foto del autor para la sección de biografía. |

> [!NOTE]
> Reemplaza `[ID]` por el número correspondiente en orden consecutivo (ej. `proyecto-19`, `servicio-13`). El script de la página leerá y mapeará automáticamente estas rutas basándose en el ID asignado en `js/home.js` y `js/services.js`.

---

## 🤖 Directrices Obligatorias para la IA (Antigravity)

Para evitar malentendidos o suposiciones sobre el estado del proyecto, la IA de desarrollo debe cumplir estrictamente con las siguientes reglas de comportamiento en cada mensaje:

1. **Verificación en Caliente:** Antes de afirmar si una función existe, sugerir una mejora o proponer cambios, la IA **debe leer y analizar el archivo actual en el disco** usando herramientas de lectura (`view_file` o `grep_search`). Está prohibido asumir estados basándose únicamente en resúmenes compactados de la conversación anterior.
2. **Auditoría de Duplicados:** Al recibir solicitudes de nuevas características, la IA primero debe buscar en el código si ya hay partes implementadas o configuradas de la misma (ej. llaves de APIs, formularios activos, scripts de validación) para evitar proponer cosas que el usuario ya resolvió o implementó previamente.
3. **Consistencia de Nomenclatura:** Toda imagen o recurso multimedia propuesto debe ajustarse estrictamente a la sección `5. Estructura de Nomenclatura de Archivos` de este documento.

---

## 🗣️ Guía de Prompts (Cómo solicitar cambios a Antigravity)

Para garantizar un código limpio, optimizado y sin efectos secundarios, utiliza esta guía estructurada como referencia para redactar tus solicitudes a la IA.

### 1. La Fórmula del Prompt Perfecto
Cada vez que pidas un cambio, intenta responder las siguientes 5 preguntas en tu mensaje:

| Elemento | ¿Qué debes escribir? | Ejemplo |
| :--- | :--- | :--- |
| **1. Objetivo (El Qué)** | Describe claramente la sección, página o cambio que necesitas. | *"Agregar una sección de Preguntas Frecuentes (FAQ)"* |
| **2. Ubicación (El Dónde)** | Especifica la página y el lugar exacto relativo a otras secciones. | *"En index.html, justo debajo de la sección de Testimonios"* |
| **3. Contenido (Los Datos)** | Indica qué textos, datos, imágenes o enlaces debe llevar. | *"Pon 3 preguntas con sus respuestas (puedes redactar tú los textos en tono elegante y directo)"* |
| **4. Estilo y Comportamiento** | Define cómo se ve y cómo se interactúa con el elemento. | *"Usa un diseño tipo acordeón donde las respuestas se desplieguen con suavidad al dar clic. Mantén el estilo Premium Dark"* |
| **5. Delegación de Control** | Dale autoridad a Antigravity para definir clases y selectores limpios. | *"Elige tú las clases de CSS respetando las reglas de nombres y nombres de variables de variables.css"* |

---

### 2. Plantillas de Prompts según el Caso

A continuación, tienes las plantillas exactas que puedes copiar y adaptar según tu necesidad:

#### Caso A: Añadir una Nueva Sección a una Página Existente
> *"Quiero agregar una nueva sección llamada **[Nombre de la Sección]** en **[Archivo HTML]**, colocada entre **[Sección de arriba]** y **[Sección de abajo]**. El contenido que debe llevar es **[Texto, lista, imágenes o formulario]**. Deseo que el diseño sea **[Grid de X columnas, columna a la izquierda y texto a la derecha, etc.]** y que siga la estética premium del sitio (dorados, negros y mucho aire). Por favor, escribe los estilos en **[Archivo CSS de la página]** de forma aislada y decide tú las clases usando BEM/Namespacing."*

#### Caso B: Modificar el Diseño o Estilos de una Sección Existente
> *"Quiero modificar el diseño visual de la sección **[Nombre de la Sección]** en la página **[Archivo HTML]**. El cambio consiste en **[ej. aumentar el espacio entre los bloques, cambiar la alineación del texto a la izquierda, cambiar las tarjetas a 3 columnas]**. Asegúrate de utilizar únicamente las variables de espaciado y colores de variables.css y de editar solo el bloque correspondiente en **[Archivo CSS de la página]** sin afectar selectores globales."*

#### Caso C: Agregar una Funcionalidad Interactiva (JavaScript)
> *"Quiero añadir interactividad a la sección **[Nombre de la sección]** en **[Archivo HTML]**. La función consiste en **[ej. que al hacer scroll la imagen tenga un zoom sutil, o un acordeón que se despliegue]**. Por favor, añade la lógica de forma defensiva en **[Archivo JS de la página]**, asegurándose de que no interfiera con otros scripts globales y que los cambios de visibilidad o animación se disparen mediante transiciones CSS con clases como `.active`."*

#### Caso D: Crear una Página Nueva desde Cero
> *"Quiero crear una nueva página llamada **[Nombre de la página]** (archivo **[nombre.html]**). Debe incluir el mismo Header y Footer del layout global. Su sección principal debe contener **[Contenido]**. Por favor, crea un archivo de estilos nuevo en `css/pages/` llamado **[nombre.css]**, impórtalo al final de `css/styles.css` y encapsula todo el estilo de la página bajo la clase contenedora principal `.nombre-page`. Haz lo mismo con un script en `js/` si es necesario."*

#### Caso E: Agregar Botón Flotante de Contacto (WhatsApp/Redes)
> *"Quiero agregar un botón flotante de **[WhatsApp/Red Social]** que permanezca fijo en la pantalla en la esquina **[inferior derecha/inferior izquierda]**. Al hacer clic, debe redirigir a **[Enlace de destino con mensaje pre-rellenado]**. Deseo que el diseño sea **[ej. discreto, circular, minimalista, con un icono SVG del logo]** y que tenga una micro-animación de **[ej. escala suave al pasar el cursor o pulso de brillo]**. Por favor, crea los estilos en un componente nuevo en `css/components/` y añade su estructura HTML de forma global en **[todos los archivos HTML / index.html]** de manera aislada y decide tú las clases."*

#### Caso F: Conectar Formulario de Contacto a Correo Externo
> *"Quiero conectar el formulario de contacto en **[contacto.html]** con **[Web3Forms / Formspree]** para recibir los correos de los clientes directamente en mi cuenta. Mi access key es **[Colocar Access Key]**. Configura los atributos HTML necesarios en el formulario, y maneja el envío de forma asíncrona (AJAX) en **[js/contact.js]** para que cuando el usuario envíe el formulario, el botón de envío cambie a estado de carga (ej. 'Enviando...') y, al completarse con éxito, se limpie el formulario, se active la alerta Toast flotante de confirmación sin recargar la página, y maneje posibles errores de conexión de forma defensiva."*

#### Caso G: Agregar Sección de Acordeón Interactivo (FAQ)
> *"Quiero agregar una sección de preguntas frecuentes (FAQ) en **[Archivo HTML]**, colocada **[Ubicación]**. La sección debe contener las siguientes preguntas y respuestas: **[Lista de preguntas y respuestas]**. Deseo que el diseño sea de tipo acordeón (donde al hacer clic en una pregunta, esta se expanda suavemente mostrando la respuesta y ocultando las demás). Por favor, escribe los estilos de forma aislada en **[Archivo CSS de la página]** y añade la lógica de interacción de forma defensiva en **[Archivo JS de la página]**, de modo que controle el cambio de clases (ej. `.active`) y las transiciones de altura suave. Decide tú las clases y la arquitectura."*

#### Caso H: Crear una Plantilla de Página de Detalle de Proyecto (Portafolio)
> *"Quiero crear una plantilla reutilizable de página de detalle de proyecto en un nuevo archivo HTML llamado **[proyecto-detalle.html]**. Esta página debe incluir el Header, Sidebar y Footer globales de Mikáera Studio. La estructura de la sección de contenido debe incluir: un encabezado del proyecto (título del proyecto, categoría/servicio, año, cliente y descripción conceptual del proyecto), una galería de imágenes del proyecto dispuestas en un grid elegante (con soporte para Lightbox si se hace clic), una ficha técnica o créditos a un costado o al final del proyecto, y una sección de navegación inferior para ir a 'Siguiente Proyecto' o volver al inicio. Los estilos deben guardarse en un nuevo archivo **[css/pages/project-detail.css]** encapsulando todo bajo la clase contenedora principal `.project-detail-page` e importarlo en `css/styles.css`."*

---

### 3. Comparativa: Cómo hablarle a Antigravity para triunfar

| Intención | Lo que NO debes hacer ❌ (Prompt Débil) | Lo que SÍ debes hacer ✅ (Prompt Profesional) |
| :--- | :--- | :--- |
| **Estilos** | *"Ponle un botón dorado brillante y haz que tenga un borde redondo grande y letras grandes."* | *"Coloca un botón en la sección. Usa el componente `.btn` con el modificador dorado `.btn--accent` y mantén la consistencia tipográfica de la escala del proyecto."* |
| **Ubicación** | *"Pon un bloque de contacto nuevo abajo de las fotos del portafolio."* | *"En index.html, agrega la sección 'Contacto Rápido' justo debajo de '.portfolio-section'. Escribe los estilos aislados en home.css."* |
| **Estructura** | *"Modifica los títulos de la web para que se vean más pequeños en celular."* | *"Modifica la responsividad de los títulos `.section-title` en reset.css dentro del media query de móviles para que utilicen un tamaño menor o un clamp más ajustado de variables.css."* |

---

## 🚀 Flujo de Trabajo en Git

Para realizar cambios de forma ordenada e independiente, se sugiere el siguiente flujo de trabajo:

1. **Crear una rama para la sección en la que vas a trabajar**:
   ```bash
   git checkout -b feature/nombre-de-seccion
   ```
2. **Programar los cambios localmente** (HTML, CSS y JS correspondientes).
3. **Preparar y guardar tus cambios (Commit)**:
   ```bash
   git add .
   git commit -m "feat: implementada sección X con estilos aislados"
   ```
4. **Subir tu rama a GitHub**:
   ```bash
   git push origin feature/nombre-de-seccion
   ```
5. **Crear un Pull Request en GitHub** para fusionar tus cambios de manera segura a la rama principal `main`.
