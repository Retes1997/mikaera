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
│   ├── main.js              # Lógica global del Layout (Header, menú móvil, scroll reveals)
│   ├── home.js              # Lógica específica de la página de Inicio (Filtros, Lightbox)
│   ├── services.js          # Lógica específica de Servicios (Carga dinámica de datos de modal)
│   └── contact.js           # Lógica específica de Contacto (Contador de texto, validación, Toast)
├── index.html               # Página de Inicio
├── servicios.html           # Página de Servicios y Tarifas
├── contacto.html            # Página de Formulario de Contacto
├── proyecto-detalle.html    # Plantilla de Detalle de Proyecto (Portafolio)
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
> *"Quiero añadir interactividad a la sección **[Nombre de la sección]** en **[Archivo HTML]**. La función consiste en **[ej. que al hacer scroll la imagen tenga un zoom sutil, o un acordeón que se despliegue]**. Por favor, añade la lógica de forma defensiva en **[Archivo JS de la página]**, asegurándote de que no interfiera con otros scripts globales y que los cambios de visibilidad o animación se disparen mediante transiciones CSS con clases como `.active`."*

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
