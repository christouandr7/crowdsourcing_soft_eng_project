import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DataService } from "../data.service";

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  response: any;
  resp:any;
  query: any;
  product: any;
  productName: any;
  lat: number;
  lng: number;
  //showMa: any[] = [];
  showMa = [];
  showMaState = [];
  index: any;
  shopLength: number;
  constructor(private route: ActivatedRoute, private http: HttpClient, private data: DataService) { }
  results = [];
  status: string = "loading";
  ip: any;
  mylocation: string = "Η τοποθεσία σου"
  errormessage: string = "Internal Error"
  showDist:boolean;
  shopIdd:any;
  showShops: boolean = false;
  loc = [];
  icon = 'http://maps.google.com/mapfiles/kml/pal3/icon48.png'
  showMyLocationMarker = false;
  next: boolean = true;

  ConvertString(value){
    return parseFloat(value)
  }

  createDate(selected_date): string
  {
    return new Date(selected_date).toDateString();
  }

  @Output() messageEvent = new EventEmitter<string>();

  productClick(pname: string){
    this.messageEvent.emit(pname); 
  }
  prevPrice() {
    this.query["page"] = this.query["page"] - 1;
    this.query["start"] = this.query["start"] - this.query["count"];
    this.data.changeQuery(this.query);
  } 
  nextPrice() {
      this.query["page"] = this.query["page"] + 1;
      this.query["start"] = this.query["start"] + this.query["count"];
      this.data.changeQuery(this.query);
  }

  ngOnInit() {
    window.scroll(0, 0);
    //this.product = this.route.snapshot.params._id;
    //console.log(this.product);
    this.ip = location.hostname;
    this.showMyLocationMarker = false;
    /*this.http.get('http://' + this.ip + ':8764/observatory/api/prices?' + this.product)
    .subscribe((response) => {
      this.response = response;
      this.productName = this.response.pricesOut[0].productName;
      for (var i = 0; i < this.response.pricesOut.length; i++) 
      {
        this.results.push(this.response.pricesOut[i]);
        this.boo = true;
      }
    })
    */
    this.data.currentQuery.subscribe(query => 
    {
      this.next = true
      this.showMyLocationMarker =false;
      console.log("I am in Price");
      this.query = query
      console.log(query);
      this.results = [];
      this.status = "loading";

      var paging: string = 'start=' + this.query["start"] + '&count=' + this.query["count"];
      var product: string = this.query["tags"] + '&products=' + this.query["product"];
      var geo: string = "";
      var dates: string = "";
      var sort: string = '&sort=' + this.query["sort_field"] + '|' + this.query["sorting"];

      this.showMyLocationMarker = this.query["showCurrentLoc"];
      console.log(this.query["showCurrentLoc"]);

      this.loc = [];
      var lat: any;
      var lng: any;
      var k = 0;
      this.showShops = false;
      //check presence of geo filters
      if (this.query["distance"] != null && this.query["distance"] != "0" )
      {
        geo = "&geoDist=" + this.query["distance"] + "&geoLng=" + this.query["longitude"] + "&geoLat=" + this.query["latitude"];
        this.showDist=true;
      }
      else{this.showDist=false;}
      //check presence of date filters
      if (this.query["date_from"] != null && this.query["date_to"] != null)
      {
        dates = '&dateFrom=' + this.query["date_from"] +'&dateTo=' + this.query["date_to"];
      }

      var full_query = 'http://' + this.ip + ':8764/observatory/api/prices?' + paging + '&' + product + geo + dates + sort;
      console.log(full_query);
      this.http.get(full_query)
      .subscribe((response) => {
        this.response = response;

        if (this.response.pricesOut.length != 0)
        {
          if (this.response.pricesOut.length < this.query['count'])
          {
            this.next = false;
          }
          this.productName = this.response.pricesOut[0].productName;
          this.productClick(this.productName);
          for (var i = 0; i < this.response.pricesOut.length; i++) 
          {
            this.results.push(this.response.pricesOut[i]);
            this.status = "success";
            this.shopIdd = this.response.pricesOut[i].shopId;
            //console.log(this.shopIdd);

            this.http.get('http://' + this.ip + ':8764/observatory/api/shops/' + this.shopIdd)
            //https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
            .subscribe((response) => {
              this.resp = response;

              var obj = {lat : this.resp.lat, lng : this.resp.lng, name: this.resp.name, address: this.resp.address};
              this.loc[k] = obj;
              //console.log(this.loc[k]);
              k++;
            })

          }
        }
        else
        {
          this.productClick("");
          this.status = "no_results";
        }
        
        
      },

      error => {
        if (error instanceof HttpErrorResponse || error.status == 400) {
          this.status = "error";
        }
        else 

        { 
          this.status = "no_results"; 
        }


      });

      console.log(this.results);
    })

    this.http.get('http://' + this.ip + ':8764/observatory/api/shops/')
    //https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
      this.shopLength = this.response.shops.length;
      for (var i = 0; i < this.shopLength; i++) {
        this.showMa.push(this.response.shops[i]._id);
        this.showMaState.push(false);
      }
      // console.log(this.showMa);

    })
  }

  showMap(shopId) {
    this.http.get('http://' + this.ip + ':8764/observatory/api/shops/' + shopId)
    //https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present
    .subscribe((response) => {
      this.response = response;
      this.lat = this.response.lat;
      this.lng = this.response.lng;
      console.log(this.response.lat);
      console.log(this.response.lng);
      this.index = this.showMa.indexOf(shopId);

      if (this.showMaState[this.index] == true)
        this.showMaState[this.index] = false;

      else {
        for (var i = 0; i < this.shopLength; i++) {
          this.showMaState[i] = false;
        }
        this.showMaState[this.index] = true;

      }

      console.log(this.index);
      //this.showMa[index][1]=true;

    })

  }

  deletePrice(priceID){

    this.http.delete('http://' + this.ip + ':8764/observatory/api/prices/'+ priceID)
    .subscribe(response =>{
      this.response=response;
    },

    error => {
      console.log(error);


    })
    
    console.log(priceID);
    setTimeout(() => {  this.data.changeQuery(this.query) }, 300);
  }

  showAllShops(){
    if (this.showShops == false) this.showShops = true;
    else this.showShops = false;
    console.log("show shops");
  }


}
