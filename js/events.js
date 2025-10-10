// events.js
import { addNote } from "./storage.js";
import { renderNotes } from "./ui.js";

// Event Listener'ları grup olarak tutma
export const setupEventListeners = () => {
    // Etkileşileme girilecek HTML öğelerini tanımlama
    const addNoteBtn = document.querySelector("#addNoteBtn");
    const noteTitle = document.querySelector("#noteTitle");
    const noteContent = document.querySelector("#noteContent");
    
    // Not Ekleme Event'i
    addNoteBtn.addEventListener("click",() => {

        // Başlık ve İçerik bilgisini alma
        const title = noteTitle.value.trim();
        const content = noteContent.value.trim();

        // Başlık ve İçeriğin boş olmamasını kontrol etme
        if (title && content) {
            // Başlık ve İçeriği localStorage'e kaydetme
            addNote({title,content});
            // localStorage'e kayıt edilen notların ekranda güncellenmesi
            renderNotes();
        } else {
            alert("Başlık ve içerik boş bırakılamaz.");
        }

    });
};

