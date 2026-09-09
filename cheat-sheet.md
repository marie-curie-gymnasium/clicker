# HTML

<details>
<summary><b>Elemente</b></summary>

* `<h1>...</h1>`: Hauptüberschrift.
* `<p>...</p>`: Normaler Textabsatz.
* `<div>...</div>`: Inhaltsleerer Container zur Gruppierung für Layout-Zwecke. 
* `<button>...</button>`: Klickbarer Button.
* `<img>`: Zeigt Bilder. Braucht keinen End-Tag. Beispiel: `<img src="pfad.png" alt="Beschreibung">`.

</details>

<details>
<summary><b>Attribute</b></summary>

* `id="name"`: Einmaliger Name. Darf nur exakt ein einziges Mal im gesamten Dokument vergeben werden.
* `class="name"`: Gruppenname. Kann beliebig vielen Elementen gegeben werden, um sie alle gleich zu stylen.

</details>

# CSS

<details>
<summary><b>Selektoren</b></summary>

* `body { ... }`: Wählt alle Elemente dieses Typs aus.
* `#name { ... }`: Wählt das Element mit der entsprechenden ID aus.
* `.name { ... }`: Wählt alle Elemente mit der entsprechenden Klasse aus.
* `:hover`: Zustand, wenn die Maus über dem Element ist.
* `:active`: Zustand im Moment des Klicks.

</details>

<details>
<summary><b>Layout (Flexbox)</b></summary>

* `display: flex;`: Aktiviert das Flexbox-Layout für dieses Element.
* `flex-direction: column;`: Ordnet den Inhalt von oben nach unten an.
* `justify-content: center;`: Zentriert den Inhalt auf der Hauptachse.
* `align-items: center;`: Zentriert den Inhalt auf der Querachse.

</details>

<details>
<summary><b>Eigenschaften</b></summary>

* `width` / `height`: Breite und Höhe (z.B. `250px`).
* `background-color`: Hintergrundfarbe.
* `border: none;`: Entfernt Standard-Ränder.
* `border-radius: 50%;`: Rundet Ecken ab (50% macht ein Quadrat zum Kreis).
* `font-size` / `font-weight`: Schriftgröße und Schriftstärke.
* `cursor: pointer;`: Ändert den Mauszeiger zu einer Hand.

</details>

<details>
<summary><b>Animationen</b></summary>

* `transition: all 0.2s;`: Übergänge dauern 0.2 Sekunden, statt sofort zu passieren.
* `transform: scale(1.05);`: Skaliert (zoomt) das Element um 5%.
* `transform: translateY(-50px);`: Verschiebt das Element um 50 Pixel auf der Y-Achse nach oben.
* `opacity: 0;`: Setzt die Sichtbarkeit auf 0 (unsichtbar).

</details>

# JavaScript

<details>
<summary><b>Variablen</b></summary>

* `let name = ...`: Deklariert eine Variable, deren Wert später geändert werden kann.
* `const name = ...`: Deklariert eine Konstante, deren Wert nicht mehr überschrieben werden darf. Wird oft für HTML-Elemente genutzt.

</details>

<details>
<summary><b>Funktionen</b></summary>

* `function name() { ... }`: Definiert einen Code-Block, der erst ausgeführt wird, wenn er aufgerufen wird (`name();`).

</details>

<details>
<summary><b>DOM-Interaktion</b></summary>

* `document.getElementById("id")`: Sucht und speichert ein HTML-Element anhand seiner ID.
* `element.textContent = "Text"`: Verändert den Text innerhalb eines HTML-Elements.
* `document.createElement("div")`: Erstellt ein neues HTML-Element im Speicher.
* `element.classList.add("klasse")`: Fügt einem Element eine CSS-Klasse hinzu.
* `document.body.appendChild(element)`: Fügt ein Element sichtbar in das Dokument (hier in den Body) ein.

</details>

<details>
<summary><b>Sonstiges</b></summary>

* `localStorage.setItem('key', wert)`: Speichert Daten permanent im Browser.
* `localStorage.getItem('key')`: Lädt gespeicherte Daten aus dem Browser.
* `Number(text)`: Konvertiert einen Text in eine Zahl.
* `setTimeout(funktion, zeit)`: Führt Code nach Ablauf einer bestimmten Zeit (in Millisekunden) aus.
* `e.clientX` / `e.clientY`: Gibt die X- und Y-Koordinaten eines Events (z.B. Mausklick) zurück.

</details>