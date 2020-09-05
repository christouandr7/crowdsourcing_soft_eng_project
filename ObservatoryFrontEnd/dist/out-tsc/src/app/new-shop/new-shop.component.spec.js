import { async, TestBed } from '@angular/core/testing';
import { NewShopComponent } from './new-shop.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { APP_BASE_HREF } from '@angular/common';
describe('NewShopComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
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
            declarations: [NewShopComponent],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NewShopComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=new-shop.component.spec.js.map