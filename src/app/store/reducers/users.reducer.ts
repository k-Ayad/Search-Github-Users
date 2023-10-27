import { Data } from "src/app/models/storeInterface";


export const UPDATE_USERS = 'update'
export const FAILED = 'failed'
export const LOAD = 'load'

let initState : Data = {
    data:[]
}



export function dataReducer (state = initState , action:any){
    switch(action.type){
        case UPDATE_USERS :
            return {
                data:action.payload
            }
        default:
            return state;
    }
}


