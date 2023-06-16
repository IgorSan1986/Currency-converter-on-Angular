import {HttpClient} from '@angular/common/http'
import {Component, OnInit} from '@angular/core'

@Component({
	selector: 'app-currency-converter',
	templateUrl: './currency-converter.component.html',
	styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent implements OnInit {
	converterTitle: string = 'Конвертер валют'
	usdToUah: number
	eurToUah: number
	fromValue: number
	fromCurrency: string = 'USD'
	toValue: number
	toCurrency: string = 'UAH'

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.getExchangeRates()
	}

	getExchangeRates() {
		this.http
			.get('https://api.exchangerate.host/latest?base=UAH')
			.subscribe((data: any) => {
				this.usdToUah = 1 / data.rates.USD
				this.eurToUah = 1 / data.rates.EUR
				this.convertCurrency()
			})
	}

	convertCurrency() {
		if (this.fromCurrency === 'UAH') {
			this.toValue =
				this.fromValue /
				(this.toCurrency === 'USD' ? this.usdToUah : this.eurToUah)
		} else if (this.toCurrency === 'UAH') {
			this.toValue =
				this.fromValue *
				(this.fromCurrency === 'USD' ? this.usdToUah : this.eurToUah)
		} else {
			const fromValueInUah =
				this.fromValue *
				(this.fromCurrency === 'USD' ? this.usdToUah : this.eurToUah)
			this.toValue =
				fromValueInUah /
				(this.toCurrency === 'USD' ? this.usdToUah : this.eurToUah)
		}
	}
}
