import { Component, ViewChild, OnInit } from '@angular/core';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AgmCoreModule, GoogleMapsAPIWrapper, MapsAPILoader, AgmMap } from '@agm/core';

import { BrowserModule } from '@angular/platform-browser';
import { TextMaskModule } from 'angular2-text-mask';
import { providerDef } from '@angular/core/src/view';
declare var google;

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss']
})

export class AddproductsComponent implements OnInit {

  getToday() {
    var today = new Date();
    var todayy: string;
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();


    todayy = yyyy + "-" + mm + "-" + dd;
    return todayy;
  }

  public minDate: Date = new Date("01/01/2019");
  public maxDate: Date = new Date("12/12/2100");
  public minDateTo: Date = new Date(this.getToday());

  public shown = false;
  public shown1 = false;


 

  response: any;
  pr: any = {};
  params: any;
  mm: string;
  dd: string;
  yyyy: string;
 

  dateMod(longDate) {

    this.params = longDate.split(" ");
    this.mm = this.params[1];
    switch (this.mm) {
      case "Jan":
        this.mm = "01";
        break;
      case "Feb":
        this.mm = "02";
        break;
      case "Mar":
        this.mm = "03";
        break;
      case "Apr":
        this.mm = "04";
        break;
      case "May":
        this.mm = "05";
        break;
      case "Jun":
        this.mm = "06";
        break;
      case "Jul":
        this.mm = "07";
        break;
      case "Aug":
        this.mm = "08";
        break;
      case "Sep":
        this.mm = "09";
        break;
      case "Oct":
        this.mm = "10";
        break;
      case "Nov":
        this.mm = "11";
        break;
      case "Dec":
        this.mm = "12";
        break;
    }
    this.dd = this.params[2];
    this.yyyy = this.params[3];
    return this.yyyy + "-" + this.mm + "-" + this.dd;
  }

  
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  selectedOption: string;
  selectedOption2: string;
  selectedOption3: string;
  number1: number = 0;
  options = [];
  options2 = [];
  prod: any = {};
  shp: any = {};
  newPrice: any = {};
  ret = [];
  ip: any = location.hostname
  count: number = 0;
  newProd: any;
  newShop: any;
  dis:boolean=false;

  onSubmit() {

    if (this.pr.dateTo == null || this.pr.dateTo == "") {
      
      let newDate = new Date(this.getToday());
      this.pr.dateTo = this.dateMod(newDate.toString());
      console.log("{dateTo:" + this.pr.dateTo + "}");
    } else {
      console.log("{dateTo:" + this.dateMod(this.pr.dateTo.toString()) + "}");
    }

    if (this.pr.dateFrom == null || this.pr.dateFrom == "") {

      let newDate = new Date(this.getToday());
      this.pr.dateFrom = this.dateMod(newDate.toString());
      

      console.log("{dateFrom:" + this.pr.dateFrom + "}");
    } else {
      console.log("{dateFrom:" + this.dateMod(this.pr.dateFrom.toString()) + "}");
    }


    this.newPrice.price = this.number1;
    this.newPrice.dateFrom = this.dateMod(this.pr.dateFrom.toString());
    this.newPrice.dateTo = this.dateMod(this.pr.dateTo.toString());
    this.newPrice.productId=this.selectedOption;
    this.newPrice.shopId=this.selectedOption2;


    this.http.post("http://" + this.ip + ":8764/observatory/api/prices", this.newPrice)
      .subscribe(
        data => {
        //  console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }
      );


    let navigationExtras: NavigationExtras = {
      queryParams: {
        "ProductID": this.selectedOption,
        "ShopID": this.selectedOption2,
        "Price": this.number1,
        "DateFrom": this.newPrice.dateFrom,
        "DateTo": this.newPrice.dateTo,
      }
    };

    this.router.navigate(['/priceresponse/'], navigationExtras);

  }


  prodPage(){
    this.dis=true;
    this.router.navigate(['/new-product/']);
    
  }

  shopPage(){
    this.dis=true;
    this.router.navigate(['/new-shop/']);
    
  }


  ngOnInit() {
    window.scroll(0, 0);
    var c = 0;
    var s = 0;
    var ip = location.hostname;

    this.http.get('http://' + ip + ':8764/observatory/api/products?count=1000')
      //https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
      .subscribe((response) => {
        this.response = response;
        for (var i = 0; i < this.response.products.length; i++) {
          this.options[c] = this.response.products[i];
          c++;
        }
      })
  

    this.http.get('http://' + ip + ':8764/observatory/api/shops?count=1000')
      //https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
      .subscribe((response) => {
        this.response = response;
        for (var i = 0; i < this.response.shops.length; i++) {
          this.options2[s] = this.response.shops[i];
          s++;
        }

      })


  }


  res = this.options;
  res2 = this.options2;
  
  np = this.newProd;

}
