import { trigger, state, style, transition, animate } from '@angular/animations';

export const showStateTrigger = trigger('showState', [
  transition('void => *', [
    style({
      opacity: 0
    }),
    animate(300)
  ]),
  transition('* => void', [
    style({
      opacity: 0
    })
  ])
])
