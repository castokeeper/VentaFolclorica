# 📂 Estructura del Proyecto VentaFolclórica

```text
VentaFolclorica/
│
├── 📄 index.html                    # Página principal del sitio
├── 📄 login.html                    # Página de autenticación
├── 📄 dashboard.html                # Panel administrativo
│
├── 📁 css/
│   ├── styles.css                   # Estilos globales (500+ líneas)
│   ├── auth.css                     # Estilos de login/registro
│   └── dashboard.css                # Estilos del panel admin
│
├── 📁 js/
│   ├── supabase-config.js          # ⚙️ Configuración de Supabase (EDITAR AQUÍ)
│   ├── main.js                      # JavaScript principal
│   ├── auth.js                      # Lógica de autenticación
│   ├── dashboard.js                 # CRUD de productos
│   └── home.js                      # Carga de productos en home
│
├── 📁 database/
│   └── supabase_setup.sql          # Script SQL completo (EJECUTAR EN SUPABASE)
│
├── 📚 README.md                     # Documentación principal
├── 📚 SETUP.md                      # Guía de instalación detallada
├── 📚 PROYECTO_COMPLETADO.md        # Resumen de todo lo creado
├── 📚 INICIO_RAPIDO.txt            # Guía rápida de inicio
│
├── 🔧 supabase-config.example.js   # Ejemplo de configuración
├── 🔧 .gitignore                    # Archivos ignorados por Git
└── 📋 ESTRUCTURA.md                 # Este archivo
```

---

## 📄 Descripción de Archivos HTML

### 🏠 index.html (Página Principal)

**Secciones:**

- ✅ Header con navegación
- ✅ Hero section con título y CTAs
- ✅ Sección de características (4 beneficios)
- ✅ Productos destacados (carga desde BD)
- ✅ Footer con newsletter

**Funcionalidades:**

- Muestra productos desde Supabase
- Sistema de carrito (LocalStorage)
- Navegación responsive
- Acceso condicional al dashboard

---

### 🔐 login.html (Autenticación)

**Componentes:**

- ✅ Formulario de login
- ✅ Formulario de registro
- ✅ Toggle de contraseña
- ✅ Validación de campos
- ✅ Notificaciones toast

**Funcionalidades:**

- Registro de usuarios
- Inicio de sesión
- Integración con Supabase Auth
- Redirección automática

---

### 📊 dashboard.html (Panel Admin)

**Secciones:**

- ✅ Sidebar de navegación
- ✅ Panel de estadísticas
- ✅ Gestión de productos
- ✅ Gestión de categorías
- ✅ Modal para formularios

**Funcionalidades:**

- CRUD completo de productos
- Filtros y búsqueda
- Tabla responsive
- Protección por autenticación

---

## 🎨 Descripción de Archivos CSS

### 📐 css/styles.css (Estilos Globales)

**Contiene:**

- Variables CSS (colores, espaciados, etc.)
- Reset y estilos base
- Header y navegación
- Hero section con animaciones
- Tarjetas de productos
- Footer
- Responsive design

**Líneas:** ~800 líneas

---

### 🔒 css/auth.css (Estilos de Autenticación)

**Contiene:**

- Estilos del formulario de login
- Estilos del formulario de registro
- Animaciones de entrada
- Decoraciones de fondo
- Notificaciones toast
- Responsive para móviles

**Líneas:** ~400 líneas

---

### 📊 css/dashboard.css (Estilos del Dashboard)

**Contiene:**

- Sidebar de navegación
- Estadísticas (cards)
- Tabla de productos
- Modal de formularios
- Filtros y búsqueda
- Responsive design

**Líneas:** ~600 líneas

---

## ⚡ Descripción de Archivos JavaScript

### 🔧 js/supabase-config.js (Configuración)

**Contiene:**

- Configuración de Supabase ← **EDITAR CREDENCIALES AQUÍ**
- Clase `AuthManager` (autenticación)
- Clase `ProductManager` (productos)
- Clase `Utils` (utilidades)

**Funciones principales:**

- `login()`, `signup()`, `logout()`
- `fetchProducts()`, `createProduct()`, etc.
- `formatPrice()`, `showNotification()`

**Líneas:** ~350 líneas

---

### 🏠 js/main.js (JavaScript Principal)

**Contiene:**

- Navegación mobile
- Scroll suave
- Header dinámico
- Animaciones de entrada
- Newsletter form
- Funciones auxiliares

**Líneas:** ~150 líneas

---

### 🔐 js/auth.js (Lógica de Autenticación)

**Contiene:**

- Toggle entre login/registro
- Validación de formularios
- Manejo de errores
- Integración con AuthManager
- Redirecciones

**Líneas:** ~200 líneas

---

### 📊 js/dashboard.js (CRUD del Dashboard)

**Contiene:**

- Navegación del sidebar
- Carga de productos
- Filtros y búsqueda
- Modal de productos
- CRUD operations
- Estadísticas

**Funciones principales:**

- `loadProductos()`
- `editProduct()`
- `deleteProduct()`
- `filterProducts()`

