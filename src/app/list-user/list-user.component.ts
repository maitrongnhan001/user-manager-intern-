import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { elementAt, Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { UserService } from '../service/user.service';
import { addUsers, deleteUser, updateUser } from '../store/actions/user.action';
import { searchUser, selectQuantityUser, selectUserLimit } from '../store/selecters/user.selector';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})

export class ListUserComponent implements OnInit {
  listUser: { statusEmail: boolean, emailShow: string, user: UserModel }[] = [];
  listUserObservable$: Observable<UserModel[]>;
  page: number = 1;
  quantityPage: number = 0;


  constructor(
    private store: Store,
    private router: Router,
    private usersAPI: UserService
  ) {
    //because start element in user store start in 0, so this page must sub 1
    const startPosition = (this.page - 1) * 10;
    this.listUserObservable$ = this.store.select(selectUserLimit, { index: startPosition });
    this.listUserObservable$.subscribe(data => {
      data.map(element => {
        let emailArr = element.email.split('');
        const index = emailArr.indexOf('@');
        const endIndex = emailArr.lastIndexOf('.');
        for (let i = index + 1; i < endIndex; i++) {
          emailArr[i] = '*';
        }
        emailArr[index - 1] = '*';
        emailArr[index - 2] = '*';
        emailArr[index - 3] = '*';

        const emailString = emailArr.join('');
        this.listUser.push({ statusEmail: false, emailShow: emailString, user: element });
      });
    });

    const quantityUser$ = this.store.select(selectQuantityUser);
    quantityUser$.subscribe(data => {
      this.quantityPage = Math.ceil(data / 10);
    })
  }

  ngOnInit(): void {
    if (!(this.listUser.length > 0)) {
      this.usersAPI.getAllUser().subscribe(data => {
        this.store.dispatch(addUsers({users: data}))
      })
    }
  }

  handleClickPageNumber(pageNumber: number): void {
    this.page = pageNumber;
    //because start element in user store start in 0, so this page must sub 1
    const startPosition = (pageNumber - 1) * 10;
    this.listUserObservable$ = this.store.select(selectUserLimit, { index: startPosition });
    this.listUser = [];
    this.listUserObservable$.subscribe(data => {
      data.map(element => {
        let emailArr = element.email.split('');
        const index = emailArr.indexOf('@');
        const endIndex = emailArr.lastIndexOf('.');
        for (let i = index + 1; i < endIndex; i++) {
          emailArr[i] = '*';
        }
        emailArr[index - 1] = '*';
        emailArr[index - 2] = '*';
        emailArr[index - 3] = '*';

        const emailString = emailArr.join('');
        this.listUser.push({ statusEmail: false, emailShow: emailString, user: element });
      });
    });
  }

  handleClickEdit(index: number): void {
    this.router.navigate(['home', 'edit', index]);
  }

  handleClickRemove(index: number): void {
    this.store.dispatch(deleteUser({ index: index }));
  }

  handleSearch(value: string): void {
    if (value.length == 0) return;

    this.listUserObservable$ = this.store.select(searchUser, { searchContent: value });

    this.listUserObservable$.subscribe(data => {
      this.listUser = []
      data.map(element => {
        let emailArr = element.email.split('');
        const index = emailArr.indexOf('@');
        const endIndex = emailArr.lastIndexOf('.');
        for (let i = index + 1; i < endIndex; i++) {
          emailArr[i] = '*';
        }
        emailArr[index - 1] = '*';
        emailArr[index - 2] = '*';
        emailArr[index - 3] = '*';

        const emailString = emailArr.join('');
        this.listUser.push({ statusEmail: false, emailShow: emailString, user: element });
      });
    })
  }

  handleSort(value: string): void {
    const intValue = parseInt(value);
    switch (intValue) {
      case 1: {
        this.listUser.sort((a, b) => a.user.lastName.localeCompare(b.user.lastName));
        break;
      }

      case 2: {
        this.listUser.sort((a, b) => {
          const aEmail = a.user.email.split('@')[0];
          const bEmail = b.user.email.split('@')[0];
          return aEmail.localeCompare(bEmail);
        });
        break;
      }
      case 3: {
        this.listUser.sort((a, b) => {
          const aPhone = a.user.phone.slice(-3);
          const bPhone = b.user.phone.slice(-3);
          return aPhone.localeCompare(bPhone);
        });
        break;
      }
      case 4: {
        this.listUser.sort((a, b) => {
          if (a.user.status > b.user.status) return 1;
          return -1;
        });
        break;
      }
    }
  }

  handleChangeStatus(value: string, index: number): void {
    let user = { ...this.listUser[index].user };
    user.status = parseInt(value);
    this.store.dispatch(updateUser({ index: index, user: user }));
  }

  showEmail(isShow: boolean, index: number): void {
    if (isShow) {
      this.listUser[index].emailShow = this.listUser[index].user.email;
    } else {
      let emailArr = this.listUser[index].user.email.split('');
      const startIndex = emailArr.indexOf('@');
      const endIndex = emailArr.lastIndexOf('.');
      for (let i = startIndex + 1; i < endIndex; i++) {
        emailArr[i] = '*';
      }
      emailArr[startIndex - 1] = '*';
      emailArr[startIndex - 2] = '*';
      emailArr[startIndex - 3] = '*';

      const emailString = emailArr.join('');
      this.listUser[index].emailShow = emailString;
    }
    this.listUser[index].statusEmail = isShow;
  }

}
