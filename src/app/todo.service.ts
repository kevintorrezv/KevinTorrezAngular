import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  getAllTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  updateTodo(todo: Todo): void {
    const index = this.todos.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      this.todos[index] = todo;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
