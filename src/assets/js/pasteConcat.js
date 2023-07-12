// path to text
const txtFilePath = 'concat-result.txt';

// find the txt div
const txtContentElement = document.getElementById('txt-content');

// load txt file content and check if it changed
function loadAndUpdateTxtContent() {
  fetch(txtFilePath)
    .then(response => response.text())
    .then(txtContent => {
      if (txtContentElement.innerText !== txtContent) {
        // file content changed -> write it into the txt div
        txtContentElement.innerText = txtContent;
      }
    })
    .catch(error => {
      console.error('Fehler beim Laden der TXT-Datei:', error);
    });
}

// intervall
const refreshInterval = 5000;

loadAndUpdateTxtContent();

// periodic refreshing of the content
setInterval(loadAndUpdateTxtContent, refreshInterval);
