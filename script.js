document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const content = document.getElementById(targetId);
            
            // Verificar se o elemento existe antes de manipular
            if (!content) {
                console.error('Elemento não encontrado:', targetId);
                return;
            }
            
            // Toggle active class on button
            this.classList.toggle('active');
            
            // Toggle active class on content
            content.classList.toggle('active');
            
            // Change button text
            if (content.classList.contains('active')) {
                this.innerHTML = 'Ler Menos <span class="arrow">↑</span>';
            } else {
                this.innerHTML = 'Ler Mais <span class="arrow">↓</span>';
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
