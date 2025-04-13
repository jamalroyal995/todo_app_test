function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Add 'done' toggle functionality
  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  // Add to the list
  const taskList = document.getElementById('taskList');
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
}
