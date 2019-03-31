import { Component, OnInit } from '@angular/core';

import { Service } from './new-service.model';
import { NewService } from './new-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent implements OnInit {

  service:Service = new Service();

  constructor(private newService:NewService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.serviceId;
    if(!isNaN(id)){
      this.newService.getService(id).subscribe(result =>{
        this.service = result;
      })
    }
  }

  addService(){
    if(this.service.id == undefined){
      this.newService.register(this.service).subscribe(result =>{
        this.router.navigate(['/viewService/',{serviceId:result.id}]);
      })
    }else{
      this.newService.updateService(this.service).subscribe(result =>{
          this.service = result;
      })
    }
  }

}
