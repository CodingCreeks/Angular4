import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http) { }

    storeServers(servers: any[]) {
        const headers = new Headers({
            'content-Type': 'application/json'
        });

        // return this.http.post(
        //     'https://sample-httprequest.firebaseio.com/data.json',
        //     servers,
        //     { headers: headers });

        return this.http.put(
            'https://sample-httprequest.firebaseio.com/data.json',
            servers,
            { headers: headers });
    }

    getServers() {
        return this.http.get('https://sample-httprequest.firebaseio.com/data.json').map(
            (response: Response) => {
                const data = response.json();
                for (const server of data) {
                    server.name = 'FETCHED_' + server.name;
                }
                return data;
            }
        );
    }
}