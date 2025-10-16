// storage.js

// LocalStorage'deki notları okuma
export const getNotes = () => {
    // localStorage'deki veri setinin null dönmemesi için alternatif olarak dizi döndürmesi gerekir.
    return JSON.parse(localStorage.getItem("notes")) || [];
}

// Notları kaydetme
const saveNotes = (newNotes) => {
    localStorage.setItem("notes",JSON.stringify(newNotes));
}

// LocalStorage'e not ekleme
export const addNote = (note) => {

    // Varsa notları LocalStorage'den okuma
    const notes = getNotes();

    // Yeni notu (note nesnesini) varolan notlara ekleme
    notes.push(note);

    // Eklenen yeni notla beraber notları kaydetme
    saveNotes(notes);

}

// LocalStorage'den note silme
export const deleteNote = (index) => {

     // Varsa notları LocalStorage'den okuma
    const notes = getNotes();

    // index'e gelen notu, notes dizisinden silme
    notes.splice(index,1);

    // Silinen notla beraber elde edilen yeni notları kaydetme
    saveNotes(notes); 
}