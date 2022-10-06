import tasks from '../modules/list.js';

describe('Edit,Clear and StatusCheck functions', () => {
  document.body.innerHTML = `<div class="add-cont">
  <input type="text" id="addTo" name="addTo" placeholder="Add to your list...">
  <div>
      <i class="fa-sharp fa-solid fa-arrow-left-long arrow "></i>
  </div>
</div>
  <ul class="container list-none" id="container"></ul>`;

  test('Testing if edit works or not', () => {
    const task1 = {
      description: 'Drop kids',
      complete: false,
      index: 0,
    };
    localStorage.setItem('lion', JSON.stringify([task1]));
    let storage = JSON.parse(localStorage.getItem('lion'));
    expect(storage).toHaveLength(1);

    tasks.displayList();
    const container = document.querySelector('#container');
    expect(container.childElementCount).toBe(1);
    expect(container.firstChild.children[0].children[1].value).toBe(
      'Drop kids'
    );
    container.innerHTML = '';
    storage[0].description = 'Exercise in park';
    localStorage.setItem('lion', JSON.stringify(storage));
    tasks.displayList();
    expect(container.firstChild.children[0].children[1].value).toBe(
      'Exercise in park'
    );
  });
  test('check if task"s completed status is updating', () => {});
});
