import { Component, inject, OnInit } from '@angular/core';
import { IUser } from '../../core/models/user.model';
import { Constant, ValidationConstant } from '../../core/constant/Constant';
import { UserService } from '../../core/services/user.service';
import { ReadConstPipe } from '../../shared/pipe/read-const.pipe';

@Component({
  selector: 'app-dashboard',
  imports: [ReadConstPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  
  userService  = inject(UserService); 

   ngOnInit(): void {
       
    }

}
