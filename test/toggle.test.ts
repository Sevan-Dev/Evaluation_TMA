import { TodoList } from '../src/TodoList';

test("Marquer une tâche comme terminée", () => {
  const todoList = new TodoList();  
    const todo = todoList.addTodo('Test', 'Description de test');
    const result = todoList.toggleTodo(todo.id);
    expect(result).toBe(true);
    expect(todo.completed).toBe(true);
});

