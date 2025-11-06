document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const content = document.getElementById(targetId);
            
            // Verificar si el elemento existe antes de manipular
            if (!content) {
                // Elemento no encontrado - retornar silenciosamente
                return;
            }
            
            // Toggle active class on button
            this.classList.toggle('active');
            
            // Toggle active class on content
            content.classList.toggle('active');
            
            // Change button text
            if (content.classList.contains('active')) {
                this.innerHTML = 'Leer Menos <span class="arrow">↑</span>';
            } else {
                this.innerHTML = 'Leer Más <span class="arrow">↓</span>';
            }
        });
    });
    
    // Smooth scroll animation for page load
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});
