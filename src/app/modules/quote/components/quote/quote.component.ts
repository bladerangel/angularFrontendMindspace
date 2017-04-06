import {Component, Input, OnInit} from '@angular/core';
import {Quote} from '../interfaces/quote';

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    @Input() quote: Quote;

    constructor() {
    }

    ngOnInit() {
    }

}
