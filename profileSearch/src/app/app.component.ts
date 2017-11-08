import { Component } from '@angular/core';
import { GithubService } from "app/src/app/component/service/github.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent {
  title = 'app works';
}
