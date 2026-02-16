// ===== COMPONENTI RIUTILIZZABILI =====
window.Views = {
    // 404
    '404': () => `
        <div class="glass-card text-center">
            <h1>404</h1>
            <p>Pagina non trovata</p>
            <a href="#/" class="liquid-bubble">Torna alla Home</a>
        </div>
    `,
    
    // HOME
    home: () => `
        <div class="hero-section glass-card" style="text-align: center; padding: 60px 30px;">
            <h1 style="font-size: 3.5rem; margin-bottom: 20px;">InConTra Volley</h1>
            <p style="font-size: 1.5rem; opacity: 0.9;">Castel di Lama (AP) - Marche</p>
            <p style="max-width: 600px; margin: 20px auto;">Passione, aggregazione e sport per giovani e adulti nel cuore del Piceno.</p>
            
            <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 30px;">
                <a href="#/squadre" class="liquid-bubble">Le nostre squadre</a>
                <a href="#/iscrizioni" class="liquid-bubble">Unisciti a noi</a>
            </div>
        </div>
        
        <!-- Chi siamo in evidenza -->
        <div class="grid-container" style="margin-top: 40px;">
            <div class="glass-card">
                <h2>La nostra storia</h2>
                <p>L'InConTra Volley nasce a Castel di Lama con l'obiettivo di creare un punto di riferimento per la pallavolo giovanile e amatoriale nella provincia di Ascoli Piceno. Crediamo nello sport come strumento di crescita, inclusione e divertimento.</p>
            </div>
            
            <div class="glass-card">
                <h2>I nostri valori</h2>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 15px;">🏐 <strong>Passione:</strong> Viviamo la pallavolo con entusiasmo</li>
                    <li style="margin-bottom: 15px;">🤝 <strong>Aggregazione:</strong> Creiamo comunità dentro e fuori dal campo</li>
                    <li style="margin-bottom: 15px;">📈 <strong>Crescita:</strong> Formiamo atleti e persone</li>
                    <li style="margin-bottom: 15px;">⚡ <strong>Energia:</strong> Trasmettiamo positività in ogni partita</li>
                </ul>
            </div>
            
            <div class="glass-card">
                <h2>La sede</h2>
                <p><strong>Palestra Comunale</strong><br>Via dello Sport, 1<br>Castel di Lama (AP)</p>
                <p><strong>Orari segreteria:</strong><br>Lunedì - Venerdì: 16:00 - 19:00</p>
            </div>
        </div>
        
        <!-- CALENDARIO EVENTI -->
        <div class="glass-card mt-5">
            <h2 style="text-align: center; margin-bottom: 30px;">📅 Calendario eventi</h2>
            
            <div class="event-filters" style="display: flex; gap: 15px; justify-content: center; margin-bottom: 30px; flex-wrap: wrap;">
                <button class="liquid-bubble event-filter active" data-filter="all">Tutti</button>
                <button class="liquid-bubble event-filter" data-filter="partite">Partite</button>
                <button class="liquid-bubble event-filter" data-filter="allenamenti">Allenamenti</button>
                <button class="liquid-bubble event-filter" data-filter="eventi">Eventi speciali</button>
            </div>
            
            <div class="event-list" style="display: flex; flex-direction: column; gap: 20px;">
                <!-- Evento 1 -->
                <div class="glass-card event-item" data-type="partite" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; padding: 20px;">
                    <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
                        <div style="background: rgba(255,255,255,0.2); border-radius: 20px; padding: 15px; text-align: center; min-width: 100px;">
                            <div style="font-size: 1.8rem; font-weight: bold;">16</div>
                            <div style="font-size: 1rem;">Febbraio</div>
                        </div>
                        <div>
                            <h3 style="margin: 0;">🏐 Under 17 vs Volley San Benedetto</h3>
                            <p style="margin: 5px 0 0; opacity: 0.8;">Campionato Under 17 - 2ª giornata</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 15px; align-items: center;">
                        <span class="liquid-bubble" style="padding: 8px 16px; font-size: 0.9rem;">Ore 18:00</span>
                        <span class="liquid-bubble" style="padding: 8px 16px; font-size: 0.9rem;">Palestra Comunale</span>
                    </div>
                </div>
                
                <!-- Evento 2 -->
                <div class="glass-card event-item" data-type="allenamenti" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; padding: 20px;">
                    <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
                        <div style="background: rgba(255,255,255,0.2); border-radius: 20px; padding: 15px; text-align: center; min-width: 100px;">
                            <div style="font-size: 1.8rem; font-weight: bold;">18</div>
                            <div style="font-size: 1rem;">Febbraio</div>
                        </div>
                        <div>
                            <h3 style="margin: 0;">🏋️ Allenamento Prima Divisione</h3>
                            <p style="margin: 5px 0 0; opacity: 0.8;">Preparazione alla prossima partita</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 15px; align-items: center;">
                        <span class="liquid-bubble" style="padding: 8px 16px; font-size: 0.9rem;">Ore 20:30</span>
                        <span class="liquid-bubble" style="padding: 8px 16px; font-size: 0.9rem;">Palestra Comunale</span>
                    </div>
                </div>
                
                <!-- Evento 3 -->
                <div class="glass-card event-item" data-type="partite" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; padding: 20px;">
                    <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
                        <div style="background: rgba(255,255,255,0.2); border-radius: 20px; padding: 15px; text-align: center; min-width: 100px;">
                            <div style="font-size: 1.8rem; font-weight: bold;">23</div>
                            <div style="font-size: 1rem;">Febbraio</div>
                        </div>
                        <div>
                            <h3 style="margin: 0;">🏐 Under 15 vs Ascoli Volley</h3>
                            <p style="margin: 5px 0 0; opacity: 0.8;">Campionato Under 15 - 4ª giornata</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 15px; align-items: center;">
                        <span class="liquid-bubble" style="padding: 8px 16px; font-size: 0.9rem;">Ore 17:00</span>
                        <span class="liquid-bubble" style="padding: 8px 16px; font-size: 0.9rem;">Palestra Comunale</span>
                    </div>
                </div>
                
                <!-- Evento 4 -->
                <div class="glass-card event-item" data-type="eventi" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; padding: 20px;">
                    <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
                        <div style="background: rgba(255,255,255,0.2); border-radius: 20px; padding: 15px; text-align: center; min-width: 100px;">
                            <div style="font-size: 1.8rem; font-weight: bold;">28</div>
                            <div style="font-size: 1rem;">Febbraio</div>
                        </div>
                        <div>
                            <h3 style="margin: 0;">🎉 Open Day InConTra Volley</h3>
                            <p style="margin: 5px 0 0; opacity: 0.8;">Prove gratuite per nuovi iscritti - Tutte le età</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 15px; align-items: center;">
                        <span class="liquid-bubble" style="padding: 8px 16px; font-size: 0.9rem;">Ore 15:00-19:00</span>
                        <span class="liquid-bubble" style="padding: 8px 16px; font-size: 0.9rem;">Palestra Comunale</span>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Prossimi impegni in evidenza -->
        <div class="grid-container mt-5">
            <div class="glass-card">
                <h3>📊 Classifiche</h3>
                <p><strong>Under 17:</strong> 3° posto (4 vittorie, 1 sconfitta)</p>
                <p><strong>Under 15:</strong> 5° posto (2 vittorie, 3 sconfitte)</p>
                <p><strong>Prima Divisione:</strong> 2° posto (6 vittorie, 2 sconfitte)</p>
            </div>
            
            <div class="glass-card">
                <h3>🏆 Ultimi risultati</h3>
                <p><strong>Under 17:</strong> Vittoria 3-1 vs Volley San Benedetto</p>
                <p><strong>Under 15:</strong> Sconfitta 1-3 vs Ascoli Volley</p>
                <p><strong>Prima Divisione:</strong> Vittoria 3-0 vs Porto d'Ascoli</p>
            </div>
            
            <div class="glass-card">
                <h3>📸 Dalla gallery</h3>
                <p>Foto delle ultime partite e allenamenti</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 15px;">
                    <div style="background: rgba(255,255,255,0.1); height: 80px; border-radius: 15px;"></div>
                    <div style="background: rgba(255,255,255,0.1); height: 80px; border-radius: 15px;"></div>
                    <div style="background: rgba(255,255,255,0.1); height: 80px; border-radius: 15px;"></div>
                </div>
            </div>
        </div>
        
        <!-- Call to action iscrizioni -->
        <div class="glass-card mt-5" style="text-align: center;">
            <h2>Vuoi unirti alla nostra famiglia?</h2>
            <p style="font-size: 1.2rem; margin: 20px 0;">Aperte le iscrizioni per la stagione 2025-2026</p>
            <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                <a href="#/iscrizioni" class="liquid-bubble" style="font-size: 1.2rem; padding: 16px 32px;">Richiedi informazioni</a>
                <a href="#/contatti" class="liquid-bubble" style="font-size: 1.2rem; padding: 16px 32px;">Contattaci</a>
            </div>
        </div>
        
        <script>
            // Filtro eventi
            setTimeout(() => {
                const filters = document.querySelectorAll('.event-filter');
                const events = document.querySelectorAll('.event-item');
                
                filters.forEach(filter => {
                    filter.addEventListener('click', () => {
                        filters.forEach(f => f.classList.remove('active'));
                        filter.classList.add('active');
                        
                        const type = filter.dataset.filter;
                        
                        events.forEach(event => {
                            if (type === 'all' || event.dataset.type === type) {
                                event.style.display = 'flex';
                            } else {
                                event.style.display = 'none';
                            }
                        });
                    });
                });
            }, 100);
        </script>
    `,
    
    // SOCIETÀ
    societa: () => `
        <div class="glass-card">
            <h1>La Nostra Società</h1>
            <p>InConTra Volley Castel di Lama è una società sportiva dilettantistica fondata con l'obiettivo di promuovere la pallavolo sul territorio.</p>
            
            <h2 class="mt-4">La nostra storia</h2>
            <p>Siamo una realtà in crescita, con un forte legame con il territorio di Castel di Lama e della provincia di Ascoli Piceno.</p>
            
            <h2 class="mt-4">I nostri valori</h2>
            <ul>
                <li>Passione per lo sport</li>
                <li>Inclusione e aggregazione</li>
                <li>Formazione dei giovani atleti</li>
                <li>Spirito di squadra</li>
            </ul>
        </div>
    `,
    
    // STAFF
    staff: () => `
        <div class="glass-card">
            <h1 style="text-align: center; margin-bottom: 20px;">Il Nostro Staff</h1>
            <p style="text-align: center; max-width: 700px; margin: 0 auto 40px;">Il cuore pulsante della InConTra Volley: presidente, dirigenti e allenatori che lavorano ogni giorno per far crescere la nostra famiglia.</p>
            
            <!-- Presidente -->
            <h2 style="margin: 40px 0 20px;">🏛️ Presidente</h2>
            <div class="staff-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
                <div class="glass-card staff-card" style="text-align: center; padding: 30px 20px;">
                    <div class="staff-image" style="width: 150px; height: 150px; border-radius: 50%; background: rgba(255,255,255,0.15); margin: 0 auto 20px; border: 3px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <!-- Placeholder immagine -->
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                        </svg>
                    </div>
                    <h3>Mario Rossi</h3>
                    <p style="opacity: 0.8;">Presidente</p>
                    <p style="font-size: 0.9rem;">"Lo sport come scuola di vita"</p>
                    <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px;">
                        <span class="liquid-bubble" style="padding: 5px 10px; font-size: 0.8rem;">dal 2015</span>
                    </div>
                </div>
            </div>
            
            <!-- Dirigenti -->
            <h2 style="margin: 40px 0 20px;">📋 Dirigenti</h2>
            <div class="staff-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
                <div class="glass-card staff-card" style="text-align: center; padding: 30px 20px;">
                    <div class="staff-image" style="width: 150px; height: 150px; border-radius: 50%; background: rgba(255,255,255,0.15); margin: 0 auto 20px; border: 3px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                        </svg>
                    </div>
                    <h3>Giuseppe Verdi</h3>
                    <p style="opacity: 0.8;">Direttore Sportivo</p>
                    <p style="font-size: 0.9rem;">Responsabile prima divisione</p>
                    <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px;">
                        <span class="liquid-bubble" style="padding: 5px 10px; font-size: 0.8rem;">dal 2018</span>
                    </div>
                </div>
                
                <div class="glass-card staff-card" style="text-align: center; padding: 30px 20px;">
                    <div class="staff-image" style="width: 150px; height: 150px; border-radius: 50%; background: rgba(255,255,255,0.15); margin: 0 auto 20px; border: 3px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                        </svg>
                    </div>
                    <h3>Anna Bianchi</h3>
                    <p style="opacity: 0.8;">Segretaria</p>
                    <p style="font-size: 0.9rem;">Iscrizioni e amministrazione</p>
                    <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px;">
                        <span class="liquid-bubble" style="padding: 5px 10px; font-size: 0.8rem;">dal 2020</span>
                    </div>
                </div>
            </div>
            
            <!-- Allenatori divisi per categoria -->
            <h2 style="margin: 40px 0 20px;">🏐 Allenatori</h2>
            
            <h3 style="margin: 30px 0 15px;">Prima Divisione</h3>
            <div class="staff-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
                <div class="glass-card staff-card" style="text-align: center; padding: 30px 20px;">
                    <div class="staff-image" style="width: 150px; height: 150px; border-radius: 50%; background: rgba(255,255,255,0.15); margin: 0 auto 20px; border: 3px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                        </svg>
                    </div>
                    <h3>Marco Galli</h3>
                    <p style="opacity: 0.8;">Allenatore Prima Divisione</p>
                    <p style="font-size: 0.9rem;">Ex giocatore serie B</p>
                    <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px;">
                        <span class="liquid-bubble" style="padding: 5px 10px; font-size: 0.8rem;">dal 2021</span>
                    </div>
                </div>
            </div>
            
            <h3 style="margin: 30px 0 15px;">Under 17</h3>
            <div class="staff-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
                <div class="glass-card staff-card" style="text-align: center; padding: 30px 20px;">
                    <div class="staff-image" style="width: 150px; height: 150px; border-radius: 50%; background: rgba(255,255,255,0.15); margin: 0 auto 20px; border: 3px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                        </svg>
                    </div>
                    <h3>Laura Conti</h3>
                    <p style="opacity: 0.8;">Allenatrice Under 17</p>
                    <p style="font-size: 0.9rem;">Specialista nella formazione giovanile</p>
                    <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px;">
                        <span class="liquid-bubble" style="padding: 5px 10px; font-size: 0.8rem;">dal 2019</span>
                    </div>
                </div>
            </div>
            
            <h3 style="margin: 30px 0 15px;">Under 15</h3>
            <div class="staff-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
                <div class="glass-card staff-card" style="text-align: center; padding: 30px 20px;">
                    <div class="staff-image" style="width: 150px; height: 150px; border-radius: 50%; background: rgba(255,255,255,0.15); margin: 0 auto 20px; border: 3px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                        </svg>
                    </div>
                    <h3>Paolo Marini</h3>
                    <p style="opacity: 0.8;">Allenatore Under 15</p>
                    <p style="font-size: 0.9rem;">Preparatore atletico</p>
                    <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px;">
                        <span class="liquid-bubble" style="padding: 5px 10px; font-size: 0.8rem;">dal 2022</span>
                    </div>
                </div>
            </div>
            
            <h3 style="margin: 30px 0 15px;">Minivolley</h3>
            <div class="staff-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
                <div class="glass-card staff-card" style="text-align: center; padding: 30px 20px;">
                    <div class="staff-image" style="width: 150px; height: 150px; border-radius: 50%; background: rgba(255,255,255,0.15); margin: 0 auto 20px; border: 3px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                        </svg>
                    </div>
                    <h3>Sofia Ferri</h3>
                    <p style="opacity: 0.8;">Istruttrice Minivolley</p>
                    <p style="font-size: 0.9rem;">Avviamento allo sport per i più piccoli</p>
                    <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px;">
                        <span class="liquid-bubble" style="padding: 5px 10px; font-size: 0.8rem;">dal 2023</span>
                    </div>
                </div>
            </div>
        </div>
    `,

    // ATLETI - VERSIONE SENZA SCRIPT INTERNO
    atleti: () => `
        <div class="glass-card">
            <h1 style="text-align: center; margin-bottom: 20px;">I Nostri Atleti</h1>
            <p style="text-align: center; max-width: 700px; margin: 0 auto 40px;">Tutti i giocatori che indossano i nostri colori, divisi per categoria.</p>
            
            <!-- FILTRI CATEGORIE -->
            <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 40px; flex-wrap: wrap;">
                <button class="liquid-bubble athlete-filter active" data-cat="all">Tutti</button>
                <button class="liquid-bubble athlete-filter" data-cat="prima">Prima Divisione / Under 18</button>
                <button class="liquid-bubble athlete-filter" data-cat="under17">Seconda Divisione White / Under 16 White</button>
                <button class="liquid-bubble athlete-filter" data-cat="under15">Seconda Divisione Blu / Under 16 Blu</button>
                <!-- <button class="liquid-bubble athlete-filter" data-cat="minivolley">Minivolley</button> -->
            </div>
            
            <!-- PRIMA DIVISIONE / UNDER 18 -->
            <div class="athlete-category" data-category="prima" style="display: block;">
                <h2 style="margin: 30px 0 20px;">🌟 Prima Divisione - Under 18</h2>
                <div class="athlete-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;">
                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 160px; height: 160px; border-radius: 160px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <img src="./immagini/atlete/prima div/Vittoria.png" alt="Vittoria" style="width: auto; height: 100%; border-radius: 20px;">
                        </div>
                        <h3>Vittoria</h3>
                        <p style="opacity: 0.8;">Centrale</p>
                        <p style="font-size: 0.8rem;">#1</p>
                    </div>
                
                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 160px; height: 160px; border-radius: 60px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <img src="./immagini/atlete/prima div/giorgia.png" alt="Giorgia Tesse" style="width: auto; height: 100%; border-radius: 20px;">
                        </div>
                        <h3>Giorgia Tesse</h3>
                        <p style="opacity: 0.8;">Palleggiatrice</p>
                        <p style="font-size: 0.8rem;">#2</p>
                    </div>
                
                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 160px; height: 160px; border-radius: 60px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <img src="./immagini/atlete/prima div/pacioni.png" alt="Pacioni Martina" style="width: auto; height: 100%; border-radius: 20px;">
                        </div>
                        <h3>Martina Pacioni</h3>
                        <p style="opacity: 0.8;">Centrale (K)</p>
                        <p style="font-size: 0.8rem;">#3</p>
                    </div>
                    
                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 160px; height: 160px; border-radius: 60px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <img src="./immagini/atlete/prima div/elisa.png" alt="Elisa Simonetto" style="width: auto; height: 100%; border-radius: 20px;">
                        </div>
                        <h3>Elisa Simonetto</h3>
                        <p style="opacity: 0.8;">Opposto</p>
                        <p style="font-size: 0.8rem;">#4</p>
                    </div>
                    
                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 160px; height: 160px; border-radius: 60px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <img src="./immagini/atlete/prima div/perla.png" alt="Perla Ciaffiardoni" style="width: auto; height: 100%; border-radius: 20px;">
                        </div>
                        <h3>Perla Ciaffiardoni</h3>
                        <p style="opacity: 0.8;">Libero (L2)</p>
                        <p style="font-size: 0.8rem;">#5</p>
                    </div>
                    
                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 160px; height: 160px; border-radius: 60px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <img src="./immagini/atlete/prima div/ilaria_diago.png" alt="Ilaria Di Agostino" style="width: auto; height: 100%; border-radius: 20px;">
                        </div>
                        <h3>Ilaria Di Agostino</h3>
                        <p style="opacity: 0.8;">Schiacciatrice</p>
                        <p style="font-size: 0.8rem;">#6</p>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 160px; height: 160px; border-radius: 60px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <img src="./immagini/atlete/prima div/saluti.png" alt="Francesca Saluti" style="width: auto; height: 100%; border-radius: 20px;">
                        </div>
                        <h3>Francesca Saluti</h3>
                        <p style="opacity: 0.8;">Schiacciatrice</p>
                        <p style="font-size: 0.8rem;">#7</p>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 160px; height: 160px; border-radius: 60px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <img src="./immagini/atlete/prima div/giorgia (2).png" alt="Giorgia Schiantabasti" style="width: auto; height: 100%; border-radius: 20px;">
                        </div>
                        <h3>Giorgia Schiantabasti</h3>
                        <p style="opacity: 0.8;">Schiacciatrice</p>
                        <p style="font-size: 0.8rem;">#8</p>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 160px; height: 160px; border-radius: 60px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <img src="./immagini/atlete/prima div/giulia_dercoli.png" alt="Giulia D'ercoli" style="width: auto; height: 100%; border-radius: 20px;">
                        </div>
                        <h3>Giulia D'ercoli</h3>
                        <p style="opacity: 0.8;">Centrale</p>
                        <p style="font-size: 0.8rem;">#9</p>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 160px; height: 160px; border-radius: 60px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <img src="./immagini/atlete/prima div/giulia.png" alt="Giulia Ferretti" style="width: auto; height: 100%; border-radius: 20px;">
                        </div>
                        <h3>Giulia Ferretti</h3>
                        <p style="opacity: 0.8;">Libero (L3)</p>
                        <p style="font-size: 0.8rem;">#10</p>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 160px; height: 160px; border-radius: 60px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <img src="./immagini/atlete/prima div/giada.png" alt="Giada Matteucci" style="width: auto; height: 100%; border-radius: 20px;">
                        </div>
                        <h3>Giada Matteucci</h3>
                        <p style="opacity: 0.8;">Palleggiatore</p>
                        <p style="font-size: 0.8rem;">#11</p>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 160px; height: 160px; border-radius: 60px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <img src="./immagini/atlete/prima div/rossi.png" alt="Ilaria Rossi" style="width: auto; height: 100%; border-radius: 20px;">
                        </div>
                        <h3>Ilaria Rossi</h3>
                        <p style="opacity: 0.8;">Opposto</p>
                        <p style="font-size: 0.8rem;">#12</p>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 160px; height: 160px; border-radius: 60px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <img src="./immagini/atlete/prima div/greta.png" alt="Greta Amatucci" style="width: auto; height: 100%; border-radius: 20px;">
                        </div>
                        <h3>Greta Amatucci</h3>
                        <p style="opacity: 0.8;">Schiacciatore</p>
                        <p style="font-size: 0.8rem;">#13</p>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 160px; height: 160px; border-radius: 60px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <img src="./immagini/atlete/prima div/alessia.png" alt="Alessia Giordani" style="width: auto; height: 100%; border-radius: 20px;">
                        </div>
                        <h3>Alessia Giordani</h3>
                        <p style="opacity: 0.8;">Schiacciatore</p>
                        <p style="font-size: 0.8rem;">#14</p>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 160px; height: 160px; border-radius: 60px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <img src="./immagini/atlete/prima div/matilde.png" alt="Matilde Filantropi" style="width: auto; height: 100%; border-radius: 20px;">
                        </div>
                        <h3>Matilde Filantropi</h3>
                        <p style="opacity: 0.8;">Libero (L1)</p>
                        <p style="font-size: 0.8rem;">#15</p>
                    </div>
                </div>
            </div>
            
            <!-- SECONDA DIVISIONE WHITE / UNDER 16 WHITE -->
            <div class="athlete-category" data-category="under16" style="display: block;">
                <h2 style="margin: 30px 0 20px;">🔵 Seconda Div White - Under 16 White</h2>
                <div class="athlete-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;">
                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 120px; height: 120px; border-radius: 60px; background: rgba(255,255,255,0.15); margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                            </svg>
                        </div>
                        <h3>Sofia Marino</h3>
                        <p style="opacity: 0.8;">Palleggiatrice</p>
                        <p style="font-size: 0.8rem;">#3</p>
                    </div>
                    
                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 120px; height: 120px; border-radius: 60px; background: rgba(255,255,255,0.15); margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                            </svg>
                        </div>
                        <h3>Chiara Fontana</h3>
                        <p style="opacity: 0.8;">Schiacciatrice</p>
                        <p style="font-size: 0.8rem;">#5</p>
                    </div>
                    
                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 120px; height: 120px; border-radius: 60px; background: rgba(255,255,255,0.15); margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                            </svg>
                        </div>
                        <h3>Martina Galli</h3>
                        <p style="opacity: 0.8;">Centrale</p>
                        <p style="font-size: 0.8rem;">#8</p>
                    </div>
                </div>
            </div>
            
            <!-- SECONDA DIVISIONE BLU / UNDER 16 BLU -->
            <div class="athlete-category" data-category="under16" style="display: block;">
                <h2 style="margin: 30px 0 20px;">🟡 Seconda Div Blu - Under 16 Blu</h2>
                <div class="athlete-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;">
                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 120px; height: 120px; border-radius: 60px; background: rgba(255,255,255,0.15); margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                            </svg>
                        </div>
                        <h3>Emma Rossi</h3>
                        <p style="opacity: 0.8;">Palleggiatrice</p>
                        <p style="font-size: 0.8rem;">#2</p>
                    </div>
                    
                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 120px; height: 120px; border-radius: 60px; background: rgba(255,255,255,0.15); margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                            </svg>
                        </div>
                        <h3>Giorgio Bianchi</h3>
                        <p style="opacity: 0.8;">Schiacciatore</p>
                        <p style="font-size: 0.8rem;">#6</p>
                    </div>
                </div>
            </div>
            
            <!-- UNDER 13 
            <div class="athlete-category" data-category="under13" style="display: block;">
                <h2 style="margin: 30px 0 20px;">🟢 Under 13</h2>
                <div class="athlete-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;">
                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 120px; height: 120px; border-radius: 60px; background: rgba(255,255,255,0.15); margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                            </svg>
                        </div>
                        <h3>Alice Marini</h3>
                        <p style="opacity: 0.8;">Palleggiatrice</p>
                    </div>
                    
                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 120px; height: 120px; border-radius: 60px; background: rgba(255,255,255,0.15); margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                            </svg>
                        </div>
                        <h3>Tommaso Verdi</h3>
                        <p style="opacity: 0.8;">Schiacciatore</p>
                    </div>
                </div>
            </div> -->
            
            <!-- MINIVOLLEY 
            <div class="athlete-category" data-category="minivolley" style="display: block;">
                <h2 style="margin: 30px 0 20px;">🌈 Minivolley</h2>
                <div class="athlete-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;">
                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 120px; height: 120px; border-radius: 60px; background: rgba(255,255,255,0.15); margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                            </svg>
                        </div>
                        <h3>Matteo Ciao</h3>
                        <p style="opacity: 0.8;">Piccolo campione</p>
                    </div>
                    
                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px;">
                        <div style="width: 120px; height: 120px; border-radius: 60px; background: rgba(255,255,255,0.15); margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.7"/>
                            </svg>
                        </div>
                        <h3>Sofia Piccola</h3>
                        <p style="opacity: 0.8;">Piccola campionessa</p>
                    </div>
                </div>
            </div> -->
        </div>
    `,
    
    // SQUADRE
    squadre: () => `
        <div class="glass-card">
            <h1>Le Nostre Squadre</h1>
            
            <div class="squadre-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 30px;">
                <a href="#/squadre/primaDivisione" class="glass-card" style="text-decoration: none; color: white; display: block;">
                    <h3>Prima Divisione / Under 18</h3>
                </a>
                
                <a href="#/squadre/under16white" class="glass-card" style="text-decoration: none; color: white; display: block;">
                    <h3>Under 16 White / 2 Div White</h3>
                </a>
                
                <a href="#/squadre/under16blu" class="glass-card" style="text-decoration: none; color: white; display: block;">
                    <h3>Under 16 Blu / 2 Div Blu</h3>
                </a>
            </div>
        </div>
    `,

    // PRIMA DIVISIONE
    primaDivisione: () => `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
            <h1>Prima Divisione / Under 18</h1>
            <a href="#/squadre" class="liquid-bubble">← Torna alle Squadre</a>
            <p>La nostra squadra di Prima Divisione è composta da atleti esperti e appassionati, pronti a competere ad alti livelli. Con un mix di giovani talenti e veterani, puntiamo a raggiungere grandi traguardi in ogni stagione.</p>
        </div>
        <img src="immagini/squadre/primaDivisione.png" alt="Prima Divisione" style="width: 100%; border-radius: 10px; margin-top: 20px;">
    `,

    under16white: () => `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
            <h1>Under 16 White / 2 Div White</h1>
            <a href="#/squadre" class="liquid-bubble">← Torna alle Squadre</a>
            <p>La nostra squadra Under 16 White è composta da giovani talenti in crescita, pronti a dimostrare il loro potenziale. Con un approccio tecnico e strategico, mirano a migliorare costantemente e competere con le migliori squadre della regione.</p>
        </div>
        <img src="immagini/squadre/u16white.png" alt="Under 16 White" style="width: 100%; border-radius: 10px; margin-top: 20px;">
    `,

    under16blu: () => `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
            <h1>Under 16 Blu / 2 Div Blu</h1>
            <a href="#/squadre" class="liquid-bubble">← Torna alle Squadre</a>
            <p>La nostra squadra Under 16 Blu è composta da giovani talenti in crescita, pronti a dimostrare il loro potenziale. Con un approccio tecnico e strategico, mirano a migliorare costantemente e competere con le migliori squadre della regione.</p>
        </div>
        <img src="immagini/squadre/u16blu2.png" alt="Under 16 Blu" style="width: 100%; border-radius: 10px; margin-top: 20px;">
    `,
    
    // CONTATTI
    contatti: () => `
        <div class="glass-card">
            <h1>Contatti</h1>
            
            <div class="contact-info" style="margin-top: 20px;">
                <p><strong>Email:</strong> info@incontravolley.it</p>
                <p><strong>Telefono:</strong> 123 4567890</p>
                <p><strong>Indirizzo:</strong> Via dello Sport, 1 - Castel di Lama (AP)</p>
                <p><strong>Orari segreteria:</strong> Lun-Ven 16:00-19:00</p>
            </div>
            
            <h2 class="mt-4">Seguici sui social</h2>
            <div class="social-links" style="display: flex; gap: 15px; margin-top: 20px;">
                <a href="https://www.instagram.com/incontra_volley_castel_di_lama/" target="_blank" class="liquid-bubble">Instagram</a>
                <a href="https://www.facebook.com/InConTraVolley" target="_blank" class="liquid-bubble">Facebook</a>
            </div>
        </div>
    `,
    
    // ISCRIZIONI
    iscrizioni: () => `
        <div class="glass-card">
            <h1>Iscrizioni</h1>
            <p>Aperte le iscrizioni per la stagione 2025-2026</p>
            <p>Contattaci per informazioni o vieni a trovarci in segreteria.</p>
            <div style="margin-top: 20px;">
                <a href="#/contatti" class="liquid-bubble">Contattaci</a>
            </div>
        </div>
    `,
    
    // INFO
    info: () => `
        <div class="glass-card">
            <h1>Informazioni</h1>
            <p>Pagina informativa in aggiornamento.</p>
        </div>
    `,
    
    // SPONSOR
    sponsor: () => `
        <div class="glass-card">
            <h1>Sponsor</h1>
            <p>I partner che sostengono la nostra società.</p>
            <div class="glass-card-sponsor" style="text-align: center; padding: 20px; margin-top: 30px; width: 50%; margin-left: 25%">
                <img src="./immagini/sponsor/g3.png" alt="Sponsor 1" style="max-width: 100%; height: auto;">
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/moretti_design.png" alt="Sponsor 2" style="max-width: 100%; height: auto; margin-top: 5%;">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/caioni_costruzioni.png" alt="Sponsor 3" style="max-width: 100%; height: auto; margin-top: 2%">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/cosmocolor.png" alt="Sponsor 4" style="max-width: 100%; height: auto; margin-top: 2%; border-radius: 10px">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/fimeco.png" alt="Sponsor 5" style="max-width: 100%; height: auto; margin-top: 5%; border-radius: 10px">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/standup.png" alt="Sponsor 6" style="max-width: 100%; height: auto; border-radius: 10px; margin-top: 3%">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/caffe_sonia.png" alt="Sponsor 7" style="max-width: 100%; height: auto; margin-top: 3%; border-radius: 10px">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/amatucci.png" alt="Sponsor 8" style="max-width: 100%; height: auto; border-radius: 10px; margin-top: 3%">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/onAuto.png" alt="Sponsor 9" style="max-width: 100%; height: auto; border-radius: 10px; margin-top: 3%">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/trasportiFracassa.png" alt="Sponsor 10" style="max-width: 100%; height: auto; border-radius: 15px; margin-top: 3%">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/mandozzi.png" alt="Sponsor 11" style="max-width: 100%; height: auto; border-radius: 15px; margin-top: 3%">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/pasticceria.png" alt="Sponsor 12" style="max-width: 100%; height: auto; border-radius: 15px; margin-top: 3%">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/pacioni.png" alt="Sponsor 13" style="max-width: 100%; height: auto; border-radius: 15px">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/sabelli.png" alt="Sponsor 14" style="max-width: 100%; height: auto; border-radius: 15px">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/tfa.png" alt="Sponsor 15" style="max-width: 100%; height: auto; border-radius: 15px">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/gli_ulivi.png" alt="Sponsor 16" style="max-width: 100%; height: auto; border-radius: 15px; margin-top: 3%">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/succitti.png" alt="Sponsor 17" style="max-width: 100%; height: auto; border-radius: 15px; margin-top: 3%">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/atf.png" alt="Sponsor 18" style="max-width: 100%; height: auto; border-radius: 15px; margin-top: 12%">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/perTeAssicurazioni.png" alt="Sponsor 19" style="max-width: 100%; height: auto">
                </div>
                <div class="glass-card-sponsor" style="text-align: center;">
                    <img src="./immagini/sponsor/gastrociccia.png" alt="Sponsor 20" style="max-width: 100%; height: auto; border-radius: 15px; margin-top: 3%">
                </div>
                
            </div>
        </div>
    `,
    
    // AREA STAFF - LOGIN
    'area-staff-login': () => {
        console.log('🔑 Vista login caricata');
        return `
            <div class="glass-card" style="max-width: 400px; margin: 40px auto;">
                <h1 class="text-center">Area Staff</h1>
                <p class="text-center">Accedi con le tue credenziali</p>
                
                <div style="margin-top: 30px;">
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px;">Username</label>
                        <input type="text" id="login-username" placeholder="Username" 
                            style="width: 100%; padding: 12px 20px; border-radius: 30px; border: none; background: rgba(255,255,255,0.2); color: white; font-size: 16px;">
                    </div>
                    
                    <div style="margin-bottom: 20px; position: relative;">
                        <label style="display: block; margin-bottom: 5px;">Password</label>
                        <div style="position: relative;">
                            <input type="password" id="login-password" placeholder="Password" 
                                style="width: 100%; padding: 12px 20px; border-radius: 30px; border: none; background: rgba(255,255,255,0.2); color: white; font-size: 16px; padding-right: 50px;">
                            <button id="toggle-password" type="button" 
                                style="position: absolute; right: 15px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 20px; color: rgba(255,255,255,0.7); padding: 5px;">
                                🔒
                            </button>
                        </div>
                    </div>
                    
                    <button id="login-button" class="liquid-bubble" style="width: 100%; padding: 14px; font-size: 16px;">Accedi</button>
                </div>
                
                <div id="login-message" style="margin-top: 20px; color: #ff6b6b; text-align: center; display: none;"></div>
                
                <!-- Suggerimenti per il test (da rimuovere in produzione) -->
                <div style="margin-top: 30px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 20px; font-size: 0.9rem;">
                    <p style="margin: 0 0 10px 0;"><strong>🔐 Credenziali di test:</strong></p>
                    <p style="margin: 5px 0;">👑 Presidente: presidente / presidente123</p>
                    <p style="margin: 5px 0;">📋 Dirigente: dirigente.mario / dirigente123</p>
                    <p style="margin: 5px 0;">🏐 Allenatore U17: allenatore.under17 / under172026</p>
                    <p style="margin: 5px 0;">🏐 Allenatore U15: allenatore.under15 / under152026</p>
                    <p style="margin: 5px 0;">🏐 Allenatore Minivolley: allenatore.minivolley / minivolley2026</p>
                </div>
            </div>
        `;
    },
    
    // AREA STAFF - DASHBOARD (VERSIONE CON FILTRO)
    'area-staff-dashboard': () => {
        const user = Auth.getCurrentUser();
        console.log('📊 Dashboard per:', user);
        
        // Prendi le categorie visibili per questo utente
        const categorieVisibili = Auth.getVisibleCategories();
        
        const categoriaLabels = {
            'prima-divisione': 'Prima Divisione',
            'under18': 'Under 18',
            'under16blu': 'Under 16 Blu',
            'under16white': 'Under 16 Bianca',
            'under13': 'Under 13',
            'minivolley': 'Minivolley'
        };
        
        return `
            <div class="glass-card">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
                    <h1>Area Staff</h1>
                    <button onclick="Auth.logout()" class="liquid-bubble">Logout</button>
                </div>
                
                <p style="margin-top: 20px;">
                    Benvenuto, <strong>${user ? user.username : ''}</strong> 
                    (${user ? user.ruolo : 'Staff'})
                </p>
                
                <h2 class="mt-4">Video delle partite</h2>
                <p>Seleziona una categoria per visualizzare i filmati:</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px;">
                    ${categorieVisibili.map(cat => `
                        <a href="#/area-staff/video/${cat}" class="glass-card" style="text-decoration: none; color: white; display: block; padding: 20px;">
                            <h3 style="margin: 0;">${categoriaLabels[cat] || cat}</h3>
                            <p style="margin: 10px 0 0; opacity: 0.7; font-size: 0.9rem;">Clicca per vedere i video</p>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    },
    
    // VIDEO PRIMA DIVISIONE
    'video-prima-divisione': () => `
        <div class="glass-card">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
                <h1>Video Prima Divisione</h1>
                <a href="#/area-staff" class="liquid-bubble">← Torna alla dashboard</a>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px;">
                <div class="glass-card">
                    <h3>Partita del 20/12/2025</h3>
                    <p>Incontra vs Riviera Samb Volley</p>
                    <div style="background: rgba(0,0,0,0.3); height: 180px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-top: 15px;">
                        <video src="video/2025-12-20Incontra-RivieraSamb.mp4" controls style="width: auto; height: 100%; border-radius: 20px;">
                    </div>
                </div>
                
                <div class="glass-card">
                    <h3>Partita del 09/02/2026</h3>
                    <p>Prima Divisione vs Team Y</p>
                    <div style="background: rgba(0,0,0,0.3); height: 180px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-top: 15px;">
                        🎥 Video in arrivo
                    </div>
                </div>
            </div>
        </div>
    `,
    
    // VIDEO UNDER 18
    'video-under18': () => `
        <div class="glass-card">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
                <h1>Video Under 18</h1>
                <a href="#/area-staff" class="liquid-bubble">← Torna alla dashboard</a>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px;">
                <div class="glass-card">
                    <h3>Partita del 16/02/2026</h3>
                    <p>Under 17 vs Team Z</p>
                    <div style="background: rgba(0,0,0,0.3); height: 180px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-top: 15px;">
                        🎥 Video in arrivo
                    </div>
                </div>
            </div>
        </div>
    `,
    
    // VIDEO UNDER 16 BLU
    'video-under16blu': () => `
        <div class="glass-card">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
                <h1>Video Under 16 Blu</h1>
                <a href="#/area-staff" class="liquid-bubble">← Torna alla dashboard</a>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px;">
                <div class="glass-card">
                    <h3>Partita del 16/02/2026</h3>
                    <p>Under 16 Blu vs Team W</p>
                    <div style="background: rgba(0,0,0,0.3); height: 180px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-top: 15px;">
                        🎥 Video in arrivo
                    </div>
                </div>
            </div>
        </div>
    `,

    'video-under16white': () => `<div class="glass-card"><h1>Video Under 16 Bianco</h1><a href="#/area-staff" class="liquid-bubble">← Torna alla dashboard</a></div>`,
    'video-under13': () => `<div class="glass-card"><h1>Video Under 13</h1><a href="#/area-staff" class="liquid-bubble">← Torna alla dashboard</a></div>`,
    'video-minivolley': () => `<div class="glass-card"><h1>Video Minivolley</h1><a href="#/area-staff" class="liquid-bubble">← Torna alla dashboard</a></div>`
};

