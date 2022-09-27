import './style.css';
import tasks from './modules/list.js';

const listContainer = document.getElementById('container');

const displayList = () => {
  // tasks = JSON.parse(localStorage.getItem('lion'));
  tasks.reverse().map((task) => {
    const singleLiHtml = `<li class="singleLi">
    <div class="checking">
        <input type="checkbox" name="check">
        ${task.decription}
    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>
</li>`;
    listContainer.insertAdjacentHTML('afterbegin', singleLiHtml);
  });
};
displayList();
