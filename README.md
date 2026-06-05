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
├── css/                     # Estilos organizados por capas
│   ├── base/
│   │   ├── reset.css        # Reseteo CSS, tipografía común y estilos del Layout
│   │   └── variables.css    # Design Tokens (Colores, fuentes, espaciados y sombras)
│   ├── components/
│   │   ├── buttons.css      # Componente unificado de botones (.btn)
│   │   ├── lightbox.css     # Estilos de la galería lightbox
│   │   ├── modal.css        # Estilos de las ventanas emergentes
│   │   └── toast.css        # Alertas de notificaciones
│   ├── layout/
│   │   ├── header.css       # Barra de navegación principal
│   │   ├── footer.css       # Pie de página
│   │   └── sidebar.css      # Barra lateral flotante de redes sociales
│   ├── pages/
│   │   ├── home.css         # Estilos específicos de la página de Inicio (index.html)
│   │   ├── services.css     # Estilos específicos de la página de Servicios (servicios.html)
│   │   └── contact.css      # Estilos específicos de la página de Contacto (contacto.html)
│   └── styles.css           # Archivo indexador que importa todos los estilos en orden
├── js/                      # Lógica de programación aislada
│   ├── main.js              # Lógica global del Layout (Header, menú móvil, scroll reveals)
│   ├── home.js              # Lógica específica de la página de Inicio (Filtros, Lightbox)
│   ├── services.js          # Lógica específica de Servicios (Carga dinámica de datos de modal)
│   └── contact.js           # Lógica específica de Contacto (Contador de texto, validación, Toast)
├── index.html               # Página de Inicio
├── servicios.html           # Página de Servicios y Tarifas
├── contacto.html            # Página de Formulario de Contacto
└── README.md                # Esta guía de desarrollo
```

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

---

## 🗣️ Guía de Prompts (Cómo solicitar cambios a Antigravity)

Para que Antigravity tome las mejores decisiones arquitectónicas y mantenga el proyecto escalable, utiliza esta estructura al solicitar modificaciones:

### Estructura ideal de un Prompt:
1. **Meta (El Qué)**: Qué quieres lograr (ej. *"Quiero agregar una sección de preguntas frecuentes (FAQ) en la página de servicios"*).
2. **Contexto (El Dónde)**: Dónde debe colocarse física y lógicamente.
3. **Contenido**: Qué datos o textos llevará (puedes pasarlo en bruto y dejar que Antigravity lo redacte con tono premium).
4. **Diseño / Comportamiento esperado**: Si quieres que se comporte de alguna forma (ej. *"Quiero que al hacer clic en una pregunta se despliegue la respuesta suavemente y que siga el estilo minimalista"*).
5. **Delegación de Control**: Confirma que el agente elija la nomenclatura de clases, estilos e interactividad adecuada.

### Ejemplos Prácticos:

* **Buen Prompt ✅** (Claro, describe el objetivo y delega la arquitectura):
  > *"Quiero agregar una nueva sección llamada 'Equipamiento' en index.html justo debajo de 'Sobre Mí'. Debe mostrar una lista minimalista de las cámaras y lentes que usamos. Solo pon 3 cámaras y 2 lentes con una descripción corta. Hazlo con diseño de grid y que siga el estilo premium y las variables de variables.css. Encapsula sus estilos en home.css de forma aislada y decide tú las clases."*

* **Mal Prompt ❌** (Confuso, intenta micro-gestionar el CSS o genera estilos globales):
  > *"Pon una sección de cámaras abajo de sobre mí. En el CSS ponle a los títulos color dorado y agrégale margen de 20px y ponle la tipografía Montserrat directamente en el archivo index.html."*

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
