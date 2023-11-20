import { Component } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  newTodo: Todo = { id: 0, title: '', completed: false };

  constructor(private todoService: TodoService) { }

  addTodo(): void {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = { id: 0, title: '', completed: false };
  }
}
