import { User } from "src/app/models/storeInterface";
import { UPDATE_USERS } from "../reducers/users.reducer";

export class UpdateAction {
    type : string = UPDATE_USERS;
    payload : User[] ;

    constructor(payload : User[]){
        this.payload = payload;
    }
}

