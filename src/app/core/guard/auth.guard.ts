import { CanActivateFn, Router } from '@angular/router';
import { Constant } from '../constant/Constant';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("Guard Executed");
  const router = inject(Router);
  
  const loggedUser =  localStorage.getItem(Constant.LOCAL_STORAGE_KEY);
  if(loggedUser != null) {
    return true
  } else {
    router.navigateByUrl("/login");
    return false;
  }
};
