// ui.js
import { getNotes } from "./storage.js";

export const renderNotes = () => {
    // Eklenecek not listesinin HTML kodundaki yerinin tanımlanması
    const noteList = document.querySelector("#noteList");
    
    // LocalStorage'deki notları okuma
    const notes = getNotes();

    // Notların ekranda listeler halinde görüntülenmesi
    notes.forEach(note => {
        console.log(note);
    });

}