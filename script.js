function loadTasks() {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    document.getElementById('taskList').innerHTML = saved;
    restoreListeners();
  }
}

function saveTasks() {
  const list = document.getElementById('taskList').innerHTML;
  localStorage.setItem('tasks', list);
}

function restoreListeners() {
  document.querySelectorAll('#taskList li').forEach(li => {
    const span = li.querySelector('span');
    const delBtn = li.querySelector('button');

    span.onclick = () => {
      li.classList.toggle('done');
      saveTasks();
    };

    delBtn.onclick = () => {
      li.remove();
      saveTasks();
      updateTaskCount();
    };
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;
  span.onclick = () => {
    li.classList.toggle('done');
    saveTasks();
  };

  const delBtn = document.createElement('button');
  delBtn.textContent = '❌';
  delBtn.style.marginLeft = '10px';
  delBtn.onclick = () => {
    li.remove();
    saveTasks();
    updateTaskCount();
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  document.getElementById('taskList').appendChild(li);

  taskInput.value = '';
  saveTasks();
  updateTaskCount();
}

function clearAll() {
  document.getElementById('taskList').innerHTML = '';
  localStorage.removeItem('tasks');
  updateTaskCount();
}

function updateTaskCount() {
  const count = document.querySelectorAll('#taskList li').length;
  document.getElementById('taskCount').textContent = `${count} task${count !== 1 ? 's' : ''} remaining`;
}

window.onload = loadTasks;
