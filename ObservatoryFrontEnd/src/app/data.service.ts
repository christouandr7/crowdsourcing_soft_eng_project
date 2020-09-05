import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class DataService {

	private querySource = new BehaviorSubject<any>({
	start: 0,
	count: 20,
	page: 1,
	sort_field: "price",
	sorting: "ASC",
	distance: null,
	latitude: null,
	longitude: null,
	date_from: null,
	date_to: null,
	tags: null,
	product: null});
	currentQuery = this.querySource.asObservable();

	constructor() { }

  changeQuery(query: any) {
  	this.querySource.next(query);
  }

}
