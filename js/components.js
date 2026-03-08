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
        <div class="glass-card">
            <h2>La nostra storia</h2>
            <p>L'InConTra Volley nasce a Castel di Lama con l'obiettivo di creare un punto di riferimento per la pallavolo giovanile e amatoriale nella provincia di Ascoli Piceno. Crediamo nello sport come strumento di crescita, inclusione e divertimento.</p>
        </div>
        
        <div class="glass-card">
            <h2>I nostri valori</h2>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 15px;"><strong>Passione:</strong> Viviamo la pallavolo con entusiasmo</li>
                <li style="margin-bottom: 15px;"><strong>Aggregazione:</strong> Creiamo comunità dentro e fuori dal campo</li>
                <li style="margin-bottom: 15px;"><strong>Crescita:</strong> Formiamo atleti e persone</li>
                <li style="margin-bottom: 15px;"><strong>Energia:</strong> Trasmettiamo positività in ogni partita</li>
            </ul>
        </div>
        
        <div class="glass-card">
            <h2 style="text-align: center; margin-bottom: 20px;">Le sedi</h2>
            <div style="display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; align-items: flex-start;">
                
                <div style="flex: 1; min-width: 180px;">
                    <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 8px;">Castel di Lama</h5>
                    <p>Via Adige, 35<br>Castel di Lama (AP)</p>
                </div>

                <div style="flex: 1; min-width: 180px;">
                    <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 8px;">Castorano</h5>
                    <p>Contrada Palazzi, 24<br>Castorano - Rocchetta (AP)</p>
                </div>

                <div style="flex: 1; min-width: 180px;">
                    <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 8px;">Orari segreteria <span style="font-weight: 400; font-size: 0.85em;">(Castel di Lama)</span></h5>
                    <p>Lun/Mer: 18:30 – 20:00<br>Venerdì: 18:00 – 20:00</p>
                </div>

            </div>
        </div>
        
        <!-- CALENDARIO EVENTI -->
        <div class="glass-card mt-5">
            <h2 style="text-align: center; margin-bottom: 30px;">Calendario eventi</h2>
            
            <div class="event-filters" style="display: flex; gap: 15px; justify-content: center; margin-bottom: 30px; flex-wrap: wrap;">
                <button class="liquid-bubble event-filter active" data-filter="all">Tutti</button>
                <button class="liquid-bubble event-filter" data-filter="partite">Partite</button>
                <button class="liquid-bubble event-filter" data-filter="allenamenti">Allenamenti</button>
                <button class="liquid-bubble event-filter" data-filter="eventi">Eventi speciali</button>
            </div>
            
            <div class="event-list" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
                <div class="glass-card event-item" data-type="partite" style="padding: 20px; display: flex; flex-direction: column; gap: 12px;">
                    <div style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.25); border-radius: 4px; padding: 12px; display: flex; flex-direction: column; align-items: center; gap: 12px;">
                        <div style="text-align: center; min-width: 48px;">
                            <div style="font-size: 2rem; font-weight: 900; font-family: 'Barlow Condensed', sans-serif; font-style: italic; line-height: 1;">7</div>
                            <div style="font-size: 0.75rem; letter-spacing: 0.10em; text-transform: uppercase; opacity: 0.7;">Marzo</div>
                        </div>
                        <span style="background: rgba(255,10,46,0.20); border: 1px solid rgba(255,10,46,0.35); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.78rem; color: var(--c-accent); letter-spacing: 0.05em; text-transform: uppercase;">Partita</span>
                    </div>
                    <div>
                        <h3 style="margin: 0 0 6px; font-size: clamp(0.95rem, 2vw, 1.1rem);">Incontra U16 White vs Emmont Volley</h3>
                        <p style="margin: 0; opacity: 0.7; font-size: 0.85rem;">Campionato U16 · 7ª giornata</p>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto;">
                        <span class="liquid-bubble" style="padding: 6px 12px; font-size: 0.78rem;">Ore 19:30</span>
                        <span class="liquid-bubble" style="padding: 6px 12px; font-size: 0.78rem;">Palestra Via Adige</span>
                    </div>
                </div>

                <div class="glass-card event-item" data-type="allenamenti" style="padding: 20px; display: flex; flex-direction: column; gap: 12px;">
                    <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 4px; padding: 12px; display: flex; flex-direction: column; align-items: center; gap: 12px;">
                        <div style="text-align: center; min-width: 48px;">
                            <div style="font-size: 2rem; font-weight: 900; font-family: 'Barlow Condensed', sans-serif; font-style: italic; line-height: 1;">18</div>
                            <div style="font-size: 0.75rem; letter-spacing: 0.10em; text-transform: uppercase; opacity: 0.7;">Febbraio</div>
                        </div>
                        <span style="background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.20); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.78rem; color: rgba(255,255,255,0.7); letter-spacing: 0.05em; text-transform: uppercase;">Allenamento</span>
                    </div>
                    <div>
                        <h3 style="margin: 0 0 6px; font-size: clamp(0.95rem, 2vw, 1.1rem);">Allenamento Prima Divisione</h3>
                        <p style="margin: 0; opacity: 0.7; font-size: 0.85rem;">Preparazione alla prossima partita</p>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto;">
                        <span class="liquid-bubble" style="padding: 6px 12px; font-size: 0.78rem;">Ore 20:30</span>
                        <span class="liquid-bubble" style="padding: 6px 12px; font-size: 0.78rem;">Palestra Comunale</span>
                    </div>
                </div>

                <div class="glass-card event-item" data-type="partite" style="padding: 20px; display: flex; flex-direction: column; gap: 12px;">
                    <div style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.25); border-radius: 4px; padding: 12px; display: flex; flex-direction: column; align-items: center; gap: 12px;">
                        <div style="text-align: center; min-width: 48px;">
                            <div style="font-size: 2rem; font-weight: 900; font-family: 'Barlow Condensed', sans-serif; font-style: italic; line-height: 1;">23</div>
                            <div style="font-size: 0.75rem; letter-spacing: 0.10em; text-transform: uppercase; opacity: 0.7;">Febbraio</div>
                        </div>
                        <span style="background: rgba(255,10,46,0.20); border: 1px solid rgba(255,10,46,0.35); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.78rem; color: var(--c-accent); letter-spacing: 0.05em; text-transform: uppercase;">Partita</span>
                    </div>
                    <div>
                        <h3 style="margin: 0 0 6px; font-size: clamp(0.95rem, 2vw, 1.1rem);">Under 15 vs Ascoli Volley</h3>
                        <p style="margin: 0; opacity: 0.7; font-size: 0.85rem;">Campionato Under 15 · 4ª giornata</p>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto;">
                        <span class="liquid-bubble" style="padding: 6px 12px; font-size: 0.78rem;">Ore 17:00</span>
                        <span class="liquid-bubble" style="padding: 6px 12px; font-size: 0.78rem;">Palestra Comunale</span>
                    </div>
                </div>

                <div class="glass-card event-item" data-type="eventi" style="padding: 20px; display: flex; flex-direction: column; gap: 12px;">
                    <div style="background: rgba(255,213,45,0.12); border: 1px solid rgba(255,213,45,0.20); border-radius: 4px; padding: 12px; display: flex; flex-direction: column; align-items: center; gap: 12px;">
                        <div style="text-align: center; min-width: 48px;">
                            <div style="font-size: 2rem; font-weight: 900; font-family: 'Barlow Condensed', sans-serif; font-style: italic; line-height: 1;">28</div>
                            <div style="font-size: 0.75rem; letter-spacing: 0.10em; text-transform: uppercase; opacity: 0.7;">Febbraio</div>
                        </div>
                        <span style="background: rgba(255,213,45,0.15); border: 1px solid rgba(255,213,45,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.78rem; color: #ffd52d; letter-spacing: 0.05em; text-transform: uppercase;">Evento speciale</span>
                    </div>
                    <div>
                        <h3 style="margin: 0 0 6px; font-size: clamp(0.95rem, 2vw, 1.1rem);">Open Day InConTra Volley</h3>
                        <p style="margin: 0; opacity: 0.7; font-size: 0.85rem;">Prove gratuite per nuovi iscritti · Tutte le età</p>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto;">
                        <span class="liquid-bubble" style="padding: 6px 12px; font-size: 0.78rem;">Ore 15:00–19:00</span>
                        <span class="liquid-bubble" style="padding: 6px 12px; font-size: 0.78rem;">Palestra Comunale</span>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Prossimi impegni in evidenza -->
        <div class="grid-container mt-5">
            <div class="glass-card">
                <h3 style="text-align: center; margin-bottom: 20px;">Classifiche</h3>
                <div style="display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; align-items: flex-start;">

                    <div style="flex: 0 1 calc(33.333% - 16px); min-width: 160px;">
                        <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                            Prima Divisione
                            <span style="font-weight: 400; font-size: 0.8em; opacity: 0.6;">· Girone A</span>
                        </h5>
                        <details>
                            <summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 1rem; color: var(--c-accent); line-height: 1.4;">4°</span>
                                    <strong style="font-size: 0.9rem;">G3 Incontra Volley</strong>
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                                    <span style="font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; opacity: 0.7;">25 pt</span>
                                    <span class="details-arrow">▼</span>
                                </div>
                            </summary>
                            <table class="classifica-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Squadra</th>
                                        <th>Pt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>1°</td><td>Scenic Le Quercie</td><td>37</td></tr>
                                    <tr><td>2°</td><td>Cento Volley</td><td>33</td></tr>
                                    <tr><td>3°</td><td>Ciù Ciù Offida</td><td>29</td></tr>
                                    <tr class="my-team"><td>4°</td><td>G3 Incontra Volley</td><td>25</td></tr>
                                    <tr><td>5°</td><td>Villa Pigna</td><td>21</td></tr>
                                    <tr><td>6°</td><td>RSV FI.FA. Security</td><td>13</td></tr>
                                    <tr><td>7°</td><td>Athena Volley</td><td>10</td></tr>
                                    <tr><td>8°</td><td>Ascoli Libero</td><td>0</td></tr>
                                </tbody>
                            </table>
                        </details>
                    </div>

                    <div style="flex: 0 1 calc(33.333% - 16px); min-width: 160px;">
                        <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                            Prima Divisione
                            <span style="font-weight: 400; font-size: 0.8em; opacity: 0.6;">· Girone D</span>
                        </h5>
                        <details>
                            <summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 1rem; color: var(--c-accent); line-height: 1.4;">1°</span>
                                    <strong style="font-size: 0.9rem;">G3 Incontra Volley</strong>
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                                    <span style="font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; opacity: 0.7;">9 pt</span>
                                    <span class="details-arrow">▼</span>
                                </div>
                            </summary>
                            <table class="classifica-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Squadra</th>
                                        <th>Pt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="my-team"><td>1°</td><td>G3 Incontra Volley</td><td>9</td></tr>
                                    <tr><td>2°</td><td>Rapagnano</td><td>9</td></tr>
                                    <tr><td>3°</td><td>RSV FI.FA. Security</td><td>7</td></tr>
                                    <tr><td>4°</td><td>Qualis Lab Fermo</td><td>5</td></tr>
                                    <tr><td>5°</td><td>Ascoli Libero</td><td>0</td></tr>
                                </tbody>
                            </table>
                        </details>
                    </div>

                    <div style="flex: 0 1 calc(33.333% - 16px); min-width: 160px;">
                        <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                            Under 18
                            <span style="font-weight: 400; font-size: 0.8em; opacity: 0.6;">· Girone A</span>
                        </h5>
                        <details>
                            <summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 1rem; color: var(--c-accent); line-height: 1.4;">2°</span>
                                    <strong style="font-size: 0.9rem;">G3 Incontra Volley</strong>
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                                    <span style="font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; opacity: 0.7;">12 pt</span>
                                    <span class="details-arrow">▼</span>
                                </div>
                            </summary>
                            <table class="classifica-table">
                                <thead>
                                    <tr><th>#</th><th>Squadra</th><th>Pt</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>1°</td><td>Pagliare Volley</td><td>18</td></tr>
                                    <tr class="my-team"><td>2°</td><td>G3 Incontra Volley</td><td>12</td></tr>
                                    <tr><td>3°</td><td>Ascoli Libero</td><td>3</td></tr>
                                    <tr><td>4°</td><td>Picena Frigor Le Quercie</td><td>3</td></tr>
                                </tbody>
                            </table>
                        </details>
                    </div>

                    <div style="flex: 0 1 calc(33.333% - 16px); min-width: 160px;">
                        <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                            Under 18
                            <span style="font-weight: 400; font-size: 0.8em; opacity: 0.6;">· Girone F</span>
                        </h5>
                        <details>
                            <summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 1rem; color: var(--c-accent); line-height: 1.4;">1°</span>
                                    <strong style="font-size: 0.9rem;">G3 Incontra Volley</strong>
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                                    <span style="font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; opacity: 0.7;">8 pt</span>
                                    <span class="details-arrow">▼</span>
                                </div>
                            </summary>
                            <table class="classifica-table">
                                <thead>
                                    <tr><th>#</th><th>Squadra</th><th>Pt</th></tr>
                                </thead>
                                <tbody>
                                    <tr class="my-team"><td>1°</td><td>G3 Incontra Volley</td><td>8</td></tr>
                                    <tr><td>2°</td><td>RSV FI.FA. Security</td><td>7</td></tr>
                                    <tr><td>3°</td><td>Offida Volley</td><td>3</td></tr>
                                    <tr><td>4°</td><td>Pallavolo Sibillini</td><td>0</td></tr>
                                </tbody>
                            </table>
                        </details>
                    </div>

                    <div style="flex: 0 1 calc(33.333% - 16px); min-width: 160px;">
                        <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                            Seconda Divisione White
                            <span style="font-weight: 400; font-size: 0.8em; opacity: 0.6;">· Girone A</span>
                        </h5>
                        <details>
                            <summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 1rem; color: var(--c-accent); line-height: 1.4;">1°</span>
                                    <strong style="font-size: 0.9rem;">G3 Incontra Volley White</strong>
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                                    <span style="font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; opacity: 0.7;">29 pt</span>
                                    <span class="details-arrow">▼</span>
                                </div>
                            </summary>
                            <table class="classifica-table">
                                <thead>
                                    <tr><th>#</th><th>Squadra</th><th>Pt</th></tr>
                                </thead>
                                <tbody>
                                    <tr class="my-team"><td>1°</td><td>G3 Incontra Volley White</td><td>29</td></tr>
                                    <tr><td>2°</td><td>Selettra Comunanza Volley</td><td>23</td></tr>
                                    <tr><td>3°</td><td>Picena Frigor Le Quercie</td><td>19</td></tr>
                                    <tr><td>4°</td><td>ASD Libero Volley</td><td>11</td></tr>
                                    <tr><td>5°</td><td>Villa Pigna</td><td>8</td></tr>
                                    <tr><td>6°</td><td>Telecom Maga Game</td><td>0</td></tr>
                                </tbody>
                            </table>
                        </details>
                    </div>

                    <div style="flex: 0 1 calc(33.333% - 16px); min-width: 160px;">
                        <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                            Seconda Divisione White
                            <span style="font-weight: 400; font-size: 0.8em; opacity: 0.6;">· Girone F</span>
                        </h5>
                        <details>
                            <summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 1rem; color: var(--c-accent); line-height: 1.4;">3°</span>
                                    <strong style="font-size: 0.9rem;">G3 Incontra Volley White</strong>
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                                    <span style="font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; opacity: 0.7;">9 pt</span>
                                    <span class="details-arrow">▼</span>
                                </div>
                            </summary>
                            <table class="classifica-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Squadra</th>
                                        <th>Pt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>1°</td><td>Fontana Pagliare Volley</td><td>12</td></tr>
                                    <tr><td>2°</td><td>Folli Volley</td><td>12</td></tr>
                                    <tr class="my-team"><td>3°</td><td>G3 Incontra Volley White</td><td>9</td></tr>
                                    <tr><td>4°</td><td>Cento Volley</td><td>8</td></tr>
                                    <tr><td>5°</td><td>Emmont Volley</td><td>7</td></tr>
                                    <tr><td>6°</td><td>Monte Urano</td><td>6</td></tr>
                                    <tr><td>7°</td><td>Telecom Pagliare Volley</td><td>6</td></tr>
                                    <tr><td>8°</td><td>Selettra Comunanza</td><td>6</td></tr>
                                    <tr><td>9°</td><td>Grottazzolina</td><td>3</td></tr>
                                    <tr><td>10°</td><td>RSV Catia Isopi</td><td>0</td></tr>
                                </tbody>
                            </table>
                        </details>
                    </div>

                    <div style="flex: 0 1 calc(33.333% - 16px); min-width: 160px;">
                        <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                            Seconda Divisione Blu
                            <span style="font-weight: 400; font-size: 0.8em; opacity: 0.6;">· Girone B</span>
                        </h5>
                        <details>
                            <summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 1rem; color: var(--c-accent); line-height: 1.4;">6°</span>
                                    <strong style="font-size: 0.9rem;">G3 Incontra Volley Blu</strong>
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                                    <span style="font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; opacity: 0.7;">0 pt</span>
                                    <span class="details-arrow">▼</span>
                                </div>
                            </summary>
                            <table class="classifica-table">
                                <thead>
                                    <tr><th>#</th><th>Squadra</th><th>Pt</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>1°</td><td>Pagliare Volley</td><td>24</td></tr>
                                    <tr><td>2°</td><td>Cento Volley</td><td>23</td></tr>
                                    <tr><td>3°</td><td>Offida Volley</td><td>22</td></tr>
                                    <tr><td>4°</td><td>Athena Volley</td><td>12</td></tr>
                                    <tr><td>5°</td><td>RSV Euromec</td><td>9</td></tr>
                                    <tr class="my-team"><td>6°</td><td>G3 Incontra Volley Blu</td><td>0</td></tr>
                                </tbody>
                            </table>
                        </details>
                    </div>

                    <div style="flex: 0 1 calc(33.333% - 16px); min-width: 160px;">
                        <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                            Seconda Divisione Blu
                            <span style="font-weight: 400; font-size: 0.8em; opacity: 0.6;">· Girone F</span>
                        </h5>
                        <details>
                            <summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 1rem; color: var(--c-accent); line-height: 1.4;">10°</span>
                                    <strong style="font-size: 0.9rem;">G3 Incontra Volley Blu</strong>
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                                    <span style="font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; opacity: 0.7;">0 pt</span>
                                    <span class="details-arrow">▼</span>
                                </div>
                            </summary>
                            <table class="classifica-table">
                                <thead>
                                    <tr><th>#</th><th>Squadra</th><th>Pt</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>1°</td><td>Folli Volley</td><td>12</td></tr>
                                    <tr><td>2°</td><td>RSV Euromec</td><td>11</td></tr>
                                    <tr><td>3°</td><td>Monte Urano</td><td>9</td></tr>
                                    <tr><td>4°</td><td>Tecnolamiera Fermana</td><td>9</td></tr>
                                    <tr><td>5°</td><td>Aerthecno Fermana</td><td>8</td></tr>
                                    <tr><td>6°</td><td>RSV Food Matic</td><td>6</td></tr>
                                    <tr><td>7°</td><td>Telecom Maga Game</td><td>5</td></tr>
                                    <tr><td>8°</td><td>Villa Pigna</td><td>4</td></tr>
                                    <tr><td>9°</td><td>43 Parallelo Volley</td><td>2</td></tr>
                                    <tr class="my-team"><td>10°</td><td>G3 Incontra Volley Blu</td><td>0</td></tr>
                                </tbody>
                            </table>
                        </details>
                    </div>

                    <div style="flex: 0 1 calc(33.333% - 16px); min-width: 160px;">
                        <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                            Under 16 White
                            <span style="font-weight: 400; font-size: 0.8em; opacity: 0.6;">· Girone A</span>
                        </h5>
                        <details>
                            <summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 1rem; color: var(--c-accent); line-height: 1.4;">1°</span>
                                    <strong style="font-size: 0.9rem;">G3 Incontra Volley White</strong>
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                                    <span style="font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; opacity: 0.7;">18 pt</span>
                                    <span class="details-arrow">▼</span>
                                </div>
                            </summary>
                            <table class="classifica-table">
                                <thead>
                                    <tr><th>#</th><th>Squadra</th><th>Pt</th></tr>
                                </thead>
                                <tbody>
                                    <tr class="my-team"><td>1°</td><td>G3 Incontra Volley White</td><td>18</td></tr>
                                    <tr><td>2°</td><td>Pagliare Volley</td><td>16</td></tr>
                                    <tr><td>3°</td><td>Picena Frigor Le Quercie</td><td>15</td></tr>
                                    <tr><td>4°</td><td>Cento Volley</td><td>6</td></tr>
                                    <tr><td>5°</td><td>ASD Libero Volley</td><td>5</td></tr>
                                </tbody>
                            </table>
                        </details>
                    </div>

                    <div style="flex: 0 1 calc(33.333% - 16px); min-width: 160px;">
                        <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                            Under 16 White
                            <span style="font-weight: 400; font-size: 0.8em; opacity: 0.6;">· Girone E</span>
                        </h5>
                        <details>
                            <summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 1rem; color: var(--c-accent); line-height: 1.4;">3°</span>
                                    <strong style="font-size: 0.9rem;">G3 Incontra Volley White</strong>
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                                    <span style="font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; opacity: 0.7;">4 pt</span>
                                    <span class="details-arrow">▼</span>
                                </div>
                            </summary>
                            <table class="classifica-table">
                                <thead>
                                    <tr><th>#</th><th>Squadra</th><th>Pt</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>1°</td><td>Rapagnano</td><td>9</td></tr>
                                    <tr><td>2°</td><td>Athena Volley</td><td>5</td></tr>
                                    <tr class="my-team"><td>3°</td><td>G3 Incontra Volley White</td><td>4</td></tr>
                                    <tr><td>4°</td><td>Fermo Volley</td><td>0</td></tr>
                                </tbody>
                            </table>
                        </details>
                    </div>

                    <div style="flex: 0 1 calc(33.333% - 16px); min-width: 160px;">
                        <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                            Under 16 Blu
                            <span style="font-weight: 400; font-size: 0.8em; opacity: 0.6;">· Girone B</span>
                        </h5>
                        <details>
                            <summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 1rem; color: var(--c-accent); line-height: 1.4;">5°</span>
                                    <strong style="font-size: 0.9rem;">G3 Incontra Volley Blu</strong>
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                                    <span style="font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; opacity: 0.7;">0 pt</span>
                                    <span class="details-arrow">▼</span>
                                </div>
                            </summary>
                            <table class="classifica-table">
                                <thead>
                                    <tr><th>#</th><th>Squadra</th><th>Pt</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>1°</td><td>Athena Volley</td><td>21</td></tr>
                                    <tr><td>2°</td><td>Cento Volley</td><td>18</td></tr>
                                    <tr><td>3°</td><td>Offida Volley</td><td>11</td></tr>
                                    <tr><td>4°</td><td>RSV FI.FA. Security</td><td>10</td></tr>
                                    <tr class="my-team"><td>5°</td><td>G3 Incontra Volley Blu</td><td>0</td></tr>
                                </tbody>
                            </table>
                        </details>
                    </div>

                    <div style="flex: 0 1 calc(33.333% - 16px); min-width: 160px;">
                        <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                            Under 16 Blu
                            <span style="font-weight: 400; font-size: 0.8em; opacity: 0.6;">· Girone I</span>
                        </h5>
                        <details>
                            <summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 1rem; color: var(--c-accent); line-height: 1.4;">2°</span>
                                    <strong style="font-size: 0.9rem;">G3 Incontra Volley Blu</strong>
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                                    <span style="font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; opacity: 0.7;">3 pt</span>
                                    <span class="details-arrow">▼</span>
                                </div>
                            </summary>
                            <table class="classifica-table">
                                <thead>
                                    <tr><th>#</th><th>Squadra</th><th>Pt</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>1°</td><td>RSV FI.FA. Security</td><td>6</td></tr>
                                    <tr class="my-team"><td>2°</td><td>G3 Incontra Volley Blu</td><td>3</td></tr>
                                    <tr><td>3°</td><td>Grottazzolina</td><td>0</td></tr>
                                </tbody>
                            </table>
                        </details>
                    </div>

                </div>
            </div>
            
            <div class="glass-card">
                <h3 style="text-align: center; margin-bottom: 20px;">Ultimi risultati</h3>
                <div style="display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; align-items: flex-start;">

                    <div style="flex: 0 1 calc(33.333% - 16px); min-width: 160px;">
                        <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                            Under 16 White
                        </h5>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span style="background: rgba(50,200,100,0.15); border: 1px solid rgba(50,200,100,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 1rem; color: #32c864; line-height: 1.4;">V</span>
                            <span style="font-size: 0.9rem;"><strong>3-1</strong> vs Volley San Benedetto</span>
                        </div>
                    </div>

                    <div style="flex: 0 1 calc(33.333% - 16px); min-width: 160px;">
                        <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                            Under 16 Blu
                        </h5>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 1rem; color: var(--c-accent); line-height: 1.4;">S</span>
                            <span style="font-size: 0.9rem;"><strong>1-3</strong> vs Ascoli Volley</span>
                        </div>
                    </div>

                    <div style="flex: 0 1 calc(33.333% - 16px); min-width: 160px;">
                        <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                            Prima Divisione
                        </h5>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span style="background: rgba(50,200,100,0.15); border: 1px solid rgba(50,200,100,0.30); border-radius: 3px; padding: 2px 7px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 1rem; color: #32c864; line-height: 1.4;">V</span>
                            <span style="font-size: 0.9rem;"><strong>3-0</strong> vs Porto d'Ascoli</span>
                        </div>
                    </div>

                </div>
            </div>

            <div class="glass-card">
                <h3>Galleria</h3>
                <p>Foto delle ultime partite e allenamenti</p>

                <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 15px;">
                    <!-- Prime 5 immagini (sempre visibili) -->
                    <a href="./immagini/galleria/DSC_0848.JPG" class="glightbox" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_0848.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_0859.JPG" class="glightbox" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_0859.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_0868.JPG" class="glightbox" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_0868.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_0912.JPG" class="glightbox" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_0912.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_0915.JPG" class="glightbox" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_0915.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>

                    <!-- Immagini extra (inizialmente nascoste con classe gallery-hidden) -->
                    <a href="./immagini/galleria/DSC_7766.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_7766.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_7787.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_7787.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_7791.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_7791.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_7915.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_7915.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_7920.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_7920.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_7985.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_7985.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_7987.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_7987.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_9558.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_9558.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_9580.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_9580.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_9606.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_9606.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_9668.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_9668.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_9702.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_9702.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_9707.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_9707.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_9714.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_9714.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_9726.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_9726.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                    <a href="./immagini/galleria/DSC_9757.JPG" class="glightbox gallery-hidden" data-gallery="partite">
                        <img src="./immagini/galleria/DSC_9757.JPG" alt="Foto partita" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px;">
                    </a>
                </div>

                <!-- Bottone per mostrare le altre -->
                <button id="show-more-btn" class="liquid-bubble" style="margin-top: 20px;">Visualizza altre</button>
                <button id="show-less-btn" class="liquid-bubble" style="margin-top: 20px; display: none;">Mostra meno</button>
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
            <p style="text-align: center; max-width: 700px; margin: 0 auto 40px; opacity: 0.7;">Il cuore pulsante della InConTra Volley: presidente, dirigenti e allenatori che lavorano ogni giorno per far crescere la nostra famiglia.</p>

            <!-- Presidenti -->
            <h4 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin: 40px 0 20px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-size: 1.3rem; letter-spacing: 0.05em; text-transform: uppercase;">
                Presidenti
            </h4>
            <div class="staff-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px;">

                <div class="glass-card staff-card" style="text-align: center; padding: 28px 20px;">
                    <div class="staff-image" style="width: 130px; height: 130px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 2px solid rgba(255,10,46,0.30); margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <svg width="70" height="70" viewBox="0 0 24 24" fill="none"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.5"/></svg>
                    </div>
                    <h3 style="margin: 0 0 6px;">Pierpaolo Gagliardi</h3>
                    <p style="margin: 0 0 6px; opacity: 0.7; font-size: 0.85rem;">Presidente</p>
                    <p style="margin: 0 0 14px; font-size: 0.82rem; font-style: italic; opacity: 0.6;">"Lo sport come scuola di vita"</p>
                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 10px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; font-size: 0.78rem; color: var(--c-accent);">dal 2015</span>
                </div>

                <div class="glass-card staff-card" style="text-align: center; padding: 28px 20px;">
                    <div class="staff-image" style="width: 130px; height: 130px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 2px solid rgba(255,10,46,0.30); margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <svg width="70" height="70" viewBox="0 0 24 24" fill="none"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.5"/></svg>
                    </div>
                    <h3 style="margin: 0 0 6px;">Valentina Urriani</h3>
                    <p style="margin: 0 0 6px; opacity: 0.7; font-size: 0.85rem;">Presidente</p>
                    <p style="margin: 0 0 14px; font-size: 0.82rem; font-style: italic; opacity: 0.6;">"Lo sport come scuola di vita"</p>
                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 10px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; font-size: 0.78rem; color: var(--c-accent);">dal 2015</span>
                </div>

            </div>

            <!-- Dirigenti -->
            <h4 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin: 40px 0 20px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-size: 1.3rem; letter-spacing: 0.05em; text-transform: uppercase;">
                Dirigenti
            </h4>
            <div class="staff-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px;">

                <div class="glass-card staff-card" style="text-align: center; padding: 28px 20px;">
                    <div class="staff-image" style="width: 130px; height: 130px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 2px solid rgba(255,10,46,0.30); margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <svg width="70" height="70" viewBox="0 0 24 24" fill="none"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.5"/></svg>
                    </div>
                    <h3 style="margin: 0 0 6px;">Alessia Travaglini</h3>
                    <p style="margin: 0 0 6px; opacity: 0.7; font-size: 0.85rem;">Ex Giocatrice di Serie A</p>
                    <p style="margin: 0 0 14px; font-size: 0.82rem; opacity: 0.6;">Responsabile</p>
                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 10px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; font-size: 0.78rem; color: var(--c-accent);">dal 2025</span>
                </div>

                <div class="glass-card staff-card" style="text-align: center; padding: 28px 20px;">
                    <div class="staff-image" style="width: 130px; height: 130px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 2px solid rgba(255,10,46,0.30); margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <svg width="70" height="70" viewBox="0 0 24 24" fill="none"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.5"/></svg>
                    </div>
                    <h3 style="margin: 0 0 6px;">Daniele Gagliardi</h3>
                    <p style="margin: 0 0 6px; opacity: 0.7; font-size: 0.85rem;">Scoutman</p>
                    <p style="margin: 0 0 14px; font-size: 0.82rem; opacity: 0.6;">Responsabile</p>
                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 10px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; font-size: 0.78rem; color: var(--c-accent);">dal 2025</span>
                </div>

                <div class="glass-card staff-card" style="text-align: center; padding: 28px 20px;">
                    <div class="staff-image" style="width: 130px; height: 130px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 2px solid rgba(255,10,46,0.30); margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <svg width="70" height="70" viewBox="0 0 24 24" fill="none"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.5"/></svg>
                    </div>
                    <h3 style="margin: 0 0 6px;">Capriotti Matteo</h3>
                    <p style="margin: 0 0 6px; opacity: 0.7; font-size: 0.85rem;">Scoutman & Developer</p>
                    <p style="margin: 0 0 14px; font-size: 0.82rem; opacity: 0.6;">Responsabile</p>
                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 10px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; font-size: 0.78rem; color: var(--c-accent);">dal 2025</span>
                </div>

            </div>

            <!-- Allenatori -->
            <h4 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin: 40px 0 20px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-size: 1.3rem; letter-spacing: 0.05em; text-transform: uppercase;">
                Allenatori
            </h4>

            <p style="opacity: 0.5; font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 12px;">U18 · Prima Divisione</p>
            <div class="staff-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-bottom: 32px;">
                <div class="glass-card staff-card" style="text-align: center; padding: 28px 20px;">
                    <div class="staff-image" style="width: 130px; height: 130px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 2px solid rgba(255,10,46,0.30); margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <svg width="70" height="70" viewBox="0 0 24 24" fill="none"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.5"/></svg>
                    </div>
                    <h3 style="margin: 0 0 6px;">Giancarlo D'Angelo</h3>
                    <p style="margin: 0 0 6px; opacity: 0.7; font-size: 0.85rem;">Allenatore · Direttore Tecnico</p>
                    <p style="margin: 0 0 14px; font-size: 0.82rem; opacity: 0.6;">U18 / Prima Divisione</p>
                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 10px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; font-size: 0.78rem; color: var(--c-accent);">dal 2021</span>
                </div>
            </div>

            <p style="opacity: 0.5; font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 12px;">U16 White · Seconda Divisione White</p>
            <div class="staff-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-bottom: 32px;">
                <div class="glass-card staff-card" style="text-align: center; padding: 28px 20px;">
                    <div class="staff-image" style="width: 130px; height: 130px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 2px solid rgba(255,10,46,0.30); margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <svg width="70" height="70" viewBox="0 0 24 24" fill="none"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.5"/></svg>
                    </div>
                    <h3 style="margin: 0 0 6px;">Emanuela Cottilli</h3>
                    <p style="margin: 0 0 6px; opacity: 0.7; font-size: 0.85rem;">Allenatrice U16 White</p>
                    <p style="margin: 0 0 14px; font-size: 0.82rem; opacity: 0.6;">Specialista nella formazione giovanile</p>
                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 10px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; font-size: 0.78rem; color: var(--c-accent);">dal 2019</span>
                </div>
            </div>

            <p style="opacity: 0.5; font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 12px;">U16 Blu · Seconda Divisione Blu</p>
            <div class="staff-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px;">
                <div class="glass-card staff-card" style="text-align: center; padding: 28px 20px;">
                    <div class="staff-image" style="width: 130px; height: 130px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 2px solid rgba(255,10,46,0.30); margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <svg width="70" height="70" viewBox="0 0 24 24" fill="none"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.5"/></svg>
                    </div>
                    <h3 style="margin: 0 0 6px;">Emanuele Torquati</h3>
                    <p style="margin: 0 0 6px; opacity: 0.7; font-size: 0.85rem;">Allenatore U16 Blu</p>
                    <p style="margin: 0 0 14px; font-size: 0.82rem; opacity: 0.6;">Formazione Giovanile</p>
                    <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 2px 10px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 700; font-size: 0.78rem; color: var(--c-accent);">dal 2022</span>
                </div>
            </div>

        </div>
    `,

    // ATLETI - VERSIONE SENZA SCRIPT INTERNO
    atleti: () => `
        <div class="glass-card-atleti">
            <h1 style="text-align: center; margin-bottom: 20px;">I Nostri Atleti</h1>

            <!-- FILTRI CATEGORIE -->
            <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 40px; flex-wrap: wrap;">
                <button class="liquid-bubble athlete-filter active" data-cat="all">Tutti</button>
                <button class="liquid-bubble athlete-filter" data-cat="prima">Prima Divisione / Under 18</button>
                <button class="liquid-bubble athlete-filter" data-cat="under16w">Seconda Divisione White / Under 16 White</button>
                <button class="liquid-bubble athlete-filter" data-cat="under16b">Seconda Divisione Blu / Under 16 Blu</button>
            </div>

            <!-- PRIMA DIVISIONE / UNDER 18 -->
            <div class="athlete-category" data-category="prima" style="display: block;">
                <h4 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin: 10px 0 24px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-size: 1.3rem; letter-spacing: 0.05em; text-transform: uppercase;">
                    Prima Divisione · Under 18
                </h4>
                <div class="athlete-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 20px;">

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/prima div/giorgia.png" alt="Giorgia Tesse" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Giorgia Tesse</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Palleggiatrice</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#2</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/prima div/pacioni.png" alt="Martina Pacioni" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Martina Pacioni</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Centrale (K)</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#3</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/prima div/elisa.png" alt="Elisa Simonetto" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Elisa Simonetto</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Opposto</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#4</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/prima div/perla.png" alt="Perla Ciaffiardoni" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Perla Ciaffiardoni</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Libero (L2)</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#5</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/prima div/ilaria_diago.png" alt="Ilaria Di Agostino" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Ilaria Di Agostino</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Schiacciatrice</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#6</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/prima div/saluti.png" alt="Francesca Saluti" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Francesca Saluti</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Schiacciatrice</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#7</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/prima div/giorgia (2).png" alt="Giorgia Schiantabasti" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Giorgia Schiantabasti</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Schiacciatrice</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#8</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/prima div/giulia_dercoli.png" alt="Giulia D'ercoli" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Giulia D'ercoli</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Centrale</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#9</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/prima div/giulia.png" alt="Giulia Ferretti" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Giulia Ferretti</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Libero (L3)</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#10</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/prima div/giada.png" alt="Giada Matteucci" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Giada Matteucci</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Palleggiatrice</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#11</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/prima div/rossi.png" alt="Ilaria Rossi" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Ilaria Rossi</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Opposto</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#12</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/prima div/greta.png" alt="Greta Amatucci" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Greta Amatucci</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Schiacciatrice</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#13</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/prima div/alessia.png" alt="Alessia Giordani" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Alessia Giordani</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Schiacciatrice</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#14</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/prima div/matilde.png" alt="Matilde Filantropi" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Matilde Filantropi</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Libero (L1)</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#15</span>
                    </div>

                </div>
            </div>

            <!-- SECONDA DIVISIONE WHITE / UNDER 16 WHITE -->
            <div class="athlete-category" data-category="under16w" style="display: block;">
                <h4 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin: 40px 0 24px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-size: 1.3rem; letter-spacing: 0.05em; text-transform: uppercase;">
                    Seconda Divisione White · Under 16 White
                </h4>
                <div class="athlete-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 20px;">

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/u16W/asya.png" alt="Asya Bruni" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Asya Bruni</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Opposto</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#1</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/u16W/ilaria.png" alt="Ilaria Schiavi" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Ilaria Schiavi</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Schiacciatrice</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#2</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/u16W/chiara.png" alt="Chiara D'Intino" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Chiara D'Intino</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Centrale</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#3</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/u16W/benedetta.png" alt="Benedetta Capriotti" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Benedetta Capriotti</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Centrale</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#4</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/u16W/saraS.png" alt="Sara Simonetti" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Sara Simonetti</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Schiacciatrice</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#5</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/u16W/giorgia.png" alt="Giorgia Cicconi" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Giorgia Cicconi</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Centrale</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#6</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/u16W/allegra.png" alt="Allegra Maloni" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Allegra Maloni</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Libero (L1)</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#7</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/u16W/arianna.png" alt="Arianna Gagliardi" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Arianna Gagliardi</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Palleggiatrice (K)</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#8</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/u16W/victoria.png" alt="Victoria Coccia" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Victoria Coccia</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Opposto</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#9</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/u16W/noemi.png" alt="Noemi Traini" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Noemi Traini</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Palleggiatrice</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#10</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/u16W/diletta.png" alt="Diletta Angellotti" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Diletta Angellotti</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Schiacciatrice</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#11</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/u16W/anna.png" alt="Anna Corradetti" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Anna Corradetti</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Opposto</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#12</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/u16W/cecilia.png" alt="Cecilia Marinelli" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Cecilia Marinelli</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Schiacciatrice</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#13</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/u16W/saraM.png" alt="Sara Mestichelli" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Sara Mestichelli</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Libero (L2)</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#14</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20);">
                            <img src="./immagini/atlete/u16W/matilde.png" alt="Matilde Duro" style="width: auto; height: 100%; border-radius: 3px;">
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Matilde Duro</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Centrale</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#15</span>
                    </div>

                </div>
            </div>

            <!-- SECONDA DIVISIONE BLU / UNDER 16 BLU -->
            <div class="athlete-category" data-category="under16b" style="display: block;">
                <h4 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin: 40px 0 24px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-size: 1.3rem; letter-spacing: 0.05em; text-transform: uppercase;">
                    Seconda Divisione Blu · Under 16 Blu
                </h4>
                <div class="athlete-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 20px;">

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20); background: rgba(255,255,255,0.06);">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.4"/></svg>
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Emma Rossi</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Palleggiatrice</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#2</span>
                    </div>

                    <div class="glass-card athlete-card" style="text-align: center; padding: 20px 16px;">
                        <div style="width: 140px; height: 140px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; border: 1px solid rgba(255,10,46,0.20); background: rgba(255,255,255,0.06);">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" fill-opacity="0.4"/></svg>
                        </div>
                        <h3 style="margin: 0 0 4px; font-size: 0.95rem;">Giorgio Bianchi</h3>
                        <p style="margin: 0 0 8px; opacity: 0.7; font-size: 0.82rem;">Schiacciatrice</p>
                        <span style="background: rgba(255,10,46,0.15); border: 1px solid rgba(255,10,46,0.30); border-radius: 3px; padding: 1px 8px; font-family: 'Barlow Condensed', sans-serif; font-style: italic; font-weight: 800; font-size: 0.85rem; color: var(--c-accent);">#6</span>
                    </div>

                </div>
            </div>

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
        <img src="immagini/squadre/u16blu.jpeg" alt="Under 16 Blu" style="width: 100%; border-radius: 10px; margin-top: 20px;">
    `,
    
    // CONTATTI
    contatti: () => `
        <div class="glass-card">
            <h1 style="text-align: center; margin-bottom: 6px;">Contatti</h1>
            <p style="text-align: center; opacity: 0.6; margin-bottom: 30px;">Siamo qui per rispondere a ogni tua domanda.</p>

            <div style="display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; align-items: flex-start;">

                <div style="flex: 0 1 calc(33.333% - 16px); min-width: 180px;">
                    <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                        Riferimenti
                    </h5>
                    <p style="margin: 0 0 8px; font-size: 0.9rem;">
                        <span style="opacity: 0.6; font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; text-transform: uppercase; letter-spacing: 0.08em; display: block;">Email</span>
                        info@incontravolley.it
                    </p>
                    <p style="margin: 0; font-size: 0.9rem;">
                        <span style="opacity: 0.6; font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; text-transform: uppercase; letter-spacing: 0.08em; display: block;">Telefono</span>
                        123 4567890
                    </p>
                </div>

                <div style="flex: 0 1 calc(33.333% - 16px); min-width: 180px;">
                    <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                        Sede
                    </h5>
                    <p style="margin: 0 0 8px; font-size: 0.9rem;">
                        <span style="opacity: 0.6; font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; text-transform: uppercase; letter-spacing: 0.08em; display: block;">Indirizzo</span>
                        Via Adige, 35<br>Castel di Lama (AP)
                    </p>
                    <p style="margin: 0; font-size: 0.9rem;">
                        <span style="opacity: 0.6; font-size: 0.78rem; font-family: 'Barlow Condensed', sans-serif; font-style: italic; text-transform: uppercase; letter-spacing: 0.08em; display: block;">Orari segreteria</span>
                        Lun/Mer: 18:30 – 20:00<br>Venerdì: 18:00 – 20:00
                    </p>
                </div>

                <div style="flex: 0 1 calc(33.333% - 16px); min-width: 180px;">
                    <h5 style="border-bottom: 2px solid var(--c-accent); padding-bottom: 4px; margin-bottom: 10px;">
                        Social
                    </h5>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <a href="https://www.instagram.com/incontra_volley_castel_di_lama/" target="_blank" class="liquid-bubble" style="text-align: center;">Instagram</a>
                        <a href="https://www.facebook.com/InConTraVolley" target="_blank" class="liquid-bubble" style="text-align: center;">Facebook</a>
                    </div>
                </div>

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
        <h1>Sponsor</h1>
        <p>I partner che sostengono la nostra società.</p>
        <div class="glass-card-sponsor" style="text-align: center; padding: 20px; margin-top: 30px; width: 50%; margin-left: 25%">
            <a href="https://g3machinery.com" target="_blank">
                <img src="./immagini/sponsor/g3.png" alt="Sponsor 1" style="max-width: 100%; height: auto;">
            </a>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px; ">
            <div class="glass-card-sponsor" style="text-align: center;">
                <a href="https://morettidesign.it" target="_blank">
                    <img src="./immagini/sponsor/moretti.png" alt="Sponsor 2" style="max-width: 100%; height: auto; margin-top: 2%; border-radius: 10px">
                </a>
            </div>
            <div class="glass-card-sponsor" style="text-align: center;">
                <img src="./immagini/sponsor/caioni_costruzioni.png" alt="Sponsor 3" style="max-width: 100%; height: auto; margin-top: 8%">
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
                            style="width: 100%; padding: 12px 20px; border-radius: 3px; border: none; background: rgba(255,255,255,0.2); color: white; font-size: 16px;">
                    </div>
                    
                    <div style="margin-bottom: 20px; position: relative;">
                        <label style="display: block; margin-bottom: 5px;">Password</label>
                        <div style="position: relative;">
                            <input type="password" id="login-password" placeholder="Password" 
                                style="width: 100%; padding: 12px 20px; border-radius: 3px; border: none; background: rgba(255,255,255,0.2); color: white; font-size: 16px; padding-right: 50px;">
                            <button id="toggle-password" type="button" 
                                style="position: absolute; right: 0px; top: 47%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 20px; color: rgba(255,255,255,0.7); padding: 5px;">
                                🔒
                            </button>
                        </div>
                    </div>
                    
                    <button id="login-button" class="liquid-bubble" style="width: 100%; padding: 14px; font-size: 16px;">Accedi</button>
                </div>
                
                <div id="login-message" style="margin-top: 20px; color: #ff6b6b; text-align: center; display: none;"></div>
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
                    <div style="width: 100%; height: 180px; border-radius: 5px; display: flex; align-items: center; justify-content: center; margin-top: 15px;">
                        <iframe style="width: 100%; height: 100%; border-radius: 5px;""
                            src="https://www.youtube.com/embed/FpK0E8_aykM"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
                
                <div class="glass-card">
                    <h3>Partita del 09/02/2026</h3>
                    <p>Prima Divisione vs Team Y</p>
                    <div style="background: rgba(0,0,0,0.3); height: 180px; border-radius: 5px; display: flex; align-items: center; justify-content: center; margin-top: 15px;">
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
                    <div style="background: rgba(0,0,0,0.3); height: 180px; border-radius: 5px; display: flex; align-items: center; justify-content: center; margin-top: 15px;">
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
                    <div style="background: rgba(0,0,0,0.3); height: 180px; border-radius: 5px; display: flex; align-items: center; justify-content: center; margin-top: 15px;">
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

    if (e.target && e.target.id === 'show-more-btn') {
        const hiddenImages = document.querySelectorAll('.gallery-hidden');
        if (!hiddenImages.length) return;
        hiddenImages.forEach((img, i) => {
            img.classList.remove('gallery-hidden');
            img.classList.add('gallery-hidden-now');
            // animazione a cascata
            img.style.animationDelay = (i * 0.04) + 's';
            img.classList.add('gallery-item-in');
        });
        e.target.style.display = 'none';
        const lessBtn = document.getElementById('show-less-btn');
        if (lessBtn) lessBtn.style.display = '';
        if (typeof GLightbox !== 'undefined') {
            GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true,
                zoomable: true, draggable: true, download: true,
                width: '90vw', height: '90vh' });
        }
    }

    if (e.target && e.target.id === 'show-less-btn') {
        const shownImages = document.querySelectorAll('.gallery-hidden-now');
        if (!shownImages.length) return;
        shownImages.forEach(img => {
            img.classList.add('gallery-hidden');
            img.classList.remove('gallery-hidden-now');
            img.classList.remove('gallery-item-in');
            img.style.animationDelay = '';
        });
        e.target.style.display = 'none';
        const moreBtn = document.getElementById('show-more-btn');
        if (moreBtn) moreBtn.style.display = '';
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
