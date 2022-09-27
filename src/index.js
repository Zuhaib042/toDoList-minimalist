import './style.css';
import tasks from './modules/list.js';

const listContainer = document.getElementById('container');

const displayList = () => {
  tasks.forEach((task) => {
    const singleLiHtml = `<li class="singleLi" id="${task.index}">
    <div class="checking">
        <input type="checkbox" name="check">
        ${task.decription}
    </div>
    <i class="fa-solid fa-ellipsis-vertical icon"></i>
</li>`;
    listContainer.insertAdjacentHTML('beforeend', singleLiHtml);
  });
};
window.onload = displayList();
