import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
declare var google;

@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.scss']
})
export class NewShopComponent implements OnInit {


  inputvalue: any;
  locationChosen = false;
  lat: number = 37.97945;
  lng: number = 23.71622;
  showMapBoolean: boolean = false;
  geocoder: any;
  shop: any = {};
  shp: any = {};
  ip: any = location.hostname;
  response: any;
  addr:boolean=true;
  duplicate: boolean = false;


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.lat = this.lat;
    this.lng = this.lng;
  }

  onSubmit() {
    this.shp.name = this.shop.sname;
    this.shp.address = this.shop.address;
    this.shp.lng = this.lng;
    this.shp.lat = this.lat;
    if(this.shop.tagsS!=null){
    this.shp.tags = this.shop.tagsS.split(" ");}
    else {this.shp.tags=[];}
    this.shp.tags = this.shp.tags.concat(this.shp.name.split(" "));
    this.shp.tags = this.shp.tags.concat(this.shp.address.split(" "));

    for (var i = 0; i < this.shp.tags.length; i++) {
      if (!isNaN(this.shp.tags[i])) {
        this.shp.tags.splice(i, 1);
        i--;
      } else if (! /^[a-zA-Zα-ωΑ-ΩΆ-Ώά-ώ]+$/.test(this.shp.tags[i])) {
        this.shp.tags.splice(i, 1);
        i--;
      }
      else if (this.shp.tags[i].length == 1) { 
      this.shp.tags.splice(i, 1);
      i--;
    }
  }
    this.http.post("http://" + this.ip + ":8764/observatory/api/shops", this.shp)
      .subscribe((response) => {
        console.log("POST Request is successful ", response);
        setTimeout(() => { this.router.navigate(['/addproducts/']) }, 1000);
      },
        error => {
          if (error = "Not Acceptable") {
            this.duplicate = true;
          }
          console.log("Error", error);
        }
      ) 

  }



  onChosenLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    console.log(this.lat);
    console.log(this.lng);
    this.locationChosen = true;

    if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
    this.geocoder.geocode({
      'location': {
        lat: this.lat,
        lng: this.lng
      }
    }, (results, status) => {
      this.shop.address = results[0].formatted_address;
      console.log(this.shop.address);
      (document.getElementById("address") as HTMLInputElement).value = this.shop.address;

    })

  }

  //https://blog.ng-book.com/angular-and-google-maps-a-tutorial/
  showMap() {
    if (this.showMapBoolean) this.showMapBoolean = false;
    else this.showMapBoolean = true;
    this.addr=false;
  }



  findLocation(address) {
    if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
    this.geocoder.geocode({
      'address': address
    }, (results, status) => {
      console.log(results);
      if (status == google.maps.GeocoderStatus.OK) {
        this.lat = results[0].geometry.location.lat();
        this.lng = results[0].geometry.location.lng();
        this.shop.address = results[0].formatted_address;
        console.log(this.lat);
        console.log(this.lng);
        console.log(this.shop.address);
        (document.getElementById("address") as HTMLInputElement).value = this.shop.address;
      }
      else {
        alert("Sorry, this search produced no results.");
      }

    })
  }

  findAddress() {
    if (this.shop.address == null) alert("Δώσε έγκυρη διεύθυνση!");
    else {
      console.log(this.shop.address);
      this.findLocation(this.shop.address);
    }
  }

  refresh(){}
  


}
