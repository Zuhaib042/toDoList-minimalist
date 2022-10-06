import tasks from '../modules/list.js';
import taskItems from '../modules/taskStatus';
describe('Edit,Clear and StatusCheck functions', () => {
  document.body.innerHTML = `<div class="add-cont">
  <input type="text" id="addTo" name="addTo" placeholder="Add to your list...">
  <div>
      <i class="fa-sharp fa-solid fa-arrow-left-long arrow "></i>
  </div>
</div>
  <ul class="container list-none" id="container"></ul>`;

  test('Testing if input value getting updated in local storage and getting rendered in dom', () => {
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
    storage[0].description = 'Exercise in park'; // editing the value
    localStorage.setItem('lion', JSON.stringify(storage)); // setting value in localStorage
    tasks.displayList(); // rendering dom
    expect(container.firstChild.children[0].children[1].value).toBe(
      'Exercise in park'
    );
  });

  test('check if task"s status is updating', () => {
    // Arrange
    const task1 = { description: 'play football', complete: false, index: 0 };
    const task2 = { description: 'get some rest', complete: false, index: 1 };
    const task3 = {
      description: 'hangout with friends',
      complete: false,
      index: 2,
    };
    localStorage.setItem('lion', JSON.stringify([task1, task2, task3]));
    let storage2 = JSON.parse(localStorage.getItem('lion'));

    // Act
    const taskComplete = jest.fn(
      (index, status) => (storage2[index].completed = status)
    );
    taskComplete(1, true);
    taskComplete(2, true);
    console.log(storage2);

    // Assert
    expect(storage2).toHaveLength(3);
    expect(storage2[0].completed).not.toBeTruthy();
    expect(storage2[1].completed).toBeTruthy();
    expect(storage2[2].completed).toBeTruthy();
  });
});
