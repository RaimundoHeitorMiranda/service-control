import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { ViewServiceComponent } from './view-service/view-service.component';

const routes: Routes = [
    { path:'login',component: LoginComponent},
    { path:'',component: HomeComponent},
    { path:'newService',component: NewServiceComponent},
    { path:'viewService',component: ViewServiceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
