(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/noteBox.js
  var require_noteBox = __commonJS({
    "src/noteBox.js"(exports, module) {
      var noteBox2 = (data) => {
        const newPostEl = document.createElement("div");
        const h = document.createElement("H3");
        const t = document.createTextNode(data.title);
        h.appendChild(t);
        newPostEl.appendChild(h);
        const p = document.createElement("p");
        const q = document.createTextNode(data.content);
        p.appendChild(q);
        newPostEl.appendChild(p);
        newPostEl.className = "post";
        document.body.appendChild(newPostEl);
      };
      module.exports = noteBox2;
    }
  });

  // src/newNote.js
  var require_newNote = __commonJS({
    "src/newNote.js"(exports, module) {
      var noteBox2 = require_noteBox();
      var newNote2 = (title, content) => {
        fetch("http://localhost:3000/notes", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ title, content })
        }).then((response) => response.json()).then((response) => {
          console.log(response);
          noteBox2(response);
        });
      };
      module.exports = newNote2;
    }
  });

  // src/fetchNotes.js
  var require_fetchNotes = __commonJS({
    "src/fetchNotes.js"(exports, module) {
      var noteBox2 = require_noteBox();
      var fetchNotes2 = (callback) => {
        fetch("http://localhost:3000/notes").then((response) => response.json()).then((jsonData) => {
          console.log(jsonData);
          jsonData.forEach((key, value) => {
            noteBox2(key);
          });
        });
      };
      module.exports = fetchNotes2;
    }
  });

  // src/displayNotes.js
  var require_displayNotes = __commonJS({
    "src/displayNotes.js"(exports, module) {
      var displayNotes2 = (jsonData) => {
        const newPostEl = document.createElement("div");
        newPostEl.innerText = jsonData;
        newPostEl.className = "post";
        document.body.appendChild(newPostEl);
      };
      module.exports = displayNotes2;
    }
  });

  // index.js
  var newNote = require_newNote();
  var fetchNotes = require_fetchNotes();
  var displayNotes = require_displayNotes();
  var noteBox = require_noteBox();
  var button = document.querySelector("#testButton");
  button.addEventListener("click", () => {
    const title = document.querySelector("#note_title");
    const content = document.querySelector("#note_content");
    newNote(title.value, content.value);
  });
  fetchNotes();
})();
