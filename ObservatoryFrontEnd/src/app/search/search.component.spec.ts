import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { APP_BASE_HREF } from '@angular/common';
import { SearchbarComponent} from '../searchbar/searchbar.component'
import { SearchfiltersComponent} from '../searchfilters/searchfilters.component'
import { SearchresultsComponent} from '../searchresults/searchresults.component'
import { PriceComponent} from '../price/price.component'

import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';    
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TextMaskModule } from 'angular2-text-mask';
import {MatButtonModule, MatCheckboxModule,MatSelectModule, MatInputModule} from '@angular/material';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Ng5SliderModule } from 'ng5-slider';
import { DataService } from "../data.service";
import { DatePipe } from '@angular/common';
import { AgmCoreModule, GoogleMapsAPIWrapper, MapsAPILoader, AgmMap } from '@agm/core';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          Ng5SliderModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatSelectModule, 
        MatInputModule,
       TextMaskModule,
        FormsModule,
        RouterModule.forRoot([]), 
        HttpClientModule,
        HttpModule,
        HttpClientTestingModule,
        DatePickerModule,AgmCoreModule
        ],
        declarations: [ SearchComponent,SearchfiltersComponent, SearchresultsComponent,SearchbarComponent,PriceComponent ],
        providers: [
        { provide: APP_BASE_HREF, useValue : '/' },DataService,DatePipe
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
