// Particle Background Animation
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particles-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationId = null;
        
        // Configuration
        this.config = {
            particleCount: 50,
            particleSize: 2,
            particleSpeed: 0.5,
            connectionDistance: 150,
            particleOpacity: 0.6,
            lineOpacity: 0.2
        };

        // Reduce particles on mobile for performance
        if (window.innerWidth < 768) {
            this.config.particleCount = 25;
            this.config.connectionDistance = 100;
        }

        this.init();
        this.bindEvents();
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        // Pause animation when not visible for performance
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(this.animationId);
            } else {
                this.animate();
            }
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        
        for (let i = 0; i < this.config.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.config.particleSpeed,
                vy: (Math.random() - 0.5) * this.config.particleSpeed,
                size: Math.random() * this.config.particleSize + 1
            });
        }
    }

    updateParticles() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx = -particle.vx;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy = -particle.vy;
            }

            // Keep particles within bounds
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
        });
    }

    drawParticles() {
        const isDark = document.documentElement.classList.contains('dark');
        const particleColor = isDark ? '255, 255, 255' : '0, 0, 0';
        
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${particleColor}, ${this.config.particleOpacity})`;
            this.ctx.fill();
        });
    }

    drawConnections() {
        const isDark = document.documentElement.classList.contains('dark');
        const lineColor = isDark ? '255, 255, 255' : '0, 0, 0';
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.config.connectionDistance) {
                    const opacity = this.config.lineOpacity * (1 - distance / this.config.connectionDistance);
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateParticles();
        this.drawConnections();
        this.drawParticles();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        window.removeEventListener('resize', this.resize);
    }
}

// Initialize particles when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize on pages that have the particles canvas
    if (document.getElementById('particles-canvas')) {
        new ParticleSystem();
    }
});

// Performance optimization: pause particles when user is inactive
let inactivityTimer;
let particleSystem;

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        // Reduce particle count after 30 seconds of inactivity
        if (particleSystem) {
            particleSystem.config.particleCount = Math.floor(particleSystem.config.particleCount * 0.5);
            particleSystem.createParticles();
        }
    }, 30000);
}

// Reset timer on user interaction
['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
    document.addEventListener(event, resetInactivityTimer, { passive: true });
});