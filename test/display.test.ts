import { TodoList } from '../src/TodoList';

test("Affichage d'une tâche", () => {
    const todoList = new TodoList();
    const todo = todoList.addTodo('Test', 'Description de test');
    expect(todo.toString()).toBe('[ ] 1. Test - Description de test');
});

test("Affichage de la liste des tâches", () => {
    const todoList = new TodoList();
    todoList.addTodo('Test 1', 'Description de test 1');
    todoList.addTodo('Test 2', 'Description de test 2');
    const consoleSpy = jest.spyOn(console, 'log');
    todoList.display();
    expect(consoleSpy).toHaveBeenCalledWith('\nListe des tâches:');
    expect(consoleSpy).toHaveBeenCalledWith('[ ] 1. Test 1 - Description de test 1');
    expect(consoleSpy).toHaveBeenCalledWith('[ ] 2. Test 2 - Description de test 2');
    consoleSpy.mockRestore();
});

test("Affichage de la liste vide", () => {
    const todoList = new TodoList();
    const consoleSpy = jest.spyOn(console, 'log');      
    todoList.display();
    expect(consoleSpy).toHaveBeenCalledWith('Aucune tâche dans la liste.');
    consoleSpy.mockRestore();
});