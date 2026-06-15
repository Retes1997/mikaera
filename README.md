# 📸 Mikáera Studio - Manual del Portafolio

¡Bienvenido! Este es el portafolio profesional de fotografía y dirección visual para **Mikáera Studio** (Andrez Escobar). Este manual contiene las instrucciones mínimas indispensables para gestionar y mantener el sitio de forma sencilla.

---

## 📂 Estructura del Sitio
El sitio consta de 3 páginas principales y sus recursos:
* **[index.html](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/index.html)**: Portafolio de proyectos interactivo.
* **[servicios.html](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/servicios.html)**: Catálogo de paquetes y tarifas.
* **[contacto.html](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/contacto.html)**: Formulario de cotización.
* **`/assets`**: Imágenes organizadas en carpetas (`portfolio/`, `services/`, `about/`).
* **`/css`** y **`/js`**: Hojas de estilo y lógica interactiva de modales.

---

## ⚡ Guía Rápida para Editar Contenidos

### 1. Cambiar los Proyectos del Portafolio
Abre el archivo **[js/home.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/js/home.js)** y edita el objeto `PROJECTS_DATA`. Cada proyecto tiene la siguiente estructura que puedes personalizar:
```javascript
"1": {
  categoryTag: "Editorial de Moda",
  titleHtml: "Luz y Sombras <span>de Otoño</span>", // El texto en <span> se pinta de dorado
  client: "Revista Vogue Latam",
  year: "2025",
  service: "Dirección Creativa & Fotografía",
  heroImage: "assets/images/portfolio/proyecto-1/hero.webp", // Retrato portada (vertical)
  conceptHighlight: "Frase corta e impactante sobre el concepto.",
  conceptParagraphs: ["Párrafo explicativo 1...", "Párrafo explicativo 2..."],
  credits: { styling: "Sofía López", model: "Ana María", makeup: "Carlos Ruiz", camera: "Sony A7R V" },
  gallery: [ // Imágenes del carrusel (wide: true para horizontales, false para verticales)
    { url: "assets/images/portfolio/proyecto-1/toma-1.webp", title: "Toma I", wide: true }
  ]
}
```

### 2. Cambiar Tarifas y Detalles de Servicios
Abre el archivo **[js/services.js](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/js/services.js)** y edita el objeto `serviceDetails` para actualizar los modales de precios:
```javascript
'pareja': {
  num: '01',
  title: 'Sesión Pareja',
  text: 'Resumen rápido de lo que incluye.',
  duration: '2 Horas',
  price: 'S/ 450',
  image: 'assets/images/services/servicio-1.webp',
  features: ['25 fotos editadas.', 'Galería privada.', '2 cambios de vestuario.']
}
```

### 3. Activar el Formulario de Contacto
1. Consigue tu Access Key gratuita en [Web3Forms](https://web3forms.com/) ingresando tu correo.
2. Abre **[contacto.html](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/contacto.html)**, busca el campo oculto `access_key` y reemplaza el valor de prueba por tu clave:
   ```html
   <input type="hidden" name="access_key" value="AQUÍ_VA_TU_ACCESS_KEY" />
   ```

### 4. Cambiar tu número de WhatsApp
Busca en los 3 archivos HTML la sección `whatsapp-float` y edita el enlace con tu número (usando el prefijo de país, ej: `51` para Perú):
```html
<a href="https://wa.me/51999999999?text=Hola%20Andrez..." class="whatsapp-float">
```

---

## 🎨 Reglas de Oro de Código y Diseño (Para la IA y Colaboradores)

Sigue estas reglas para evitar fallas o desbordes visuales al editar el sitio:
1. **Imágenes en WebP:** Sube siempre las fotos en formato `.webp` optimizado (máximo 800px de ancho para retratos, 1920px para banners).
2. **Sin desbordes horizontales:** Usa siempre `width: 100%` en lugar de `100vw` para evitar el molesto scroll horizontal accidental en pantallas de escritorio.
3. **Variables CSS:** Utiliza los colores y tokens globales definidos en **[css/base/variables.css](file:///c:/Users/Retes/Documents/webs/primo-andrez/mikaera-sitio-oficial/css/base/variables.css)**. No escribas colores fijos en otros archivos CSS.
4. **JS Seguro:** Comprueba siempre si un elemento existe (`if (miBoton)`) antes de aplicarle eventos en JavaScript para evitar errores en la consola.
5. **Ciclo de Despliegue (CI/CD):** Al finalizar cualquier cambio, ejecuta consecutivamente:
   ```bash
   git add .
   git commit -m "feat/style: descripción del cambio"
   git push
   npx wrangler pages deploy .
   ```
