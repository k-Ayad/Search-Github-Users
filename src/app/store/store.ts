
import { ActionReducerMap } from "@ngrx/store";
import { dataReducer } from "./reducers/users.reducer";


export const reducers:ActionReducerMap<any> = {users: dataReducer}
