import { async, TestBed } from '@angular/core/testing';
import { SearchresultsComponent } from './searchresults.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TextMaskModule } from 'angular2-text-mask';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule } from '@angular/material';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { SearchfiltersComponent } from '../searchfilters/searchfilters.component';
import { Ng5SliderModule } from 'ng5-slider';
import { APP_BASE_HREF } from '@angular/common';
describe('SearchresultsComponent', function () {
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
                DatePickerModule,
                Ng5SliderModule
            ],
            declarations: [SearchresultsComponent, SearchbarComponent, SearchfiltersComponent],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SearchresultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=searchresults.component.spec.js.map