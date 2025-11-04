// ========================================
// Home - Carga de Productos
// ========================================

import { productManager, authManager, Utils } from './supabase-config.js';

document.addEventListener('DOMContentLoaded', async function() {
    
    // ========================================
    // Cargar Productos Destacados
    // ========================================
    async function loadFeaturedProducts() {
        const productosGrid = document.getElementById('productosGrid');
        
        if (!productosGrid) return;

        // Mostrar loader
        productosGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <div class="spinner"></div>
                <p style="margin-top: 1rem; color: var(--color-gris-oscuro);">Cargando productos...</p>
            </div>
        `;

        // Cargar productos desde Supabase
        const result = await productManager.fetchProducts(8); // Obtener 8 productos

        if (result.success && result.data.length > 0) {
            const products = result.data.filter(p => p.estado === 'activo');
            renderProducts(products);
        } else {
            // Si no hay productos en la BD, mostrar productos de ejemplo
            showPlaceholderProducts();
        }
    }

    // Renderizar productos reales
    function renderProducts(products) {
        const productosGrid = document.getElementById('productosGrid');
        
        productosGrid.innerHTML = products.map(product => `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.imagen_url || 'https://via.placeholder.com/300x400?text=Sin+Imagen'}" 
                         alt="${product.nombre}"
                         loading="lazy">
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
                    <p class="product-category">${product.categoria_nombre || 'Sin categoría'}</p>
                    <div class="product-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>(${Math.floor(Math.random() * 50) + 10})</span>
                    </div>
                    <div class="product-price">
                        ${product.precio_anterior ? `<span class="old-price">${Utils.formatPrice(product.precio_anterior)}</span>` : ''}
                        <span class="current-price">${Utils.formatPrice(product.precio)}</span>
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

    // Mostrar productos de placeholder cuando no hay productos en BD
    function showPlaceholderProducts() {
        const placeholderProducts = [
            {
                id: 'placeholder-1',
                nombre: 'Huaraches Artesanales',
                categoria: 'Calzado',
                precio: 650,
                precio_anterior: 850,
                badge: 'Oferta',
                imagen: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=400&fit=crop'
            },
            {
                id: 'placeholder-2',
                nombre: 'Vestido Jalisco Premium',
                categoria: 'Vestidos',
                precio: 2500,
                badge: 'Nuevo',
                imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop'
            },
            {
                id: 'placeholder-3',
                nombre: 'Sombrero Charro Auténtico',
                categoria: 'Sombreros',
                precio: 1200,
                imagen: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=300&h=400&fit=crop'
            },
            {
                id: 'placeholder-4',
                nombre: 'Rebozo Tradicional',
                categoria: 'Accesorios',
                precio: 450,
                precio_anterior: 600,
                badge: '25% OFF',
                imagen: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=400&fit=crop'
            },
            {
                id: 'placeholder-5',
                nombre: 'Blusa Bordada',
                categoria: 'Blusas',
                precio: 750,
                imagen: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=300&h=400&fit=crop'
            },
            {
                id: 'placeholder-6',
                nombre: 'Falda Regional Veracruz',
                categoria: 'Faldas',
                precio: 980,
                badge: 'Popular',
                imagen: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=300&h=400&fit=crop'
            },
            {
                id: 'placeholder-7',
                nombre: 'Aretes de Plata',
                categoria: 'Joyería',
                precio: 350,
                imagen: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=400&fit=crop'
            },
            {
                id: 'placeholder-8',
                nombre: 'Cinturón Piteado',
                categoria: 'Accesorios',
                precio: 550,
                precio_anterior: 700,
                imagen: 'https://images.unsplash.com/photo-1624222247344-550fb60583bb?w=300&h=400&fit=crop'
            }
        ];

        const productosGrid = document.getElementById('productosGrid');
        
        productosGrid.innerHTML = placeholderProducts.map(product => `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.imagen}" alt="${product.nombre}" loading="lazy">
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
                    <p class="product-category">${product.categoria}</p>
                    <div class="product-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>(${Math.floor(Math.random() * 50) + 10})</span>
                    </div>
                    <div class="product-price">
                        ${product.precio_anterior ? `<span class="old-price">${Utils.formatPrice(product.precio_anterior)}</span>` : ''}
                        <span class="current-price">${Utils.formatPrice(product.precio)}</span>
                    </div>
                    <button class="btn-add-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-bag"></i>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        `).join('');

        addProductEventListeners();
    }

    // Agregar event listeners a los productos
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
        // Obtener carrito actual del localStorage
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        
        // Verificar si el producto ya está en el carrito
        const existingIndex = cart.findIndex(item => item.id === productId);
        
        if (existingIndex >= 0) {
            // Incrementar cantidad
            cart[existingIndex].quantity += 1;
        } else {
            // Agregar nuevo producto
            cart.push({
                id: productId,
                quantity: 1,
                addedAt: new Date().toISOString()
            });
        }

        // Guardar en localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Actualizar contador del carrito
        updateCartCount();

        // Mostrar notificación
        Utils.showNotification('Producto agregado al carrito', 'success');

        // Animar el botón
        const btn = document.querySelector(`[data-id="${productId}"].btn-add-cart`);
        if (btn) {
            btn.innerHTML = '<i class="fas fa-check"></i> Agregado';
            btn.style.background = 'var(--color-verde-esmeralda)';
            
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-shopping-bag"></i> Agregar al Carrito';
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
            
            // Animación
            cartCount.style.transform = 'scale(1.3)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 200);
        }
    }

    // Vista rápida del producto
    function showQuickView(productId) {
        // Por ahora, mostrar alerta (puedes implementar un modal después)
        Utils.showNotification('Vista rápida - Funcionalidad próximamente', 'info');
    }

    // ========================================
    // Inicialización
    // ========================================
    
    // Actualizar contador del carrito al cargar
    updateCartCount();
    
    // Cargar productos
    await loadFeaturedProducts();

    console.log('Home cargado correctamente ✨');
});
