import { Component } from '@angular/core';

import { showStateTrigger, animateStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    showStateTrigger,
    animateStateTrigger
  ]
})
export class AppComponent {
  isShown = false;
  shrikWidth = 500;
  animate = false;

  showParagraph() {
    this.isShown = !this.isShown;
  }
}
