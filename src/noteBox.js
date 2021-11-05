const noteBox = (data) => {
  const newPostEl = document.createElement('div');
  const h = document.createElement("H3")
  const t = document.createTextNode(data.title);
  h.appendChild(t);
  newPostEl.appendChild(h); 
  const p = document.createElement("p")
  const q = document.createTextNode(data.content);
  p.appendChild(q);
  newPostEl.appendChild(p); 
  newPostEl.className = 'post';
  document.body.appendChild(newPostEl);
}

module.exports = noteBox;