export const tasksItems = JSON.parse(localStorage.getItem('lion')) || [];
export const inputAdd = document.getElementById('addTo');
export const listContainer = document.getElementById('container');

export default class Tasks {
  constructor(description, complete, index) {
    this.description = description;
    this.complete = complete;
    this.index = index;
  }

  static displayList = () => {
    tasksItems.forEach((task, index) => {
      const singleLiHtml = `<li class="singleLi" id="${index}">
      <div class="checking">
      <input type="checkbox" name="checkbox" />
          <input type="text" class="task-input" value="${task.description}" >
      </div>
      <i class="fa-solid fa-trash-can icon delete"></i>
  </li>`;
      listContainer.insertAdjacentHTML('beforeend', singleLiHtml);
    });
    const deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach((del, i) => {
      del.addEventListener('click', () => {
        Tasks.removeTask(i);
      });
    });
    const taskInputs = document.querySelectorAll('.task-input');

    taskInputs.forEach((task, index) => {
      task.addEventListener('change', () => {
        if (task.value) {
          tasksItems[index].description = task.value;
          localStorage.setItem('lion', JSON.stringify(tasksItems));
        }
      });
    });
  };

  static addTask = () => {
    const task = new Tasks(inputAdd.value, false, tasksItems.length + 1);
    if (inputAdd.value !== '') {
      tasksItems.push(task);
      localStorage.setItem('lion', JSON.stringify(tasksItems));
    }
  };

  static removeTask = (index) => {
    tasksItems.splice(index, 1);
    tasksItems.forEach((e, i) => {
      e.index = i + 1;
    });
    listContainer.innerHTML = '';
    localStorage.setItem('lion', JSON.stringify(tasksItems));
    Tasks.displayList();
  };
}
