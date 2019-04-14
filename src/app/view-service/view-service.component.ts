import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit {

  descriptionFlag = true;

  constructor() { }

  ngOnInit() {
  }

}
