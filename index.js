const newNote = require('./src/newNote')
const fetchNotes = require('./src/fetchNotes')
const displayNotes = require('./src/displayNotes')
const noteBox = require('./src/noteBox')

const button = document.querySelector("#testButton")

button.addEventListener('click', () => {
  const title = document.querySelector("#note_title");
  const content = document.querySelector("#note_content");
  newNote(title.value, content.value);
})

fetchNotes();

