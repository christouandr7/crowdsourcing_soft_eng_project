import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddproductsComponent } from './addproducts.component';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule } from '@angular/material';
import { UixMatNumberSpinnerModule } from "uix-mat-number-spinner";
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
describe('AddproductsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
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
            declarations: [AddproductsComponent],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddproductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=addproducts.component.spec.js.map