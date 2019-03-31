import { Component, OnInit } from '@angular/core';

// Imports from chartJs
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
import { Service } from '../new-service/new-service.model';
import { ViewService } from '../view-service/view-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // services graphs variables
  public pieServicesChartLabels: Label[] = [
    'Aguardo', 'Andamento', 'Pausado', 'Parado','Cancelado','Aguardando Pagamento','Finalizado'
  ];
  public pieServicesChartData: SingleDataSet = [];
  public pieFinancialChartLabels: Label[] = ['Recebido', 'À Receber'];
  public pieFinancialChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;

  // List of services
  services:Service[]= [];

  constructor(private viewService:ViewService,
              private router:Router) { }

  ngOnInit() {
    this.viewService.getAllService().subscribe(result =>{
      console.log(result)
      this.services = result;
    });

    this.viewService.getStatisitc().subscribe(result =>{
      this.pieServicesChartData = [
        result.waiting,
        result.inProgress,
        result.paused,
        result.stopped,
        result.canceled,
        result.waitingPayment,
        result.finalized
      ]
    });

    this.viewService.getFinancial().subscribe(result =>{
      console.log(result)
      this.pieFinancialChartData = [
        result.moneyReceived,
        result.moneyToReceive
      ]
    })
  }

  showService(serviceId:number){
    console.log(serviceId);
    this.router.navigate(['/viewService',{serviceId:serviceId}])
  }

}
