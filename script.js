function richiediFile() {
    let mese = document.getElementById("mese").value;
    let squadra = document.getElementById("squadra").value;
    let messaggio = document.getElementById("messaggio");
    let downloadButton = document.getElementById("downloadButton");
    let progressContainer = document.getElementById("progress-container");
    let progressBar = document.getElementById("progress-bar");
    let progressText = document.getElementById("progress-text");

    messaggio.innerHTML = "Generazione in corso...";
    progressContainer.style.display = "block"; // Mostra la barra di avanzamento
    progressBar.style.width = "0%"; // Inizializza la barra
    progressText.innerHTML = "0%"; // Inizializza la percentuale

    downloadButton.style.display = "none"; // Nasconde il pulsante download

    // Simuliamo una barra di avanzamento (perché la percentuale reale richiede un backend che supporta questa funzionalità)
    let percentuale = 0;
    let progressInterval = setInterval(function () {
        percentuale += 5;
        progressBar.style.width = percentuale + "%";
        progressText.innerHTML = percentuale + "%";

        if (percentuale >= 100) {
            clearInterval(progressInterval); // Ferma la simulazione

            // Ora inviamo la richiesta al backend
            fetch("https://script.google.com/macros/s/TUO_DEPLOY_URL/exec?mese=" + mese + "&squadra=" + squadra)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        messaggio.innerHTML = "File pronto!";
                        downloadButton.href = data.fileUrl;
                        downloadButton.style.display = "inline-block"; // Mostra il pulsante di download
                    } else {
                        messaggio.innerHTML = "Errore: " + data.error;
                    }
                })
                .catch(error => {
                    messaggio.innerHTML = "Errore nella richiesta.";
                });
        }
    }, 100); // La barra di avanzamento aumenta ogni 100 ms
}