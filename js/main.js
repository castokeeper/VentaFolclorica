// ========================================
// VentaFolclórica - JavaScript Principal
// ========================================

import { authManager } from './supabase-config.js';

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Navegación Mobile
    // ========================================
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Cambiar icono del botón
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Cerrar menú al hacer click en un enlace
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // ========================================
    // Scroll suave para enlaces internos
    // ========================================
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Si es solo "#" no hacer nada
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // Header con scroll
    // ========================================
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Agregar sombra cuando se hace scroll
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ========================================
    // Animación de aparición para elementos
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos que queremos animar
    const animatedElements = document.querySelectorAll('.feature-card, .section-header');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ========================================
    // Contador del carrito (ejemplo)
    // ========================================
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    
    function updateCartCount(count) {
        cartCount = count;
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
            
            // Animación al actualizar
            cartCountElement.style.transform = 'scale(1.3)';
            setTimeout(() => {
                cartCountElement.style.transform = 'scale(1)';
            }, 200);
        }
    }
    
    // ========================================
    // Newsletter Form
    // ========================================
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Aquí normalmente enviarías el email a un servidor
            console.log('Email suscrito:', email);
            
            // Mostrar mensaje de éxito (puedes mejorar esto con un modal)
            alert('¡Gracias por suscribirte! Pronto recibirás nuestras ofertas especiales.');
            
            emailInput.value = '';
        });
    }
    
    // ========================================
    // Funciones auxiliares que usaremos más adelante
    // ========================================
    
    // Función para formatear precios en MXN
    function formatPrice(price) {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN'
        }).format(price);
    }
    
    // Función para crear una tarjeta de producto (la usaremos después)
    function createProductCard(product) {
        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-badge">${product.badge || ''}</div>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-category">${product.category}</p>
                    <div class="product-price">
                        ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                        <span class="current-price">${formatPrice(product.price)}</span>
                    </div>
                    <button class="btn-add-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-bag"></i>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
    }
    
    // Exponer funciones globales para usar en otros scripts
    window.VentaFolclorica = {
        updateCartCount,
        formatPrice,
        createProductCard
    };
    
    console.log('VentaFolclórica cargado correctamente ✨');
});
