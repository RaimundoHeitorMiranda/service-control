import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { Service } from '../new-service/new-service.model';
import { LoginService } from '../login/login.service';


@Injectable()
export class ViewService {

  constructor(private http:HttpClient,
              private loginService:LoginService){
  }

  getService(serviceId:number):Observable<Service>{
    return this.http.get<Service>(`${API}/user/${this.loginService.userLogged.id}/service/${serviceId}`);
  }

  getAllService():Observable<Service[]>{
    return this.http.get<Service[]>(`${API}/user/${this.loginService.userLogged.id}/service`);
  }

  updateService(service:Service):Observable<Service>{
    return this.http.put<Service>(`${API}/user/${this.loginService.userLogged.id}/service/${service.id}`,service)
  }

  deleteService(serviceId:number):Observable<any>{
    return this.http.delete<any>(`${API}/user/${this.loginService.userLogged.id}/service/${serviceId}`)
  }

  // statistic
  getStatisitc():Observable<any>{
    return this.http.get(`${API}/user/${this.loginService.userLogged.id}/service/statistic`);
  }

  //financial
  getFinancial():Observable<any>{
    return this.http.get(`${API}/user/${this.loginService.userLogged.id}/financial`);
  }


}
