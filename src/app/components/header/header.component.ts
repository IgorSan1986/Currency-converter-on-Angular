import {HttpClient} from '@angular/common/http'
import {Component, EmbeddedViewRef, Input, OnInit} from '@angular/core'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	headerTitle: string = 'Конвертер валют'
	usdToUah: number
	eurToUah: number
	unavailableValue: boolean = false

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.getExchangeRates()
	}

	getExchangeRates() {
		this.http
			.get('https://api.exchangerate.host/latest?base=UAH')
			.subscribe((data: any) => {
				this.usdToUah = 1 / data.rates.USD
				this.eurToUah = 1 / data.rates.EUR
			})
	}
}
