import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
	
	response: any;
	searchAttribute: string = "";
	
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }
	
  ngOnInit() {
  	this.searchAttribute = this.route.snapshot.params.searchAttribute;
  }

  search(searchAttribute){
     if (this.searchAttribute=="") {
         window.alert("Σφάλμα Αναζήτησης! Δοκιμάστε ξανά!");
      }
     
     else 
     {
        this.router.navigate(['/searchresults/', searchAttribute]);
        location.reload(); 
      }
  }
}
