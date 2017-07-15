import { Component } from '@angular/core';

import { showStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    showStateTrigger
  ]
})
export class AppComponent {
  isShown = false;

  showParagraph() {
    this.isShown = !this.isShown;
  }
}
