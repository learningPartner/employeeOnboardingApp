import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, LoginModel } from '../models/user.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { APIMethodConstant, Constant } from '../constant/Constant';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUser!: any;
  loggedRole: string ='';
  apiUrl: string = environment.API_URL;


  loggedInUser$ : Subject<any> = new Subject<any>;

  loggedDataBehvaiour : BehaviorSubject< any> = new BehaviorSubject<any>({});

  roleChange$ : Subject<any> = new Subject<any>;


  
  constructor(private http: HttpClient) {
     
    this.setLoggedUser();
    const role = localStorage.getItem("empRole")
    if(role != null) {
       this.loggedRole  = role;
    }
   
  }

  setLoggedUser() {
    const loggedUser = localStorage.getItem(Constant.LOCAL_STORAGE_KEY);
    if (loggedUser != null) {
      this.loggedUser = JSON.parse(loggedUser)
    }
  }

  loginUser(loginObj: LoginModel): Observable<IUser> {
    
    return this.http.post<IUser>(`${this.apiUrl}${APIMethodConstant.EMPLOYEE.LOGIN}`, loginObj);
  }

  loginJwtUser(loginObj: any): Observable<IUser> {
    
    return this.http.post<IUser>(`https://api.freeprojectapi.com/api/UserApp/login`, loginObj);
  }
}
