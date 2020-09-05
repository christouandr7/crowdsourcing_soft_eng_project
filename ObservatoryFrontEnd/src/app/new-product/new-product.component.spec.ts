import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatCheckboxModule,MatSelectModule, MatInputModule} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NewProductComponent } from './new-product.component';
import {RouterModule,Routes} from '@angular/router';    
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

describe('NewProductComponent', () => {
  let component: NewProductComponent;
  let fixture: ComponentFixture<NewProductComponent>;

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
        NoopAnimationsModule
       ],
      declarations: [ NewProductComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
