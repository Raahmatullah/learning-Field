const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addButton = document.getElementById('add');
const counter = document.getElementById('count');
 addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') 
        {return;}
        
    const li = document.createElement('li');
    li.className = 'task';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    let marker = checkbox.classList = 'check';
    marker=false;
    li.textContent = taskText;
    li.prepend(checkbox);
    taskList.appendChild(li);
    taskInput.value = '';
    updateCounter();
   
    });
const checkjs = document.querySelector('.check');
checkjs.addEventListener('click', () => {
    checkbox.className = 'completed';
});
function updateCounter() {
    const tasks = taskList.getElementsByClassName('task');
    let remainingTasks = 0;
    for (let task of tasks){
        const checkquert = task.querySelector('.check');
        if (!checkquert.checked) {
            remainingTasks++;
        }
    }
    counter.textContent = `${remainingTasks} task`;
}
 if (checkbox===true) {
        remainingTasks--;
        updateCounter();
        classList.add('completed');
    }
