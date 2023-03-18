import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LifecycleChildDemoComponent } from '../lifecycle-demo/lifecycle-demo.component';

@Component({
  selector: 'app-parent-lifecycle-demo',
  template: `
    <button (click)="toggleChild()">Toggle Child Component</button>
    <input [(ngModel)]="inputValue" placeholder="Enter your name" />
    <p>Input value: {{ inputValue }}</p>
    <app-lifecycle-demo
      *ngIf="showChild"
      [inputValue]="inputValue"
      #child
    ></app-lifecycle-demo>
  `,
})
export class LifecycleDemoParentComponent implements OnChanges {
  @Input() inputValue: string = '';
  showChild = true;
  child: LifecycleChildDemoComponent | undefined;

  toggleChild() {
    this.showChild = !this.showChild;
  }

  ngOnInit() {
    console.log('ParentComponent ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ParentComponent ngOnChanges', changes);
  }

  ngAfterViewInit() {
    console.log('ParentComponent ngAfterViewInit');
    // console.log('Child component:', this.child);
  }

  ngOnDestroy() {
    console.log('ParentComponent ngOnDestroy');
  }

  ngDoCheck() {
    console.log('ParentComponent ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ParentComponent ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ParentComponent ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    console.log('ParentComponent ngAfterViewChecked');
  }
}
