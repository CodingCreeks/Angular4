
import { Injectable } from "@angular/core";
import { Http, Headers} from "@angular/http";

@Injectable()
export class ServerService {
    constructor(private http: Http) { }

    storeServers(servers: any[]) {
        const headers = new Headers({
            'content-Type':'application/json'
        });

        return this.http.post(
            'https://sample-httprequest.firebaseio.com/data.json', 
            servers, 
            { headers: headers});
    }

    getServers(){
        return this.http.get(
            'https://sample-httprequest.firebaseio.com/data.json'
        );
    }
}