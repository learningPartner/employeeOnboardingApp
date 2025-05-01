import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IUser } from '../../core/models/user.model';
import { Constant } from '../../core/constant/Constant';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  router = inject(Router);
  userServ= inject(UserService)
   

  ngOnInit(): void {
    
  }
  logOff() {
    localStorage.removeItem(Constant.LOCAL_STORAGE_KEY)
    this.router.navigateByUrl("/login");
  }

}
