const displayNotes = (jsonData) => {
  const newPostEl = document.createElement('div');
  newPostEl.innerText = jsonData;
  newPostEl.className = 'post';
  document.body.appendChild(newPostEl);
}

module.exports = displayNotes;