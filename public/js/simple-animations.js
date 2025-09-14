// Simple H1 Typewriter Animation Only
document.addEventListener('DOMContentLoaded', function() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        return; // Skip animations if user prefers reduced motion
    }

    // Typewriter effect function
    function typewriterEffect(element, text, speed = 80) {
        if (!element) return;
        
        element.style.opacity = '1';
        element.textContent = '';
        let i = 0;
        
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    // Find and animate H1 elements
    function animateH1Only() {
        const h1Elements = document.querySelectorAll('h1');
        
        h1Elements.forEach((h1, index) => {
            // Check for special typewriter spans
            const nameSpan = h1.querySelector('#name-typewriter');
            const aboutSpan = h1.querySelector('#about-typewriter');
            const projectsSpan = h1.querySelector('#projects-typewriter');
            const timelineSpan = h1.querySelector('#timeline-typewriter');
            const resumeSpan = h1.querySelector('#resume-typewriter');
            const contactSpan = h1.querySelector('#contact-typewriter');
            
            const typewriterSpan = nameSpan || aboutSpan || projectsSpan || timelineSpan || resumeSpan || contactSpan;
            
            if (typewriterSpan) {
                // Animate the specific span
                const spanText = typewriterSpan.textContent.trim();
                setTimeout(() => {
                    typewriterEffect(typewriterSpan, spanText, nameSpan ? 120 : 80);
                }, 500);
            } else {
                // Other pages - animate the entire H1 text
                const fullText = h1.textContent.trim();
                setTimeout(() => {
                    typewriterEffect(h1, fullText, 80);
                }, 500 + (index * 100));
            }
        });
    }

    // Initialize typewriter animation for all H1 elements
    animateH1Only();
});