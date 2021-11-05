const noteBox = require("./noteBox");

const newNote = (title, content) => {
  fetch("http://localhost:3000/notes", {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({title, content })
})
  .then(response => response.json())
  .then(response => {
    console.log(response);
    noteBox(response);
  });
}

module.exports = newNote;