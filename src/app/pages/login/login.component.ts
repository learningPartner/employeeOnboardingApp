import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {IUser, LoginModel} from '../../core/models/user.model'
import { UserService } from '../../core/services/user.service';
import { Constant, ValidationConstant } from '../../core/constant/Constant';
import { ReadConstPipe } from '../../shared/pipe/read-const.pipe';

@Component({
  selector: 'app-login',
  imports: [FormsModule,ReadConstPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: LoginModel = new LoginModel();
  userService = inject(UserService); 
  
  router = inject(Router)

  onLogin() {
    debugger;
    const login = {
      "emailId": "test445@gmial.com",
      "password": "445566"
    }
    this.userService.loginJwtUser(login).subscribe((result:any)=>{
      debugger;
      localStorage.setItem('token',result.data.token)
      localStorage.setItem(Constant.LOCAL_STORAGE_KEY,JSON.stringify(result))
      this.userService.setLoggedUser();
      ///alert("Login Success")
      this.router.navigateByUrl("/dashboard")
    },error=>{
      debugger;
      alert(error.error.message)
    })
  }

}

 