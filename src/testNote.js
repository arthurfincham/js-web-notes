const testNote = () => {
  let newElement = document.createElement('div')
  newElement.className = '.post';
  newElement.innerText = 'Welcome to my website';
  newElement.style.color = 'green';
  document.body.appendChild(newElement);
}

module.exports = testNote;