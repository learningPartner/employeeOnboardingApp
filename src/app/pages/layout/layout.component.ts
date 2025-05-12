import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IUser } from '../../core/models/user.model';
import { Constant } from '../../core/constant/Constant';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  router = inject(Router);
  userServ= inject(UserService)
   

  ngOnInit(): void {
    
  }
  onRoleChange(Eveent: any) {
    debugger;
    const role =  Eveent.target.value;
    this.userServ.roleChange$.next(role);
  }
  logOff() {
    localStorage.removeItem(Constant.LOCAL_STORAGE_KEY)
    this.userServ.loggedUser =  undefined ;
    this.router.navigateByUrl("/login");
  }

}
