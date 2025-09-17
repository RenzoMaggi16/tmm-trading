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

// Eliminar esta implementación antigua de FAQ
// const faqItems = document.querySelectorAll('.faq-item');
// 
// faqItems.forEach(item => {
//     const icon = item.querySelector('.faq-icon');
//     const content = item.querySelector('p');
//     
//     // Initially hide the content
//     content.style.display = 'none';
//     
//     icon.addEventListener('click', () => {
//         // Toggle content visibility
//         if (content.style.display === 'none') {
//             content.style.display = 'block';
//             icon.textContent = '-';
//             item.style.boxShadow = '0 0 25px rgba(160, 48, 255, 0.7)';
//         } else {
//             content.style.display = 'none';
//             icon.textContent = '+';
//             item.style.boxShadow = '0 0 15px rgba(59, 12, 110, 0.3)';
//         }
//     });
// });

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
            // Activar la animación incluso cuando el elemento está cerca pero no visible aún
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
                // Aplicar la animación inmediatamente sin retraso
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0, // Detectar cualquier parte del elemento
        rootMargin: '0px 0px 100% 0px' // Activar cuando el elemento está a una pantalla completa de distancia
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Función para animar elementos al hacer scroll
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.hero h1, .hero p, .section-title, h1, .about-text p, .video-placeholder, .apply-button-container, .logo-placeholder');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Activar la animación incluso cuando el elemento está cerca pero no visible aún
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
                // Determinar qué tipo de animación aplicar según el elemento
                if (entry.target.classList.contains('hero') || entry.target.closest('.hero')) {
                    entry.target.classList.add('fade-in-down');
                } else if (entry.target.tagName === 'H1' || entry.target.classList.contains('section-title')) {
                    entry.target.classList.add('fade-in');
                    entry.target.classList.add('pulse-delayed');
                } else if (entry.target.classList.contains('about-text') || entry.target.closest('.about-text')) {
                    entry.target.classList.add('fade-in-left');
                } else if (entry.target.classList.contains('video-placeholder') || entry.target.classList.contains('logo-placeholder')) {
                    entry.target.classList.add('fade-in');
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
        threshold: 0, // Detectar cualquier parte del elemento
        rootMargin: '0px 0px 100% 0px' // Activar cuando el elemento está a una pantalla completa de distancia
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Función para animar las FAQ con efectos suaves
// Reemplazar la función enhanceFaqAnimations existente con esta versión mejorada
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
        
        // Función para alternar la visibilidad del contenido
        const toggleContent = () => {
            // Toggle content visibility con animación
            if (content.style.display === 'none') {
                content.style.display = 'block';
                icon.textContent = '-';
                item.style.boxShadow = '0 0 25pxrgba(18, 176, 233, 0.69)';
                
                // Animar la aparición del contenido (usar requestAnimationFrame para mejor rendimiento)
                requestAnimationFrame(() => {
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0)';
                });
                
                // Animar el título
                heading.style.color = '#12B0E9';
                heading.style.transition = 'color 0s cubic-bezier(0.215, 0.61, 0.355, 1)';
                
                // Animar el borde
                item.style.borderLeft = '5px solid #12B0E9';
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
                    item.style.borderLeft = '3px solid #12B0E9';
                }, 500);
            }
        };
        
        // Añadir evento de clic tanto al ícono como al título
        icon.addEventListener('click', toggleContent);
        heading.addEventListener('click', toggleContent);
    });
    
    // Mostrar el primer elemento FAQ por defecto con animación
    const firstFaqItem = document.querySelector('.faq-item');
    if (firstFaqItem) {
        const content = firstFaqItem.querySelector('p');
        const icon = firstFaqItem.querySelector('.faq-icon');
        const heading = firstFaqItem.querySelector('h3');
        
        content.style.display = 'block';
        icon.textContent = '-';
        firstFaqItem.style.boxShadow = '0 0 25pxrgba(18, 176, 233, 0.72)';
        heading.style.color = '#12B0E9';
        firstFaqItem.style.borderLeft = '5px solid #12B0E9';
        
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

// Función para animar la oveja en cohete una sola vez
function animateRocketSheep() {
    const rocketSheep = document.querySelector('.rocket-sheep');
    if (!rocketSheep) return;
    
    // Verificar si es un dispositivo móvil
    if (window.innerWidth <= 768) {
        // No ejecutar la animación en dispositivos móviles
        return;
    }
    
    // Reiniciar el estado de la animación
    rocketSheep.style.animation = 'none';
    rocketSheep.offsetHeight; // Trigger reflow
    
    // Aplicar la animación una sola vez
    rocketSheep.style.animation = 'rocketFlyDiagonal 3s ease-in-out forwards';
}

// Función para detectar si el dispositivo es móvil
function isMobileDevice() {
    return (window.innerWidth <= 768) || 
           (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

// Función para inicializar el video de introducción
function initIntroVideo() {
    // Verificar si estamos en una página legal y salir de la función si es así
    const currentPage = window.location.pathname;
    if (currentPage.includes('terminos-y-condiciones.html') || currentPage.includes('acuerdo-confidencialidad.html')) {
        // No aplicar el efecto de ocultamiento en páginas legales
        return;
    }
    
    const videoContainer = document.getElementById('intro-video-container');
    const video = document.getElementById('intro-video');
    const mainContent = document.body;
    
    // Ocultar inicialmente el contenido principal
    Array.from(mainContent.children).forEach(child => {
        if (child.id !== 'intro-video-container' && child.id !== 'fluid') {
            child.classList.add('content-hidden');
        }
    });
    
    // Determinar qué video cargar según el dispositivo
    const videoPath = isMobileDevice() 
        ? '/assets/videos/Mobile.mp4' 
        : '/assets/videos/Desktop.mp4';
    
    // Configurar el video
    video.src = videoPath;
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    
    // Cuando el video termine, mostrar el contenido principal
    video.addEventListener('ended', () => {
        // Ocultar el contenedor de video
        videoContainer.classList.add('hidden');
        
        // Mostrar el contenido principal con un pequeño retraso para la transición
        setTimeout(() => {
            Array.from(mainContent.children).forEach(child => {
                if (child.id !== 'intro-video-container' && child.id !== 'fluid') {
                    child.classList.remove('content-hidden');
                    child.classList.add('content-visible');
                }
            });
            
            // Iniciar las animaciones existentes después de que aparezca el contenido
            initAnimations();
            initScrollAnimations();
        }, 500);
    });
    
    // Si hay algún problema con la reproducción del video
    video.addEventListener('error', () => {
        console.error('Error al reproducir el video de introducción');
        videoContainer.classList.add('hidden');
        
        // Mostrar el contenido principal inmediatamente
        Array.from(mainContent.children).forEach(child => {
            if (child.id !== 'intro-video-container' && child.id !== 'fluid') {
                child.classList.remove('content-hidden');
                child.classList.add('content-visible');
            }
        });
        
        // Iniciar las animaciones existentes
        initAnimations();
        initScrollAnimations();
    });
}

// Carrusel de reseñas
function initReviewsCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    if (!track || slides.length === 0) return;
    
    // Crear puntos indicadores
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            moveToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = Array.from(dotsContainer.children);
    
    // Configurar tamaño de slides
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    // Posicionar slides uno al lado del otro
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });
    
    let currentIndex = 0;
    
    // Función para mover a un slide específico
    function moveToSlide(targetIndex) {
        if (targetIndex < 0) targetIndex = slides.length - 1;
        if (targetIndex >= slides.length) targetIndex = 0;
        
        track.style.transform = `translateX(-${slideWidth * targetIndex}px)`;
        
        // Actualizar dots activos
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === targetIndex);
        });
        
        currentIndex = targetIndex;
    }
    
    // Event listeners para botones
    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
    });
    
    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
    });
    
    // Auto-avance cada 5 segundos
    setInterval(() => {
        moveToSlide(currentIndex + 1);
    }, 5000);
}

