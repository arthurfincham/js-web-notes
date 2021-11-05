const fetchNotes = (callback) => {
  fetch("http://localhost:3000/notes")
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
    jsonData.forEach((key, value) => {
    const newPostEl = document.createElement('div');
    newPostEl.innerText = key.content + key.title
    newPostEl.className = 'post';
    document.body.appendChild(newPostEl);
    })
   
  });
}

module.exports = fetchNotes;