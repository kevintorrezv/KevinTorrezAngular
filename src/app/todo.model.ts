  import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

NgModule({
  imports: [FormsModule],
  // ...
})
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

