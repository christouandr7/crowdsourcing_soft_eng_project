import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	search_step: number = 1;
	productName: string;
	constructor() { }

	receiveMessage($event){
		console.log($event);
		this.search_step = $event;
	}

	receiveProduct($event){
		this.productName = $event;
	}

	ngOnInit() {
	}

}
