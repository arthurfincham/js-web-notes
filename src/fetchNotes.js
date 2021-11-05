const noteBox = require("./noteBox");

const fetchNotes = (callback) => {
  fetch("http://localhost:3000/notes")
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
    jsonData.forEach((key, value) => {
    noteBox(key);
    })
   
  });
}

module.exports = fetchNotes;