var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactresponseComponent } from './contactresponse/contactresponse.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { PriceComponent } from './price/price.component';
import { ProfileComponent } from './profile/profile.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NewShopComponent } from './new-shop/new-shop.component';
import { PriceresponseComponent } from './priceresponse/priceresponse.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AuthGuard } from './_guards';
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'contactresp', component: ContactresponseComponent },
    { path: 'searchresults', component: SearchresultsComponent },
    { path: 'searchresults/:searchAttribute', component: SearchresultsComponent },
    { path: 'price/:_id', component: PriceComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'addproducts', component: AddproductsComponent, canActivate: [AuthGuard] },
    { path: 'new-product', component: NewProductComponent, canActivate: [AuthGuard] },
    { path: 'new-shop', component: NewShopComponent, canActivate: [AuthGuard] },
    { path: 'priceresponse', component: PriceresponseComponent },
    { path: 'adminpage', component: AdminpageComponent, canActivate: [AuthGuard], data: { admin: [true] } },
    { path: 'priceresponse/:response', component: PriceresponseComponent },
    { path: '**', component: NotfoundComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
export var routingComponents = [AdminpageComponent, PriceComponent, SearchresultsComponent, AboutComponent, HomeComponent, LoginComponent, ContactComponent, RegisterComponent, NotfoundComponent, ContactresponseComponent, ProfileComponent];
//# sourceMappingURL=app-routing.module.js.map