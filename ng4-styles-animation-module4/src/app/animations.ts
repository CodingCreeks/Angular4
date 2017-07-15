import { trigger, state, style, transition, animate } from '@angular/animations';

export const showStateTrigger = trigger('showState', [
  state('shown', style({

  })),
  transition('void => shown', [
    style({
      opacity: 0
    }),
    animate(300)
  ]),
  transition('shown => void', [
    style({
      opacity: 0
    })
  ])
])
