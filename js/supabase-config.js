// ========================================
// Configuración de Supabase
// ========================================

const SUPABASE_URL = 'TU_SUPABASE_URL'; // Reemplaza con tu URL de Supabase
const SUPABASE_ANON_KEY = 'TU_SUPABASE_ANON_KEY'; // Reemplaza con tu clave pública

// Importar cliente de Supabase desde CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Crear cliente de Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ========================================
// Gestión de Autenticación
// ========================================

class AuthManager {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    async init() {
        // Obtener sesión actual
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session) {
            this.currentUser = session.user;
            this.onAuthStateChange();
        }

        // Escuchar cambios en la autenticación
        supabase.auth.onAuthStateChange((event, session) => {
            this.currentUser = session?.user || null;
            this.onAuthStateChange();
        });
    }

    onAuthStateChange() {
        // Actualizar UI según el estado de autenticación
        this.updateUI();
    }

    updateUI() {
        const loginBtn = document.getElementById('loginBtn');
        const userBtn = document.getElementById('userBtn');
        const dashboardLink = document.getElementById('dashboardLink');

        if (this.currentUser) {
            if (loginBtn) loginBtn.style.display = 'none';
            if (userBtn) {
                userBtn.style.display = 'flex';
                userBtn.innerHTML = `<i class="fas fa-user-circle"></i> ${this.currentUser.email.split('@')[0]}`;
            }
            if (dashboardLink) dashboardLink.style.display = 'block';
        } else {
            if (loginBtn) loginBtn.style.display = 'flex';
            if (userBtn) userBtn.style.display = 'none';
            if (dashboardLink) dashboardLink.style.display = 'none';
        }
    }

    async login(email, password) {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;

            return { success: true, user: data.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async signup(email, password) {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password
            });

            if (error) throw error;

            return { success: true, user: data.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async logout() {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            
            // Redirigir al home
            window.location.href = 'index.html';
            
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    isAuthenticated() {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }
}

// ========================================
// Gestión de Productos
// ========================================

class ProductManager {
    constructor() {
        this.products = [];
        this.categories = [];
    }

    async fetchProducts(limit = null) {
        try {
            let query = supabase
                .from('productos')
                .select('*')
                .order('created_at', { ascending: false });

            if (limit) {
                query = query.limit(limit);
            }

            const { data, error } = await query;

            if (error) throw error;

            this.products = data || [];
            return { success: true, data: this.products };
        } catch (error) {
            console.error('Error al cargar productos:', error);
            return { success: false, error: error.message };
        }
    }

    async fetchProductById(id) {
        try {
            const { data, error } = await supabase
                .from('productos')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;

            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async createProduct(productData) {
        try {
            const { data, error } = await supabase
                .from('productos')
                .insert([productData])
                .select();

            if (error) throw error;

            return { success: true, data: data[0] };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async updateProduct(id, productData) {
        try {
            const { data, error } = await supabase
                .from('productos')
                .update(productData)
                .eq('id', id)
                .select();

            if (error) throw error;

            return { success: true, data: data[0] };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async deleteProduct(id) {
        try {
            const { error } = await supabase
                .from('productos')
                .delete()
                .eq('id', id);

            if (error) throw error;

            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async fetchCategories() {
        try {
            const { data, error } = await supabase
                .from('categorias')
                .select('*')
                .order('nombre');

            if (error) throw error;

            this.categories = data || [];
            return { success: true, data: this.categories };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async fetchProductsByCategory(categoryId) {
        try {
            const { data, error } = await supabase
                .from('productos')
                .select('*')
                .eq('categoria_id', categoryId)
                .order('created_at', { ascending: false });

            if (error) throw error;

            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

// ========================================
// Utilidades
// ========================================

class Utils {
    static formatPrice(price) {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN'
        }).format(price);
    }

    static showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(notification);

        // Animar entrada
        setTimeout(() => notification.classList.add('show'), 100);

        // Remover después de 3 segundos
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    static showLoader(show = true) {
        let loader = document.getElementById('globalLoader');
        
        if (show) {
            if (!loader) {
                loader = document.createElement('div');
                loader.id = 'globalLoader';
                loader.className = 'global-loader';
                loader.innerHTML = `
                    <div class="loader-spinner">
                        <div class="spinner"></div>
                        <p>Cargando...</p>
                    </div>
                `;
                document.body.appendChild(loader);
            }
            loader.classList.add('active');
        } else {
            if (loader) {
                loader.classList.remove('active');
            }
        }
    }

    static validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    static validateForm(formData, rules) {
        const errors = {};

        for (const [field, rule] of Object.entries(rules)) {
            const value = formData[field];

            if (rule.required && (!value || value.trim() === '')) {
                errors[field] = `${rule.label} es requerido`;
                continue;
            }

            if (rule.minLength && value.length < rule.minLength) {
                errors[field] = `${rule.label} debe tener al menos ${rule.minLength} caracteres`;
            }

            if (rule.maxLength && value.length > rule.maxLength) {
                errors[field] = `${rule.label} no debe exceder ${rule.maxLength} caracteres`;
            }

            if (rule.type === 'email' && !this.validateEmail(value)) {
                errors[field] = 'Email inválido';
            }

            if (rule.type === 'number' && isNaN(value)) {
                errors[field] = `${rule.label} debe ser un número`;
            }

            if (rule.min && parseFloat(value) < rule.min) {
                errors[field] = `${rule.label} debe ser mayor o igual a ${rule.min}`;
            }
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors
        };
    }
}

// ========================================
// Exportar instancias globales
// ========================================

const authManager = new AuthManager();
const productManager = new ProductManager();

export { supabase, authManager, productManager, Utils };
