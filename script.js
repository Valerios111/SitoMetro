// Funzione per formattare la data nel formato gg/mm/aaaa
function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1; // I mesi in JavaScript partono da 0
    var year = date.getFullYear();
    
    // Aggiungi lo zero a sinistra se il giorno o il mese sono inferiori a 10
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    
    return day + '/' + month + '/' + year;
}

// Funzione per controllare se una data è un giorno lavorativo
function isWeekday(date) {
    // Controlla se il giorno è un sabato (6) o domenica (0)
    var day = date.getDay();
    return day !== 0 && day !== 6; // Restituisce true se è un giorno lavorativo
}

// Funzione per trovare il primo giorno lavorativo del mese
function getFirstWeekdayOfMonth(year, month) {
    var date = new Date(year, month, 1); // Imposta la data al primo giorno del mese

    // Trova il primo giorno lavorativo (saltando sabato e domenica)
    while (!isWeekday(date)) {
        date.setDate(date.getDate() + 1); // Aggiungi un giorno finché non trovi un giorno lavorativo
    }

    return formatDate(date); // Restituisce la data formattata
}

// Funzione per gestire la selezione del mese e della squadra
function updateDate() {
    var month = document.getElementById("monthSelect").value; // Ottieni il mese selezionato
    var team = document.getElementById("teamSelect").value; // Ottieni la squadra selezionata

    // Anno fisso 2025
    var year = 2025;

    // Calcola il primo giorno lavorativo del mese selezionato
    var firstWeekday = getFirstWeekdayOfMonth(year, month - 1); // Il mese è 0-based (0=gennaio, 1=febbraio, ...)

    // Trova la cella A8 in base alla squadra
    var sheet = document.getElementById(team + "Sheet"); // Supponiamo che i fogli siano divisi con id "squadra1Sheet", "squadra2Sheet", ecc.
    var cellA8 = sheet.querySelector('.a8'); // La cella A8 dovrebbe avere una classe .a8

    // Aggiorna la cella A8 con il primo giorno lavorativo
    if (cellA8) {
        cellA8.innerText = firstWeekday; // Imposta il valore di A8
    }

    // Eventualmente, puoi eseguire altre operazioni, come fare una richiesta per scaricare il file
    console.log("Data aggiornata: " + firstWeekday);
}

// Gestisci la selezione del mese e della squadra
document.getElementById("monthSelect").addEventListener("change", updateDate);
document.getElementById("teamSelect").addEventListener("change", updateDate);
