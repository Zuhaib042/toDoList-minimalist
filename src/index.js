import './style.css';
import tasks, { inputAdd, listContainer } from './modules/list.js';

window.onload = tasks.displayList();

inputAdd.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    // key code of the keybord key
    event.preventDefault();
    listContainer.innerHTML = '';
    // your code to Run
    tasks.addTask();
    tasks.displayList();
    inputAdd.value = '';
  }
});
