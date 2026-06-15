# 📸 Mikáera Studio - Manual Técnico del Portafolio

¡Bienvenido! Este es el manual técnico completo para la administración, mantenimiento y duplicación del sitio web de **Mikáera Studio** (Andrez Escobar). Contiene las pautas de arquitectura, guías de personalización y directivas de desarrollo para mantener el sitio optimizado y libre de errores.

---

## 📐 1. Arquitectura del Proyecto

El sitio está construido utilizando **HTML5 semántico, CSS3 modular (SMACSS-like) y JavaScript puro (Vanilla JS)** sin frameworks ni dependencias pesadas.

### A. Arquitectura de Hojas de Estilos (CSS)
El archivo principal **[css/styles.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/css/styles.css)** actúa como importador centralizado. Los estilos están organizados en capas dentro de la carpeta `/css`:
* **`/base`**: Variables globales de diseño (colores, fuentes, espaciados en [variables.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/css/base/variables.css)) y reinicio de estilos del navegador ([reset.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/css/base/reset.css)).
* **`/layout`**: Estructuras globales fijas (cabecera en [header.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/css/layout/header.css), pie de página en [footer.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/css/layout/footer.css) y barra de redes flotante en [sidebar.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/css/layout/sidebar.css)).
* **`/components`**: Elementos de interfaz reutilizables como botones, modales, alertas toast, lightbox, preloader de carga y widget flotante de WhatsApp.
* **`/pages`**: Estilos exclusivos y específicos para cada página ([home.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/css/pages/home.css), [services.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/css/pages/services.css), y [contact.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/css/pages/contact.css)).

### B. Arquitectura de Interactividad (JS)
* **[js/main.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/js/main.js)**: Controla el comportamiento global que persiste entre páginas, como el menú de navegación móvil y el sistema de temas oscuro/claro con persistencia en `localStorage`.
* **Archivos específicos de página**: Cargan únicamente en sus respectivas páginas para mantener la memoria limpia y evitar errores de consola:
  * **[js/home.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/js/home.js)**: Maneja los filtros del portafolio, el carrusel de imágenes del proyecto y la apertura del modal detallado.
  * **[js/services.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/js/services.js)**: Pobla los datos del modal de tarifas y controla el acordeón colapsable exclusivo de Preguntas Frecuentes (FAQ).
  * **[js/contact.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/js/contact.js)**: Realiza la validación en tiempo real del formulario, el envío asíncrono vía AJAX (Web3Forms API) y las alertas toast de éxito.

---

## ⚡ 2. Guía de Configuración de Contenidos

### A. Modificar Proyectos del Portafolio (Inicio)
Toda la información del portafolio se centraliza en el objeto `PROJECTS_DATA` en **[js/home.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/js/home.js)**. Cada proyecto sigue esta estructura que puedes editar:
* **`categoryTag`**: Nombre de la categoría visual en la tarjeta.
* **`titleHtml`**: Título del proyecto (el texto envuelto en `<span>` se pintará en color dorado).
* **`heroImage`**: Foto vertical de portada (recomendado: 800 x 1000px, formato `.webp`).
* **`gallery`**: Lista de fotos que rotan dentro del carrusel del proyecto. Usa `wide: true` para fotos horizontales y `wide: false` para fotos verticales/cuadradas.

### B. Modificar Paquetes y Tarifas (Servicios)
La información de las tarifas mostrada al hacer clic en "Ver Detalles" se configura en el objeto `serviceDetails` dentro de **[js/services.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/js/services.js)**. Modifica la duración, el precio, la imagen y la lista de características (`features`) de cada paquete.

