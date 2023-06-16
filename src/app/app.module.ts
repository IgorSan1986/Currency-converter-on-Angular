import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import {AppRoutingModule} from './app-routing.module'
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component'
import {HttpClientModule} from '@angular/common/http'
import {HeaderComponent} from './components/header/header.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component'

@NgModule({
	declarations: [AppComponent, HeaderComponent, CurrencyConverterComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		NgbModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
