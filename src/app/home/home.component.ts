import { Component, OnInit } from '@angular/core';

// Imports from chartJs
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // services graphs variables
  public pieServicesChartLabels: Label[] = ['Aguardo', 'Andamento', 'Pausado', 'Parado'];
  public pieServicesChartData: SingleDataSet = [300, 500, 100, 30];
  public pieFinancialChartLabels: Label[] = ['Recebido', 'À Receber'];
  public pieFinancialChartData: SingleDataSet = [300, 500];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  constructor() { }

  ngOnInit() {
  }

}