**Líneas:** ~400 líneas

---

### 🛍️ js/home.js (Carga de Productos)

**Contiene:**

- Carga de productos desde Supabase
- Renderizado de tarjetas
- Sistema de carrito
- Productos placeholder
- Event listeners

**Funciones principales:**

- `loadFeaturedProducts()`
- `addToCart()`
- `updateCartCount()`

**Líneas:** ~250 líneas

---

## 🗄️ Base de Datos

### 📊 database/supabase_setup.sql

**Contiene:**

- 6 tablas principales
- Índices optimizados
- Triggers automáticos
- Políticas RLS
- Datos de ejemplo

**Tablas:**

1. `categorias` - Categorías de productos
2. `productos` - Catálogo completo
3. `clientes` - Usuarios registrados
4. `ordenes` - Órdenes de compra
5. `orden_items` - Detalles de órdenes
6. `valoraciones` - Reviews de productos

**Líneas:** ~450 líneas

---

## 📚 Documentación

### 📖 README.md

- Descripción general
- Características
- Instalación rápida
- Estructura
- Tecnologías

### 📖 SETUP.md

- Guía paso a paso
- Configuración de Supabase
- Solución de problemas
- Próximos pasos

### 📖 PROYECTO_COMPLETADO.md

- Resumen completo
- Lista de archivos
- Funcionalidades
- Estadísticas

### 📖 INICIO_RAPIDO.txt

- Checklist de 5 pasos
- Comandos útiles
- Troubleshooting

---

## 🔄 Flujo de la Aplicación

```text
┌─────────────┐
│  index.html │ ← Usuario no autenticado
└──────┬──────┘
       │
       ├──► Ver productos
       ├──► Agregar al carrito
       └──► Clic en "Login" ──► login.html
                                     │
                                     ├──► Registro
                                     └──► Login ──► dashboard.html
                                                         │
                                                         ├──► Ver estadísticas
                                                         ├──► CRUD productos
                                                         └──► Logout ──► index.html
```

---

## 🎯 Archivos que DEBES Editar

### ⚙️ Configuración Obligatoria

```javascript
📁 js/supabase-config.js (líneas 6-7)
├── SUPABASE_URL = 'tu-url-aqui'
└── SUPABASE_ANON_KEY = 'tu-clave-aqui'
```

### 🎨 Personalización Opcional

```css
📁 css/styles.css (líneas 6-30)
├── Colores principales
├── Tipografía
└── Espaciados
```

---

## 📦 Dependencias Externas (CDN)

```html
<!-- Fuentes -->
Google Fonts: Covered By Your Grace + Montserrat

<!-- Iconos -->
Font Awesome 6.4.0

<!-- Backend -->
Supabase JS Client (módulo ES6)
```

---

## 🔒 Archivos de Seguridad

```text
📁 .gitignore
├── node_modules/
├── .env
├── .vscode/
└── archivos temporales
```

---

## 📊 Estadísticas del Proyecto

| Métrica | Valor |
|---------|-------|
| **Total archivos** | 16 |
| **Líneas de código** | ~3,500+ |
| **Archivos HTML** | 3 |
| **Archivos CSS** | 3 |
| **Archivos JS** | 5 |
| **Tablas BD** | 6 |
| **Documentación** | 5 archivos |

---

## 🚀 Orden de Carga de Scripts

```html
<!-- index.html -->
<script type="module" src="js/main.js"></script>
<script type="module" src="js/home.js"></script>

<!-- login.html -->
<script type="module" src="js/auth.js"></script>

<!-- dashboard.html -->
<script type="module" src="js/dashboard.js"></script>
```

**Nota:** Todos importan `supabase-config.js` como módulo

---

## 🎨 Paleta de Colores (CSS Variables)

```css
:root {
  --color-terracota: #D2691E;
  --color-cobalto: #0047AB;
  --color-amarillo-sol: #FFD700;
  --color-blanco-crudo: #FAF9F6;
  --color-rosa-mexicano: #E4007C;
  --color-verde-esmeralda: #00A86B;
}
```

---

## 📱 Breakpoints Responsive

```css
/* Mobile */
@media (max-width: 768px)

/* Tablet */
@media (max-width: 1024px)

/* Desktop */
@media (min-width: 1025px)
```

---

## ✨ Características Destacadas por Archivo

### index.html

- Hero con animaciones CSS
- Grid de productos dinámico
- Carrito funcional

### login.html

- Validación en tiempo real
- Toggle de contraseña
- Animaciones de entrada

### dashboard.html

- Sidebar colapsable
- Tabla con filtros
- Modal reutilizable

### supabase-config.js

- Clases modulares
- Async/await
- Error handling

### dashboard.js

- CRUD completo
- Filtros en tiempo real
- Actualización reactiva

---

**Total de líneas documentadas:** Este archivo + 4 documentos adicionales

**Última actualización:** Noviembre 2025

---

*Desarrollado con ❤️ para celebrar la cultura mexicana* 🎭🇲🇽
