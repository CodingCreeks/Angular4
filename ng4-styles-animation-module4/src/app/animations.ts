import { trigger, state, style, transition, animate, group, keyframes } from '@angular/animations';

export const showStateTrigger = trigger('showState', [
  // transition('void => *', [
  //   style({
  //     opacity: 0
  //   }),
  //   animate(300)
  // ]),
  // transition('* => void', [
  //   style({
  //     opacity: 0
  //   })
  // ])

  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300)
  ]),
  transition(':leave', [
    style({
      opacity: 0
    })
  ])
]);

export const animateStateTrigger = trigger('animateState', [
  transition('* => *', [
    animate('400ms cubic-bezier(.16, .78 ,0 ,.92)', style({
      width: 0
    })),
    animate(400, style({
      width: '*'
    }))
  ])
]);

export const listStateTrigger = trigger('listState', [
  transition(':enter', [
    style({
      opacity: 0,
      backgroundColor: 'white'
    }),
    group([
      animate(200, style({
        opacity: 0.7
      })),
      animate('500ms ease-out', keyframes([
        style({
          backgroundColor: 'white',
          offset: 0
        }),
        style({
          backgroundColor: 'red',
          offset: 0.8
        }),
        style({
          backgroundColor: 'green',
          offset: 1
        })
      ]))
    ]),
    animate(300, style({
      backgroundColor: 'lightblue'
    }))
  ]),
  transition(':leave', [
    style({
      opacity: 0
    })
  ])
]);
