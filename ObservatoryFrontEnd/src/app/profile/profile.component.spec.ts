import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';    
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TextMaskModule } from 'angular2-text-mask';
import {MatButtonModule, MatCheckboxModule,MatSelectModule, MatInputModule} from '@angular/material';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { APP_BASE_HREF } from '@angular/common';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  
beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule,
                              platformBrowserDynamicTesting());
});


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
        ],
      declarations: [ ProfileComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
