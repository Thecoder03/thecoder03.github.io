window.addEventListener('load', function () {
  var hour = new Date().getHours();
  var greeting;

  if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 17) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  document.getElementById('greeting').textContent = greeting;
});

var themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', function () {
  var isLight = document.body.classList.toggle('light');
  themeBtn.textContent = isLight ? 'Dark Mode' : 'Light Mode';
});

var noteBox  = document.getElementById('noteBox');
var noteHint = document.getElementById('noteHint');

noteBox.addEventListener('focus', function () {
  noteHint.textContent = 'You are writing, take your time.';
  noteHint.style.opacity = '1';
});

noteBox.addEventListener('blur', function () {
  if (noteBox.value.trim()) {
    noteHint.textContent = 'Note saved! (' + noteBox.value.length + ' characters)';
    noteHint.style.opacity = '1';
  } else {
    noteHint.style.opacity = '0';
  }
});

var hoverCards = document.querySelectorAll('.hover-card');
var skillHint  = document.getElementById('skillHint');

var skillMessages = {
  HTML:       'HTML is the structure and skeleton of every webpage.',
  CSS:        'CSS  controls layout, colors, fonts, and visual style.',
  JavaScript: 'JavaScript adds behavior and interactivity to the page.'
};

hoverCards.forEach(function (card) {
  card.addEventListener('mouseover', function () {
    skillHint.textContent = skillMessages[card.dataset.skill];
  });

  card.addEventListener('mouseout', function () {
    skillHint.textContent = '';
  });
});

var todoInput  = document.getElementById('todoInput');
var addTodoBtn = document.getElementById('addTodoBtn');
var todoList   = document.getElementById('todoList');

function addTodo() {
  var text = todoInput.value.trim();
  if (!text) return;

  var li    = document.createElement('li');
  li.className = 'todo-item';

  var check = document.createElement('div');
  check.className = 'todo-check';

  var span  = document.createElement('span');
  span.className   = 'todo-text';
  span.textContent = text;

  var del   = document.createElement('button');
  del.className   = 'todo-del';
  del.textContent = 'x';
  del.title       = 'Delete task';

  check.addEventListener('click', function () {
    check.classList.toggle('done');
    span.classList.toggle('done');
  });

  del.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(check);
  li.appendChild(span);
  li.appendChild(del);
  todoList.appendChild(li);

  todoInput.value = '';
  todoInput.focus();
}

addTodoBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    addTodo();
  }
});

var paletteBtns   = document.querySelectorAll('.palette-btn');
var accentPreview = document.getElementById('accentPreview');

paletteBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var color = btn.dataset.color;
    var name  = btn.dataset.name;

    document.documentElement.style.setProperty('--accent', color);

    paletteBtns.forEach(function (b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    accentPreview.innerHTML =
      'Current accent: <strong>' + color + ' - ' + name + '</strong>';
  });
});