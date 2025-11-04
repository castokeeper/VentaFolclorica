// ========================================
// DEMO MODE - Para GitHub Pages
// ========================================
// Este archivo reemplaza la funcionalidad de Supabase
// con datos estáticos para la demostración

// Productos de demostración
const demoProducts = [
    {
        id: 1,
        nombre: 'Huaraches Artesanales',
        categoria_nombre: 'Calzado',
        precio: 650,
        precio_anterior: 850,
        badge: 'Oferta',
        estado: 'activo',
        imagen_url: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=400&fit=crop'
    },
    {
        id: 2,
        nombre: 'Vestido Jalisco Premium',
        categoria_nombre: 'Vestidos',
        precio: 2500,
        badge: 'Nuevo',
        estado: 'activo',
        imagen_url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop'
    },
    {
        id: 3,
        nombre: 'Sombrero Charro Auténtico',
        categoria_nombre: 'Sombreros',
        precio: 1200,
        estado: 'activo',
        imagen_url: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=300&h=400&fit=crop'
    },
    {
        id: 4,
        nombre: 'Rebozo Tradicional',
        categoria_nombre: 'Accesorios',
        precio: 450,
        precio_anterior: 600,
        badge: '25% OFF',
        estado: 'activo',
        imagen_url: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=400&fit=crop'
    },
    {
        id: 5,
        nombre: 'Blusa Bordada Oaxaca',
        categoria_nombre: 'Blusas',
        precio: 750,
        estado: 'activo',
        imagen_url: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=300&h=400&fit=crop'
    },
    {
        id: 6,
        nombre: 'Falda Regional Veracruz',
        categoria_nombre: 'Faldas',
        precio: 980,
        badge: 'Popular',
        estado: 'activo',
        imagen_url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=300&h=400&fit=crop'
    },
    {
        id: 7,
        nombre: 'Aretes de Plata 925',
        categoria_nombre: 'Joyería',
        precio: 350,
        estado: 'activo',
        imagen_url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=400&fit=crop'
    },
    {
        id: 8,
        nombre: 'Cinturón Piteado Charro',
        categoria_nombre: 'Accesorios',
        precio: 550,
        precio_anterior: 700,
        estado: 'activo',
        imagen_url: 'https://images.unsplash.com/photo-1624222247344-550fb60583bb?w=300&h=400&fit=crop'
    }
];

// Utilidades
const DemoUtils = {
    formatPrice(price) {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN'
        }).format(price);
    },

    showNotification(message, type = 'info') {
        // Crear elemento de notificación
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // Mostrar notificación
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Ocultar y eliminar
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎭 Modo Demo Activado - GitHub Pages');
    
    // Renderizar productos
    renderProducts();
    
    // Actualizar contador del carrito
    updateCartCount();
    
    // Configurar navegación móvil
    setupMobileMenu();
    
    // Ocultar botones de login/dashboard en demo
    const loginBtn = document.getElementById('loginBtn');
    const dashboardLink = document.getElementById('dashboardLink');
    const userBtn = document.getElementById('userBtn');
    
    if (loginBtn) loginBtn.style.display = 'none';
    if (dashboardLink) dashboardLink.style.display = 'none';
    if (userBtn) userBtn.style.display = 'none';
});

// Renderizar productos
function renderProducts() {
    const productosGrid = document.getElementById('productosGrid');
    
    if (!productosGrid) return;
    
    productosGrid.innerHTML = demoProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.imagen_url}" alt="${product.nombre}" loading="lazy">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <div class="product-overlay">
                    <button class="btn-quick-view" data-id="${product.id}">
                        <i class="fas fa-eye"></i>
                        Vista Rápida
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.nombre}</h3>
                <p class="product-category">${product.categoria_nombre}</p>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <span>(${Math.floor(Math.random() * 50) + 10})</span>
                </div>
                <div class="product-price">
                    ${product.precio_anterior ? `<span class="old-price">${DemoUtils.formatPrice(product.precio_anterior)}</span>` : ''}
                    <span class="current-price">${DemoUtils.formatPrice(product.precio)}</span>
                </div>
                <button class="btn-add-cart" data-id="${product.id}">
                    <i class="fas fa-shopping-bag"></i>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    `).join('');
    
    // Agregar event listeners
    addProductEventListeners();
}

// Agregar event listeners
function addProductEventListeners() {
    // Botones de agregar al carrito
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
    
    // Botones de vista rápida
    document.querySelectorAll('.btn-quick-view').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            showQuickView(productId);
        });
    });
}

// Agregar al carrito
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    const existingIndex = cart.findIndex(item => item.id === productId);
    
    if (existingIndex >= 0) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: productId,
            quantity: 1,
            addedAt: new Date().toISOString()
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    DemoUtils.showNotification('Producto agregado al carrito', 'success');
    
    // Animar botón
    const btn = document.querySelector(`[data-id="${productId}"].btn-add-cart`);
    if (btn) {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Agregado';
        btn.style.background = '#10b981';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
        }, 2000);
    }
}

// Actualizar contador del carrito
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);
    }
}

// Vista rápida
function showQuickView(productId) {
    const product = demoProducts.find(p => p.id == productId);
    if (product) {
        DemoUtils.showNotification(`Vista rápida: ${product.nombre}`, 'info');
    }
}

// Menú móvil
function setupMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Cerrar al hacer clic en un enlace
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
}
