// ========================================
// Dashboard - Lógica Principal
// ========================================

import { authManager, productManager, Utils } from './supabase-config.js';

document.addEventListener('DOMContentLoaded', async function() {
    
    // ========================================
    // Verificar Autenticación
    // ========================================
    if (!authManager.isAuthenticated()) {
        window.location.href = 'login.html';
        return;
    }

    // Actualizar nombre de usuario
    const userName = document.getElementById('userName');
    const currentUser = authManager.getCurrentUser();
    if (userName && currentUser) {
        userName.textContent = currentUser.email.split('@')[0];
    }

    // ========================================
    // Navegación del Sidebar
    // ========================================
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    const viewContents = document.querySelectorAll('.view-content');
    const pageTitle = document.getElementById('pageTitle');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const viewName = this.getAttribute('data-view');
            
            // Actualizar navegación activa
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar vista correspondiente
            viewContents.forEach(view => view.classList.remove('active'));
            const targetView = document.getElementById('view' + viewName.charAt(0).toUpperCase() + viewName.slice(1));
            if (targetView) {
                targetView.classList.add('active');
                
                // Actualizar título
                if (pageTitle) {
                    pageTitle.textContent = this.querySelector('span').textContent;
                }
                
                // Cargar datos específicos de la vista
                if (viewName === 'productos') {
                    loadProductos();
                } else if (viewName === 'dashboard') {
                    loadDashboardStats();
                }
            }
        });
    });

    // ========================================
    // Menu Mobile
    // ========================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');

    mobileMenuToggle?.addEventListener('click', function() {
        sidebar.classList.add('active');
    });

    sidebarToggle?.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    // Cerrar sidebar al hacer clic en un enlace en mobile
    if (window.innerWidth <= 1024) {
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                sidebar.classList.remove('active');
            });
        });
    }

    // ========================================
    // Logout
    // ========================================
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn?.addEventListener('click', async function() {
        if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
            Utils.showLoader(true);
            const result = await authManager.logout();
            Utils.showLoader(false);
            
            if (result.success) {
                Utils.showNotification('Sesión cerrada exitosamente', 'success');
            }
        }
    });

    // ========================================
    // Gestión de Productos
    // ========================================
    
    let currentProducts = [];
    let currentCategories = [];

    // Cargar categorías
    async function loadCategories() {
        const result = await productManager.fetchCategories();
        if (result.success) {
            currentCategories = result.data;
            
            // Llenar select de filtro
            const filterCategoria = document.getElementById('filterCategoria');
            const productoCategoria = document.getElementById('productoCategoria');
            
            if (filterCategoria) {
                filterCategoria.innerHTML = '<option value="">Todas las categorías</option>';
                currentCategories.forEach(cat => {
                    filterCategoria.innerHTML += `<option value="${cat.id}">${cat.nombre}</option>`;
                });
            }
            
            if (productoCategoria) {
                productoCategoria.innerHTML = '<option value="">Seleccionar categoría</option>';
                currentCategories.forEach(cat => {
                    productoCategoria.innerHTML += `<option value="${cat.id}">${cat.nombre}</option>`;
                });
            }
        }
    }

    // Cargar productos
    async function loadProductos() {
        Utils.showLoader(true);
        
        // Cargar categorías primero si no están cargadas
        if (currentCategories.length === 0) {
            await loadCategories();
        }
        
        const result = await productManager.fetchProducts();
        Utils.showLoader(false);

        if (result.success) {
            currentProducts = result.data;
            renderProductosTable(currentProducts);
        } else {
            Utils.showNotification('Error al cargar productos', 'error');
        }
    }

    // Renderizar tabla de productos
    function renderProductosTable(products) {
        const tbody = document.getElementById('productosTableBody');
        
        if (!tbody) return;

        if (products.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="7" class="text-center">
                        <p style="padding: 2rem;">No hay productos registrados</p>
                    </td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = products.map(product => {
            const categoria = currentCategories.find(c => c.id === product.categoria_id);
            
            return `
                <tr data-id="${product.id}">
                    <td>
                        <img src="${product.imagen_url || 'https://via.placeholder.com/50'}" 
                             alt="${product.nombre}" 
                             class="product-img">
                    </td>
                    <td>${product.nombre}</td>
                    <td>${categoria ? categoria.nombre : 'Sin categoría'}</td>
                    <td>${Utils.formatPrice(product.precio)}</td>
                    <td>${product.stock || 0}</td>
                    <td>
                        <span class="status-badge ${product.estado || 'activo'}">
                            ${product.estado || 'activo'}
                        </span>
                    </td>
                    <td>
                        <div class="action-btns">
                            <button class="btn-icon btn-edit" onclick="editProduct('${product.id}')" title="Editar">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn-icon btn-delete" onclick="deleteProduct('${product.id}')" title="Eliminar">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // Filtros de productos
    const searchProductos = document.getElementById('searchProductos');
    const filterCategoria = document.getElementById('filterCategoria');
    const filterEstado = document.getElementById('filterEstado');

    function filterProducts() {
        let filtered = [...currentProducts];

        // Filtro de búsqueda
        const searchTerm = searchProductos?.value.toLowerCase();
        if (searchTerm) {
            filtered = filtered.filter(p => 
                p.nombre.toLowerCase().includes(searchTerm) ||
                (p.descripcion && p.descripcion.toLowerCase().includes(searchTerm))
            );
        }

        // Filtro de categoría
        const categoryId = filterCategoria?.value;
        if (categoryId) {
            filtered = filtered.filter(p => p.categoria_id === categoryId);
        }

        // Filtro de estado
        const estado = filterEstado?.value;
        if (estado) {
            filtered = filtered.filter(p => p.estado === estado);
        }

        renderProductosTable(filtered);
    }

    searchProductos?.addEventListener('input', filterProducts);
    filterCategoria?.addEventListener('change', filterProducts);
    filterEstado?.addEventListener('change', filterProducts);

    // ========================================
    // Modal de Producto
    // ========================================
    const modalProducto = document.getElementById('modalProducto');
    const btnNuevoProducto = document.getElementById('btnNuevoProducto');
    const closeModalProducto = document.getElementById('closeModalProducto');
    const cancelarProducto = document.getElementById('cancelarProducto');
    const formProducto = document.getElementById('formProducto');
    const modalProductoTitle = document.getElementById('modalProductoTitle');

    // Abrir modal para nuevo producto
    btnNuevoProducto?.addEventListener('click', function() {
        formProducto.reset();
        document.getElementById('productoId').value = '';
        modalProductoTitle.textContent = 'Nuevo Producto';
        modalProducto.classList.add('active');
    });

    // Cerrar modal
    function closeModal() {
        modalProducto.classList.remove('active');
    }

    closeModalProducto?.addEventListener('click', closeModal);
    cancelarProducto?.addEventListener('click', closeModal);

    modalProducto?.querySelector('.modal-overlay')?.addEventListener('click', closeModal);

    // Editar producto (función global)
    window.editProduct = async function(productId) {
        Utils.showLoader(true);
        const result = await productManager.fetchProductById(productId);
        Utils.showLoader(false);

        if (result.success) {
            const product = result.data;
            
            // Llenar formulario
            document.getElementById('productoId').value = product.id;
            document.getElementById('productoNombre').value = product.nombre;
            document.getElementById('productoCategoria').value = product.categoria_id || '';
            document.getElementById('productoPrecio').value = product.precio;
            document.getElementById('productoPrecioAnterior').value = product.precio_anterior || '';
            document.getElementById('productoStock').value = product.stock || 0;
            document.getElementById('productoEstado').value = product.estado || 'activo';
            document.getElementById('productoDescripcion').value = product.descripcion || '';
            document.getElementById('productoImagen').value = product.imagen_url || '';
            document.getElementById('productoBadge').value = product.badge || '';
            
            modalProductoTitle.textContent = 'Editar Producto';
            modalProducto.classList.add('active');
        } else {
            Utils.showNotification('Error al cargar el producto', 'error');
        }
    };

    // Eliminar producto (función global)
    window.deleteProduct = async function(productId) {
        if (!confirm('¿Estás seguro de que quieres eliminar este producto?')) {
            return;
        }

        Utils.showLoader(true);
        const result = await productManager.deleteProduct(productId);
        Utils.showLoader(false);

        if (result.success) {
            Utils.showNotification('Producto eliminado exitosamente', 'success');
            loadProductos();
        } else {
            Utils.showNotification('Error al eliminar el producto', 'error');
        }
    };

    // Guardar producto
    formProducto?.addEventListener('submit', async function(e) {
        e.preventDefault();

        const productId = document.getElementById('productoId').value;
        const productData = {
            nombre: document.getElementById('productoNombre').value,
            categoria_id: document.getElementById('productoCategoria').value || null,
            precio: parseFloat(document.getElementById('productoPrecio').value),
            precio_anterior: document.getElementById('productoPrecioAnterior').value ? 
                parseFloat(document.getElementById('productoPrecioAnterior').value) : null,
            stock: parseInt(document.getElementById('productoStock').value),
            estado: document.getElementById('productoEstado').value,
            descripcion: document.getElementById('productoDescripcion').value || null,
            imagen_url: document.getElementById('productoImagen').value || null,
            badge: document.getElementById('productoBadge').value || null
        };

        Utils.showLoader(true);

        let result;
        if (productId) {
            // Actualizar producto existente
            result = await productManager.updateProduct(productId, productData);
        } else {
            // Crear nuevo producto
            result = await productManager.createProduct(productData);
        }

        Utils.showLoader(false);

        if (result.success) {
            Utils.showNotification(
                productId ? 'Producto actualizado exitosamente' : 'Producto creado exitosamente',
                'success'
            );
            closeModal();
            loadProductos();
        } else {
            Utils.showNotification('Error al guardar el producto: ' + result.error, 'error');
        }
    });

    // ========================================
    // Dashboard Stats
    // ========================================
    async function loadDashboardStats() {
        Utils.showLoader(true);
        
        const result = await productManager.fetchProducts();
        
        if (result.success) {
            const products = result.data;
            
            // Actualizar total de productos
            const totalProductos = document.getElementById('totalProductos');
            if (totalProductos) {
                totalProductos.textContent = products.length;
            }
            
            // Cargar productos recientes
            const recentProducts = document.getElementById('recentProducts');
            if (recentProducts) {
                const recent = products.slice(0, 5);
                if (recent.length > 0) {
                    recentProducts.innerHTML = recent.map(p => `
                        <div class="activity-item">
                            <img src="${p.imagen_url || 'https://via.placeholder.com/40'}" 
                                 style="width: 40px; height: 40px; border-radius: 4px; object-fit: cover;">
                            <div>
                                <p>${p.nombre}</p>
                                <span class="text-muted">${Utils.formatPrice(p.precio)}</span>
                            </div>
                        </div>
                    `).join('');
                } else {
                    recentProducts.innerHTML = '<p class="text-muted">No hay productos</p>';
                }
            }
        }
        
        Utils.showLoader(false);
    }

    // ========================================
    // Inicialización
    // ========================================
    
    // Cargar estadísticas del dashboard al inicio
    loadDashboardStats();
    
    // Cargar categorías
    await loadCategories();

    console.log('Dashboard cargado correctamente ✨');
});
