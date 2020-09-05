import { async, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TextMaskModule } from 'angular2-text-mask';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
describe('RegisterComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
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
                DatePickerModule
            ],
            declarations: [RegisterComponent],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=register.component.spec.js.map