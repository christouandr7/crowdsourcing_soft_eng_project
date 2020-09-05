import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { flatMap, map} from 'rxjs/operators';



import { User } from 'src/app/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    register(data:any) {
        return this.http.post<any>(`http://localhost:8764/observatory/api/register`,
          {
            "username": data.username,
            "email": data.email,
            "password": data.password,
            "firstname": data.firstname,
            "lastname": data.lastname,
            "date_of_birth": data.date_of_birth,
            "gender": data.gender,
            "phone_num": data.phone_num
          })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    login(username: string, password: string) {
        return this.http.post<any>(`http://localhost:8764/observatory/api/login`, { username, password })
            .pipe(map(user => {
              console.log("user",user);
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }




    logout() {
      return this.http.post<any>(`http://localhost:8764/observatory/api/logout`,null)
        .subscribe((msg) => {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
      });
    }
}
