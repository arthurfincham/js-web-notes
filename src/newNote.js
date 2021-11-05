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
    const newPostEl = document.createElement('div');
    newPostEl.innerText = `${response.content} ${response.title}`
    newPostEl.className = 'post';
    document.body.appendChild(newPostEl);
  });
}

module.exports = newNote;