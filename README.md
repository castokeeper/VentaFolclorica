# VentaFolclórica 🎭

## Sitio E-commerce de Accesorios y Vestuario de Danza Folclórica

> 🌐 **[Ver Demo en GitHub Pages](https://tu-usuario.github.io/VentaFolclorica/)** ← ¡Pruébalo ahora!

### 🚀 Características

**✨ Sistema Completo E-commerce:**

- 🔐 **Autenticación** - Login, registro y sesiones con Supabase
- 📊 **Dashboard Administrativo** - CRUD completo de productos
- 🗄️ **Base de Datos** - PostgreSQL con Supabase (RLS habilitado)
- 🛒 **Carrito de Compras** - Funcional con LocalStorage
- 📱 **Diseño Responsive** - Optimizado para todos los dispositivos
- 🎨 **UI Moderna** - Diseño vibrante inspirado en la cultura mexicana
- 🌐 **Demo en Vivo** - Funciona sin servidor en GitHub Pages

### 🎯 Dos Modos de Uso

#### 🌐 Modo Demo (GitHub Pages)

- ✅ **Sin configuración** - Funciona inmediatamente
- ✅ **Sin servidor** - Ideal para mostrar el diseño
- ✅ **Productos estáticos** - 8 productos de demostración
- 📖 Ver: `GITHUB_PAGES.md` para instrucciones

#### 🔐 Modo Producción (Con Supabase)

- ✅ **Base de datos real** - PostgreSQL
- ✅ **Autenticación completa** - Sistema de usuarios
- ✅ **Dashboard funcional** - Administra productos
- 📖 Ver: `SETUP.md` para instrucciones

### 🎨 Identidad Visual

**Paleta de Colores:**

- **Terracota** (#D2691E) - Color principal, representa la tierra y tradición
- **Azul Cobalto** (#0047AB) - Color secundario, profundidad y confianza
- **Amarillo Sol** (#FFD700) - Acentos vibrantes, celebración y alegría
- **Blanco Crudo** (#FAF9F6) - Fondo principal, limpieza y espacio
- **Rosa Mexicano** (#E4007C) - Acentos especiales
- **Verde Esmeralda** (#00A86B) - Elementos destacados

**Tipografía:**

- **Display:** 'Covered By Your Grace' - Para títulos con personalidad artesanal
- **Body:** 'Montserrat' - Sans-serif moderna y legible para textos

### � Guía de Instalación Rápida

1. **Lee el archivo `SETUP.md`** - Contiene instrucciones detalladas paso a paso
2. **Crea tu proyecto en Supabase** (gratuito)
3. **Ejecuta el script SQL** de `database/supabase_setup.sql`
4. **Configura las credenciales** en `js/supabase-config.js`
5. **Ejecuta un servidor local** (Live Server, Python, etc.)
6. **¡Listo!** 🎉

### 📁 Estructura del Proyecto

```text
VentaFolclorica/
├── index.html              # Página principal (Hero + Productos)
├── login.html              # Sistema de autenticación
├── dashboard.html          # Panel administrativo
│
├── css/
│   ├── styles.css          # Estilos globales y componentes
│   ├── auth.css            # Estilos de login/registro
│   └── dashboard.css       # Estilos del panel admin
│
├── js/
│   ├── supabase-config.js  # ⚙️ Configuración de Supabase (ACTUALIZAR AQUÍ)
│   ├── main.js             # JavaScript principal
│   ├── auth.js             # Lógica de autenticación
│   ├── dashboard.js        # Lógica CRUD del dashboard
│   └── home.js             # Carga de productos en home
│
├── database/
│   └── supabase_setup.sql  # Script completo para la BD
│
├── README.md               # Este archivo
└── SETUP.md               # Guía detallada de instalación
```

### 🗄️ Base de Datos

**Tablas implementadas:**

- ✅ `categorias` - Categorías de productos
- ✅ `productos` - Catálogo completo con precios, stock, imágenes
- ✅ `clientes` - Información de usuarios
- ✅ `ordenes` - Órdenes de compra
- ✅ `orden_items` - Detalles de cada orden
- ✅ `valoraciones` - Reseñas de productos

**Características de la BD:**

- Row Level Security (RLS) habilitado
- Triggers automáticos para actualización
- Índices optimizados
- Políticas de seguridad configuradas

### ✅ Funcionalidades Completadas

#### Frontend

1. **Hero Section** - Sección principal con:
   - Título impactante: "Viste tus Raíces, Baila con el Corazón"
   - Subtítulo descriptivo
   - Dos CTAs (Call-to-Action)
   - Decoraciones animadas con patrón mexicano
   - Diseño responsive

2. **Navegación** - Header fijo con:
   - Logo personalizado
   - Menú de navegación
   - Acceso condicional (login/dashboard)
   - Carrito de compras funcional
   - Menú móvil responsive

3. **Sección de Características** - 4 beneficios principales

4. **Catálogo de Productos**:
   - Carga dinámica desde Supabase
   - Tarjetas con hover effects
   - Precios y badges
   - Botón "Agregar al Carrito"
   - Productos placeholder si no hay datos

5. **Footer** - Completo con enlaces y newsletter

#### Autenticación

- ✅ Login con email y contraseña
- ✅ Registro de nuevos usuarios
- ✅ Validación de formularios
- ✅ Sesiones persistentes
- ✅ Logout seguro
- ✅ Protección de rutas

#### Dashboard Administrativo

- ✅ Panel con estadísticas en tiempo real
- ✅ **CRUD Completo de Productos**:
  - Crear productos nuevos
  - Editar productos existentes
  - Eliminar productos
  - Vista en tabla optimizada
- ✅ **Filtros y Búsqueda**:
  - Búsqueda por nombre/descripción
  - Filtro por categoría
  - Filtro por estado
- ✅ Modal para crear/editar productos
- ✅ Sidebar de navegación
- ✅ Diseño responsive
- ✅ Gestión de categorías

### 🛠️ Tecnologías Utilizadas

**Frontend:**

- HTML5 semántico
- CSS3 (Variables, Grid, Flexbox, Animaciones)
- JavaScript ES6+ (Módulos)
- Font Awesome (iconos)
- Google Fonts

**Backend:**

- Supabase (Backend as a Service)
- PostgreSQL (Base de datos)
- Supabase Auth (Autenticación)
- Row Level Security (Seguridad)

### 🔐 Seguridad

- **Autenticación JWT** con Supabase
- **Row Level Security** en todas las tablas
- **Políticas de acceso** granulares
- **Validación** en frontend y backend
- **Sesiones** seguras y persistentes

### 📱 Responsive Design

- ✅ Mobile First approach
- ✅ Breakpoints optimizados
- ✅ Menú móvil funcional
- ✅ Tablas responsivas
- ✅ Imágenes optimizadas

### 🔄 Próximos Pasos Sugeridos

1. **Página de Detalle de Producto** - Vista completa con galería
2. **Sistema de Checkout** - Proceso completo de compra
3. **Integración de Pagos** - Stripe, PayPal, MercadoPago
4. **Panel de Órdenes** - Gestión completa para clientes
5. **Sistema de Notificaciones** - Emails automáticos
6. **Analytics** - Estadísticas de ventas
7. **Sistema de Cupones** - Descuentos y promociones
8. **Wishlist** - Lista de deseos

### 💡 Cómo Usar

**Para Desarrolladores:**

1. Lee `SETUP.md` para instrucciones completas
2. Configura Supabase
3. Ejecuta el servidor local
4. Comienza a desarrollar

**Para Probar:**

1. Abre `index.html` con Live Server
2. Navega a `/login.html`
3. Crea una cuenta
4. Accede al dashboard en `/dashboard.html`
5. Crea tus primeros productos

### 🌟 Filosofía del Proyecto

"Viste tus Raíces, Baila con el Corazón" - Este proyecto busca conectar a las personas con la rica tradición de la danza folclórica mexicana, ofreciendo productos auténticos hechos por artesanos locales.

### 📞 Soporte

Si encuentras algún problema:

1. Revisa `SETUP.md` para solución de problemas comunes
2. Verifica la consola del navegador (F12)
3. Asegúrate de que Supabase está configurado correctamente

---

**Versión:** 2.0.0 (Con Supabase & Dashboard)  
**Última actualización:** Noviembre 2025

**Desarrollado con ❤️ para celebrar la cultura mexicana** 🇲🇽
