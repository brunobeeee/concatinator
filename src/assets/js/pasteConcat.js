// Pfad zur TXT-Datei
const txtFilePath = 'concat-result.txt';

// HTML-Element, in das der Inhalt der TXT-Datei eingefügt werden soll
const txtContentElement = document.getElementById('txt-content');

// Funktion zum Laden und Aktualisieren des Dateiinhalts
function loadAndUpdateTxtContent() {
  fetch(txtFilePath)
    .then(response => response.text())
    .then(txtContent => {
      if (txtContentElement.innerText !== txtContent) {
        // Der Dateiinhalt hat sich geändert, aktualisiere das HTML-Element
        txtContentElement.innerText = txtContent;
      }
    })
    .catch(error => {
      console.error('Fehler beim Laden der TXT-Datei:', error);
    });
}

// Intervall für die periodische Überprüfung in Millisekunden (z.B. alle 5 Sekunden)
const refreshInterval = 5000;

// Initialer Aufruf der Funktion
loadAndUpdateTxtContent();

// Periodische Aktualisierung des Dateiinhalts
setInterval(loadAndUpdateTxtContent, refreshInterval);
