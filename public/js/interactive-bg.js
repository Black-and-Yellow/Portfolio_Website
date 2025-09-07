// Enhanced Interactive Background Effects
class InteractiveBackground {
    constructor() {
        this.init();
        this.createOrbs();
        this.setupMouseTracking();
        this.setupParticles();
    }

    init() {
        // Create container for interactive elements
        this.container = document.createElement('div');
        this.container.className = 'fixed inset-0 pointer-events-none z-0';
        this.container.id = 'interactive-bg';
        document.body.appendChild(this.container);
    }

    createOrbs() {
        // Create floating orbs
        for (let i = 0; i < 3; i++) {
            const orb = document.createElement('div');
            orb.className = 'interactive-orb';
            orb.style.left = Math.random() * 100 + '%';
            orb.style.top = Math.random() * 100 + '%';
            orb.style.animationDelay = `${i * -2}s`;
            this.container.appendChild(orb);
        }
    }

    setupMouseTracking() {
        // Mouse follower effect
        const follower = document.createElement('div');
        follower.className = 'fixed w-6 h-6 rounded-full pointer-events-none z-50';
        follower.style.background = 'radial-gradient(circle, rgba(56, 189, 248, 0.8) 0%, transparent 70%)';
        follower.style.transform = 'translate(-50%, -50%)';
        follower.style.transition = 'all 0.1s ease';
        document.body.appendChild(follower);

        document.addEventListener('mousemove', (e) => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        });

        // Hide on mouse leave
        document.addEventListener('mouseleave', () => {
            follower.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            follower.style.opacity = '1';
        });
    }

    setupParticles() {
        // Enhanced particle system
        if (typeof ParticleSystem !== 'undefined') {
            this.particles = new ParticleSystem();
        }
    }
}

// Enhanced Particle System
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particles-canvas');
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
            this.canvas.id = 'particles-canvas';
            this.canvas.className = 'fixed inset-0 pointer-events-none z-0';
            document.body.appendChild(this.canvas);
        }
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        
        this.init();
        this.animate();
        this.setupEventListeners();
    }

    init() {
        this.resize();
        this.createParticles();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const numParticles = Math.min(100, window.innerWidth / 10);
        
        for (let i = 0; i < numParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.8 + 0.2,
                color: this.getRandomColor(),
                connections: []
            });
        }
    }

    getRandomColor() {
        const colors = [
            'rgba(14, 165, 233, 0.6)',    // primary blue
            'rgba(217, 70, 239, 0.6)',    // secondary purple
            'rgba(16, 185, 129, 0.6)',    // accent green
            'rgba(56, 189, 248, 0.6)',    // light blue
            'rgba(240, 171, 252, 0.6)'    // light purple
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.resize());
        
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach((particle, i) => {
            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.vx += dx * force * 0.0001;
                particle.vy += dy * force * 0.0001;
            }
            
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
                particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
                particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
            }
            
            // Apply friction
            particle.vx *= 0.99;
            particle.vy *= 0.99;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.fill();
            
            // Draw connections
            this.particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const opacity = (150 - distance) / 150 * 0.3;
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    this.ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Color Theme Controller
class ColorThemeController {
    constructor() {
        this.themes = {
            ocean: {
                primary: '#0ea5e9',
                secondary: '#06b6d4',
                accent: '#0891b2'
            },
            sunset: {
                primary: '#f97316',
                secondary: '#ea580c',
                accent: '#dc2626'
            },
            forest: {
                primary: '#059669',
                secondary: '#047857',
                accent: '#065f46'
            },
            cosmic: {
                primary: '#8b5cf6',
                secondary: '#7c3aed',
                accent: '#6d28d9'
            }
        };
        
        this.currentTheme = 'ocean';
        this.setupThemeControls();
    }

    setupThemeControls() {
        // Create theme switcher (optional)
        const themeButton = document.createElement('button');
        themeButton.className = 'fixed top-4 right-4 z-50 p-2 rounded-full glass text-white hover:scale-110 transition-transform';
        themeButton.innerHTML = '🎨';
        themeButton.onclick = () => this.cycleTheme();
        // document.body.appendChild(themeButton);
    }

    cycleTheme() {
        const themes = Object.keys(this.themes);
        const currentIndex = themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        this.currentTheme = themes[nextIndex];
        this.applyTheme();
    }

    applyTheme() {
        const theme = this.themes[this.currentTheme];
        document.documentElement.style.setProperty('--theme-primary', theme.primary);
        document.documentElement.style.setProperty('--theme-secondary', theme.secondary);
        document.documentElement.style.setProperty('--theme-accent', theme.accent);
    }
}

// Enhanced Button Interactions
class ButtonEnhancer {
    constructor() {
        this.enhanceButtons();
    }

    enhanceButtons() {
        // Add ripple effect to buttons
        document.addEventListener('click', (e) => {
            if (e.target.matches('button, .btn, .btn-interactive')) {
                this.createRipple(e);
            }
        });
    }

    createRipple(e) {
        const button = e.target;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new InteractiveBackground();
    new ColorThemeController();
    new ButtonEnhancer();
    
    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    document.querySelectorAll('.card-interactive, .animate-slide-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
