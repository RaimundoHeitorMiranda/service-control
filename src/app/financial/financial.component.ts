import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {

  // services graphs variables
  public pieFinancialChartLabels: Label[] = ['Recebido', 'À Receber'];
  public pieFinancialChartData: SingleDataSet = [300, 500];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;

  constructor() { }

  ngOnInit() {
  }

}
