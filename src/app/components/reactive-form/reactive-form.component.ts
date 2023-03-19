import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  myForm;

  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      username: ['John Doe'],
      age: [0],
    });
  }

  handleSubmit(values: {}) {
    console.log({ values });
  }
}
