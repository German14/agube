import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private localStorageItemReference = 'user';
  private userSubject: BehaviorSubject<User>;

  public user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem(this.localStorageItemReference))
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    // FIXME: return decoded User not token
    return this.userSubject.value;
  }

  public login(username, password): any {
    return this.http
      .post<User>(`${environment.agubeBackendUrl}/token/auth`, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(
            this.localStorageItemReference,
            JSON.stringify(user)
          );
          this.userSubject.next(user);
          return user;
        })
      );
  }

  public refresh(): any {
    return this.http
      .post<User>(`${environment.agubeBackendUrl}/token/refresh`, {
        token: this.userValue.token,
      })
      .pipe(
        map((user) => {
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(
              this.localStorageItemReference,
              JSON.stringify(user)
            );
            this.userSubject.next(user);
          }
          return user;
        })
      );
  }

  public logout(): void {
    // remove user from local storage and set current user to null
    localStorage.removeItem(this.localStorageItemReference);
    this.userSubject.next(null);
    this.router.navigate(['/account/login']);
  }

  public register(user: User): any {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }
}
