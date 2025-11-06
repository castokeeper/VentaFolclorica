// ========================================
// DANZA FOLCLÓRICA EDUCATIVA
// ========================================

// Datos de la Línea de Tiempo - Historia
const historiaData = [
    {
        icon: 'fa-landmark',
        titulo: 'Era Prehispánica',
        descripcion: 'Las danzas rituales formaban parte fundamental de las ceremonias religiosas. Los aztecas, mayas y otras culturas usaban la danza para honrar a sus dioses, celebrar ciclos agrícolas y transmitir historias sagradas.',
        imagen: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&h=300&fit=crop'
    },
    {
        icon: 'fa-ship',
        titulo: 'Época Colonial (1521-1821)',
        descripcion: 'La fusión de tradiciones europeas con costumbres indígenas dio origen a nuevas expresiones dancísticas. Los españoles introdujeron instrumentos como el violín y la guitarra, que se mezclaron perfectamente con lo autóctono.',
        imagen: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=400&h=300&fit=crop'
    },
    {
        icon: 'fa-flag',
        titulo: 'México Independiente',
        descripcion: 'Surge el jarabe tapatío como símbolo nacional de identidad. Cada región desarrolla su propia identidad dancística, reflejando su historia única, mestizaje cultural y tradiciones locales.',
        imagen: 'https://images.unsplash.com/photo-1534293230397-c067fc201ab8?w=400&h=300&fit=crop'
    },
    {
        icon: 'fa-heart',
        titulo: 'Siglo XX - Actualidad',
        descripcion: 'El Ballet Folclórico de México profesionaliza la danza. Se crean grupos en todo el país que preservan y promueven estas tradiciones en escenarios nacionales e internacionales, manteniendo viva nuestra cultura.',
        imagen: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=300&fit=crop'
    }
];

// Datos de Regiones
const regionesData = [
    {
        nombre: 'Jalisco',
        danza: 'Jarabe Tapatío',
        descripcion: 'La danza más emblemática de México. Representa el galanteo entre hombre y mujer con movimientos alegres y zapateados.',
        caracteristicas: ['Zapateado fuerte', 'Faldas amplias', 'Sombrero de charro'],
        imagen: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=500&h=400&fit=crop',
        icon: 'fa-hat-cowboy'
    },
    {
        nombre: 'Veracruz',
        danza: 'La Bamba',
        descripcion: 'Danza alegre y festiva del son jarocho. Famosa por el zapateado sobre una tarima y el nudo de la cinta con los pies.',
        caracteristicas: ['Zapateado en tarima', 'Ritmo alegre', 'Vestido blanco'],
        imagen: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop',
        icon: 'fa-music'
    },
    {
        nombre: 'Chiapas',
        danza: 'Parachicos',
        descripcion: 'Danza tradicional patrimonio de la humanidad. Los danzantes usan máscaras talladas en madera de cedro.',
        caracteristicas: ['Máscaras de madera', 'Sarapes coloridos', 'Sonajas'],
        imagen: 'https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?w=500&h=400&fit=crop',
        icon: 'fa-mask'
    },
    {
        nombre: 'Oaxaca',
        danza: 'Guelaguetza',
        descripcion: 'Celebración de las diferentes regiones de Oaxaca. Cada comunidad presenta su danza tradicional con trajes únicos.',
        caracteristicas: ['Trajes regionales', 'Plumas', 'Flores naturales'],
        imagen: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=400&fit=crop',
        icon: 'fa-feather'
    }
];

