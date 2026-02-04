const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new-btn');

/* ---------- COOKIE HELPERS ---------- */
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie =
    name + "=" + encodeURIComponent(value) +
    ";expires=" + d.toUTCString() +
    ";path=/";
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const parts = c.split('=');
    if (parts[0] === name) {
      return decodeURIComponent(parts[1]);
    }
  }
  return null;
}

/* ---------- SAVE / LOAD ---------- */
function saveTodos() {
  const todos = [];
  document.querySelectorAll('.todo').forEach(todo => {
    todos.push(todo.textContent);
  });
  setCookie('todos', JSON.stringify(todos), 30);
}

function loadTodos() {
  const cookie = getCookie('todos');
  if (!cookie) return;

  const todos = JSON.parse(cookie);
  todos.forEach(text => {
    createTodo(text, false);
  });
}

/* ---------- CREATE TO DO ---------- */
function createTodo(text, save = true) {
  const todo = document.createElement('div');
  todo.className = 'todo';
  todo.textContent = text;

  todo.onclick = function () {
    if (confirm('Do you want to remove this TO DO?')) {
      todo.remove();
      saveTodos();
    }
  };

  // add to top
  ftList.prepend(todo);

  if (save) saveTodos();
}

/* ---------- BUTTON EVENT ---------- */
newBtn.onclick = function () {
  const text = prompt('Enter a new TO DO:');
  if (text && text.trim() !== '') {
    createTodo(text.trim());
  }
};

/* ---------- INIT ---------- */
loadTodos();