import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserModel } from '../model/user.model';
import { addUser } from '../store/actions/user.action';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userFormControl: FormGroup;

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.userFormControl = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required),
      DOB: new FormControl(null),
      status: new FormControl(null, Validators.required),
      social: new FormGroup({
        facebook: new FormControl(null),
        linkedin: new FormControl(null),
        twitter: new FormControl(null)
      })
    });
  }

  get getFirstName(): AbstractControl {
    return this.userFormControl.get('firstName')!;
  }
  get getLastName(): AbstractControl {
    return this.userFormControl.get('lastName')!;
  }

  get getEmail(): AbstractControl {
    return this.userFormControl.get('email')!;
  }

  get getPhone(): AbstractControl {
    return this.userFormControl.get('phone')!;
  }

  get getDOB(): AbstractControl {
    return this.userFormControl.get('DOB')!;
  }

  get getStatus(): AbstractControl {
    return this.userFormControl.get('status')!;
  }

  get getFacebook(): AbstractControl {
    return this.userFormControl.get('social')?.get('facebook')!;
  }

  get getLinkedIn(): AbstractControl {
    return this.userFormControl.get('social')?.get('linkedin')!;
  }

  get getTwitter(): AbstractControl {
    return this.userFormControl.get('social')?.get('twitter')!;
  }

  ngOnInit(): void {
  }

  handleSubmit():void {
    this.userFormControl.markAllAsTouched();

    if (this.userFormControl.invalid) return;

    const user: UserModel = this.userFormControl.value;
    this.store.dispatch(addUser({user: user}));
    this.router.navigate(['home']);
  }

}
