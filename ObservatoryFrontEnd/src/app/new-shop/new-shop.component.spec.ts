import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule, Component } from '@angular/core';
import { NewShopComponent } from './new-shop.component';
import {RouterModule,Routes} from '@angular/router';    
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatCheckboxModule,MatSelectModule, MatInputModule} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule, GoogleMapsAPIWrapper, MapsAPILoader, AgmMap } from '@agm/core';
import { APP_BASE_HREF } from '@angular/common';


describe('NewShopComponent', () => {
  let component: NewShopComponent;
  let fixture: ComponentFixture<NewShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterModule.forRoot([]), 
        HttpClientModule,
        HttpModule,
        HttpClientTestingModule,
        FormsModule,
        NgbModule,
        MatButtonModule, 
        MatCheckboxModule,
        MatSelectModule, 
        MatInputModule,
        NoopAnimationsModule,
        AgmCoreModule
       ],
      declarations: [ NewShopComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
