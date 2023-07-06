import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../services/auth/auth-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName: string = '';
  isLogin: boolean = false;

  constructor(private _AuthApiService: AuthApiService) { }

  ngOnInit(): void {
    this.alreadyLogin();
  }

  alreadyLogin() {
    this._AuthApiService.userData.subscribe({
      next: (userData) => {
        if (userData != null) {
          this.isLogin = true;
          this.userName = userData.firstName; // Set the user's first name
        } else {
          this.isLogin = false;
          this.userName = '';
        }
      }
    });
  }

  logOut() {
    this._AuthApiService.signOut();
  }
}
