import { TodoItem } from './TodoItem';

export class TodoList {
  private todos: TodoItem[] = [];
  private nextId: number = 1;


  addTodo(title: string, description?: string): TodoItem {
    const todo = new TodoItem(this.nextId++, title, description);
    this.todos.push(todo);
    return todo;
  }

  getAllTodos(): TodoItem[] {
    return this.todos;
  }


  getCompletedTodos(): TodoItem[] {
    return this.todos.filter(todo => todo.completed);
  }



  findTodoById(id: number): TodoItem | undefined {
    return this.todos.find(todo => todo.id === id);
  }


  toggleTodo(id: number): boolean {
    const todo = this.findTodoById(id);
    if (todo) {
      todo.toggle();
      return true;
    }
    return false;
  }


  deleteTodo(id: number): boolean {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  display(): void {
    if (this.todos.length === 0) {
      console.log('Aucune tâche dans la liste.');
      return;
    }

    console.log('\nListe des tâches:');
    this.todos.forEach(todo => {
      console.log(todo.toString());
    });
  }

  getStats(): { total: number; completed: number } {
    return {
      total: this.todos.length,
      completed: this.getCompletedTodos().length,
    };
  }
}
