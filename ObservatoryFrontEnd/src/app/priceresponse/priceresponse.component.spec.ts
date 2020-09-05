import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceresponseComponent } from './priceresponse.component';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';    
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

describe('PriceresponseComponent', () => {
  let component: PriceresponseComponent;
  let fixture: ComponentFixture<PriceresponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterModule.forRoot([]), 
        HttpClientModule,
        HttpModule,
        HttpClientTestingModule,
        ],
      declarations: [ PriceresponseComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