// Ejecutar la función cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    initIntroVideo();
    
    // El resto de inicializaciones se harán independientemente del video
    addNeonEffect();
    addGlowEffects();
    enhanceFaqAnimations();
    addParticleEffect();
    addParallaxEffect();
    
    // Ejecutar la animación del cohete después de un breve retraso
    setTimeout(animateRocketSheep, 1000);
    
    // Inicializar el efecto de cursor fluido
    initFluid();
    
    // Inicializar el carrusel de reseñas
    initReviewsCarousel();
});

// Código del efecto de cursor fluido
// put the animation on load, otherwise it bugs out
window.addEventListener('load', () => {
    initFluid();
});

const initFluid = () => {
    const canvas = document.getElementById('fluid');
    resizeCanvas();

    let config = {
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 1440,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 8,
        VELOCITY_DISSIPATION: 2.5,
        PRESSURE: 0.1,
        PRESSURE_ITERATIONS: 20,
        CURL: 4,
        SPLAT_RADIUS: 0.1,
        SPLAT_FORCE: 6000,
        SHADING: true,
        COLOR_UPDATE_SPEED: 30,
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        TRANSPARENT: true,
    }

    function pointerPrototype() {
        this.id = -1;
        this.texcoordX = 0;
        this.texcoordY = 0;
        this.prevTexcoordX = 0;
        this.prevTexcoordY = 0;
        this.deltaX = 0;
        this.deltaY = 0;
        this.down = false;
        this.moved = false;
        this.color = [30, 0, 300];
    }

    let pointers = [];
    pointers.push(new pointerPrototype());

    const { gl, ext } = getWebGLContext(canvas);

    if (!ext.supportLinearFiltering) {
        config.DYE_RESOLUTION = 512;
        config.SHADING = false;
    }

    function getWebGLContext(canvas) {
        const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };

        let gl = canvas.getContext('webgl2', params);
        const isWebGL2 = !!gl;
        if (!isWebGL2)
            gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);

        let halfFloat;
        let supportLinearFiltering;
        if (isWebGL2) {
            gl.getExtension('EXT_color_buffer_float');
            supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
        } else {
            halfFloat = gl.getExtension('OES_texture_half_float');
            supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
        }

        gl.clearColor(0.0, 0.0, 0.0, 1.0);

        const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;
        let formatRGBA;
        let formatRG;
        let formatR;

        if (isWebGL2) {
            formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
            formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
            formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
        }
        else {
            formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
            formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
            formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        }

        return {
            gl,
            ext: {
                formatRGBA,
                formatRG,
                formatR,
                halfFloatTexType,
                supportLinearFiltering
            }
        };
    }

    function getSupportedFormat(gl, internalFormat, format, type) {
        if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
            switch (internalFormat) {
                case gl.R16F:
                    return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
                case gl.RG16F:
                    return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
                default:
                    return null;
            }
        }

        return {
            internalFormat,
            format
        }
    }

    function supportRenderTextureFormat(gl, internalFormat, format, type) {
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);

        let fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

        let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        return status == gl.FRAMEBUFFER_COMPLETE;
    }

    class Material {
        constructor(vertexShader, fragmentShaderSource) {
            this.vertexShader = vertexShader;
            this.fragmentShaderSource = fragmentShaderSource;
            this.programs = [];
            this.activeProgram = null;
            this.uniforms = [];
        }

        setKeywords(keywords) {
            let hash = 0;
            for (let i = 0; i < keywords.length; i++)
                hash += hashCode(keywords[i]);

            let program = this.programs[hash];
            if (program == null) {
                let fragmentShader = compileShader(gl.FRAGMENT_SHADER, this.fragmentShaderSource, keywords);
                program = createProgram(this.vertexShader, fragmentShader);
                this.programs[hash] = program;
            }

            if (program == this.activeProgram) return;

            this.uniforms = getUniforms(program);
            this.activeProgram = program;
        }

        bind() {
            gl.useProgram(this.activeProgram);
        }
    }

    class Program {
        constructor(vertexShader, fragmentShader) {
            this.uniforms = {};
            this.program = createProgram(vertexShader, fragmentShader);
            this.uniforms = getUniforms(this.program);
        }

        bind() {
            gl.useProgram(this.program);
        }
    }

    function createProgram(vertexShader, fragmentShader) {
        let program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS))
            console.trace(gl.getProgramInfoLog(program));

        return program;
    }

    function getUniforms(program) {
        let uniforms = [];
        let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
            let uniformName = gl.getActiveUniform(program, i).name;
            uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
        }
        return uniforms;
    }

    function compileShader(type, source, keywords) {
        source = addKeywords(source, keywords);

        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
            console.trace(gl.getShaderInfoLog(shader));

        return shader;

    };

    function addKeywords(source, keywords) {
        if (keywords == null) return source;
        let keywordsString = '';
        keywords.forEach(keyword => {
            keywordsString += '#define ' + keyword + '\n';
        });

        return keywordsString + source;
    }

    const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
      precision highp float;
  
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;
  
      void main () {
          vUv = aPosition * 0.5 + 0.5;
          vL = vUv - vec2(texelSize.x, 0.0);
          vR = vUv + vec2(texelSize.x, 0.0);
          vT = vUv + vec2(0.0, texelSize.y);
          vB = vUv - vec2(0.0, texelSize.y);
          gl_Position = vec4(aPosition, 0.0, 1.0);
      }
  `);

    const blurVertexShader = compileShader(gl.VERTEX_SHADER, `
      precision highp float;
  
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      uniform vec2 texelSize;
  
      void main () {
          vUv = aPosition * 0.5 + 0.5;
          float offset = 1.33333333;
          vL = vUv - texelSize * offset;
          vR = vUv + texelSize * offset;
          gl_Position = vec4(aPosition, 0.0, 1.0);
      }
  `);

    const blurShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
  
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      uniform sampler2D uTexture;
  
      void main () {
          vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
          sum += texture2D(uTexture, vL) * 0.35294117;
          sum += texture2D(uTexture, vR) * 0.35294117;
          gl_FragColor = sum;
      }
  `);

    const copyShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
  
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
  
      void main () {
          gl_FragColor = texture2D(uTexture, vUv);
      }
  `);

    const clearShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
  
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;
  
      void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
      }
  `);

    const colorShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
  
      uniform vec4 color;
  
      void main () {
          gl_FragColor = color;
      }
  `);


    const displayShaderSource = `
      precision highp float;
      precision highp sampler2D;
  
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;
  
      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }
  
      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
  
      #ifdef SHADING
          vec3 lc = texture2D(uTexture, vL).rgb;
          vec3 rc = texture2D(uTexture, vR).rgb;
          vec3 tc = texture2D(uTexture, vT).rgb;
          vec3 bc = texture2D(uTexture, vB).rgb;
  
          float dx = length(rc) - length(lc);
          float dy = length(tc) - length(bc);
  
          vec3 n = normalize(vec3(dx, dy, length(texelSize)));
          vec3 l = vec3(0.0, 0.0, 1.0);
  
          float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
          c *= diffuse;
      #endif
  
          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
  `;

    const splatShader = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;
  
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;
  
      void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspectRatio;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
      }
  `);

    const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;
  
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform vec2 dyeTexelSize;
      uniform float dt;
      uniform float dissipation;
  
      vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
          vec2 st = uv / tsize - 0.5;
  
          vec2 iuv = floor(st);
          vec2 fuv = fract(st);
  
          vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
          vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
          vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
          vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
  
          return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
      }
  
      void main () {
      #ifdef MANUAL_FILTERING
          vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
          vec4 result = bilerp(uSource, coord, dyeTexelSize);
      #else
          vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
          vec4 result = texture2D(uSource, coord);
      #endif
          float decay = 1.0 + dissipation * dt;
          gl_FragColor = result / decay;
      }`,
        ext.supportLinearFiltering ? null : ['MANUAL_FILTERING']
    );

    const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
  
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;
  
      void main () {
          float L = texture2D(uVelocity, vL).x;
          float R = texture2D(uVelocity, vR).x;
          float T = texture2D(uVelocity, vT).y;
          float B = texture2D(uVelocity, vB).y;
  
          vec2 C = texture2D(uVelocity, vUv).xy;
          if (vL.x < 0.0) { L = -C.x; }
          if (vR.x > 1.0) { R = -C.x; }
          if (vT.y > 1.0) { T = -C.y; }
          if (vB.y < 0.0) { B = -C.y; }
  
          float div = 0.5 * (R - L + T - B);
          gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
  `);

    const curlShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
  
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;
  
      void main () {
          float L = texture2D(uVelocity, vL).y;
          float R = texture2D(uVelocity, vR).y;
          float T = texture2D(uVelocity, vT).x;
          float B = texture2D(uVelocity, vB).x;
          float vorticity = R - L - T + B;
          gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
  `);

    const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;
  
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;
  
      void main () {
          float L = texture2D(uCurl, vL).x;
          float R = texture2D(uCurl, vR).x;
          float T = texture2D(uCurl, vT).x;
          float B = texture2D(uCurl, vB).x;
          float C = texture2D(uCurl, vUv).x;
  
          vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
          force /= length(force) + 0.0001;
          force *= curl * C;
          force.y *= -1.0;
  
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity += force * dt;
          velocity = min(max(velocity, -1000.0), 1000.0);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
  `);

    const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
  
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;
  
      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          float C = texture2D(uPressure, vUv).x;
          float divergence = texture2D(uDivergence, vUv).x;
          float pressure = (L + R + B + T - divergence) * 0.25;
          gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
  `);

    const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;
  
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;
  
      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity.xy -= vec2(R - L, T - B);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
  `);

    const blit = (() => {
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(0);

        return (target, clear = false) => {
            if (target == null) {
                gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            }
            else {
                gl.viewport(0, 0, target.width, target.height);
                gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
            }
            if (clear) {
                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                gl.clear(gl.COLOR_BUFFER_BIT);
            }
            // CHECK_FRAMEBUFFER_STATUS();
            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
        }
    })();

    function CHECK_FRAMEBUFFER_STATUS() {
        let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (status != gl.FRAMEBUFFER_COMPLETE)
            console.trace("Framebuffer error: " + status);
    }

    let dye;
    let velocity;
    let divergence;
    let curl;
    let pressure;
    let ditheringTexture = createTextureAsync('../app/themes/flipp/dist/images/LDR_LLL1_0.png');

    const blurProgram = new Program(blurVertexShader, blurShader);
    const copyProgram = new Program(baseVertexShader, copyShader);
    const clearProgram = new Program(baseVertexShader, clearShader);
    const colorProgram = new Program(baseVertexShader, colorShader);
    const splatProgram = new Program(baseVertexShader, splatShader);
    const advectionProgram = new Program(baseVertexShader, advectionShader);
    const divergenceProgram = new Program(baseVertexShader, divergenceShader);
    const curlProgram = new Program(baseVertexShader, curlShader);
    const vorticityProgram = new Program(baseVertexShader, vorticityShader);
    const pressureProgram = new Program(baseVertexShader, pressureShader);
    const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);

    const displayMaterial = new Material(baseVertexShader, displayShaderSource);

    function initFramebuffers() {
        let simRes = getResolution(config.SIM_RESOLUTION);
        let dyeRes = getResolution(config.DYE_RESOLUTION);

        const texType = ext.halfFloatTexType;
        const rgba = ext.formatRGBA;
        const rg = ext.formatRG;
        const r = ext.formatR;
        const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

        gl.disable(gl.BLEND);

        if (dye == null)
            dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
        else
            dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);

        if (velocity == null)
            velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
        else
            velocity = resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);

        divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
        curl = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
        pressure = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);

    }

    function createFBO(w, h, internalFormat, format, type, param) {
        gl.activeTexture(gl.TEXTURE0);
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

        let fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        gl.viewport(0, 0, w, h);
        gl.clear(gl.COLOR_BUFFER_BIT);

        let texelSizeX = 1.0 / w;
        let texelSizeY = 1.0 / h;

        return {
            texture,
            fbo,
            width: w,
            height: h,
            texelSizeX,
            texelSizeY,
            attach(id) {
                gl.activeTexture(gl.TEXTURE0 + id);
                gl.bindTexture(gl.TEXTURE_2D, texture);
                return id;
            }
        };
    }

    function createDoubleFBO(w, h, internalFormat, format, type, param) {
        let fbo1 = createFBO(w, h, internalFormat, format, type, param);
        let fbo2 = createFBO(w, h, internalFormat, format, type, param);

        return {
            width: w,
            height: h,
            texelSizeX: fbo1.texelSizeX,
            texelSizeY: fbo1.texelSizeY,
            get read() {
                return fbo1;
            },
            set read(value) {
                fbo1 = value;
            },
            get write() {
                return fbo2;
            },
            set write(value) {
                fbo2 = value;
            },
            swap() {
                let temp = fbo1;
                fbo1 = fbo2;
                fbo2 = temp;
            }
        }
    }

    function resizeFBO(target, w, h, internalFormat, format, type, param) {
        let newFBO = createFBO(w, h, internalFormat, format, type, param);
        copyProgram.bind();
        gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
        blit(newFBO);
        return newFBO;
    }

    function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
        if (target.width == w && target.height == h)
            return target;
        target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
        target.write = createFBO(w, h, internalFormat, format, type, param);
        target.width = w;
        target.height = h;
        target.texelSizeX = 1.0 / w;
        target.texelSizeY = 1.0 / h;
        return target;
    }

    function createTextureAsync(url) {
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));

        let obj = {
            texture,
            width: 1,
            height: 1,
            attach(id) {
                gl.activeTexture(gl.TEXTURE0 + id);
                gl.bindTexture(gl.TEXTURE_2D, texture);
                return id;
            }
        };

        let image = new Image();
        image.onload = () => {
            obj.width = image.width;
            obj.height = image.height;
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
        };
        image.src = url;

        return obj;
    }

    function updateKeywords() {
        let displayKeywords = [];
        if (config.SHADING) displayKeywords.push("SHADING");
        displayMaterial.setKeywords(displayKeywords);
    }

    updateKeywords();
    initFramebuffers();

    let lastUpdateTime = Date.now();
    let colorUpdateTimer = 0.0;

    function update() {
        const dt = calcDeltaTime();
        // console.log(dt)
        if (resizeCanvas())
            initFramebuffers();
        updateColors(dt);
        applyInputs();
        step(dt);
        render(null);
        requestAnimationFrame(update);
    }

    function calcDeltaTime() {
        let now = Date.now();
        let dt = (now - lastUpdateTime) / 1000;
        dt = Math.min(dt, 0.016666);
        lastUpdateTime = now;
        return dt;
    }

    function resizeCanvas() {
        let width = scaleByPixelRatio(canvas.clientWidth);
        let height = scaleByPixelRatio(canvas.clientHeight);
        if (canvas.width != width || canvas.height != height) {
            canvas.width = width;
            canvas.height = height;
            return true;
        }
        return false;
    }

    function updateColors(dt) {

        colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
        if (colorUpdateTimer >= 1) {
            colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
            pointers.forEach(p => {
                p.color = generateColor();
            });
        }
    }

    function applyInputs() {
        pointers.forEach(p => {
            if (p.moved) {
                p.moved = false;
                splatPointer(p);
            }
        });
    }

    function step(dt) {
        gl.disable(gl.BLEND);

        curlProgram.bind();
        gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
        gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
        blit(curl);

        vorticityProgram.bind();
        gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
        gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
        gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
        gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
        gl.uniform1f(vorticityProgram.uniforms.dt, dt);
        blit(velocity.write);
        velocity.swap();

        divergenceProgram.bind();
        gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
        gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
        blit(divergence);

        clearProgram.bind();
        gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
        gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
        blit(pressure.write);
        pressure.swap();

        pressureProgram.bind();
        gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
        gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
        for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
            gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
            blit(pressure.write);
            pressure.swap();
        }

        gradienSubtractProgram.bind();
        gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
        gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
        gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
        blit(velocity.write);
        velocity.swap();

        advectionProgram.bind();
        gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
        if (!ext.supportLinearFiltering)
            gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
        let velocityId = velocity.read.attach(0);
        gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
        gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
        gl.uniform1f(advectionProgram.uniforms.dt, dt);
        gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
        blit(velocity.write);
        velocity.swap();

        if (!ext.supportLinearFiltering)
            gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
        gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
        gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
        gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
        blit(dye.write);
        dye.swap();
    }

    function render(target) {
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
        drawDisplay(target);
    }

    function drawDisplay(target) {
        let width = target == null ? gl.drawingBufferWidth : target.width;
        let height = target == null ? gl.drawingBufferHeight : target.height;

        displayMaterial.bind();
        if (config.SHADING)
            gl.uniform2f(displayMaterial.uniforms.texelSize, 1.0 / width, 1.0 / height);
        gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
        blit(target);
    }

    function splatPointer(pointer) {
        let dx = pointer.deltaX * config.SPLAT_FORCE;
        let dy = pointer.deltaY * config.SPLAT_FORCE;
        splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
    }

    function clickSplat(pointer) {
        const color = generateColor();
        color.r *= 10.0;
        color.g *= 10.0;
        color.b *= 10.0;
        let dx = 10 * (Math.random() - 0.5);
        let dy = 30 * (Math.random() - 0.5);
        splat(pointer.texcoordX, pointer.texcoordY, dx, dy, color);
    }

    function splat(x, y, dx, dy, color) {
        splatProgram.bind();
        gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
        gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
        gl.uniform2f(splatProgram.uniforms.point, x, y);
        gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
        gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100.0));
        blit(velocity.write);
        velocity.swap();

        gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
        gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
        blit(dye.write);
        dye.swap();
    }

    function correctRadius(radius) {
        let aspectRatio = canvas.width / canvas.height;
        if (aspectRatio > 1)
            radius *= aspectRatio;
        return radius;
    }

    window.addEventListener('mousedown', e => {
        let pointer = pointers[0];
        let posX = scaleByPixelRatio(e.clientX);
        let posY = scaleByPixelRatio(e.clientY);
        updatePointerDownData(pointer, -1, posX, posY);
        clickSplat(pointer);
    });

    document.body.addEventListener('mousemove', function onFirstMove(e) {
    let pointer = pointers[0];
    let posX = scaleByPixelRatio(e.clientX);
    let posY = scaleByPixelRatio(e.clientY);
    let color = generateColor();
    update();
    updatePointerMoveData(pointer, posX, posY, color);
    document.body.removeEventListener('mousemove', onFirstMove);
}, { once: true });

    window.addEventListener('mousemove', e => {
        let pointer = pointers[0];
        let posX = scaleByPixelRatio(e.clientX);
        let posY = scaleByPixelRatio(e.clientY);
        let color = pointer.color;
        updatePointerMoveData(pointer, posX, posY, color);
    });

    document.body.addEventListener('touchstart', function onFirstTouch(e) {
    const touches = e.targetTouches;
    let touch = touches[0];
    let pointer = pointers[0];
    for (let i = 0; i < touches.length; i++) {
        let posX = scaleByPixelRatio(touches[i].clientX);
        let posY = scaleByPixelRatio(touches[i].clientY);
        update();
        updatePointerDownData(pointer, touches[i].identifier, posX, posY);
    }
    document.body.removeEventListener('touchstart', onFirstTouch);
}, { once: true });

    window.addEventListener('touchstart', e => {
        const touches = e.targetTouches;
        let pointer = pointers[0];
        for (let i = 0; i < touches.length; i++) {
            let posX = scaleByPixelRatio(touches[i].clientX);
            let posY = scaleByPixelRatio(touches[i].clientY);
            updatePointerDownData(pointer, touches[i].identifier, posX, posY);
        }
    });

    window.addEventListener('touchmove', e => {
        const touches = e.targetTouches;
        let pointer = pointers[0];
        for (let i = 0; i < touches.length; i++) {
            let posX = scaleByPixelRatio(touches[i].clientX);
            let posY = scaleByPixelRatio(touches[i].clientY);
            updatePointerMoveData(pointer, posX, posY, pointer.color);
        }
    }, false);

    window.addEventListener('touchend', e => {
        const touches = e.changedTouches;
        let pointer = pointers[0];

        for (let i = 0; i < touches.length; i++) {
            updatePointerUpData(pointer);
        }
    });

    function updatePointerDownData(pointer, id, posX, posY) {
        pointer.id = id;
        pointer.down = true;
        pointer.moved = false;
        pointer.texcoordX = posX / canvas.width;
        pointer.texcoordY = 1.0 - posY / canvas.height;
        pointer.prevTexcoordX = pointer.texcoordX;
        pointer.prevTexcoordY = pointer.texcoordY;
        pointer.deltaX = 0;
        pointer.deltaY = 0;
        pointer.color = generateColor();
    }

    function updatePointerMoveData(pointer, posX, posY, color) {
        // pointer.down = false;
        pointer.prevTexcoordX = pointer.texcoordX;
        pointer.prevTexcoordY = pointer.texcoordY;
        pointer.texcoordX = posX / canvas.width;
        pointer.texcoordY = 1.0 - posY / canvas.height;
        pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
        pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
        pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
        pointer.color = color;
    }

    function updatePointerUpData(pointer) {
        pointer.down = false;
    }

    function correctDeltaX(delta) {
        let aspectRatio = canvas.width / canvas.height;
        if (aspectRatio < 1) delta *= aspectRatio;
        return delta;
    }

    function correctDeltaY(delta) {
        let aspectRatio = canvas.width / canvas.height;
        if (aspectRatio > 1) delta /= aspectRatio;
        return delta;
    }