// Gestione eventi login
document.addEventListener('click', function(e) {
    // Pulsante login
    if (e.target && e.target.id === 'login-button') {
        eseguiLogin();
    }
    
    // Pulsante occhio per mostrare/nascondere password
    if (e.target && e.target.id === 'toggle-password') {
        const passwordInput = document.getElementById('login-password');
        const button = e.target;
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            button.textContent = '🔓';
        } else {
            passwordInput.type = 'password';
            button.textContent = '🔒';
        }
    }
});

// Evento Invio sulla tastiera
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const usernameInput = document.getElementById('login-username');
        const passwordInput = document.getElementById('login-password');
        
        // Se uno dei due input è focalizzato, esegui login
        if (document.activeElement === usernameInput || document.activeElement === passwordInput) {
            e.preventDefault(); // Evita comportamenti strani
            eseguiLogin();
        }
    }
});

// Funzione login centralizzata
function eseguiLogin() {
    console.log('🖱️ Tentativo di login');
    
    const username = document.getElementById('login-username')?.value;
    const password = document.getElementById('login-password')?.value;
    const messageDiv = document.getElementById('login-message');
    
    console.log('📝 Credenziali inserite:', { username, password });
    
    if (!username || !password) {
        messageDiv.style.display = 'block';
        messageDiv.textContent = 'Inserisci username e password';
        return;
    }
    
    if (Auth.login(username, password)) {
        console.log('✅ Login riuscito, redirect...');
        window.location.hash = '#/area-staff';
    } else {
        messageDiv.style.display = 'block';
        messageDiv.textContent = 'Credenziali errate';
    }
}

console.log('✅ Components.js caricato con tutte le viste');