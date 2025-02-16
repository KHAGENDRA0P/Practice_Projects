const btn = document.querySelector('#btn');
const main = document.querySelector('#main');

btn.addEventListener('click', addNote);

function addNote() {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
        <div class="title">
            <i class="save fas fa-floppy-disk"></i>
            <i class="trash fa-solid fa-trash"></i>
        </div>
        <textarea ></textarea>
    `;

    const deleteIcon = note.querySelector('.trash');
    const saveIcon = note.querySelector('.save');
    const textarea = note.querySelector('textarea');
    
    deleteIcon.addEventListener('click', () => {
        note.remove();
        saveNote();
    });

    saveIcon.addEventListener('click', saveNote);
    textarea.addEventListener('input', saveNote);

    main.appendChild(note);
}

function saveNote() {
    const notes = document.querySelectorAll('.note textarea');
    const data = [];

    for (let i = 0; i < notes.length; i++) {
        data.push(notes[i].value);
    }
    if (notes.length === 0) {
        localStorage.removeItem('notes');
    }
    else {
        localStorage.setItem('notes', JSON.stringify(data));
    }
 }

function displayNotes() {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes != null) {
        notes.forEach(noteText => {
            const note = addNote(); // Create a new note
            const textarea = main.lastChild.querySelector('textarea'); // Get the last added note's textarea
            textarea.value = noteText;
        });
    }
    else
        addNote();   
}
 
displayNotes();