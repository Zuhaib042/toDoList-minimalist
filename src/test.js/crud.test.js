import tasks, { tasksItems } from '../modules/list';

describe('check if addTask and removeTask methods work properly', () => {
  describe('add items', () => {
    document.body.innerHTML = `<input type="text" id="addTo" name="addTo" placeholder="Add to your list..."> 
      <ul class="container list-none" id="container">
            </ul>`;
    test('Checking if addTask method is working properly and adding input value on click', () => {
      // arrange
      const inputAdd = document.getElementById('addTo');
      inputAdd.value = 'hello boy';
      //  act
      const addTask = tasks.addTask();
      // assert
      expect(addTask).toEqual({
        description: 'hello boy',
        complete: false,
        index: 0,
      });
    });
    test('Checking if task is getting added to local storage', () => {
      // arrange
      const object = {
        description: 'what"s up',
        complete: false,
        index: 0,
      };
      localStorage.setItem('lion', JSON.stringify([object]));
      const storage = localStorage.getItem('lion');
      expect(storage).toEqual(
        JSON.stringify([
          {
            description: 'what"s up',
            complete: false,
            index: 0,
          },
        ])
      );
    });
  });
});
