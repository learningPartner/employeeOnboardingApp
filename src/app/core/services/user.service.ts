import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, LoginModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { APIMethodConstant, Constant } from '../constant/Constant';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUser!: any;
  apiUrl: string = environment.API_URL;
  
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
    return this.http.post<IUser>(`${this.apiUrl}${APIMethodConstant.EMPLOYEE.LOGIN}`, loginObj);
  }

  loginJwtUser(loginObj: any): Observable<IUser> {
    debugger;
    return this.http.post<IUser>(`https://api.freeprojectapi.com/api/UserApp/login`, loginObj);
  }
}
