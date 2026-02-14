import { TodoList } from './TodoList';

const todoList = new TodoList();
// Ajout de tâches
todoList.addTodo('Acheter du lait', 'N\'oublie pas d\'acheter du lait en rentrant du travail.');
todoList.addTodo('Faire du sport', 'Aller courir pendant 30 minutes.');
todoList.addTodo('Lire un livre', 'Terminer la lecture du livre en cours.');    

// Afficher toutes les tâches
todoList.display();

// Marquer une tâche comme terminée 
todoList.toggleTodo(2);

// Afficher les tâches terminées
console.log('\nTâches terminées:');
todoList.getAllTodos().filter(todo => todo.completed).forEach(todo => {
  console.log(todo.toString());
});