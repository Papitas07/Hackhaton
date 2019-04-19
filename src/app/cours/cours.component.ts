import { Component, OnInit } from '@angular/core';
import { Operator } from 'rxjs';
import { filter, debounce, switchMap, map } from 'rxjs/operators';
import { EasterApiService } from '../easter-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {


public interval
public timestamp
public milk
public chocolates
public eggs 
public date
public allEggs 
public lineChartData: ChartDataSets[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
];
public lineChartLabels: Label[] = ['January'];
public lineChartOptions: (ChartOptions & { annotation: any }) = {
  responsive: true,
};
public lineChartColors: Color[] = [
  {
    borderColor: 'black',
    backgroundColor: 'rgba(255,0,0,0.3)',
  },
];
public lineChartLegend = true;
public lineChartType = 'line';
public lineChartPlugins = [];



  constructor(private activatedRoute:ActivatedRoute,private router:Router, private easterEgg: EasterApiService) { }

  ngOnInit() {

    this.easterEgg.getAllEggs().subscribe(result=> {
      this.allEggs=result
    })
   

      this.timestamp = new Date();
      this.interval = 1000

      this.easterEgg.getMilk(this.timestamp, this.interval).subscribe(result => {
        this.milk = result;
      });
      this.easterEgg.getChocolate(this.timestamp, this.interval).subscribe(result => {
        this.chocolates = result;
      });
      this.easterEgg.getEggs(this.timestamp, this.interval).subscribe(result => {
        this.eggs = result;
      
  });
}
 
  }
