const cookie = document.getElementById("cookie");
const countText = document.getElementById("count-text");

let count = 0;

function updateCountText() {
    countText.textContent = count;
};

// Daten im Browser speichern
function save() {
    localStorage.setItem('count', count);
}

// gespeicherte Daten laden
function load() {
    const savedCount = localStorage.getItem('count');
    if (savedCount !== null) {      // überprüfen, ob ein gespeicherter Wert vorhanden ist (weil die Scheiße sonst abstürzt)
        count = Number(savedCount); // gespeicherten Text wieder in eine Zahl umwandeln (localStorage gibt es als Text zurück, aber wir brauchen Zahl)
    }
    updateCountText();
}

function add(e) {
    count++;            // genau wie count = count + 1
    updateCountText();
    save();

    // Animation
    const popup = document.createElement("div");
    popup.classList.add("popup");               // fügt die Klasse "popup" zum Element hinzu (Klasse ist in CSS definiert)
    popup.textContent = "+1";                   // Textinhalt des Elements
    popup.style.left = `${e.clientX - 8}px`;    // x-Koordinaten des Klick-Events (8px nach links versetzt)
    popup.style.top = `${e.clientY - 16}px`;    // y-Koordinaten des Klick-Events (16px nach oben versetzt)

    document.body.appendChild(popup);           // fügt das Element als Kind von body hinzu (damit es im Dokument sichtbar ist)
    setTimeout(() => popup.remove(), 800);      // nach 800ms löschen
};

// beim Starten direkt laden
load();