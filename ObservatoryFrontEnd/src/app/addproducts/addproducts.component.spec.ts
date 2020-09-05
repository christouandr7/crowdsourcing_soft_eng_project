import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddproductsComponent } from './addproducts.component';
import {MatButtonModule, MatCheckboxModule,MatSelectModule, MatInputModule} from '@angular/material';
import { UixMatNumberSpinnerModule } from "uix-mat-number-spinner";
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule,Routes} from '@angular/router';    
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';


describe('AddproductsComponent', () => {
  let component: AddproductsComponent;
  let fixture: ComponentFixture<AddproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatSelectModule, 
        MatInputModule,
        DatePickerModule,
        UixMatNumberSpinnerModule,
        RouterModule.forRoot([]), 
        HttpClientModule,
        HttpModule,
        HttpClientTestingModule,
        NoopAnimationsModule
        ],
      declarations: [ AddproductsComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
