import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

//component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { ViewServiceComponent } from './view-service/view-service.component';

// chartjs module
import { ChartsModule } from 'ng2-charts';
import { ListServiceComponent } from './list-service/list-service.component';
import { FinancialComponent } from './financial/financial.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ServiceEventsComponent } from './view-service/service-events/service-events.component';
import { ServiceDescriptionComponent } from './view-service/service-description/service-description.component';

// Service
import { NewUserService } from './new-user/new-user.service';
import { LoginService } from './login/login.service';
import { NewService } from './new-service/new-service.service';
import { ViewService } from './view-service/view-service.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewServiceComponent,
    ViewServiceComponent,
    ListServiceComponent,
    FinancialComponent,
    NewUserComponent,
    ServiceDescriptionComponent,
    ServiceEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    NewUserService,
    LoginService,
    NewService,
    ViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
