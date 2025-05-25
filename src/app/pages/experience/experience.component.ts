import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStore } from '../../store/counter.reducer';
import { onReset } from '../../store/counter.action';

@Component({
  selector: 'app-experience',
  imports: [NgIf,AsyncPipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  counter : Observable<number> = new Observable<number>;

   constructor(private store: Store<AppStore>) {
  this.counter = this.store.pipe(select('count'))
    }

    reset() {
      this.store.dispatch(onReset())
    }
}
