import { createReducer, on } from "@ngrx/store";
import { onDecrement, onIncrement, onReset } from "./counter.action"; 
import { state } from "@angular/animations";


export const initizalValu = 13;

export interface AppStore  {
    count: number;
}

export const counterReducer =  createReducer(
    initizalValu,
    on(onIncrement,(state)=> state + 1),
    on(onDecrement,(state)=> state - 1),
    on(onReset,(state)=> 0)
)