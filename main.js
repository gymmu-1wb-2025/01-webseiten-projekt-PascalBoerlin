console.log("Hello World!!!"); // Hello World!!! in der Konsole

let counter = 0; // Zähler für die neuen Elemente

// Funktion für neues ein neues Absatz-Element p. Element wird zu plus einen Zähler, wird in main eingefügt
function createNewElement() {
  let newElement = document.createElement("p");

  newElement.textContent = "Element " + counter;

  let mainElement = document.querySelector("main");
  mainElement.appendChild(newElement);
}

// Titel Element auswählen als Start
let titleElement = document.querySelector("#Start");

// Der originale Text wird abgespeichert, damit man ihn wiederverwenden kann und der nicht ersetzt wird.
let originalTitle = titleElement.textContent;

// Zähler für Klicks
let count = 0;

// Funktion um den Zähler zu erhöhen
function increaseCount() {
  // Zähler um 1 erhöhen
  count = count + 1;

  // Titel zeigt zB 5 an
  titleElement.textContent = originalTitle + " (" + count + ")";
}

// Beim Drücken der Taste wird der Zähler erhöht
document.addEventListener("keydown", increaseCount);

// Warter auf den Knopfdruck, erhöht beim Knopfdruck
titleElement.addEventListener("click", increaseCount);

// Um wie viel es erhöht wird (1 Sekunde), da alle 1000ms
setInterval(increaseCount, 1000);

// CSS-Farbe ändern
function changeColor(color) {
  document.documentElement.style.setProperty("--section-color", color);
}

// Lädt die json-Datei
fetch("data.json")
  // Die Antwort wird in ein Javascript Teil umgewandelt
  .then((response) => response.json())
  // Mit Daten arbeiten
  .then((data) => {
    // Durch Objekte gehen
    data.forEach((item) => {
      // Suche nach der ID
      const section = document.getElementById(item.id);
      // Falls es die ID nicht gibt, bricht er ab
      if (!section) return;

      // h2 Überschrift
      const h2 = document.createElement("h2");
      // Setzt Titel als Text der Überschrift
      h2.textContent = item.titel;
      // Fügt die Überschrift ein
      section.appendChild(h2);
      // Geht durch die Texte
      item.text.forEach((text) => {
        // Absatz-Element wird erstellt p
        const p = document.createElement("p");
        // Text aus json
        p.textContent = text;
        // Absatz eingefügt
        section.appendChild(p);
      });
    });
  });
