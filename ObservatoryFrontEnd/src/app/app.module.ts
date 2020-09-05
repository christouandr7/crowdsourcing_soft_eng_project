import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import {MatButtonModule, MatCheckboxModule,MatSelectModule, MatInputModule} from '@angular/material';
import { UixMatNumberSpinnerModule } from "uix-mat-number-spinner";
import { Ng5SliderModule } from 'ng5-slider';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MaintextComponent } from './maintext/maintext.component';
import { MainsearchComponent } from './mainsearch/mainsearch.component';
import { RegisterComponent} from './register/register.component';
import { TextMaskModule } from 'angular2-text-mask';
import { ProfileComponent } from './profile/profile.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PriceresponseComponent } from './priceresponse/priceresponse.component';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { AgmCoreModule } from '@agm/core';
import { BehaviorSubject } from 'rxjs';
import { AdminpageComponent } from './adminpage/adminpage.component';
import {DatePipe} from '@angular/common';

import { JwtInterceptor } from './_helpers';
import { LoginComponent } from './login/login.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchfiltersComponent } from './searchfilters/searchfilters.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NewShopComponent } from './new-shop/new-shop.component';
import { DataService } from './data.service';
import { SearchComponent } from './search/search.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MaintextComponent,
    MainsearchComponent,
    routingComponents,
    RegisterComponent,
    ProfileComponent,
    AddproductsComponent,
    PriceresponseComponent,
    ConfirmEqualValidatorDirective,
    AdminpageComponent,
    LoginComponent,
    SearchbarComponent,
    SearchfiltersComponent,
    NewProductComponent,
    NewShopComponent,
    SearchComponent,
    SearchresultsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    DatePickerModule,
    TextMaskModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    UixMatNumberSpinnerModule,
    Ng5SliderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCxthBcp0Dzs9cNbJ6nKe-S1EOhxW77PNw'
    })

  ],
  providers: [DataService, DatePipe, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }/*,
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
