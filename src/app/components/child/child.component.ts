import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() dataFromParent = '';

  @Output() customEvent = new EventEmitter();

  onClickHandler() {
    this.customEvent.emit('Hi from Child');
  }
}
