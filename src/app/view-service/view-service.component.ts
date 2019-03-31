import { Component, OnInit } from '@angular/core';
import { ViewService } from './view-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../new-service/new-service.model';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit {

  service:Service = new Service();

  constructor(private viewService:ViewService,
              private activatedRute:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    let id = this.activatedRute.snapshot.params.serviceId;
    this.viewService.getService(id).subscribe(result =>{
      this.service = result;
    })
  }

  update(service:Service){
    this.viewService.updateService(this.service).subscribe(result=>{
      this.service = result;
    })
  }

  edit(){
    this.router.navigate(['/newService',{serviceId:this.service.id}])
  }

  delete(){
    this.viewService.deleteService(this.service.id).subscribe(result =>{
      this.router.navigate(['/'])
    })
  }

}
