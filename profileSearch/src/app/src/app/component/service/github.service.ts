import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'cab7d081f71184a02af5';
  private client_secret = '068fd31971badf3027d80bfa535e30052646a02e';

  constructor(private _http: Http) {
    console.log('Github Service Ready...');
    this.username = 'CodingKnowledge';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }
}
