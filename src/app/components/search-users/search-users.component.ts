import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { GetUsersService } from 'src/app/services/get-users/get-users.service';
@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  searchControl = new FormControl('');
  errorFlag : boolean = false;
  constructor(private userService : GetUsersService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
    .pipe(debounceTime(300)) // Wait for 300 milliseconds pause in events
    .subscribe((searchTerm) => {
      // Make the GitHub API request here with the searchTerm
      if(searchTerm && searchTerm.length>0) // if searchTerm not empty
      this.userService.getUsers(searchTerm).subscribe({
        next:(data)=>{
          console.log(data);
          
        },
        error:()=>{
          // Handle API request error here
          this.errorFlag = true;
        }
      })
      
    });
  }

}
