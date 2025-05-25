import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IUser } from '../../core/models/user.model';
import { Constant } from '../../core/constant/Constant';
import { UserService } from '../../core/services/user.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStore } from '../../store/counter.reducer';
import { AsyncPipe } from '@angular/common';
import { onDecrement, onIncrement } from '../../store/counter.action';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink,AsyncPipe],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  router = inject(Router);
  userServ= inject(UserService)
  loggedRole: string = '';

  counter$: Observable<number> = new Observable<number>;
   
  constructor(private store: Store<AppStore> ) {
    this.counter$ = this.store.pipe(select('count'))
  }

  ngOnInit(): void {
    
  }
  decrementCounter() {
    this.store.dispatch(onDecrement())
  }
  incrementCounter() {
    this.store.dispatch(onIncrement())
  }
  onRoleChange(Eveent: any) {
    
    const role =  Eveent.target.value;
    this.userServ.roleChange$.next(role);
  }
  logOff() {
    localStorage.removeItem(Constant.LOCAL_STORAGE_KEY)
    this.userServ.loggedUser =  undefined ;
    this.router.navigateByUrl("/login");
  }

}
