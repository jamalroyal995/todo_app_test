function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;
  span.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = '❌';
  delBtn.style.marginLeft = '10px';
  delBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(delBtn);

  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}
