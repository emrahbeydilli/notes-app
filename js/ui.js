// ui.js
import { getNotes } from "./storage.js";

export const renderNotes = () => {
    // Eklenecek not listesinin HTML kodundaki yerinin tanımlanması
    const noteList = document.querySelector("#noteList");

    // Varsa nodeList ID'sine sahip ul etiketinin innerHTML'ini temizleme
    noteList.innerHTML = "";

    // LocalStorage'deki notları okuma
    const notes = getNotes();

    // Notların ekranda listeler halinde görüntülenmesi
    notes.forEach((note,index) => {
        // ES6 Object Destructuring (Nesneyi değişkenlere ayırma)
        const {title,content} = note;
        const li = document.createElement("li");
        li.className = "list-group-item mb-5";
        li.innerHTML = `
            <div class="d-flex justify-content-between">
                <h5>${title}</h5>
                <div>
                    <button class="btn btn-warning btn-sm" data-index="${index}">
                        <i class="bi bi-pencil-square"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" data-index="${index}">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </div>
            <hr>
            <p>${content}</p>
        `;
        // nodeList ID'sine sahip <ul> etiketinin içine li'leri doldurmak
        noteList.appendChild(li);
    });

}