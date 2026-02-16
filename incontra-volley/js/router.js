// ===== ROUTER PER SINGLE PAGE APPLICATION =====
const Router = {
    // Route disponibili
    routes: {
        '/': 'home',
        '/societa': 'societa',
        '/staff': 'staff',
        '/squadre': 'squadre',
        '/squadre/primaDivisione': 'primaDivisione',
        '/squadre/under18': 'under18',
        '/squadre/under16blu': 'under16blu',
        '/squadre/under16white': 'under16white',
        '/squadre/minivolley': 'minivolley',
        '/atleti': 'atleti',
        '/sponsor': 'sponsor',
        '/contatti': 'contatti',
        '/iscrizioni': 'iscrizioni',
        '/info': 'info',
        '/area-staff': 'area-staff-dashboard',
        '/area-staff/login': 'area-staff-login',
        '/area-staff/video/prima-divisione': 'video-prima-divisione',
        '/area-staff/video/under18': 'video-under18',
        '/area-staff/video/under16blu': 'video-under16blu',
        '/area-staff/video/under16white': 'video-under16white',
    },
    
    // Inizializza router
    init() {
        console.log('🔄 Router inizializzato');
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    },
    
    // Gestisce la route corrente
    handleRoute() {
        const path = window.location.hash.slice(1) || '/';
        console.log('📍 Navigazione a:', path);
        
        // Proteggi le route dell'area staff
        if (path.startsWith('/area-staff') && path !== '/area-staff/login') {
            if (!Auth.isLoggedIn()) {
                console.log('⛔ Accesso negato - redirect a login');
                window.location.hash = '#/area-staff/login';
                return;
            }
        }
        
        // Proteggi i video specifici per categoria
        if (path.startsWith('/area-staff/video/')) {
            const categoria = path.split('/').pop();
            if (!Auth.canViewCategory(categoria)) {
                console.log('⛔ Accesso negato a categoria:', categoria);
                window.location.hash = '#/area-staff';
                return;
            }
        }
        
        // Carica la vista corrispondente
        const viewName = this.routes[path] || '404';
        console.log('📄 Caricamento vista:', viewName);
        this.loadView(viewName);
    },
    
    // Carica dinamicamente la vista
    loadView(viewName) {
        const app = document.getElementById('app');
        if (!app) {
            console.error('❌ Elemento #app non trovato');
            return;
        }
        
        // Controlla se la vista esiste
        if (window.Views && typeof Views[viewName] === 'function') {
            console.log('✅ Vista trovata, rendering...');
            app.innerHTML = Views[viewName]();
        } else {
            console.error('❌ Vista non trovata:', viewName);
            // Fallback alla vista 404
            if (window.Views && typeof Views['404'] === 'function') {
                app.innerHTML = Views['404']();
            } else {
                app.innerHTML = '<h1>404 - Pagina non trovata</h1>';
            }
        }
        
        // Aggiorna link attivo nella navbar
        this.updateActiveLink();
    },
    
    // Aggiorna classe active nei link
    updateActiveLink() {
        const currentPath = window.location.hash.slice(1) || '/';
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
                const linkPath = href.replace('#', '');
                if (linkPath === currentPath) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }
};

// Inizializza router DOPO che il DOM è caricato
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        Router.init();
    });
} else {
    // DOM già caricato
    Router.init();
}

window.Router = Router;
console.log('✅ Router esportato');