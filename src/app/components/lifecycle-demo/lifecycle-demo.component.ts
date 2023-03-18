import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  template: ` <p>Child Input value: {{ inputValue }}</p> `,
})
export class LifecycleChildDemoComponent implements OnChanges {
  @Input() inputValue: string = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log('LifecycleChildDemoComponent ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('LifecycleChildDemoComponent ngOnInit');
  }

  ngOnDestroy() {
    console.log('LifecycleChildDemoComponent ngOnDestroy');
  }

  ngDoCheck() {
    console.log('LifecycleChildDemoComponent ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('LifecycleChildDemoComponent ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('LifecycleChildDemoComponent ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('LifecycleChildDemoComponent ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('LifecycleChildDemoComponent ngAfterViewChecked');
  }
}
