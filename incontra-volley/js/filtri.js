// ===== GESTIONE FILTRI PER TUTTE LE PAGINE =====
console.log('✅ Filtri.js caricato');

// Gestione filtri atleti
document.addEventListener('click', function(e) {
    // Filtri per atleti
    if (e.target.classList.contains('athlete-filter')) {
        e.preventDefault();
        
        console.log('🎯 Click su filtro atleti:', e.target.dataset.cat);
        
        // Trova il container più vicino
        const container = e.target.closest('.glass-card');
        if (!container) return;
        
        // Rimuovi active da tutti i filtri in questo container
        const filters = container.querySelectorAll('.athlete-filter');
        filters.forEach(f => f.classList.remove('active'));
        e.target.classList.add('active');
        
        // Trova tutte le categorie in questo container
        const categories = container.querySelectorAll('.athlete-category');
        const cat = e.target.dataset.cat;
        
        console.log('Categorie trovate:', categories.length);
        
        if (cat === 'all') {
            categories.forEach(c => c.style.display = 'block');
            console.log('Mostra tutte');
        } else {
            categories.forEach(c => {
                if (c.dataset.category === cat) {
                    c.style.display = 'block';
                    console.log('Mostra:', c.dataset.category);
                } else {
                    c.style.display = 'none';
                }
            });
        }
    }
    
    // Filtri per eventi (se servono)
    if (e.target.classList.contains('event-filter')) {
        e.preventDefault();
        
        const container = e.target.closest('.glass-card');
        if (!container) return;
        
        const filters = container.querySelectorAll('.event-filter');
        filters.forEach(f => f.classList.remove('active'));
        e.target.classList.add('active');
        
        const events = container.querySelectorAll('.event-item');
        const type = e.target.dataset.filter;
        
        if (type === 'all') {
            events.forEach(e => e.style.display = 'flex');
        } else {
            events.forEach(e => {
                if (e.dataset.type === type) {
                    e.style.display = 'flex';
                } else {
                    e.style.display = 'none';
                }
            });
        }
    }
});