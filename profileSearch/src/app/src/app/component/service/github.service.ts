import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = '9bac841dc2140318a627';
  private client_secret = '18d8d3778f853154b01626076a068542ba246699';

  constructor(private _http: Http) {
    this.username = 'CodingKnowledge';
    console.log('GitHub service is ready');
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username+'?client_id='+this.client_id+'&client_secret='+'this.client_secret')
      .map(res => res.json());
  }
}
