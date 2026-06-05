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
