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

  ngOnInit(): void {
  }

  handleSubmit():void {
    this.userFormControl.markAllAsTouched();

    if (this.userFormControl.invalid) return;

    const user: UserModel = {
      firstName: this.getFirstName.value,
      lastName: this.getLastName.value,
      email: this.getEmail.value,
      phone: this.getPhone.value,
      DOB: this.getDOB.value,
      status: this.getStatus.value
    }

    this.store.dispatch(addUser({user: user}));
    this.router.navigate(['home']);
  }

}
