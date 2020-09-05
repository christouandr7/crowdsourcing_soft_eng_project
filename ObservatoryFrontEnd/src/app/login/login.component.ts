import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};

  returnUrl: string;
  error = '';
  nomatch: boolean = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private http: HttpClient

  ) {
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      window.scroll(0,0);
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  onSubmit() {
    var username=this.model.username;
    var password=this.model.password;
    this.http.post<any>(`http://localhost:8764/observatory/api/login`, { username, password })
      .subscribe((token)=>{
        let headers = new HttpHeaders({
          'x-observatory-auth': token.token
        });
        this.http.get<any>(`http://localhost:8764/observatory/api/me`,{ headers: headers })
          .subscribe((user)=> {
            if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.authenticationService.currentUserSubject.next(user);
              this.router.navigate([this.returnUrl]);
            }
          })
      },
      error => {
        console.log("error",error);
        this.nomatch = true;
      });
  }


}
