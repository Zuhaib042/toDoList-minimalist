import tasks, { listContainer, tasksItems } from './list.js';

class TaskStatus {
  // check task status if its completed or not
  static taskComplete = () => {
    const checkbox = document.querySelectorAll('.checkbox');
    checkbox.forEach((ele, i) => {
      ele.addEventListener('change', () => {
        console.log(i);
        if (tasksItems[i].complete === true) {
          tasksItems[i].complete = false;
          ele.nextElementSibling.classList.remove('checkboxActive');
          console.log(tasksItems);
          localStorage.setItem('lion', JSON.stringify(tasksItems));
        } else {
          tasksItems[i].complete = true;
          ele.nextElementSibling.classList.add('checkboxActive');
          console.log(tasksItems);
          localStorage.setItem('lion', JSON.stringify(tasksItems));
        }
      });
    });
  };

  // clear all completed tasks from the list
  //   static clearList = () => {
  //     const clear = document.querySelector('.clear');
  //     clear.addEventListener('click', () => {
  //       console.log(clear);
  //       tasksItems.filter((ele, i) => {
  //         ele.complete == false;
  //       });
  //     });
  //   };
}
export default TaskStatus;
