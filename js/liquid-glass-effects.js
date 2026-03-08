// Effetto riflesso che segue il mouse sui bottoni
document.addEventListener('mousemove', (e) => {
    const bubbles = document.querySelectorAll('.liquid-bubble');
    
    bubbles.forEach(bubble => {
        const rect = bubble.getBoundingClientRect();
        
        // Calcola se il mouse è sopra il bottone
        if (e.clientX >= rect.left && e.clientX <= rect.right &&
            e.clientY >= rect.top && e.clientY <= rect.bottom) {
            
            // Calcola posizione relativa del mouse (-1 a 1)
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
            
            bubble.style.setProperty('--mouse-x', x);
            bubble.style.setProperty('--mouse-y', y);
        }
    });
});

// Effetto parallasse per lo sfondo (opzionale)
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.body.style.backgroundPosition = `center ${scrolled * 0.5}px`;
});

// Menu mobile
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animazione hamburger menu
            const spans = menuBtn.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Chiudi menu quando clicchi un link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const spans = menuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});