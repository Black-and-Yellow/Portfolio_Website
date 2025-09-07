// Typewriter Effect
class TypewriterEffect {
    constructor(element, words, options = {}) {
        this.element = element;
        this.words = words;
        this.options = {
            typeSpeed: 100,
            deleteSpeed: 50,
            delayBetweenWords: 2000,
            loop: true,
            ...options
        };
        
        this.currentWordIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.isWaiting = false;
        
        this.start();
    }

    start() {
        this.type();
    }

    type() {
        const currentWord = this.words[this.currentWordIndex];
        
        if (this.isWaiting) {
            setTimeout(() => {
                this.isWaiting = false;
                this.type();
            }, this.options.delayBetweenWords);
            return;
        }

        if (!this.isDeleting) {
            // Typing
            this.element.textContent = currentWord.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;

            if (this.currentCharIndex === currentWord.length) {
                this.isWaiting = true;
                this.isDeleting = true;
            }

            setTimeout(() => this.type(), this.options.typeSpeed);
        } else {
            // Deleting
            this.element.textContent = currentWord.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;

            if (this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
                
                if (!this.options.loop && this.currentWordIndex === 0) {
                    return; // Stop if not looping and we've gone through all words
                }
            }

            setTimeout(() => this.type(), this.options.deleteSpeed);
        }
    }

    updateWords(newWords) {
        this.words = newWords;
        this.currentWordIndex = 0;
    }

    destroy() {
        // Clean up if needed
        this.element.textContent = '';
    }
}

// Initialize typewriter effect
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    
    if (typewriterElement) {
        const words = [
            'Full Stack Developer',
            'Problem Solver',
            'Code Enthusiast',
            'UI/UX Designer',
            'Tech Innovator'
        ];

        new TypewriterEffect(typewriterElement, words, {
            typeSpeed: 80,
            deleteSpeed: 40,
            delayBetweenWords: 2000,
            loop: true
        });
    }
});

// Smooth reveal animation for hero text
document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.animate-fade-in');
    
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});