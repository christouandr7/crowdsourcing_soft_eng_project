import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-priceresponse',
  templateUrl: './priceresponse.component.html',
  styleUrls: ['./priceresponse.component.scss']
})
export class PriceresponseComponent implements OnInit {
  shID: any;
  price: any;
  prID: any;
  dateF:any;
  dateT:any;


  
  
  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
    this.prID = params["ProductID"];
    this.shID = params["ShopID"];
    this.price = params["Price"];
    this.dateF= params["DateFrom"];
    this.dateT=params["DateTo"];
});}

  ngOnInit() {
    
    console.log(this.prID,this.shID,this.price);
  }

}
