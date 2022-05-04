import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormControl: FormGroup
  errorLogin: boolean = false;

  constructor(
    private router: Router,
    private auth: LoginService
  ) {
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

    this.auth.login(this.getEmail.value, this.getPassword.value);

    if (!localStorage.getItem('username')) {
      console.log(localStorage.getItem('username'))
      this.errorLogin = true;
    }
  }
}
