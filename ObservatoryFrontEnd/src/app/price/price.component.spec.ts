import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchfiltersComponent } from '../searchfilters/searchfilters.component';

import { PriceComponent } from './price.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';    
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AgmCoreModule, GoogleMapsAPIWrapper, MapsAPILoader, AgmMap } from '@agm/core';
import { Ng5SliderModule } from 'ng5-slider';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { DataService } from "../data.service";

describe('PriceComponent', () => {
  let component: PriceComponent;
  let fixture: ComponentFixture<PriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [
        FormsModule,
        RouterModule.forRoot([]), 
        HttpClientModule,
        HttpModule,
        HttpClientTestingModule,
        AgmCoreModule,
        Ng5SliderModule,
        DatePickerModule,
        RouterTestingModule,
        ],
      declarations: [ PriceComponent, SearchbarComponent, SearchfiltersComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },DataService
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
