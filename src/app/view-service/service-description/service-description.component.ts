import { Component, OnInit } from '@angular/core';
import { Service } from '../../new-service/new-service.model';
import { ViewService } from './../view-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-service-description',
  templateUrl: './service-description.component.html',
  styleUrls: ['./service-description.component.css']
})
export class ServiceDescriptionComponent implements OnInit {

  service: Service = new Service();
  deleteFlag = false;


  constructor(private viewService: ViewService,
              private activatedRute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.activatedRute.snapshot.params.serviceId;
    this.viewService.getService(id).subscribe(result => {
      this.service = result;
    });
  }

  update() {
    this.viewService.updateService(this.service).subscribe(result => {
      this.service = result;
    });
  }

  edit() {
    this.router.navigate(['/newService', {serviceId: this.service.id}]);
  }

  delete() {
    this.viewService.deleteService(this.service.id).subscribe(result =>{
      this.router.navigate(['/']);
    });
  }

}
