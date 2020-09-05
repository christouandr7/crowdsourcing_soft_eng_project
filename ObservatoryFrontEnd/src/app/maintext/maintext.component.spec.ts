import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintextComponent } from './maintext.component';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';    
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_BASE_HREF } from '@angular/common';


describe('MaintextComponent', () => {
  let component: MaintextComponent;
  let fixture: ComponentFixture<MaintextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports:[
        RouterModule.forRoot([]), 
        HttpClientModule,
        HttpModule,
        HttpClientTestingModule,
        FormsModule,
        NgbModule
       ],
      declarations: [ MaintextComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
