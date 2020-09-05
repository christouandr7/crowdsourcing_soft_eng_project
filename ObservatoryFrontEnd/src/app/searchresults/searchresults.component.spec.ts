import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchresultsComponent } from './searchresults.component';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';    
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TextMaskModule } from 'angular2-text-mask';
import {MatButtonModule, MatCheckboxModule,MatSelectModule, MatInputModule} from '@angular/material';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { SearchfiltersComponent } from '../searchfilters/searchfilters.component';
import { Ng5SliderModule } from 'ng5-slider';
import { APP_BASE_HREF } from '@angular/common';
import { DataService } from "../data.service";
import { DatePipe } from '@angular/common';


describe('SearchresultsComponent', () => {
  let component: SearchresultsComponent;
  let fixture: ComponentFixture<SearchresultsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
            imports: [
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
        Ng5SliderModule
        ],
      declarations: [ SearchresultsComponent,SearchbarComponent,SearchfiltersComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },DataService,DatePipe
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
