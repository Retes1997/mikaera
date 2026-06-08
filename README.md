# 📸 Mikáera Studio - Guía Rápida y Humana del Portafolio

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

### 5. Configurar SEO y Vistas Previas en Redes Sociales
En el `<head>` de cada archivo HTML (`index.html`, `servicios.html`, etc.), reemplaza los títulos, descripciones y los enlaces de las etiquetas `og:image` y `twitter:image` por la URL absoluta de tu dominio definitivo (ej. `https://tudominio.com/assets/images/portfolio/proyecto-1/hero.webp`). De esta forma, al compartir tu web en WhatsApp, Instagram o X (Twitter), se generará automáticamente una tarjeta de previsualización profesional.

---

## 🎨 Las 6 Reglas de Oro de Diseño y Código (Para mantener la web impecable)

Si tú o algún colaborador realiza cambios futuros, sigan estas pautas para mantener la estética premium y velocidad del sitio:

1. **Usa siempre imágenes optimizadas (WebP):** Nunca subas fotos pesadas en JPG o PNG. Conviértelas a formato `.webp` y respeta resoluciones lógicas (máximo `1920px` de ancho para banners y `800px` para retratos verticales).
2. **Utiliza `width: 100%` en lugar de `100vw`:** Para elementos del flujo del documento (como el Hero o las secciones), usa siempre `100%`. La unidad `vw` calcula el ancho sumando la barra de desplazamiento física del navegador, lo cual provoca desbordes horizontales accidentales en pantallas de escritorio.
3. **El truco de la barra de scroll estable:** El sitio tiene configurada la propiedad `scrollbar-gutter: stable` en el archivo [reset.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/css/base/reset.css). Esto reserva un canal constante en la pantalla para la barra de desplazamiento, asegurando que el diseño nunca dé "saltos" molestos hacia los lados cuando el usuario navegue entre páginas de diferente longitud.
4. **Programación segura en JavaScript:** Si creas o editas algún script, comprueba siempre si el elemento existe en el HTML antes de asignarle un escuchador de eventos (ej. `if (miBoton) { miBoton.addEventListener(...) }`). Esto previene que se lancen errores fatales en consola al visitar páginas que no contienen dicho botón.
5. **Respeta los Design Tokens:** Nunca escribas códigos de color o tamaños fijos (*hardcoded*) en el CSS de tus secciones. Usa siempre las variables centralizadas de [variables.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/proyecto-web/css/base/variables.css) (ej: `var(--color-bg)` o `var(--color-accent)`). Así, el sitio mantendrá la armonía de forma automática tanto en modo claro como en modo oscuro.
6. **Alineación del diseño de servicios en horizontal:** Para mantener una simetría visual de alta gama en la página de Servicios, las tarjetas se alinean automáticamente por fila horizontal mediante JavaScript en `js/services.js`. El script: A) Detecta el título `.service-title` más alto de cada fila y ajusta todos los títulos de esa fila a esa misma altura (evitando recortes de texto); B) Calcula cuál es el párrafo descriptivo `.service-text` con menos líneas en esa fila y trunca los demás textos a esa misma cantidad agregando puntos suspensivos (`...`). Esto asegura que todos los elementos (títulos, textos y botones) comiencen y terminen en la misma línea exacta. En móviles, se desactiva y fluye de forma natural.

---

## 🗣️ Cómo pedirle cambios a Antigravity (IA)

Cuando trabajes conmigo para solicitar nuevos diseños o funciones, utiliza esta fórmula simple en tus mensajes para obtener resultados óptimos al primer intento:
* **El Objetivo (Qué):** Qué sección o elemento necesitas (ej: "Añadir un acordeón de Preguntas Frecuentes").
* **La Ubicación (Dónde):** En qué página y entre qué secciones va (ej: "En index.html, justo debajo de Testimonios").
* **El Estilo (Cómo):** Qué colores o comportamientos debe adoptar (ej: "Que use el estilo premium oscuro, texto dorado de acento y transiciones suaves de altura").

¡Yo me encargo de programarlo todo siguiendo el orden estructural y BEM del portafolio!
