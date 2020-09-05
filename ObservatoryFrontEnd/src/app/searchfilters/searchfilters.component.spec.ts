import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfiltersComponent } from './searchfilters.component';
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
import { APP_BASE_HREF } from '@angular/common';
import { DataService } from "../data.service";
import { DatePipe } from '@angular/common';


describe('SearchfiltersComponent', () => {
  let component: SearchfiltersComponent;
  let fixture: ComponentFixture<SearchfiltersComponent>;

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
        DatePickerModule,

        ],
      declarations: [ SearchfiltersComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },DataService,DatePipe
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
