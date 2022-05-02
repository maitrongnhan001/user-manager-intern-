import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { updateUser } from '../store/actions/user.action';
import { selectUserById } from '../store/selecters/user.selector';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  userFormControl: FormGroup;
  userIndex:number
  userInformation: UserModel = new UserModel();


  constructor(
    private store: Store,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.userIndex = parseInt(this.activatedRouter.snapshot.paramMap.get('index') as string);
    const userInformation$: Observable<UserModel> = this.store.select(selectUserById, {index: this.userIndex});
    userInformation$.subscribe(data => {
      this.userInformation = data;
    })

    this.userFormControl = new FormGroup({
      firstName: new FormControl(this.userInformation.firstName, Validators.required),
      lastName: new FormControl(this.userInformation.lastName , Validators.required),
      email: new FormControl(this.userInformation.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.userInformation.phone, Validators.required),
      DOB: new FormControl(this.userInformation.DOB),
      status: new FormControl(this.userInformation.status, Validators.required),
    });

    //console.log(this.userInformation.DOB?.get)
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

  ngOnInit(): void {}

  handleSubmit() :void {
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

    this.store.dispatch(updateUser({index: this.userIndex, user: user}));
    this.router.navigate(['home']);
  }

}
