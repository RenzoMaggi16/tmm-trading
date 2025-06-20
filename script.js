// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const icon = item.querySelector('.faq-icon');
    const content = item.querySelector('p');
    
    // Initially hide the content
    content.style.display = 'none';
    
    icon.addEventListener('click', () => {
        // Toggle content visibility
        if (content.style.display === 'none') {
            content.style.display = 'block';
            icon.textContent = '-';
            item.style.boxShadow = '0 0 25px rgba(160, 48, 255, 0.7)';
        } else {
            content.style.display = 'none';
            icon.textContent = '+';
            item.style.boxShadow = '0 0 15px rgba(59, 12, 110, 0.3)';
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(10, 5, 18, 0.95)';
        header.style.boxShadow = '0 5px 15px rgba(59, 12, 110, 0.5)';
    } else {
        header.style.backgroundColor = 'rgba(10, 5, 18, 0.9)';
        header.style.boxShadow = '0 5px 15px rgba(59, 12, 110, 0.3)';
    }
});

// Neon text effect for headings
function addNeonEffect() {
    const headings = document.querySelectorAll('h1');
    headings.forEach(heading => {
        heading.classList.add('neon-text');
    });
}

// Add glow effect to cards on hover
function addGlowEffects() {
    const cards = document.querySelectorAll('.secret-card, .stat-item, .step-content, .faq-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.animation = 'glow 2s infinite';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.animation = 'none';
        });
    });
}

// Initialize animations on scroll
function initAnimations() {
    const elements = document.querySelectorAll('.stat-item, .secret-card, .process-step, .faq-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Función para animar elementos al hacer scroll
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.hero h1, .hero p, .section-title, h1, .about-text p, .video-placeholder, .apply-button-container, .logo-placeholder');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Determinar qué tipo de animación aplicar según el elemento
                if (entry.target.classList.contains('hero') || entry.target.closest('.hero')) {
                    entry.target.classList.add('fade-in-down');
                } else if (entry.target.tagName === 'H1' || entry.target.classList.contains('section-title')) {
                    entry.target.classList.add('fade-in');
                    // Aplicar pulse con un retraso pero sin setTimeout para evitar saltos
                    entry.target.classList.add('pulse-delayed');
                } else if (entry.target.classList.contains('about-text') || entry.target.closest('.about-text')) {
                    entry.target.classList.add('fade-in-left');
                } else if (entry.target.classList.contains('video-placeholder') || entry.target.classList.contains('logo-placeholder')) {
                    entry.target.classList.add('fade-in');
                    // Aplicar float con un retraso pero sin setTimeout para evitar saltos
                    entry.target.classList.add('float-delayed');
                } else if (entry.target.classList.contains('apply-button-container')) {
                    entry.target.classList.add('fade-in');
                    const btn = entry.target.querySelector('.btn-primary');
                    if (btn) btn.classList.add('pulse-delayed');
                } else {
                    entry.target.classList.add('fade-in');
                }
                
                // Desconectar el observer después de aplicar la animación
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1, // Reducir el threshold para que las animaciones se activen más gradualmente
        rootMargin: '0px 0px -50px 0px' // Añadir un margen para que las animaciones se activen un poco antes
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Función para animar las FAQ con efectos suaves
function enhanceFaqAnimations() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const icon = item.querySelector('.faq-icon');
        const content = item.querySelector('p');
        const heading = item.querySelector('h3');
        
        // Inicialmente ocultar el contenido con opacidad 0
        content.style.display = 'none';
        content.style.opacity = '0';
        content.style.transform = 'translateY(-10px)';
        content.style.transition = 'opacity 0.5s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)';
        
        icon.addEventListener('click', () => {
            // Toggle content visibility con animación
            if (content.style.display === 'none') {
                content.style.display = 'block';
                icon.textContent = '-';
                item.style.boxShadow = '0 0 25px rgba(160, 48, 255, 0.7)';
                
                // Animar la aparición del contenido (usar requestAnimationFrame para mejor rendimiento)
                requestAnimationFrame(() => {
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0)';
                });
                
                // Animar el título
                heading.style.color = '#A030FF';
                heading.style.transition = 'color 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)';
                
                // Animar el borde
                item.style.borderLeft = '5px solid #A030FF';
                item.style.transition = 'border-left 0.4s cubic-bezier(0.215, 0.61, 0.355, 1), box-shadow 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)';
            } else {
                // Animar la desaparición del contenido
                content.style.opacity = '0';
                content.style.transform = 'translateY(-10px)';
                
                // Restaurar estilos después de la animación
                setTimeout(() => {
                    content.style.display = 'none';
                    icon.textContent = '+';
                    item.style.boxShadow = '0 0 15px rgba(59, 12, 110, 0.3)';
                    heading.style.color = '#F5F5F5';
                    item.style.borderLeft = '3px solid #A030FF';
                }, 500);
            }
        });
    });
    
    // Mostrar el primer elemento FAQ por defecto con animación
    const firstFaqItem = document.querySelector('.faq-item');
    if (firstFaqItem) {
        const content = firstFaqItem.querySelector('p');
        const icon = firstFaqItem.querySelector('.faq-icon');
        const heading = firstFaqItem.querySelector('h3');
        
        content.style.display = 'block';
        icon.textContent = '-';
        firstFaqItem.style.boxShadow = '0 0 25px rgba(160, 48, 255, 0.7)';
        heading.style.color = '#A030FF';
        firstFaqItem.style.borderLeft = '5px solid #A030FF';
        
        // Usar requestAnimationFrame para mejor rendimiento
        requestAnimationFrame(() => {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        });
    }
}

