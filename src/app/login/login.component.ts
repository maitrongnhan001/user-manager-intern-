import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormControl: FormGroup
  errorLogin: boolean = false;

  constructor(private router: Router) {
    this.loginFormControl = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  get getEmail (): AbstractControl {
    return this.loginFormControl.get('email')!;
  }

  get getPassword (): AbstractControl {
    return this.loginFormControl.get('password')!;
  }

  ngOnInit(): void {
  }

  handleSubmit():void {
    this.loginFormControl.markAllAsTouched();
    if (this.loginFormControl.invalid) return;

    if (this.getEmail.value == 'maitrongnhan.001@gmail.com') {
      if (this.getPassword.value == '12345') {
        this.router.navigate(['home']);
        this.errorLogin = false;
        return;
      }
    } 
    this.errorLogin = true;
  }
}
