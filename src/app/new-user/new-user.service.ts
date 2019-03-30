import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserRegister } from './new-user.model';
import { API } from '../API';

@Injectable()
export class NewUserService{

  constructor(private http:HttpClient){
  }

  register(user:UserRegister):Observable<UserRegister>{
    return this.http.post<UserRegister>(`${API}/user`,user);
  }
}
