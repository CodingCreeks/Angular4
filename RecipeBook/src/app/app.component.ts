import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAuqcm6aLcxJqTHGkhJE_UE0Po5Z22afwk",
      authDomain: "recipebook-e33d8.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
