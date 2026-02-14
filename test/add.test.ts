import { TodoList } from '../src/TodoList';

test("Ajout d'une tâche", () => {
  const todoList = new TodoList();
  const todo = todoList.addTodo('Test', 'Description de test');
  expect(todo.title).toBe('Test');
  expect(todo.description).toBe('Description de test');
});
test("Ajout d'une tâche sans description", () => {
  const todoList = new TodoList();
  const todo = todoList.addTodo('Test sans description');
  expect(todo.title).toBe('Test sans description');
  expect(todo.description).toBeUndefined();
});

