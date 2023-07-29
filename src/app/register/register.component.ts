import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from '../services/auth/auth-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  registerData!: FormGroup;
  hide = true;
  isLoading = false;

  constructor(private _AuthApiService: AuthApiService, private _Router: Router) {
    if (localStorage.getItem("userToken") != null) {
      this._Router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.registerForm();
  }

  registerForm() {
    this.isLoading = false;
    this.registerData = new FormGroup({
      name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.pattern(/^[a-zA-Z0-9]{3,}$/), Validators.required]),
      rePassword: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.pattern(/^01\d{9}$/), Validators.required]),
    }, { validators: this.passwordMatchValidator });
  }

  // Custom validator function to check if "Password" and "Re-enter password" match
  passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const rePassword = control.get('rePassword');

    if (!password || !rePassword) {
      return null; // If either control is null, return null to avoid validation errors
    }

    if (password.value !== rePassword.value) {
      rePassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      rePassword.setErrors(null);
      return null;
    }
  };

  signUp(): void {
    console.log('SignUp button clicked');
    if (this.registerData.invalid) {
      return;
    }

    this.isLoading = true;

    console.log('Form data to be submitted:', this.registerData.value);

    this._AuthApiService.signUp(this.registerData.value).subscribe({
      next: () => {
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
