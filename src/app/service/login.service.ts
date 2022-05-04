import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient, private router: Router) { }

    login(username: string, password: string) {
        this.http.get<{username: string, password: string}>('http://localhost:3000/auth').subscribe(data => {
            if (data.username == username && data.password == password) {
                localStorage.setItem('username', data.username);
                this.router.navigate(['home']);
            }
        });
    }
}