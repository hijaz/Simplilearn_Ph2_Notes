import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'some-project-name';
  user = { first_name: 'john', last_name: 'doe' };
  someNumber = 123.34234;
  months = ['Jan', 'Feb', 'Mar'];

  flag = true;

  myFunc() {
    return 2 > 1;
  }

  choice = 2;

  redTextAllowed = true;

  people = [
    { name: 'Anderson', age: 35, city: 'Sao Paulo' },
    { name: 'John', age: 12, city: 'Miami' },
    { name: 'Peter', age: 22, city: 'New York' },
  ];

  content = 'some mock content';

  name = 'john';
}
