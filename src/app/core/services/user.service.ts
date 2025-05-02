import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, LoginModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUser!: any;
  
  constructor(private http: HttpClient) {
    debugger; 
    this.setLoggedUser();
  }

  setLoggedUser() {
    const loggedUser = localStorage.getItem(Constant.LOCAL_STORAGE_KEY);
    if (loggedUser != null) {
      this.loggedUser = JSON.parse(loggedUser)
    }
  }

  loginUser(loginObj: LoginModel): Observable<IUser> {
    debugger;
    return this.http.post<IUser>("https://motopartz.gerasim.in/api/Employee/login", loginObj);
  }
}
