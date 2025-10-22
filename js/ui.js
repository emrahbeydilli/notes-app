// ui.js
import { getNotes, updateNote } from "./storage.js";

// Eklenecek not listesinin HTML kodundaki yerinin tanımlanması
const noteList = document.querySelector("#noteList");

export const renderNotes = () => {
    // Varsa nodeList ID'sine sahip ul etiketinin innerHTML'ini temizleme
    noteList.innerHTML = "";

    // LocalStorage'deki notları okuma
    const notes = getNotes();

    // Notların ekranda listeler halinde görüntülenmesi
    notes.forEach((note, index) => {
        // ES6 Object Destructuring (Nesneyi değişkenlere ayırma)
        const { title, content } = note;
        const div = document.createElement("div");
        div.className = "card mb-2 p-3 bg-light"
        div.innerHTML = `
            <div class="d-flex justify-content-between">
                <h5>${title}</h5>
                <div>
                    <button class="btn btn-warning btn-sm" data-index="${index}" data-action="edit">
                        <i class="bi bi-pencil-square"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" data-index="${index}" data-action="delete">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </div>
            <hr>
            <p>${content}</p>
        `;
        // nodeList ID'sine sahip <ul> etiketinin içine li'leri doldurmak
        noteList.appendChild(div);
    });

}

// Modal input alanlarını doldurmak için yardımcı fonksiyon
const editTitle = document.getElementById("editTitle");
const editContent = document.getElementById("editContent");
const saveBtn = document.getElementById("saveEditBtn");
const modal = new bootstrap.Modal(document.getElementById("editModal"));

export const openEditModal = (note, index) => {
    editTitle.value = note.title;
    editContent.value = note.content;

    saveBtn.addEventListener("click", () => {
        note.title = editTitle.value.trim();
        note.content = editContent.value.trim();

        updateNote(index, note);
        renderNotes();

        modal.hide();
    }, {once: true});

    modal.show();
};