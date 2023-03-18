import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css'],
})
export class PipesDemoComponent {
  today: Date = new Date();
  name: string = 'John Doe';
  amount = 12.34556;
  decimal = 0.345345;
  pi = 3.14;
  data: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Loaded!'), 2000);
  });
}