// Pasos para Aprender
const pasosAprenderData = [
    {
        numero: 1,
        titulo: 'Postura Básica',
        descripcion: 'Mantén la espalda recta, hombros relajados y brazos naturales. La postura es fundamental para ejecutar los movimientos correctamente.',
        tips: ['Cabeza en alto', 'Espalda recta', 'Pies firmes', 'Brazos relajados'],
        imagen: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop',
        dificultad: 'Fácil'
    },
    {
        numero: 2,
        titulo: 'Zapateado Básico',
        descripcion: 'El zapateado es el alma del folclor. Comienza con golpes simples alternando los pies y aumenta gradualmente la velocidad.',
        tips: ['Golpear con toda la planta', 'Ritmo constante', 'Practicar lento primero', 'Mantener equilibrio'],
        imagen: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=400&fit=crop',
        dificultad: 'Media'
    },
    {
        numero: 3,
        titulo: 'Movimiento de Falda',
        descripcion: 'Para las mujeres, el manejo de la falda es esencial. Aprende a sostenerla correctamente y crear movimientos fluidos y elegantes.',
        tips: ['Sostén con delicadeza', 'Movimientos amplios', 'Coordinación con pasos', 'Práctica frente al espejo'],
        imagen: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&h=400&fit=crop',
        dificultad: 'Media'
    },
    {
        numero: 4,
        titulo: 'Coordinación y Ritmo',
        descripcion: 'Combina todos los elementos: postura, zapateado y movimientos. Escucha la música y deja que tu cuerpo fluya con el ritmo.',
        tips: ['Escuchar la música', 'Contar los tiempos', 'Practicar con pareja', 'Divertirse bailando'],
        imagen: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=400&fit=crop',
        dificultad: 'Avanzada'
    }
];

// Vestuario Tradicional
const vestuarioData = [
    {
        nombre: 'Vestido de Jalisco',
        descripcion: 'Falda amplia de colores vibrantes con bordados florales. Representa la alegría y el colorido de la región.',
        elementos: ['Falda de vuelo', 'Blusa bordada', 'Rebozo', 'Moño en el cabello'],
        imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
        icon: 'fa-female'
    },
    {
        nombre: 'Traje de Charro',
        descripcion: 'Traje de gala masculino con botonadura de plata. Símbolo de elegancia y tradición mexicana.',
        elementos: ['Pantalón ajustado', 'Chaqueta con botones', 'Sombrero ancho', 'Botas de cuero'],
        imagen: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=400&h=500&fit=crop',
        icon: 'fa-male'
    },
    {
        nombre: 'Huipil Oaxaqueño',
        descripcion: 'Prenda tradicional bordada a mano con diseños geométricos y flores. Cada diseño cuenta una historia.',
        elementos: ['Bordado a mano', 'Diseños ancestrales', 'Colores naturales', 'Falda larga'],
        imagen: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=500&fit=crop',
        icon: 'fa-tshirt'
    },
    {
        nombre: 'Accesorios Tradicionales',
        descripcion: 'Complementos que realzan el vestuario: rebozos, listones, joyería de plata y flores naturales.',
        elementos: ['Rebozo artesanal', 'Aretes de plata', 'Flores naturales', 'Listones coloridos'],
        imagen: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop',
        icon: 'fa-gem'
    }
];

// ========================================
// FUNCIONES DE RENDERIZADO
// ========================================

// Renderizar Línea de Tiempo
function renderHistoria() {
    const timelineContent = document.getElementById('timelineContent');
    if (!timelineContent) return;
    
    timelineContent.innerHTML = historiaData.map((item, index) => `
        <div class="timeline-item" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="timeline-icon">
                <i class="fas ${item.icon}"></i>
            </div>
            <div class="timeline-content">
                <div class="timeline-image">
                    <img src="${item.imagen}" alt="${item.titulo}" loading="lazy">
                </div>
                <h3>${item.titulo}</h3>
                <p>${item.descripcion}</p>
            </div>
        </div>
    `).join('');
}

