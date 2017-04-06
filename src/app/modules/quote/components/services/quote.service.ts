import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuoteService {

    constructor(private http: Http) {
    }

    getQuotes() {
        return this.http.get('http://192.168.10.10/api/quotes')
            .map(
                (response: Response) => {
                    return response.json().quotes;
                }
            );
    }
}
