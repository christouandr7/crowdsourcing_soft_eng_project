import { async, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MainsearchComponent } from '../mainsearch/mainsearch.component';
import { MaintextComponent } from '../maintext/maintext.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_BASE_HREF } from '@angular/common';
describe('HomeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                NgbModule,
                RouterModule.forRoot([]),
                HttpClientModule,
                HttpModule,
                HttpClientTestingModule,
                FormsModule
            ],
            declarations: [HomeComponent, MainsearchComponent, MaintextComponent],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=home.component.spec.js.map