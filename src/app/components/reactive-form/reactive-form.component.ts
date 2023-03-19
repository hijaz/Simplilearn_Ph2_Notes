import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { startswith123 } from 'src/app/validators/customValidator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  myForm;

  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      username: ['John Doe', startswith123],
      email: ['', Validators.email],
      age: [0],
    });
  }

  handleSubmit(values: {}) {
    if (this.myForm.valid) {
      //submit data to server
      console.log({ values });
    }
  }
}
