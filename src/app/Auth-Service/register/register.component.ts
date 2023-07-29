import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  registerData!: FormGroup; // Use non-null assertion operator
  hide = true;
  isLoading = false;

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('userToken') != null) {
      this._Router.navigate(['/']);
    }
    this.registerForm();
  }

  registerForm(): void {
    this.isLoading = true;
    this.registerData = new FormGroup({
      firstName: new FormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.required
      ]),
      lastName: new FormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.required
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.pattern(/^[a-z0-9]{3,}$/),
        Validators.required
      ])
    });
  }

  signUp(formGroup: FormGroup): void {
    this.isLoading = true;
    this._AuthService.signUp(formGroup.value).subscribe({
      next: (response) => {
        console.log(response);
        this._Router.navigate(['/login']);
        // Go to Home
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
