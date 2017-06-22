import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';

@Injectable()
export class ImageService {
    private query: string;
    private API_KEY: string = environment.PIXBAY_API_KEY;
    private API_URL: string = environment.PIXBAY_API_URL;
    private URL: string = this.API_URL + this.API_KEY + '&q=';
    private perPage: string = "&per_page=10";
    private image_type: string = '&image_type=photo';
    constructor(private http: Http) { }

    getImage(query) {
        // return this.http.get('https://pixabay.com/api/?key=' + this.API_KEY + '&q=' + query + '&per_page=10&image_type=photo').map(res => res.json());

        return this.http.get(this.URL + query + this.perPage)
            .map(res => res.json());
    }
}