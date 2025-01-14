import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ShortenerService {
    apiUrl: string = 'http://localhost:3000/shortener';


    constructor(
        private http: HttpClient,
    ) {
    }

    createShortenedUrl(urlToShorten: any) {
        return this.http.post(`${this.apiUrl}`,urlToShorten);
    }
    getShortenedUrl(shortenedUrl: any) {
        return this.http.get(`${this.apiUrl}/${shortenedUrl}`);
    }


}
