import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url1 =" https://localhost:44339/api/worker";
  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<boolean> {
   return this.http.post<boolean>(environment.url + 'user/adduser', user)
  }

  getUserExist(user: User) : Observable<number>{
    debugger
    return this.http.post<number>(this.url1 + '/singinuser', user.UserId)

  }
  get(ddd : number) : Observable<number>{
    return this.http.post<number>(this.url1 + '/singinuser', ddd)
  }

  
}
