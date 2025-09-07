// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Theme Management
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;

    // Check for saved theme or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        html.classList.toggle('dark', savedTheme === 'dark');
        updateThemeIcon(savedTheme === 'dark');
    } else if (systemDark) {
        html.classList.add('dark');
        updateThemeIcon(true);
        localStorage.setItem('theme', 'dark');
    }

    // Theme toggle functionality
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isDark = html.classList.contains('dark');
            html.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'light' : 'dark');
            updateThemeIcon(!isDark);
        });
    }

    function updateThemeIcon(isDark) {
        if (themeIcon) {
            themeIcon.className = isDark ? 'fas fa-sun text-lg' : 'fas fa-moon text-lg';
        }
    }

    // Mobile Menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const isOpen = !mobileMenu.classList.contains('hidden');
            
            mobileMenu.classList.toggle('hidden');
            menuIcon.className = isOpen ? 'fas fa-bars text-lg' : 'fas fa-times text-lg';
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header Scroll Effect
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (header) {
            if (currentScrollY > 100) {
                header.classList.add('bg-white/95', 'dark:bg-gray-900/95', 'shadow-lg');
            } else {
                header.classList.remove('bg-white/95', 'dark:bg-gray-900/95', 'shadow-lg');
            }
        }

        // Scroll to top button
        const scrollButton = document.getElementById('scroll-to-top');
        if (scrollButton) {
            if (currentScrollY > 300) {
                scrollButton.classList.remove('opacity-0', 'invisible');
                scrollButton.classList.add('opacity-100', 'visible');
            } else {
                scrollButton.classList.add('opacity-0', 'invisible');
                scrollButton.classList.remove('opacity-100', 'visible');
            }
        }

        lastScrollY = currentScrollY;
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.animate-slide-up, .animate-slide-in-left, .animate-slide-in-right, .animate-fade-in').forEach(el => {
        observer.observe(el);
    });

    // Loading States for Forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                const originalText = submitButton.innerHTML;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
                
                // Re-enable after 5 seconds as fallback
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalText;
                }, 5000);
            }
        });
    });

    // Lazy Loading for Images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('blur-sm');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img').forEach(img => {
            img.classList.add('transition-all', 'duration-300');
            imageObserver.observe(img);
        });
    }

    // Copy to Clipboard Functionality
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            // Could add a toast notification here
            console.log('Copied to clipboard');
        });
    }

    // Expose globally for use in other scripts
    window.portfolioUtils = {
        copyToClipboard
    };

    // Performance: Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }

    // Custom cursor effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.05)';
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
        });
    });
});