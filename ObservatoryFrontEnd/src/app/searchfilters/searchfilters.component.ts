import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TextMaskModule } from 'angular2-text-mask';
import { AuthenticationService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { Options } from 'ng5-slider';
import { DataService } from "../data.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-searchfilters',
  templateUrl: './searchfilters.component.html',
  styleUrls: ['./searchfilters.component.scss']
})
export class SearchfiltersComponent implements OnInit {

  showFirst = true;
  isValid = true;
  latitude: any;
  longitude: any;
  query: any;
  showMyLocationMarker = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private data: DataService, private datePipe: DatePipe) { }
  selectedSortField: string = "price";
  selectedSorting: string = "ASC";
  dateValueFrom: string = null;
  dateValueTo: string = null;
  value: number = null;
  options: Options = {
    showTicks: true,
    showSelectionBar: true,
    stepsArray: [
    {value: 2},
    {value: 5},
    {value: 10},
    {value: null}
    ],
    translate: (value: number): string => {
      switch (value) {
        case null:
        return 'Όλα';
        default:
        return value + ' miles';
      }
    }
  };

  value2: number = 20;
  options2: Options = {
    showTicks: true,
    showSelectionBar: true,
    stepsArray: [
    {value: 5},
    {value: 10},
    {value: 20},
    {value: 40}
    ]
  };
  geolocationPosition: any;
  location(){
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position, 
          console.log(position)
          this.latitude = this.geolocationPosition.coords.latitude;
          this.longitude = this.geolocationPosition.coords.longitude;
          this.showMyLocationMarker = true;
          this.showFirst = false;

        },
        error => {
          switch (error.code) {
            case 1:
            console.log('Permission Denied');
            break;
            case 2:
            console.log('Position Unavailable');
            break;
            case 3:
            console.log('Timeout');
            break;
          }
        }
        );
    };
    
  }
  onChange1(args) {
    //dateFrom selected
    if (args.value != null)
    {
      var date = new Date(args.value);
      this.dateValueFrom = this.datePipe.transform(date,"yyyy-MM-dd")
      if (this.dateValueTo != null)
      {
        this.isValid = true;
      }
      else{
        this.isValid = false;
      }
    }
    //dateFrom not selected
    else
    {
      this.dateValueFrom = null;
      if (this.dateValueTo == null)
      {
        this.isValid = true;
      }
      else{
        this.isValid = false;
      }
    }
  }

  onChange2(args) {
    //dateTo selected
    if (args.value != null)
    {
      var date = new Date(args.value);
      this.dateValueTo = this.datePipe.transform(date,"yyyy-MM-dd")
      if (this.dateValueFrom != null)
      {
        this.isValid = true;
      }
      else{
        this.isValid = false;
      }
    }
    //dateTo not selected
    else
    {
      this.dateValueTo = null;
      if (this.dateValueFrom == null)
      {
        this.isValid = true;
      }
      else{
        this.isValid = false;
      }
    }
  }

  filter()
  {
    this.query["start"] = 0;
    this.query["page"] = 1;
    this.query["count"] = this.value2;
    this.query["sort_field"] = this.selectedSortField;
    this.query["sorting"] = this.selectedSorting;
    this.query["date_from"] = this.dateValueFrom;
    this.query["date_to"] = this.dateValueTo;
    this.query["distance"] = this.value;
    this.query["latitude"] = this.latitude;
    this.query["longitude"] = this.longitude;
    this.query["showCurrentLoc"] = this.showMyLocationMarker;
    this.data.changeQuery(this.query);
    //this.router.navigate(['/searchresults/', this.searchAttributes]);
    //location.reload();
  }

  ngOnInit() {
    this.data.currentQuery.subscribe(query => this.query = query);
  }

}



