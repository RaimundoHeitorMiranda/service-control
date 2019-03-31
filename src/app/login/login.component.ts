import { Component, OnInit } from '@angular/core';

import { UserLogin } from './login.model'
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:UserLogin = new UserLogin();

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  login(){
    this.loginService.login(this.user).subscribe(result =>{
      console.log(result);
    })
  }

}