// Función para añadir efectos de partículas en el fondo
function addParticleEffect() {
    const hero = document.querySelector('.hero');
    const stats = document.querySelector('.stats');
    const notCourse = document.querySelector('.not-course');
    const successRate = document.querySelector('.success-rate');
    
    const sections = [hero, stats, notCourse, successRate];
    
    sections.forEach(section => {
        if (!section) return;
        
        // Crear 20 partículas por sección
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 5 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.random() * 0.5 + 0.1})`;
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            
            // Posición aleatoria
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Animación
            particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite, pulse ${Math.random() * 5 + 5}s ease-in-out infinite`;
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            particle.style.zIndex = '0';
            
            section.appendChild(particle);
        }
    });
}

// Función para añadir efecto de seguimiento suave al cursor
function addCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-effect';
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.border = '2px solid rgba(160, 48, 255, 0.5)';
    cursor.style.pointerEvents = 'none';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.zIndex = '9999';
    cursor.style.transition = 'width 0.3s, height 0.3s, border-color 0.3s';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    cursorDot.style.position = 'fixed';
    cursorDot.style.width = '5px';
    cursorDot.style.height = '5px';
    cursorDot.style.borderRadius = '50%';
    cursorDot.style.backgroundColor = 'rgba(160, 48, 255, 0.8)';
    cursorDot.style.pointerEvents = 'none';
    cursorDot.style.transform = 'translate(-50%, -50%)';
    cursorDot.style.zIndex = '10000';
    document.body.appendChild(cursorDot);
    
    document.addEventListener('mousemove', (e) => {
        // Movimiento suave para el círculo exterior
        gsap.to(cursor, { duration: 0.4, left: e.clientX, top: e.clientY });
        
        // Movimiento más rápido para el punto interior
        gsap.to(cursorDot, { duration: 0.1, left: e.clientX, top: e.clientY });
    });
    
    // Efecto hover en elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, .faq-icon, .secret-card, .stat-item, .step-content, .faq-item');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.borderColor = 'rgba(18, 176, 233, 0.8)';
            cursorDot.style.backgroundColor = 'rgba(18, 176, 233, 0.8)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.borderColor = 'rgba(160, 48, 255, 0.5)';
            cursorDot.style.backgroundColor = 'rgba(160, 48, 255, 0.8)';
        });
    });
}

// Función para añadir efecto de parallax al hacer scroll
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // Parallax para el hero
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
        
        // Parallax para otros elementos
        const parallaxElements = document.querySelectorAll('.about-image, .video-placeholder, .logo-placeholder');
        parallaxElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top + scrollPosition;
            const offset = (scrollPosition - elementPosition) * 0.1;
            element.style.transform = `translateY(${offset}px)`;
        });
    });
}

// Función para animar la oveja en cohete de forma aleatoria
function animateRocketSheep() {
    const rocketSheep = document.querySelector('.rocket-sheep');
    if (!rocketSheep) return;
    
    // Definir las posibles animaciones
    const animations = [
        'flyTopRight',
        'flyBottomRight',
        'flyTopLeft',
        'flyBottomLeft'
    ];
    
    // Función para iniciar una animación aleatoria
    function startRandomAnimation() {
        // Seleccionar una animación aleatoria
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        
        // Reiniciar el estado de la animación
        rocketSheep.style.animation = 'none';
        rocketSheep.offsetHeight; // Trigger reflow
        
        // Posicionar aleatoriamente en el eje Y dentro del hero
        const randomYPosition = 20 + Math.random() * 60; // Entre 20% y 80% del alto
        rocketSheep.style.top = `${randomYPosition}%`;
        
        // Aplicar la animación
        rocketSheep.style.animation = `${randomAnimation} 10s ease-in-out forwards`;
        
        // Programar la próxima animación después de un tiempo aleatorio
        const nextAnimationDelay = 15000 + Math.random() * 20000; // Entre 15 y 35 segundos
        setTimeout(startRandomAnimation, nextAnimationDelay);
    }
    
    // Iniciar la primera animación después de un breve retraso
    setTimeout(startRandomAnimation, 3000);
}

// Ejecutar la función cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    addNeonEffect();
    addGlowEffects();
    initScrollAnimations();
    enhanceFaqAnimations();
    addParticleEffect();
    try {
        // Verificar si GSAP está disponible
        if (typeof gsap !== 'undefined') {
            addCursorEffect();
        }
    } catch (error) {
        console.log('GSAP no está disponible. El efecto de cursor no se aplicará.');
    }
    addParallaxEffect();
    
    // Mostrar primer FAQ item por defecto
    const firstFaqItem = document.querySelector('.faq-item');
    if (firstFaqItem) {
        const content = firstFaqItem.querySelector('p');
        const icon = firstFaqItem.querySelector('.faq-icon');
        content.style.display = 'block';
        icon.textContent = '-';
    }
});