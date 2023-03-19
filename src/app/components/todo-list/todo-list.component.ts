import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoList: Todo[] = [];
  newTodo: string = '';

  constructor() {
    const firstTodo = new Todo(1, 'something to do', false);
    this.todoList.push(firstTodo);
    const secondTodo = new Todo(2, 'another thing to do', false);
    this.todoList.push(secondTodo);
    this.todoList.push(new Todo(3, 'laundry', false));
    this.todoList.push(new Todo(4, 'cook', false));
  }

  addNewTodo() {
    console.log({ newTodo: this.newTodo });
    this.todoList.push(new Todo(Math.random(), this.newTodo, false));
  }

  handleTodoToggled(todo: Todo) {
    todo.completed = !todo.completed;

    console.log({ todoList: this.todoList });

    // if(todo.completed){
    //   todo.completed = false;
    // }else{
    //   todo.completed = true;
    // }

    // todo.completed = todo.completed ? false : true;
  }
}
