import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Data } from "src/app/models/storeInterface";


let usersFS = createFeatureSelector<Data>('users');
export let usersArraySelector = createSelector(usersFS,state=> state.data );