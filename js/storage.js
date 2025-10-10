// storage.js

// LocalStorage'deki notları okuma
export const getNotes = () => {
    // localStorage'deki veri setinin null dönmemesi için alternatif olarak dizi döndürmesi gerekir.
    return JSON.parse(localStorage.getItem("notes")) || [];
}

// Notları kaydetme
const saveNotes = (notes) => {
    localStorage.setItem("notes",JSON.stringify(notes));
}

// LocalStorage'e not ekleme
export const addNote = (note) => {

    // Varsa notları okuma
    const notes = getNotes();

    // Yeni notu (note nesnesini) varolan notlara ekleme
    notes.push(note);

    // Eklenen yeni notla beraber notları kaydetme
    saveNotes(notes);

}