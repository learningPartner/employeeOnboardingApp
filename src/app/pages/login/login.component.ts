import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { IUser, LoginModel } from '../../core/models/user.model'
import { UserService } from '../../core/services/user.service';
import { Constant, ValidationConstant } from '../../core/constant/Constant';
import { ReadConstPipe } from '../../shared/pipe/read-const.pipe';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReadConstPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: LoginModel = new LoginModel();
  userService = inject(UserService);

  router = inject(Router)

  onLogin() {

    if (this.loginObj.email == "hr@gmail.com" && this.loginObj.mobile == "112233") {
       localStorage.setItem(Constant.LOCAL_STORAGE_KEY, JSON.stringify(this.loginObj));
       localStorage.setItem('empRole','HR')
       this.userService.loggedRole = 'HR';
       this.router.navigateByUrl("/dashboard")
    } else {
      this.userService.loginUser(this.loginObj).subscribe((result: any) => { 
        this.userService.loggedInUser$.next(result);
        localStorage.setItem('empRole','Employee')
        this.userService.loggedRole = 'Employee';
        this.userService.loggedDataBehvaiour.next(result); 
        localStorage.setItem(Constant.LOCAL_STORAGE_KEY, JSON.stringify(result))
        this.userService.setLoggedUser(); 
        this.router.navigateByUrl("/experience")
      }, error => {

        alert(error.error.message)
      })
    }


  }

}

