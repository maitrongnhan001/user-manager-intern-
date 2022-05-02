import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //--------------api method-------------//
  getAllUser():Observable<UserModel[]> {
    return this.http.get<UserModel[]>('http://localhost:3000/users');
  }
}
