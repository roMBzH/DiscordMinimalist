/**
 * @name Minimalist Theme Plugin
 * @author roM
 * @description coming soon
 * @version 0.0.1
 */

module.exports = meta => {
    
    
    
    // REFORMAT CHANNEL NAME
    const channel_name = () => {
    const names = document.querySelectorAll('.name_d8bfb3'); // Sélectionne tous les éléments

    names.forEach(name => {
        let text = name.textContent;  // Récupère le texte actuel de chaque élément

        // Remplace tous les tirets par des espaces
        text = text.replace(/-/g, ' '); 

        // Fonction pour capitaliser la première lettre de chaque mot
        text = text.split(' ').map(word => {
            // Vérifier si le mot est vide
            if (word.trim() === '') return word;

            // Si le mot contient une emoji, le laisser tel quel
            if (word.match(/[\p{Emoji}]/gu)) {
                return word; // Ne pas modifier les mots contenant des emojis
            }

            // Capitalise la première lettre et met le reste en minuscule
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');

        // Met à jour le texte de chaque élément
        name.textContent = text; 
        console.log("Nom du canal modifié :", name.textContent);
    });
    };


    // TOGGLE SERVER LIST BUTTON 
    const server_toggle_button = () => {    
        const app_body = document.querySelector('.container_a4d4d9');
        const server_list = document.querySelector('.container_a4d4d9 .guilds_a4d4d9');
        const channel_list = document.querySelector('.container_a4d4d9 .sidebar_a4d4d9');
        
        const toggle_btn = document.createElement('div');
        const toggle_top_bar = document.createElement('div');
        const toggle_middle_bar = document.createElement('div');
        const toggle_bottom_bar = document.createElement('div');
        
        toggle_btn.className = 'server-toggle-button';
        app_body.appendChild(toggle_btn);
        toggle_btn.appendChild(toggle_top_bar);
        toggle_btn.appendChild(toggle_middle_bar);
        toggle_btn.appendChild(toggle_bottom_bar);

        // OPEN SERVER SLIDE ON TOGGEL
        toggle_btn.addEventListener('click', () => {
            if (server_list.style.width === '72px'){
                app_body.style.gridTemplateColumns = '30px 0px 1fr';
                server_list.style.width = '0px';
                channel_list.style.borderRadius = "8px 0px 0px 0px";
            } else {
                app_body.style.gridTemplateColumns = '30px 82px 1fr';
                server_list.style.width = '72px';
                server_list.style.marginRight = '10px';
                channel_list.style.borderRadius = '0px 0px 0px 0px';
            }
        });
 
    };
    /* ------------------------------------------- */    
    
  


    
    /* ------------------------------------------- */
    
    /** OBSERVER
    *   
    *
    */
    const observer = new MutationObserver((mutations) => {
        console.log("Changements détectés :", mutations);
        channel_name(); // Réappliquez vos modifications de nom de canal
        console.log("Observer en cours d'écoute des changements dans le DOM.");
    });
    /* ------------------------------------------- */
    
    return {
        start: () => {
            channel_name();
            server_toggle_button();
            observer.observe(document.body, { childList: true, subtree: true });
        },
        stop: () => {},
        getSettingsPanel: () => {}
    };
};


