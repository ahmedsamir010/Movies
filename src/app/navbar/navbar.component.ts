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
    this.userName = this._AuthApiService.userData.getValue().first_name;
  }

  alreadyLogin() {
    this._AuthApiService.userData.subscribe({
      next: () => {
        if (this._AuthApiService.userData.getValue() != null) {
          this.isLogin = true;
        } else {
          console.log("Hello not Guard");
          this.isLogin = false;
        }
      }
    });
  }

  logOut() {
    this._AuthApiService.signOut();
  }
}
