// events.js
import { addNote, deleteNote, getNotes } from "./storage.js";
import { openEditModal, renderNotes } from "./ui.js";

// Event Listener'ları grup olarak tutma
export const setupEventListeners = () => {
    // Etkileşileme girilecek HTML öğelerini tanımlama
    const addNoteBtn = document.querySelector("#addNoteBtn");
    const noteTitle = document.querySelector("#noteTitle");
    const noteContent = document.querySelector("#noteContent");
    const noteList = document.querySelector("#noteList");

    // Not Ekleme Event'i
    addNoteBtn.addEventListener("click", () => {

        // Başlık ve İçerik bilgisini alma
        const title = noteTitle.value.trim();
        const content = noteContent.value.trim();

        // Başlık ve İçeriğin boş olmamasını kontrol etme
        if (title && content) {
            // Başlık ve İçeriği localStorage'e kaydetme
            addNote({ title, content });
            // localStorage'e kayıt edilen notların ekranda güncellenmesi
            renderNotes();
            // Not eklediğim Başlık ve İçerik alanlarının temizlenmesi
            noteTitle.value = "";
            noteContent.value = "";
        } else {
            alert("Başlık ve içerik boş bırakılamaz.");
        }

    });

    // Enter tuşuyla ekleme
    noteContent.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            addNoteBtn.click();
        }
    });

    // Ekle ve Düzenle Butonlarının Event'i
    noteList.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        // Tıklanan öğeye yakın bir buton yoksa sonraki kodları çalıştırma DUR!
        if (!btn) return;
        // Tıklanan butona tanımlı data-action'a ait action değerine göre kodları çalıştırma
        const action = btn.dataset.action;
        const index = Number(btn.dataset.index);
        if (action === "delete") {
            deleteNote(index);
            renderNotes();
        } else if (action === "edit") {
            const note = getNotes()[index];
            openEditModal(note, index);
        }
    });
};

