import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { ViewServiceComponent } from './view-service/view-service.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { FinancialComponent } from './financial/financial.component';

const routes: Routes = [
    { path:'login',component: LoginComponent},
    { path:'',component: HomeComponent},
    { path:'newService',component: NewServiceComponent},
    { path:'viewService',component: ViewServiceComponent},
    { path:'listService',component: ListServiceComponent},
    { path:'financial',component: FinancialComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
