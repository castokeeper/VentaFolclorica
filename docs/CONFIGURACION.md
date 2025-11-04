# Cambiar entre Modo Demo y Modo Producción

## 🔄 Para GitHub Pages (Modo Demo)

**Archivo: `index.html` (línea ~218)**

```html
<!-- MODO DEMO ACTIVO -->
<script src="js/demo.js"></script>

<!-- MODO PRODUCCIÓN DESACTIVADO
<script type="module" src="js/main.js"></script>
<script type="module" src="js/home.js"></script>
-->
```

## 🔄 Para Desarrollo Local (Modo Producción)

**Archivo: `index.html` (línea ~218)**

```html
<!-- MODO DEMO DESACTIVADO
<script src="js/demo.js"></script>
-->

<!-- MODO PRODUCCIÓN ACTIVO -->
<script type="module" src="js/main.js"></script>
<script type="module" src="js/home.js"></script>
```

Luego configura `js/supabase-config.js` con tus credenciales.

---

## 📝 Checklist de Configuración

### Para GitHub Pages

- [ ] Activar `demo.js` en index.html
- [ ] Verificar que todas las rutas sean relativas
- [ ] Probar localmente con `python -m http.server`
- [ ] Hacer commit y push a GitHub
- [ ] Activar GitHub Pages en Settings
- [ ] Verificar que el sitio cargue correctamente

### Para Producción

- [ ] Desactivar `demo.js` en index.html
- [ ] Activar `main.js` y `home.js`
- [ ] Crear proyecto en Supabase
- [ ] Ejecutar script SQL
- [ ] Configurar credenciales en `supabase-config.js`
- [ ] Probar autenticación
- [ ] Probar CRUD de productos
- [ ] Verificar dashboard

---

## 🎨 Personalización Rápida

### Cambiar colores principales

**Archivo: `css/styles.css` (líneas 1-15)**

```css
:root {
    --color-terracota: #D2691E;      /* ← Cambia aquí */
    --color-cobalto: #0047AB;        /* ← Cambia aquí */
    --color-amarillo-sol: #FFD700;   /* ← Cambia aquí */
}
```

### Cambiar productos de demo

**Archivo: `js/demo.js` (líneas 8-65)**

Edita el array `demoProducts`:

```javascript
const demoProducts = [
    {
        id: 1,
        nombre: 'Tu Producto Aquí',
        categoria_nombre: 'Categoría',
        precio: 1000,
        imagen_url: 'URL_IMAGEN'
    },
    // ... más productos
];
```

### Cambiar textos principales

**Archivo: `index.html`**

- **Hero title:** Línea ~82
- **Hero subtitle:** Línea ~87  
- **Footer:** Línea ~185

---

## 🚀 Comandos Útiles

```bash
# Servidor local Python
python -m http.server 8000

# Servidor local Node.js
npx serve

# Ver en navegador
http://localhost:8000
```

---

## 📞 Soporte

¿Problemas? Revisa:

1. `GITHUB_PAGES.md` - Para demo en GitHub Pages
2. `SETUP.md` - Para instalación con Supabase
3. Consola del navegador (F12) - Para ver errores
