import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError , catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private http : HttpClient) { }
  url:string = 'https://api.github.com/search/users';

  getUsers(search:string) : Observable<any>{

    let queryParams = new HttpParams();
    queryParams = queryParams.append("q",search);

    return this.http.get(this.url , {params:queryParams})
    .pipe(catchError((error) => {
      console.error('API Request Error:', error);
      return throwError(() => error);
    }));
  }
}
