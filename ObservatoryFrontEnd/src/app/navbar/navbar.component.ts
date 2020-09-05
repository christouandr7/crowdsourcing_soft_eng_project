import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services';
import { User, Role } from 'src/app/_models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User;

     constructor(
         private router: Router,
         private authenticationService: AuthenticationService
     ) {
         this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

     get isAdmin() {
         return this.currentUser && this.currentUser.admin;
     }

     get isUser() {
       return this.currentUser;
     }

     logout() {
         this.authenticationService.logout();
         this.router.navigate(['/login']);
     }

  ngOnInit() {
  }

}
