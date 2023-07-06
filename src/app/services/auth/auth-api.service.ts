import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  userData: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    this.alreadyLogin();
  }

  alreadyLogin(): void {
    if (localStorage.getItem('userToken') != null) {
      this.saveUserData();
    }
  }

  saveUserData() {
    let encodeToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodeToken: object = jwtDecode(encodeToken);
    this.userData.next(decodeToken);
  }

  signUp(userData: object): Observable<any> {
    return this._HttpClient.post(`http://accountbased.somee.com/api/Account/Register`, userData);
  }

  signIn(userData: object): Observable<any> {
    return this._HttpClient.post(`http://accountbased.somee.com/api/Account/Login`, userData);
  }

  signOut() {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem('userToken');
      this.userData.next(null);
      this._Router.navigate(['/login']);
    }
  }
  
}
