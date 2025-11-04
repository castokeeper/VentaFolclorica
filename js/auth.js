// ========================================
// Lógica de Autenticación
// ========================================

import { authManager, Utils } from './supabase-config.js';

document.addEventListener('DOMContentLoaded', function() {
    
    const loginCard = document.getElementById('loginCard');
    const signupCard = document.getElementById('signupCard');
    const showSignupBtn = document.getElementById('showSignup');
    const showLoginBtn = document.getElementById('showLogin');
    
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // ========================================
    // Cambiar entre Login y Registro
    // ========================================
    showSignupBtn?.addEventListener('click', function(e) {
        e.preventDefault();
        loginCard.style.display = 'none';
        signupCard.style.display = 'block';
        signupCard.style.animation = 'slideUp 0.5s ease';
    });

    showLoginBtn?.addEventListener('click', function(e) {
        e.preventDefault();
        signupCard.style.display = 'none';
        loginCard.style.display = 'block';
        loginCard.style.animation = 'slideUp 0.5s ease';
    });

    // ========================================
    // Toggle Contraseña Visible
    // ========================================
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const input = document.getElementById(targetId);
            const icon = this.querySelector('i');

            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // ========================================
    // Manejo del Login
    // ========================================
    loginForm?.addEventListener('submit', async function(e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Limpiar errores previos
        clearErrors('login');

        // Validación básica
        if (!Utils.validateEmail(email)) {
            showError('loginEmail', 'Email inválido');
            return;
        }

        if (password.length < 6) {
            showError('loginPassword', 'La contraseña debe tener al menos 6 caracteres');
            return;
        }

        // Mostrar loader
        toggleFormLoader(loginForm, true);

        // Intentar login
        const result = await authManager.login(email, password);

        toggleFormLoader(loginForm, false);

        if (result.success) {
            Utils.showNotification('¡Bienvenido de vuelta!', 'success');
            
            // Redirigir al dashboard después de 1 segundo
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000);
        } else {
            Utils.showNotification(result.error || 'Error al iniciar sesión', 'error');
            showError('loginPassword', 'Credenciales incorrectas');
        }
    });

    // ========================================
    // Manejo del Registro
    // ========================================
    signupForm?.addEventListener('submit', async function(e) {
        e.preventDefault();

        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const passwordConfirm = document.getElementById('signupPasswordConfirm').value;

        // Limpiar errores previos
        clearErrors('signup');

        // Validaciones
        if (!Utils.validateEmail(email)) {
            showError('signupEmail', 'Email inválido');
            return;
        }

        if (password.length < 8) {
            showError('signupPassword', 'La contraseña debe tener al menos 8 caracteres');
            return;
        }

        if (password !== passwordConfirm) {
            showError('signupPasswordConfirm', 'Las contraseñas no coinciden');
            return;
        }

        // Mostrar loader
        toggleFormLoader(signupForm, true);

        // Intentar registro
        const result = await authManager.signup(email, password);

        toggleFormLoader(signupForm, false);

        if (result.success) {
            Utils.showNotification('¡Cuenta creada exitosamente! Verifica tu email.', 'success');
            
            // Cambiar al formulario de login después de 2 segundos
            setTimeout(() => {
                showLoginBtn.click();
                signupForm.reset();
            }, 2000);
        } else {
            Utils.showNotification(result.error || 'Error al crear la cuenta', 'error');
        }
    });

    // ========================================
    // Funciones Auxiliares
    // ========================================

    function showError(fieldId, message) {
        const input = document.getElementById(fieldId);
        const errorSpan = document.getElementById(fieldId + 'Error');

        if (input) {
            input.classList.add('error');
        }

        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.classList.add('show');
        }
    }

    function clearErrors(formType) {
        const prefix = formType === 'login' ? 'login' : 'signup';
        
        document.querySelectorAll(`#${prefix}Form .error-message`).forEach(span => {
            span.classList.remove('show');
            span.textContent = '';
        });

        document.querySelectorAll(`#${prefix}Form input`).forEach(input => {
            input.classList.remove('error');
        });
    }

    function toggleFormLoader(form, show) {
        const btn = form.querySelector('button[type="submit"]');
        const btnText = btn.querySelector('.btn-text');
        const btnLoader = btn.querySelector('.btn-loader');

        if (show) {
            btn.disabled = true;
            btnText.style.display = 'none';
            btnLoader.style.display = 'block';
        } else {
            btn.disabled = false;
            btnText.style.display = 'block';
            btnLoader.style.display = 'none';
        }
    }

    // ========================================
    // Verificar si ya está autenticado
    // ========================================
    if (authManager.isAuthenticated()) {
        // Si ya está autenticado, redirigir al dashboard
        window.location.href = 'dashboard.html';
    }
});
