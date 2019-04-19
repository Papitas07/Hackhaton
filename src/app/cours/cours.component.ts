import { Component, OnInit } from '@angular/core';
import { Operator } from 'rxjs';
import { filter, debounce, switchMap, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

import { EasterApiService } from '../easter-api.service';

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
public milkPrice
public chocolatePrice
public eggPrice



  constructor(private activatedRoute:ActivatedRoute,private router:Router, private easterEgg: EasterApiService) { }
  
  
  ngOnInit() {

      this.timestamp = new Date();
      this.interval = 1000


      this.easterEgg.getMilk(this.timestamp, this.interval).subscribe(result => {
        this.milk=result
      });
      this.easterEgg.getChocolate(this.timestamp, this.interval).subscribe(result => {
        this.chocolates = result;
      });
      this.easterEgg.getEggs(this.timestamp, this.interval).subscribe(result => {
        this.eggs = result;
      
  });

  this.eggs.getMilk(this.timestamp, this.interval).subscribe(result => {
    this.milkPrice=result[0].price
  });
  this.eggs.getChocolate(this.timestamp, this.interval).subscribe(result => {
    this.chocolatePrice = result[0].price;
  });
  this.eggs.getEggs(this.timestamp, this.interval).subscribe(result => {
    this.eggPrice = result[0].price;
  
});
}


  }
