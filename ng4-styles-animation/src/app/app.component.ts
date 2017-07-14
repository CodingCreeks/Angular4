import { element } from 'protractor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFavorite = false;

  onShowBoring(element: HTMLElement) {
    element.style.display = 'block';
  }

  title = 'My Quotes !!';
}
