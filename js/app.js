// app.js
import { setupEventListeners } from "./events.js";
import { renderNotes } from "./ui.js";

// Uygulamayı başlatma
document.addEventListener("DOMContentLoaded",() => {
    // Event Listener'ları yükleme
    setupEventListeners();
    // Varsa notların görüntülenmesi
    renderNotes();
});

