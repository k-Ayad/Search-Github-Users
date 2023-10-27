import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface, User } from 'src/app/models/storeInterface';
import { usersArraySelector } from 'src/app/store/selectors/users.selector';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
    constructor(private store : Store<StoreInterface>){}
    users : User[] = [];
    ngOnInit(): void {
      this.store.select(usersArraySelector).subscribe(data=>this.users = data);
    }
}
