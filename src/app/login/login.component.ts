import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from '../services/auth/auth-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  loginData!: FormGroup;
  hide = true;
  isLoading: boolean = false;

  constructor(private _AuthApiService: AuthApiService, private _Router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('userToken') != null) {
      this._Router.navigate(['/home']);
    }
    this.loginForm();
  }

  loginForm(): void {
    this.isLoading = false;
    this.loginData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.pattern(/^[a-zA-Z0-9]{3,}$/),
        Validators.required
      ]),
    });
  }

  signIn(): void {
    if (this.loginData.invalid) {
      return;
    }
    
    this.isLoading = true;
    this._AuthApiService.signIn(this.loginData.value).subscribe({
      next: (response) => {
        localStorage.setItem('userToken', response.token);
        this._AuthApiService.saveUserData();
        this._Router.navigate(['/home']);
      },
      error: (error) => {
        this.errorMessage = 'An error occurred. Please try again.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }
}
