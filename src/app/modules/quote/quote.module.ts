import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuoteComponent} from './components/quote/quote.component';
import {QuotesComponent} from './components/quotes/quotes.component';
import {NewQuoteComponent} from './components/new-quote/new-quote.component';
import {QuoteRoutingModule} from './quote-routing.module';
import {QuoteService} from './components/services/quote.service';

@NgModule({
    imports: [
        CommonModule,
        QuoteRoutingModule
    ],
    declarations: [QuoteComponent, QuotesComponent, NewQuoteComponent],
    providers: [QuoteService]
})
export class QuoteModule {
}
