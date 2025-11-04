# 🚀 Configuración para GitHub Pages

Este documento explica cómo desplegar el proyecto en GitHub Pages.

## 📋 Pasos para Desplegar

### 1. Crear Repositorio en GitHub

```bash
# Inicializar Git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit - VentaFolclorica"

# Conectar con tu repositorio de GitHub
git remote add origin https://github.com/TU_USUARIO/VentaFolclorica.git

# Subir cambios
git push -u origin main
```

### 2. Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`
5. Click en **Save**
6. Espera unos minutos y tu sitio estará disponible en:
   `https://TU_USUARIO.github.io/VentaFolclorica/`

## 🎯 Modo Demo vs Producción

Este proyecto tiene **dos modos de funcionamiento**:

### 🌐 Modo Demo (GitHub Pages)

**Archivo activo:** `js/demo.js`

- ✅ **Sin servidor requerido** - Funciona directamente en GitHub Pages
- ✅ **Productos estáticos** - 8 productos de demostración pre-cargados
- ✅ **Carrito funcional** - Usa LocalStorage del navegador
- ✅ **Interfaz completa** - Todas las animaciones y estilos funcionan
- ⚠️ **Sin autenticación** - Botones de login/dashboard ocultos
- ⚠️ **Sin base de datos** - Los cambios no se guardan

**Configuración actual en `index.html`:**

```html
<script src="js/demo.js"></script>
```

### 🔐 Modo Producción (Con Supabase)

**Archivos activos:** `js/main.js` + `js/home.js`

- ✅ **Base de datos real** - Supabase PostgreSQL
- ✅ **Autenticación completa** - Login, registro, sesiones
- ✅ **Dashboard administrativo** - CRUD de productos
- ✅ **Datos dinámicos** - Productos desde la base de datos
- ⚠️ **Requiere configuración** - Credenciales de Supabase
- ⚠️ **Requiere servidor** - No funciona con `file://`

**Para activar modo producción en `index.html`:**

```html
<!-- Comentar demo.js -->
<!-- <script src="js/demo.js"></script> -->

<!-- Descomentar estos -->
<script type="module" src="js/main.js"></script>
<script type="module" src="js/home.js"></script>
```

## 🎨 Características del Modo Demo

### Funcionalidades Activas

- ✅ Hero section animado
- ✅ Navegación responsive
- ✅ 8 productos con imágenes
- ✅ Carrito de compras funcional
- ✅ Contador de productos en carrito
- ✅ Notificaciones toast
- ✅ Animaciones y transiciones
- ✅ Diseño 100% responsive
- ✅ Menú móvil hamburguesa

### Productos de Demostración

1. **Huaraches Artesanales** - $650 (Oferta)
2. **Vestido Jalisco Premium** - $2,500 (Nuevo)
3. **Sombrero Charro Auténtico** - $1,200
4. **Rebozo Tradicional** - $450 (25% OFF)
5. **Blusa Bordada Oaxaca** - $750
6. **Falda Regional Veracruz** - $980 (Popular)
7. **Aretes de Plata 925** - $350
8. **Cinturón Piteado Charro** - $550

## 🔧 Personalización

### Cambiar Productos

Edita el archivo `js/demo.js` y modifica el array `demoProducts`:

```javascript
const demoProducts = [
    {
        id: 1,
        nombre: 'Tu Producto',
        categoria_nombre: 'Categoría',
        precio: 1000,
        precio_anterior: 1500, // Opcional
        badge: 'Nuevo', // Opcional
        estado: 'activo',
        imagen_url: 'URL_DE_TU_IMAGEN'
    },
    // ... más productos
];
```

### Cambiar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --color-terracota: #D2691E;
    --color-cobalto: #0047AB;
    --color-amarillo-sol: #FFD700;
    /* ... más colores */
}
```

### Cambiar Textos

Edita directamente el archivo `index.html`:

- **Hero title:** Línea ~80
- **Hero subtitle:** Línea ~85
- **Footer info:** Línea ~180

## 📱 Responsive Design

El sitio es completamente responsive y funciona en:

- 📱 **Móviles:** < 768px
- 📲 **Tablets:** 768px - 1024px
- 💻 **Desktop:** > 1024px

## 🎯 Verificación

### Checklist antes de publicar

- [ ] Verifica que `js/demo.js` esté activo en `index.html`
- [ ] Todas las rutas son relativas (sin `/` al inicio)
- [ ] Las imágenes cargan correctamente
- [ ] El CSS se aplica correctamente
- [ ] El carrito funciona (prueba agregar productos)
- [ ] El menú móvil funciona
- [ ] No hay errores en la consola del navegador

### Probar localmente

Antes de subir a GitHub, prueba localmente:

```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: VS Code Live Server
# Click derecho > Open with Live Server

# Opción 3: Node.js
npx serve
```

Luego abre: `http://localhost:8000`

## 🚨 Solución de Problemas

### El CSS no se carga

- Verifica que las rutas en `index.html` sean relativas:

  ```html
  <link rel="stylesheet" href="css/styles.css">
  ```

- NO uses: `/css/styles.css` (con `/` al inicio)

### Los productos no aparecen

- Verifica que `js/demo.js` esté incluido
- Revisa la consola del navegador (F12) para errores
- Asegúrate de que el DOM esté cargado antes de ejecutar JS

### Las imágenes no cargan

- Las imágenes usan URLs de Unsplash (requieren internet)
- Puedes reemplazarlas con imágenes locales en la carpeta `images/`

## 📊 Estadísticas del Proyecto

- **Peso total:** ~150 KB (sin imágenes)
- **Archivos:** 7 archivos principales
- **CSS:** ~900 líneas
- **JavaScript:** ~300 líneas (modo demo)
- **Compatible con:** Chrome, Firefox, Safari, Edge

## 🔗 Enlaces Útiles

- [GitHub Pages Docs](https://docs.github.com/es/pages)
- [Markdown Guide](https://www.markdownguide.org/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)
- [Unsplash](https://unsplash.com/) (Imágenes)

## ✨ Próximos Pasos

Después de publicar en GitHub Pages:

1. **Comparte el link** con clientes o en tu portfolio
2. **Personaliza los productos** con tus propias imágenes
3. **Agrega más páginas** (Sobre Nosotros, Contacto)
4. **Implementa la versión completa** con Supabase para producción
5. **Conecta un dominio personalizado** (opcional)

## 🎉 ¡Listo

Tu sitio de demostración está listo para GitHub Pages.

**URL de ejemplo:** `https://tu-usuario.github.io/VentaFolclorica/`

---

**💡 Tip:** Usa este demo para mostrar el diseño y luego implementa la versión completa con Supabase para un e-commerce real.
