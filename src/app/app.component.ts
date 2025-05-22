import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'employeeOnboardingApp';

  userService = inject(UserService);

  constructor() {
    this.userService.loggedInUser$.subscribe(Res=>{
       
    })
    this.userService.loggedDataBehvaiour.subscribe(Res=>{
      
    })
  }

  ngOnInit(): void {
    this.userService.loggedInUser$.subscribe(Result=>{
       
    })
    this.userService.loggedDataBehvaiour.subscribe(Res=>{
      
    })

    // setTimeout(() => {
    //   this.userService.loggedInUser$.next(true);
    // }, 40000);
  }
}