### C. Activar el Formulario de Contacto
1. Registra tu correo electrónico de forma gratuita en [Web3Forms](https://web3forms.com/) para obtener tu Access Key.
2. Abre **[contacto.html](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/contacto.html)**, localiza el campo oculto `access_key` y reemplaza el valor de prueba por tu clave real:
   ```html
   <input type="hidden" name="access_key" value="AQUÍ_VA_TU_ACCESS_KEY" />
   ```

### D. Enlaces de WhatsApp
Busca en los archivos HTML (`index.html`, `servicios.html`, `contacto.html`) los enlaces que contengan `wa.me` y reemplaza el número demo por tu teléfono real (incluyendo el prefijo del país, ej: `51` para Perú):
```html
<a href="https://wa.me/51999999999?text=Hola%20Andrez..." class="whatsapp-float">
```

### E. Protección Anti-Spam (Honeypot)
El formulario de contacto incluye un campo especial oculto para capturar bots de spam:
```html
<input type="checkbox" name="botcheck" class="hidden" style="display: none;">
```
Este campo actúa como trampa ("honeypot"): los robots automáticos intentan rellenar todos los campos del formulario al enviar spam, pero los usuarios reales no lo ven y por tanto lo dejan vacío. Web3Forms detecta si el campo fue rellenado y, en caso afirmativo, bloquea el spam automáticamente sin necesidad de molestar a tus clientes con CAPTCHAs visuales.

---

## 🚀 3. Guía de Duplicación Segura y Aislamiento

Si deseas utilizar este proyecto como plantilla base para crear un sitio web completamente independiente, sigue este protocolo obligatorio de aislamiento para evitar colisiones en tus despliegues y sistemas locales:

1. **Duplicar carpeta:** Copia el directorio completo a una nueva ubicación física (ej. `c:/webs/nuevo-proyecto`).
2. **Desvincular Historial Git:** Elimina la carpeta oculta `.git` de la nueva ubicación para desligar el historial y el repositorio remoto original. Ejecuta en la terminal de la nueva carpeta:
   ```bash
   git init
   git add .
   git commit -m "initial commit: clonación segura de plantilla"
   git remote add origin <URL_DE_TU_NUEVO_REPOSITORIO_DE_GITHUB>
   git branch -M main
   git push -u origin main
   ```
3. **Aislar Proyecto en Cloudflare:** Abre el archivo **[wrangler.json](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/wrangler.json)** del nuevo proyecto y cambia la propiedad `"name": "mikaera"` por el nombre de tu nuevo sitio (ej: `"name": "nuevo-proyecto-fotos"`). *Si olvidas cambiar este nombre, Wrangler sobrescribirá la web de producción de Mikáera Studio.*
4. **Evitar Colisiones de Temas (LocalStorage):** Cambia el nombre de la clave del tema de colores en todos los HTMLs (línea de script en el `<head>`) y en la función de tema en `js/main.js`. Reemplaza `'mikaera-theme'` por `'nuevo-proyecto-theme'` para evitar que las configuraciones de modo oscuro se crucen en el navegador.
5. **Actualizar el Formulario de Contacto:** Registra el nuevo correo en Web3Forms y reemplaza la Access Key en `contacto.html`.

---

## 🎨 4. Directivas de Desarrollo y Diseño (Reglas de Oro)

Para garantizar la estabilidad del diseño, la responsividad y la carga ultra-rápida de la web, cualquier cambio debe cumplir con las siguientes normas:

* **Guía General de Imágenes:** Usa siempre formato `.webp` para que las fotos pesen poco y la web cargue instantáneamente. Como regla general, usa fotos verticales para retratos, horizontales para banners/carruseles y cuadradas o flexibles para las rejillas. Te iré guiando con los píxeles exactos a medida que editemos cada sección.
* **El Atributo `alt` (SEO y Accesibilidad):** Cada imagen debe incluir la propiedad `alt="Una descripción de la foto"` (por ejemplo: `alt="Retrato de una novia en el parque El Olivar"`). Esto ayuda a que Google entienda de qué es la foto y la muestre en los resultados de Google Imágenes, y también permite que los lectores de pantalla describan la foto para personas con discapacidad visual.
* **Sin desborde horizontal (Scroll Lateral):** Prohibido el uso de la unidad de medida `width: 100vw` en elementos del flujo del documento. Usa `width: 100%` para evitar desbordes causados por el cálculo de la barra de scroll en escritorios.
* **Respetar los Design Tokens:** No escribas códigos de colores fijos en los CSS de tus secciones. Llama siempre a las variables de [variables.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/css/base/variables.css) (ej: `color: var(--color-accent);`).
* **JavaScript Seguro:** Siempre comprueba si un elemento existe en la página actual (`if (miBoton)`) antes de asignarle un escuchador de eventos para evitar que se lancen errores fatales en consola.
* **Directivas de Responsividad Profesional:**
  * **Zonas táctiles:** Todo botón, toggle o enlace interactivo debe medir mínimo `44px x 44px` en móviles para facilitar su pulsación con el dedo.
  * **Inputs iOS:** Todos los campos de formulario (`input`, `textarea`) deben tener un tamaño de letra mínimo de `16px` para evitar que Safari en iPhone aplique un zoom automático invasivo.
  * **Alturas con `dvh`:** Al maquetar menús a pantalla completa o modales, utiliza la unidad `max-height: 90dvh` para evitar que las barras de dirección dinámicas de los navegadores móviles tapen botones clave.

---

## 🛠️ 5. Mantenimiento, Testeo Local y Ciclo CI/CD

### A. Probar Cambios Localmente
Para simular de forma exacta el comportamiento que tendrá el sitio una vez publicado en los servidores de Cloudflare Pages, abre una consola en tu carpeta de proyecto y ejecuta:
```bash
npx wrangler pages dev .
```
Esto levantará un servidor local (normalmente en `http://localhost:8788`) donde podrás navegar y comprobar las interacciones.

### B. Ciclo de Despliegue en Producción (CI/CD Local)
Una vez verifiques tus cambios en el servidor local, es obligatorio ejecutar consecutivamente la siguiente cadena de comandos para mantener el repositorio local, la nube y producción en sincronización absoluta:
```bash
git add .
git commit -m "feat/style: descripción corta y clara del cambio"
git push
npx wrangler pages deploy .
```

---

## 🔍 6. Resolución de Problemas Comunes (Troubleshooting)

* **¿Por qué los cambios que subí a Cloudflare no se ven en mi navegador?**
  * Es posible que tu navegador web tenga el diseño anterior en caché. Abre la consola de desarrollo (F12), haz clic derecho sobre el botón de recarga de la página y selecciona *"Vaciar caché y volver a cargar de manera forzada"*.
* **¿Por qué no me llegan los correos del formulario de contacto?**
  * Asegúrate de haber reemplazado la clave de Web3Forms correcta en [contacto.html](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/contacto.html) y de que tus carpetas de spam no estén bloqueando las alertas de Web3Forms.
* **¿Por qué el sitio tiene una barra de scroll hacia los lados en móviles?**
  * Algún contenedor o imagen tiene un ancho fijo superior al tamaño de la pantalla. Revisa tus archivos CSS y asegúrate de que todas las imágenes grandes utilicen `max-width: 100%` o `width: 100%`.
