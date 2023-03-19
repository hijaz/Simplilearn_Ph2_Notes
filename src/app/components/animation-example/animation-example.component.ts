import { Component } from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-animation-example',
  templateUrl: './animation-example.component.html',
  styleUrls: ['./animation-example.component.css'],
  animations: [
    trigger('animateMe', [
      state(
        'initial',
        style({
          backgroundColor: 'red',
          transform: 'scale(1)',
        })
      ),
      state(
        'final',
        style({
          backgroundColor: 'blue',
          color: 'white',
          transform: 'scale(2)',
        })
      ),
      transition('initial => final', [
        animate(
          '5s 1s cubic-bezier(1,1.65,.79,.15)',
          keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(6.2)', offset: 0.25 }),
            style({ transform: 'scale(1.1)', offset: 0.75 }),
            style({ transform: 'scale(5.2)', offset: 1.0 }),
          ])
        ),
      ]),
      transition('final => initial', [
        animate('1s cubic-bezier(1,1.65,.79,.15)'),
      ]),
    ]),
  ],
})
export class AnimationExampleComponent {
  state: string = 'initial';

  toggleAnimation() {
    this.state = this.state === 'initial' ? 'final' : 'initial';
  }
}
