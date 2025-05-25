import { createAction } from "@ngrx/store";


export const onIncrement = createAction('[Count] onIncrement');

export const onDecrement =  createAction('[Counter] onDecrement');

export const onReset = createAction('[Counter] onReset')

