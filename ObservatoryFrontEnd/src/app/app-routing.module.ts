import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import { ContactComponent} from './contact/contact.component';
import { RegisterComponent} from './register/register.component';
import { NotfoundComponent} from './notfound/notfound.component';
import { ContactresponseComponent} from './contactresponse/contactresponse.component';
import { SearchresultsComponent} from './searchresults/searchresults.component';
import { SearchComponent} from './search/search.component';
import { PriceComponent } from './price/price.component';
import { ProfileComponent } from './profile/profile.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import {NewProductComponent} from './new-product/new-product.component';
import {NewShopComponent} from './new-shop/new-shop.component';


import { PriceresponseComponent } from './priceresponse/priceresponse.component';
import { AdminpageComponent } from './adminpage/adminpage.component';

import { AuthGuard } from './_guards';
import { Role } from './_models';


const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'about', component : AboutComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent},
	{ path: 'contact', component: ContactComponent},
	{ path: 'register', component: RegisterComponent},
	{ path: 'contactresp' , component: ContactresponseComponent},
	{ path: 'searchresults', component: SearchComponent},
	{ path: 'searchresults/:searchAttribute', component: SearchComponent},
	{ path: 'price/:_id', component: PriceComponent},
	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
	{ path: 'addproducts',component:AddproductsComponent,canActivate: [AuthGuard]	},
	{ path: 'new-product',component:NewProductComponent,canActivate: [AuthGuard]	},
	{ path: 'new-shop',component:NewShopComponent,canActivate: [AuthGuard]	},
	{ path: 'priceresponse',component:PriceresponseComponent	},
	{ path: 'adminpage', component:AdminpageComponent ,canActivate: [AuthGuard], data: {admin: [true]}	},
	{ path: 'priceresponse/:response', component: PriceresponseComponent},
	{ path: '**' , component: NotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AdminpageComponent, PriceComponent, SearchresultsComponent, AboutComponent, HomeComponent, LoginComponent, ContactComponent, RegisterComponent, NotfoundComponent, ContactresponseComponent, ProfileComponent ]
