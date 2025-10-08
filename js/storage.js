// storage.js

// LocalStorage'deki notları okuma
const getNotes = () => {
    return JSON.parse(localStorage.getItem("notes"));
}

// Notları kaydetme

// LocalStorage'e not ekleme
export const addNote = (note) => {

    // Varsa notları okuma
    const notes = getNotes();
    console.log(notes);

    // Yeni notu varolan notlara ekleme

    // Eklenen yeni notla beraber notları kaydetme

}