//     function generateColor() {
//         // Base color #c5fcfc in RGB
//         const baseR = 0xc5 / 255;
//         const baseG = 0xfc / 255;
//         const baseB = 0xfc / 255;

//         // Generate a random shade (0 to 1)
//         const shade = Math.random();

//         // Apply the shade to the base color
//         let r = baseR * shade;
//         let g = baseG * shade;
//         let b = baseB * shade;

//         // Adjust the brightness
//         r *= 0.15;
//         g *= 0.15;
//         b *= 0.15;

//         return { r, g, b };
//     }

    // to generate multicolor

    function generateColor () {
    // Define los dos colores deseados en formato RGB normalizado
    const colors = [
        { r: 0x12 / 255, g: 0xB0 / 255, b: 0xE9 / 255 }, // #12B0E9
        { r: 0xF1 / 255, g: 0x54 / 255, b: 0xF5 / 255 }  // #F154F5
    ];

    // Selecciona aleatoriamente uno de los dos colores
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Aplica el factor de brillo como en la versión anterior
    return {
        r: color.r * 0.15,
        g: color.g * 0.15,
        b: color.b * 0.15
    };
}

    function HSVtoRGB(h, s, v) {
        let r, g, b, i, f, p, q, t;
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);

        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }

        return {
            r,
            g,
            b
        };
    }

    function wrap(value, min, max) {
        let range = max - min;
        if (range == 0) return min;
        return (value - min) % range + min;
    }

    function getResolution(resolution) {
        let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
        if (aspectRatio < 1)
            aspectRatio = 1.0 / aspectRatio;

        let min = Math.round(resolution);
        let max = Math.round(resolution * aspectRatio);

        if (gl.drawingBufferWidth > gl.drawingBufferHeight)
            return { width: max, height: min };
        else
            return { width: min, height: max };
    }

    function scaleByPixelRatio(input) {
        let pixelRatio = window.devicePixelRatio || 1;
        return Math.floor(input * pixelRatio);
    }

    function hashCode(s) {
        if (s.length == 0) return 0;
        let hash = 0;
        for (let i = 0; i < s.length; i++) {
            hash = (hash << 5) - hash + s.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };
};