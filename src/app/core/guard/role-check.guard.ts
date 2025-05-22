import { inject, Inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';

export const roleCheckGuard: CanActivateFn = (route, state) => {
  const userService =  inject(UserService);

  const role =  userService.loggedRole;
  
  debugger;
   if(role == "Employee" && ( state.url == '/dashboard' ||  state.url == '/employee-list'|| state.url == '/master'  )) {
    //navgiate 
    return false;
   } else{
    return true;
   }

};
