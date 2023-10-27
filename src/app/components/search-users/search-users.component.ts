import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { GetUsersService } from 'src/app/services/get-users/get-users.service';
import { Store } from '@ngrx/store';
import { StoreInterface, User } from 'src/app/models/storeInterface';
import { UpdateAction } from 'src/app/store/actions/updateUsers.actions';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  searchControl = new FormControl('');
  errorFlag : boolean = false;
  usersArr : User[] = [];
  constructor(private userService : GetUsersService , private store : Store<StoreInterface>) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
    .pipe(debounceTime(300)) // Wait for 300 milliseconds pause in events
    .subscribe((searchTerm) => {
      // Make the GitHub API request here with the searchTerm

      if(searchTerm && searchTerm.length>0){
        // if searchTerm not empty
        this.userService.getUsers(searchTerm).subscribe({
          next:(data)=>{
            // data dispatch 
            let usersArr : User[]=[];
            data.items.forEach((item:User) => {
               usersArr.push(
                {
                  login:item.login,
                  avatar_url:item.avatar_url,
                  html_url:item.html_url
                }
            )
            });
            // dispatch update store data
            this.store.dispatch(new UpdateAction(usersArr));
          },
          error:()=>{
            // Handle API request error here
            this.errorFlag = true;
          }
        })

      } else{
        
        this.store.dispatch(new UpdateAction([]));
      }
      
    });
  }

}