// Renderizar Regiones
function renderRegiones() {
    const regionesGrid = document.getElementById('regionesGrid');
    if (!regionesGrid) return;
    
    regionesGrid.innerHTML = regionesData.map((region, index) => `
        <div class="feature-card region-card" data-aos="zoom-in" data-aos-delay="${index * 100}">
            <div class="region-image">
                <img src="${region.imagen}" alt="${region.nombre}" loading="lazy">
                <div class="region-overlay">
                    <i class="fas ${region.icon}"></i>
                </div>
            </div>
            <div class="feature-icon">
                <i class="fas ${region.icon}"></i>
            </div>
            <h3>${region.nombre}</h3>
            <h4 class="danza-nombre">${region.danza}</h4>
            <p>${region.descripcion}</p>
            <div class="caracteristicas-list">
                ${region.caracteristicas.map(car => `
                    <span class="caracteristica-tag">
                        <i class="fas fa-check"></i> ${car}
                    </span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Renderizar Pasos para Aprender
function renderPasosAprender() {
    const pasosGrid = document.getElementById('pasosGrid');
    if (!pasosGrid) return;
    
    pasosGrid.innerHTML = pasosAprenderData.map((paso, index) => `
        <div class="paso-card" data-aos="flip-left" data-aos-delay="${index * 100}">
            <div class="paso-numero">
                <span>Paso ${paso.numero}</span>
            </div>
            <div class="paso-image">
                <img src="${paso.imagen}" alt="${paso.titulo}" loading="lazy">
                <div class="dificultad-badge ${paso.dificultad.toLowerCase()}">
                    ${paso.dificultad}
                </div>
            </div>
            <div class="paso-info">
                <h3>${paso.titulo}</h3>
                <p>${paso.descripcion}</p>
                <div class="tips-list">
                    <h4><i class="fas fa-lightbulb"></i> Tips:</h4>
                    <ul>
                        ${paso.tips.map(tip => `<li><i class="fas fa-star"></i> ${tip}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn-practicar" onclick="practicarPaso(${paso.numero})">
                    <i class="fas fa-play"></i> Practicar
                </button>
            </div>
        </div>
    `).join('');
}

// Renderizar Vestuario
function renderVestuario() {
    const vestuarioGrid = document.getElementById('vestuarioGrid');
    if (!vestuarioGrid) return;
    
    vestuarioGrid.innerHTML = vestuarioData.map((item, index) => `
        <div class="feature-card vestuario-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="vestuario-image">
                <img src="${item.imagen}" alt="${item.nombre}" loading="lazy">
            </div>
            <div class="feature-icon">
                <i class="fas ${item.icon}"></i>
            </div>
            <h3>${item.nombre}</h3>
            <p>${item.descripcion}</p>
            <div class="elementos-list">
                <h4>Elementos:</h4>
                ${item.elementos.map(elemento => `
                    <span class="elemento-tag">
                        <i class="fas fa-check-circle"></i> ${elemento}
                    </span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// ========================================
// FUNCIONES INTERACTIVAS
// ========================================

function practicarPaso(numeroPaso) {
    const paso = pasosAprenderData[numeroPaso - 1];
    showNotification(`¡Excelente! Vas a practicar: ${paso.titulo}`, 'success');
    
    // Aquí podrías abrir un modal con más detalles o video
    console.log(`Practicando paso ${numeroPaso}: ${paso.titulo}`);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type} show`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// NAVEGACIÓN SUAVE
// ========================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Actualizar clase active en navegación
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// ========================================
// MENÚ MÓVIL
// ========================================

function setupMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
        
        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }
}

// ========================================
// ANIMACIONES AL SCROLL
// ========================================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observar elementos con animación
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// BÚSQUEDA
// ========================================

function setupSearch() {
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            showNotification('Función de búsqueda próximamente', 'info');
        });
    }
}

// ========================================
// NEWSLETTER
// ========================================

function setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            showNotification(`¡Gracias por suscribirte! Te enviaremos contenido a ${email}`, 'success');
            this.reset();
        });
    }
}

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎭 Danza Folclórica MX - Plataforma Educativa');
    
    // Renderizar contenido
    renderHistoria();
    renderRegiones();
    renderPasosAprender();
    renderVestuario();
    
    // Configurar interactividad
    setupSmoothScroll();
    setupMobileMenu();
    setupSearch();
    setupNewsletter();
    
    // Configurar animaciones después de un pequeño delay
    setTimeout(() => {
        setupScrollAnimations();
    }, 100);
    
    console.log('✅ Plataforma educativa cargada correctamente');
});
