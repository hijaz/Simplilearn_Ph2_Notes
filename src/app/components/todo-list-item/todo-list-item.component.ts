import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent {
  @Input() todo!: Todo;
  @Output() toggle: EventEmitter<Todo> = new EventEmitter();

  onToggle() {
    console.log('Toggled');
    this.toggle.emit(this.todo);
  }
}
