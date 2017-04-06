import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class QuoteService {

    private url = 'http://192.168.10.10/api/';

    constructor(private http: Http) {
    }

    getQuotes(): Observable<any> {
        return this.http.get(this.url + 'quotes')
            .map(
                (response: Response) => response.json().quotes
            );
    }

    addQuote(content: string): Observable<any> {
        const body = JSON.stringify({content: content});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.url + 'quote', body, {headers: headers});
    }

    updateQuote(id: number, newContent: string): Observable<any> {
        const body = JSON.stringify({content: newContent});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put(this.url + 'quote/' + id, body, {headers: headers})
            .map(
                (response: Response) => response.json().quote
            );
    }

    deleteQuote(id: number): Observable<any> {
        return this.http.delete(this.url + 'quote/' + id);
    }
}
