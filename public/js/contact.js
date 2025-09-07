// Contact Form Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    const submitIcon = document.getElementById('submit-icon');
    const loadingIcon = document.getElementById('loading-icon');

    if (contactForm) {
        // Real-time form validation
        const formInputs = contactForm.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });

        // Form submission handling
        contactForm.addEventListener('submit', handleFormSubmission);
    }

    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        
        clearFieldError(e);

        if (field.required && !value) {
            showFieldError(field, 'This field is required');
            return false;
        }

        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        }

        return true;
    }

    function clearFieldError(e) {
        const field = e.target;
        const errorDiv = field.parentNode.querySelector('.field-error');
        
        if (errorDiv) {
            errorDiv.remove();
        }
        
        field.classList.remove('border-red-500', 'dark:border-red-400');
        field.classList.add('border-gray-300', 'dark:border-gray-600');
    }

    function showFieldError(field, message) {
        // Remove existing error
        clearFieldError({ target: field });
        
        // Add error styling
        field.classList.remove('border-gray-300', 'dark:border-gray-600');
        field.classList.add('border-red-500', 'dark:border-red-400');
        
        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error text-red-500 dark:text-red-400 text-sm mt-1';
        errorDiv.textContent = message;
        
        field.parentNode.appendChild(errorDiv);
    }

    function handleFormSubmission(e) {
        // Validate all fields before submission
        let isValid = true;
        
        formInputs.forEach(input => {
            if (!validateField({ target: input })) {
                isValid = false;
            }
        });

        if (!isValid) {
            e.preventDefault();
            return;
        }

        // Show loading state
        if (submitBtn) {
            submitBtn.disabled = true;
            
            if (submitText) submitText.textContent = 'Sending...';
            if (submitIcon) submitIcon.classList.add('hidden');
            if (loadingIcon) loadingIcon.classList.remove('hidden');
        }

        // Form will submit naturally, but we set a timeout as fallback
        setTimeout(() => {
            resetSubmitButton();
        }, 10000); // Reset after 10 seconds as fallback
    }

    function resetSubmitButton() {
        if (submitBtn) {
            submitBtn.disabled = false;
            
            if (submitText) submitText.textContent = 'Send Message';
            if (submitIcon) submitIcon.classList.remove('hidden');
            if (loadingIcon) loadingIcon.classList.add('hidden');
        }
    }

    // Character count for textarea
    const messageTextarea = document.getElementById('message');
    if (messageTextarea) {
        const maxLength = 500;
        const parent = messageTextarea.parentNode;
        
        // Create character counter
        const counterDiv = document.createElement('div');
        counterDiv.className = 'text-sm text-gray-500 dark:text-gray-400 mt-1 text-right';
        counterDiv.id = 'char-counter';
        parent.appendChild(counterDiv);
        
        function updateCharCount() {
            const current = messageTextarea.value.length;
            counterDiv.textContent = `${current}/${maxLength} characters`;
            
            if (current > maxLength * 0.9) {
                counterDiv.classList.add('text-orange-500');
            } else {
                counterDiv.classList.remove('text-orange-500');
            }
        }
        
        messageTextarea.addEventListener('input', updateCharCount);
        updateCharCount(); // Initial count
    }

    // Auto-resize textarea
    function autoResize(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }

    if (messageTextarea) {
        messageTextarea.addEventListener('input', () => autoResize(messageTextarea));
        autoResize(messageTextarea); // Initial sizing
    }

    // Form animations
    const formGroups = contactForm?.querySelectorAll('.space-y-6 > div') || [];
    
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            group.style.transition = 'all 0.4s ease-out';
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Success message auto-hide
    const successMessage = document.querySelector('.bg-green-100');
    if (successMessage) {
        setTimeout(() => {
            successMessage.style.transition = 'all 0.5s ease-out';
            successMessage.style.opacity = '0';
            successMessage.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                successMessage.remove();
            }, 500);
        }, 5000); // Hide after 5 seconds
    }
});