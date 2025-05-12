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
    
    
    this.userService.loginUser(this.loginObj).subscribe((result:any)=>{
      

      this.userService.loggedInUser$.next(result);
      this.userService.loggedDataBehvaiour.next(result);

      //localStorage.setItem('token',result.data.token);
      localStorage.setItem(Constant.LOCAL_STORAGE_KEY,JSON.stringify(result))
      this.userService.setLoggedUser();
      ///alert("Login Success")
      this.router.navigateByUrl("/dashboard")
    },error=>{
      
      alert(error.error.message)
    })
  }

}

 