console.log('✅ auth.js caricato');

const Auth = {
    // UTENTI DELLA SOCIETÀ
    users: [
        // PRESIDENTE (vede tutto)
        {
            username: "Valentina Urriani",
            password: "incontra_valentina2026",
            ruolo: "presidente",
            categorie: ["tutte"]
        },
        {
            username: "Pierpaolo Gagliardi",
            password: "incontra_pierpaolo2026",
            ruolo: "presidente",
            categorie: ["tutte"]
        },
        
        // DIRIGENTI (vedono tutto come il presidente)
        {
            username: "Matteo Capriotti",
            password: "incontra_teocap2026",
            ruolo: "dirigente",
            categorie: ["tutte"]
        },
        {
            username: "Daniele Gagliardi",
            password: "incontra_dani2026",
            ruolo: "dirigente",
            categorie: ["tutte"]
        },
        
        // ALLENATORI (vedono solo la loro categoria)
        {
            username: "Giancarlo D'Angelo",
            password: "incontra_gianky2026",
            ruolo: "allenatore",
            categorie: ["prima-divisione", "under18"]
        },
        {
            username: "Emanuela Cottilli",
            password: "incontra_emanuela2026",
            ruolo: "allenatrice",
            categorie: ["under16blu", "seconda-divisione-blu"]
        },
        {
            username: "Emanuele Torquati",
            password: "incontra_emanuele2026",
            ruolo: "allenatore",
            categorie: ["under16white", "seconda-divisione-white"]
        }
    ],

    login(username, password) {
        console.log('🔐 Tentativo login con:', { username, password });
        
        const user = this.users.find(u => u.username === username && u.password === password);
        
        if (user) {
            console.log('✅ Login riuscito:', user);
            sessionStorage.setItem('staff', JSON.stringify({
                username: user.username,
                ruolo: user.ruolo,
                categorie: user.categorie
            }));
            return true;
        }
        
        console.log('❌ Login fallito');
        return false;
    },

    logout() {
        console.log('🚪 Logout');
        sessionStorage.removeItem('staff');
        window.location.hash = '#/';
    },

    isLoggedIn() {
        const logged = sessionStorage.getItem('staff') !== null;
        return logged;
    },

    getCurrentUser() {
        const user = sessionStorage.getItem('staff');
        return user ? JSON.parse(user) : null;
    },

    // Verifica se l'utente può vedere una categoria specifica
    canViewCategory(categoria) {
        const user = this.getCurrentUser();
        if (!user) return false;
        
        // Presidente e dirigenti vedono tutto
        if (user.ruolo === 'presidente' || user.ruolo === 'dirigente') {
            return true;
        }
        
        // Allenatori vedono solo le loro categorie
        return user.categorie.includes(categoria);
    },
    
    // Ottieni le categorie visibili all'utente corrente
    getVisibleCategories() {
        const user = this.getCurrentUser();
        if (!user) return [];
        
        // Presidente e dirigenti vedono tutte le categorie
        if (user.ruolo === 'presidente' || user.ruolo === 'dirigente') {
            return ['prima-divisione', 'under18', 'under16blu', 'under16white', 'under13', 'minivolley'];
        }
        
        // Allenatori vedono solo le loro
        return user.categorie;
    }
};

window.Auth = Auth;
console.log('✅ Auth disponibile globalmente');