import { Injectable, EventEmitter } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserLogin, User } from './login.model'
import { map } from 'rxjs/operators';

import { API } from '../API';
import { Router } from '@angular/router';

@Injectable()
export class LoginService{

  userLogged:User;
  isLoggedFlagEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http:HttpClient,
              private router:Router){
  }

  login(user:UserLogin):Observable<User>{
    return this.http.post<User>(`${API}/login`,user).pipe(
      map(result =>{
        this.userLogged = result;
        this.isLoggedFlagEvent.emit(true);
        this.router.navigate(['/']);
        return result;
      }),
    );
  }

  logout(){
    this.isLoggedFlagEvent.emit(false);
    this.userLogged = new User();
    this.router.navigate(['/login']);
  }
}
