import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  message = 'Hi from Parent Component';

  fromChild = '';

  @ViewChild('viewChild') header!: ElementRef;

  ngAfterViewInit() {
    this.header.nativeElement.style.color = 'green';
  }
}
