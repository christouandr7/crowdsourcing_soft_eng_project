	import { Component, OnInit, Output, EventEmitter } from '@angular/core';
	import { Router, ActivatedRoute, Params } from '@angular/router';
	import { HttpClient, HttpErrorResponse } from '@angular/common/http';
	import { CommonModule } from '@angular/common';
	import { DataService } from "../data.service";
	import { Subscription } from 'rxjs';

	@Component({
		selector: 'app-searchresults',
		templateUrl: './searchresults.component.html',
		styleUrls: ['./searchresults.component.scss']
	})
	export class SearchresultsComponent implements OnInit {

		query: any;
		response: any;
		resp: any;
		constructor(private route: ActivatedRoute, private http: HttpClient, private data: DataService) { }
		results = [];
		final_results: any;
		booRes: number = 3;
		ip: any;
		boo: boolean = false;
		tags: string;
		url:string = ".";
		initial_search: number = 1;
		status : string = "loading";
		private subscription: Subscription;

		ngOnInit() {
			window.scroll(0, 0);
			this.url = this.route.snapshot.params.searchAttribute;
			this.subscription = this.data.currentQuery.subscribe(query => 
			{
				this.query = query
				console.log("I am in Search Results");
				console.log(query);
				this.results = [];
				if (this.initial_search == 1)
				{

					if(this.url!==undefined){
						var parameters: any[] = this.url.split(" ");
					}
					this.ip = location.hostname;

					if(parameters!==undefined){
						parameters = parameters.map(function (parameters) {
							return "tags=" + parameters
						});
					}
					//console.log(parameters);
					if(parameters!==undefined){
						this.tags = parameters.toString();
					}
					//console.log(this.str);
					if (this.tags!==undefined){
						this.tags = this.tags.replace(/,/g, "&");
					}
					
					var full_query = 'http://' + this.ip + ':8764/observatory/api/prices?' + this.tags;

					this.results = this.findResults(this.ip, full_query);

					this.initial_search = 0;
				}
				else if (this.initial_search == 0)
				{
					var paging: string = 'start=' + this.query["start"] + '&count=' + this.query["count"];
					var geo: string = "";
					var dates: string = "";
					var sort: string = '&sort=' + this.query["sort_field"] + '|' + this.query["sorting"];
					//check presence of geo filters
					if (this.query["distance"] != null && this.query["distance"] != "0" && this.query["latitude"] != null && this.query["longitude"] != null)
					{
						geo = "&geoDist=" + this.query["distance"] + "&geoLng=" + this.query["longitude"] + "&geoLat=" + this.query["latitude"];
					}
					//check presence of date filters
					if (this.query["date_from"] != null)
					{
						dates = '&dateFrom=' + this.query["date_from"] +'&dateTo=' + this.query["date_to"];
					}
					
					var full_query = 'http://' + this.ip + ':8764/observatory/api/prices?' + paging + '&' + this.tags + geo + dates + sort;
					console.log(full_query);
					this.results = this.findResults(this.ip, full_query);
					
				}		
				
				this.final_results = this.results;
				
				console.log(this.status);
			});
			
			

		}

		@Output() messageEvent = new EventEmitter<number>();

		productClick(event){
			this.subscription.unsubscribe();
			this.messageEvent.emit(2);
			this.query["tags"] = this.tags;
			this.query["product"] = event.srcElement.name;
			this.data.changeQuery(this.query);
		}

		findResults(ip: string, query: string): any[] {
			var results = []
			this.http.get(query)
			.subscribe((responsee) => {
				this.response = responsee;
				this.http.get('http://' + ip + ':8764/observatory/api/products')
				.subscribe((respp) => {
					this.resp = respp;
					if (this.response.pricesOut.length != 0)
					{
						for (var i = 0; i < this.response.pricesOut.length; i++) {
							for (var j = 0; j < this.resp.products.length; j++) {
								if ((this.response.pricesOut[i].productId === this.resp.products[j]._id) && (!results.includes(this.resp.products[j]))) {
									results.push(this.resp.products[j]);
									this.status = "success";
								}
							}
						}
					}
					else
					{
						this.status = "no_results";
					}
				})
			},

			error => {
				if (error instanceof HttpErrorResponse && error.status == 404) {
					this.status = "no_results";
				}
				else 

				{ 
					this.status = "error"; 
				}


			});


			return results;
		}

	}
