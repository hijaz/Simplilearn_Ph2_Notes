import { animate, style, transition, trigger } from '@angular/animations';

export const enterLeaveAnimation = trigger('enterLeave', [
  transition(':enter', [
    style({ opactiy: 0 }), //, tranform: 'translateY(-50px)' }),
    animate('1.5s ease-out', style({ opactiy: 1 })), //, tranform: 'none' })),
  ]),
  transition('* => void', [
    animate(
      '1.5s ease-out',
      style({ opacity: 0 }) //, tranform: 'translateY(50px)' })
    ),
  ]),
]);
