import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { Service } from './new-service.model';
import { LoginService } from '../login/login.service';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class NewService {

  constructor(private http:HttpClient,
              private loginService:LoginService){
  }

  register(service:Service):Observable<Service>{
    console.log(this.loginService.userLogged)
    return this.http.post<Service>(`${API}/user/${this.loginService.userLogged.id}/service`,service);
  }

  getService(serviceId:number):Observable<Service>{
    return this.http.get<Service>(`${API}/user/${this.loginService.userLogged.id}/service/${serviceId}`);
  }

  updateService(service:Service):Observable<Service>{
    return this.http.put<Service>(`${API}/user/${this.loginService.userLogged.id}/service/${service.id}`,service)
  }

}
