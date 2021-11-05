const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const Notes = require('./src/Notes');
const port = 3000;
const Notepad = new Notes();


app.use(express.json());
app.use(cors());
app.use("/public", express.static(__dirname + "/public"));

let notes = Notepad.notes;

app.get('/', (req, res) => {
  res.sendFile('index.html', {root : __dirname + '/public'});
});

app.get('/notes', (req, res) => {
 res.send(JSON.stringify(notes));
});

app.post('/notes', (req, res) => {
  res.json(req.body);
  Notepad.addNote(req.body);
});

app.listen(port);

console.log(`Server listening on http://localhost:${port}`);