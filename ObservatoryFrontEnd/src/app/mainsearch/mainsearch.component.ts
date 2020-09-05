import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mainsearch',
  templateUrl: './mainsearch.component.html',
  styleUrls: ['./mainsearch.component.scss']
})
export class MainsearchComponent implements OnInit {

	response: any;
	searchAttribute: string = "";


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  search(searchAttribute){
     if (this.searchAttribute=="") {
         window.alert("Σφάλμα Αναζήτησης! Δοκιμάστε ξανά!");
      }
      /* else {
  	this.http.get('http://localhost:8764/observatory/api/products/'+ this.searchAttribute)
  	//https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
  	.subscribe((response) => {
  		this.response = response;

  		console.log(this.response);
  		console.log(this.response.name);
  		console.log(this.response.description);
  		//window.alert(this.response.name);



  	})
    
    */
    else this.router.navigate(['/searchresults/', searchAttribute]);
  }
  }