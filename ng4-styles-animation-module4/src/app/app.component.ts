import { Component } from '@angular/core';
import { AnimationEvent } from '@angular/animations'

import { showStateTrigger, animateStateTrigger, listStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    showStateTrigger,
    animateStateTrigger,
    listStateTrigger
  ]
})
export class AppComponent {
  isShown = false;
  shrikWidth = 500;
  animate = false;
  testResults = [];

  showParagraph() {
    this.isShown = !this.isShown;
  }

  onAddElement() {
    this.testResults.push(Math.random());
  }
  onAnimationStarted(event: AnimationEvent) {
    console.log(event);
  }
  onAnimationDone(event: AnimationEvent) {
    console.log(event);
  }
}
