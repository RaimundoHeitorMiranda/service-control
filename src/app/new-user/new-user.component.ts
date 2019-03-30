import { Component, OnInit } from '@angular/core';
import { UserRegister } from './new-user.model'
import { NewUserService } from './new-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user:UserRegister = new UserRegister();

  passwordConfirmation:string;

  constructor(private newUserService:NewUserService,
              private router:Router) { }

  ngOnInit() {
  }

  register(){
    console.log('aaaaaaaaaa')
    this.newUserService.register(this.user).subscribe(
      result =>{
        console.log(result)
      },error =>{
        console.log(error);
      }, ()=>{
      this.router.navigate(['/login'])
      }
    );
  }

  passwordVerification():boolean{
    if(this.user.password == this.passwordConfirmation){
      return true;
    }else{
      return false;
    }
  }

}
