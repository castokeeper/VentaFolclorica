# 🎭 VentaFolclórica - E-commerce con Supabase

## Sitio E-commerce Completo de Accesorios y Vestuario de Danza Folclórica

### 🚀 Características Principales

✅ **Sistema de Autenticación Completo**

- Login y registro de usuarios
- Protección de rutas
- Sesiones persistentes
- Gestión de usuarios con Supabase Auth

✅ **Dashboard Administrativo**

- Panel de control con estadísticas
- CRUD completo de productos
- Gestión de categorías
- Interfaz responsive y moderna

✅ **Base de Datos Supabase**

- PostgreSQL con RLS (Row Level Security)
- Tablas optimizadas con índices
- Triggers automáticos
- Políticas de seguridad

✅ **E-commerce Frontend**

- Catálogo de productos dinámico
- Carrito de compras (LocalStorage)
- Diseño vibrante y cultural
- Experiencia de usuario optimizada

---

## 📋 Requisitos Previos

- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Cuenta en [Supabase](https://supabase.com) (gratuita)
- Editor de código (VS Code recomendado)

---

## 🔧 Instalación y Configuración

### Paso 1: Crear Proyecto en Supabase

1. Ve a [https://supabase.com](https://supabase.com)
2. Crea una cuenta o inicia sesión
3. Haz clic en "New Project"
4. Completa los datos:
   - **Name**: VentaFolclorica
   - **Database Password**: (Guarda esta contraseña)
   - **Region**: Elige la más cercana
5. Espera a que el proyecto se cree (2-3 minutos)

### Paso 2: Configurar la Base de Datos

1. En tu proyecto de Supabase, ve a **SQL Editor**
2. Crea una nueva query
3. Copia todo el contenido de `database/supabase_setup.sql`
4. Pega el código en el editor SQL
5. Haz clic en **RUN** (esquina inferior derecha)
6. Verifica que se ejecutó sin errores ✅

### Paso 3: Obtener las Credenciales

1. En Supabase, ve a **Settings** → **API**
2. Copia los siguientes valores:
   - **Project URL** (ejemplo: <https://xxxxx.supabase.co>)
   - **anon/public key** (clave larga que empieza con `eyJ...`)

### Paso 4: Configurar el Proyecto

1. Abre el archivo `js/supabase-config.js`
2. Reemplaza las credenciales en las líneas 6-7:

```javascript
const SUPABASE_URL = 'https://TU_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'TU_ANON_KEY_AQUI';
```

Guarda el archivo

### Paso 5: Ejecutar el Proyecto

#### Opción A: Con Live Server (Recomendado)

1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"
4. El sitio se abrirá en tu navegador

#### Opción B: Con Python

```bash
# Python 3
python -m http.server 8000

# Luego abre: http://localhost:8000
```

#### Opción C: Con Node.js

```bash
npx serve

# O instala globalmente
npm install -g serve
serve
```

---

## 👤 Crear tu Primera Cuenta

1. Ve a [http://localhost:5500/login.html](http://localhost:5500/login.html)
2. Haz clic en "Regístrate aquí"
3. Ingresa tu email y contraseña (mínimo 8 caracteres)
4. Supabase enviará un email de confirmación
5. **Opcional**: Ve a Supabase → Authentication → Users y verifica el email manualmente

---

## 🎨 Estructura del Proyecto

```text
VentaFolclorica/
├── index.html              # Página principal
├── login.html              # Login/Registro
├── dashboard.html          # Dashboard administrativo
│
├── css/
│   ├── styles.css          # Estilos globales
│   ├── auth.css            # Estilos de autenticación
│   └── dashboard.css       # Estilos del dashboard
│
├── js/
│   ├── supabase-config.js  # Configuración de Supabase
│   ├── main.js             # JavaScript principal
│   ├── auth.js             # Lógica de autenticación
│   ├── dashboard.js        # Lógica del dashboard
│   └── home.js             # Carga de productos en home
│
├── database/
│   └── supabase_setup.sql  # Script SQL para la BD
│
└── README.md               # Este archivo
```

---

## 🗄️ Estructura de la Base de Datos

### Tablas Principales

1. **categorias**
   - Categorías de productos (Huaraches, Vestidos, Sombreros, etc.)

2. **productos**
   - Catálogo completo de productos
   - Precios, stock, imágenes, estado

3. **clientes**
   - Información de clientes registrados

4. **ordenes**
   - Órdenes de compra

5. **orden_items**
   - Detalles de cada orden

6. **valoraciones**
   - Reseñas y calificaciones de productos

---

## 🎯 Funcionalidades Implementadas

### Frontend (Home)

- ✅ Hero section atractivo
- ✅ Sección de características
- ✅ Catálogo de productos dinámico
- ✅ Carrito de compras funcional
- ✅ Diseño responsive

### Autenticación

- ✅ Login con email y contraseña
- ✅ Registro de nuevos usuarios
- ✅ Sesiones persistentes
- ✅ Logout seguro
- ✅ Validación de formularios

### Dashboard

- ✅ Panel de estadísticas
- ✅ Crear productos
- ✅ Editar productos
- ✅ Eliminar productos
- ✅ Filtros y búsqueda
- ✅ Interfaz intuitiva

---

## 🔐 Seguridad

- **Row Level Security (RLS)** habilitado en todas las tablas
- **Autenticación JWT** con Supabase
- **Políticas de acceso** granulares
- **Validación de formularios** en frontend y backend

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| 🟤 Terracota | `#D2691E` | Color principal |
| 🔵 Azul Cobalto | `#0047AB` | Color secundario |
| 🟡 Amarillo Sol | `#FFD700` | Acentos |
| ⚪ Blanco Crudo | `#FAF9F6` | Fondo |
| 🌸 Rosa Mexicano | `#E4007C` | Destacados |

---

## 📱 Responsive Design

- ✅ Mobile (< 768px)
- ✅ Tablet (768px - 1024px)
- ✅ Desktop (> 1024px)

---

## 🚀 Próximas Características

- [ ] Página de detalle de producto
- [ ] Proceso de checkout completo
- [ ] Integración con pasarelas de pago
- [ ] Sistema de órdenes para clientes
- [ ] Notificaciones por email
- [ ] Gestión de inventario avanzada
- [ ] Sistema de cupones de descuento
- [ ] Panel de analytics

---

## 🐛 Solución de Problemas

### Error: "Invalid API key"

- Verifica que copiaste correctamente las credenciales de Supabase
- Asegúrate de que la URL y la clave anon están correctas en `supabase-config.js`

### Error: "CORS policy"

- Ejecuta el proyecto con un servidor local (Live Server, Python, etc.)
- No abras el HTML directamente desde el explorador de archivos

### Los productos no cargan

- Verifica que ejecutaste el script SQL en Supabase
- Revisa la consola del navegador para ver errores
- Verifica las políticas RLS en Supabase

### No puedo crear productos

- Asegúrate de estar autenticado
- Verifica que las categorías existen en la base de datos
- Revisa que todos los campos requeridos estén llenos

---

## 📞 Soporte

Si tienes problemas:

1. Revisa la consola del navegador (F12)
2. Verifica las credenciales de Supabase
3. Asegúrate de que el servidor local esté corriendo

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo y comercial.

---

## 🎉 ¡Listo para Empezar

1. Configura Supabase ✅
2. Actualiza las credenciales ✅
3. Ejecuta el servidor local ✅
4. Crea tu cuenta ✅
5. ¡Empieza a vender! 🚀

---

### **Desarrollado con ❤️ para celebrar la cultura mexicana**

*Viste tus Raíces, Baila con el Corazón* 🎭
